"use client";

import Link from "next/link";

import { RegisterMachine } from "@/src/ui/home/register-machine";
import { RegisterUser } from "@/src/ui/home/register-user";
import { UpdateUser } from "@/src/ui/home/update-user";
import { UpdateMachine } from "@/src/ui/home/update-machine";
import { HomeButton } from "@/src/ui/home-btn";

export default function HomePage() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-24">
			<RegisterMachine /> <br />
			<RegisterUser /> <br />
			<UpdateUser /> <br />
			<UpdateMachine /> <br />
			<HomeButton /> <br />
			<p>
				<Link href={`/1a2b3c/machine-page/file-transfer`}>Dio Cane</Link>
			</p>
		</main>
	);
}
