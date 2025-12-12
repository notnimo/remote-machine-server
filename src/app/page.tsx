"use client";

import { useState } from "react";

import { Button } from "@/src/components/button";

import { CDialog } from "@/src/ui/dialog/dialog-build/dialog";

export default function Foo() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			<Button onClick={() => setIsOpen(true)}>click</Button>
			<CDialog
				open={isOpen}
				onOpenChange={setIsOpen}
				dialogProps={{
					title: "Hello World",
					description: "This is a dynamically generated dialog.",
					fields: {},
					closeButton: "standard",
				}}
			/>
		</div>
	);
}
