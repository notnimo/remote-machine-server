"use client";

import { RegisterMachine } from "@/src/ui/home/register-machine";
import { HomeButton } from "@/src/ui/home-btn";

export default function HomePage() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-24">
			<RegisterMachine />
			<HomeButton />
		</main>
	);
}
