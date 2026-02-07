"use client";

import * as React from "react";
import { Button } from "@/src/components/button";
import { Calendar } from "@/src/components/calendar";
import { Field, FieldGroup, FieldLabel } from "@/src/components/field";
import { Input } from "@/src/components/input";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/src/components/popover";
import { format } from "date-fns";
import { ChevronDownIcon } from "lucide-react";
import { Card, CardContent } from "@/src/components/card";

export function DatePickerTime() {
	const [open, setOpen] = React.useState(false);
	const [date, setDate] = React.useState<Date | undefined>(
		new Date(new Date().getFullYear(), 1, 3),
	);

	return (
		<FieldGroup className="mx-auto max-w-xs flex-row">
			<Field>
				<FieldLabel htmlFor="date-picker-optional">Date</FieldLabel>
				<Popover open={open} onOpenChange={setOpen}>
					<PopoverTrigger asChild>
						<Button
							variant="outline"
							id="date-picker-optional"
							className="w-32 justify-between font-normal"
						>
							{date ? format(date, "PPP") : "Select date"}
							<ChevronDownIcon />
						</Button>
					</PopoverTrigger>
					<PopoverContent className="w-auto overflow-hidden p-0 " align="start">
						<Card className="mx-auto w-fit p-0">
							<CardContent className="p-0 text-white">
								<Calendar
									className="w-[12.9rem]"
									mode="single"
									defaultMonth={date}
									selected={date}
									onSelect={setDate}
								/>
							</CardContent>
						</Card>
					</PopoverContent>
				</Popover>
			</Field>
			<Field className="w-32">
				<FieldLabel htmlFor="time-picker-optional">Time</FieldLabel>
				<Input
					type="time"
					id="time-picker-optional"
					step="1"
					defaultValue="00:00:00"
					className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
				/>
			</Field>
		</FieldGroup>
	);
}
