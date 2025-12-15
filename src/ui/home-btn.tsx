"use client";

import { House } from "lucide-react";

import { Button } from "@/src/components/button";

export function HomeButton() {
	return (
		<Button
			size="lg"
			variant={"ghost"}
			onClick={() => (window.location.href = "/home")}
		>
			<House className="h-4 w-4" />
			Home
		</Button>
	);
}
