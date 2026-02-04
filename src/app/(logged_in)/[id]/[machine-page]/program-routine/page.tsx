"use client";

import { ArrowRight } from "lucide-react";

import { Button } from "@/src/components/button";

import { TextTyping } from "@/src/ui/text-writing";
import { DatePickerTime } from "@/src/ui/machine-page/program-routine/date-time-picker";
import { getUserId, programRoutine } from "@/src/lib/placeholder";

export default function ProgramRoutinePage() {
	const msg: string = "Program a Routine for your Remote Machine";
	return (
		<div className="flex grow flex-col h-full">
			<div className="flex flex-col items-center justify-end min-h-[45vh]">
				<TextTyping toType={[msg]} />
				<div className="text-base">
					Select a bash file and the time for execution
				</div>
			</div>
			<div className="min-h-[2vh]"></div>
			<div className="grow">
				<DatePickerTime />
			</div>
			<div className="min-h-[2vh]"></div>
			<div className="flex justify-center min-h-[45vh]">
				<div>
					<Button
						className="bg-primary-foreground hover:bg-gray-200 text-black flex items-center flex-row justify-between"
						onClick={() => programRoutine({}, getUserId())}
					>
						<ArrowRight className="h-4 w-4" />
						Program Routine
					</Button>
				</div>
				<div>
					<Button variant="outline" className="ml-4">
						Cancel
					</Button>
				</div>
			</div>
		</div>
	);
}
