"use client";

import { TextTyping } from "@/src/ui/text-writing";

export default function WelcomePage() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
			<TextTyping toType={["suca"]} />
		</div>
	);
}
