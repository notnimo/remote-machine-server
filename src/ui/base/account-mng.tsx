"use client";

import { useState, useRef } from "react";
import { UserRound } from "lucide-react";
import { Button } from "@/src/components/button";

export default function ManageAccount() {
	const [visible, setVisible] = useState(false);
	const timeoutRef = useRef<any>(null);

	const handleEnter = () => {
		clearTimeout(timeoutRef.current);
		setVisible(true);
	};

	const handleLeave = () => {
		timeoutRef.current = setTimeout(() => {
			setVisible(false);
		}, 150); // delay before fade-out
	};

	return (
		<div
			className="relative inline-block"
			onMouseEnter={handleEnter}
			onMouseLeave={handleLeave}
		>
			<Button size="lg" variant="outline">
				<UserRound />
				Account
			</Button>

			{/* Tooltip always rendered, animated by opacity */}
			<div
				className={`
					absolute left-0 mt-2 w-40 rounded-xl border bg-white p-3 shadow-lg
					transition-opacity duration-200
					${visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
				`}
			>
				<p className="text-sm">
					Manage your profile,
					<br /> settings and more.
				</p>
			</div>
		</div>
	);
}
