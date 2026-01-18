"use client";

import Link from "next/link";

import { RegisterMachine } from "@/src/ui/home/register-machine";
import { RegisterUser } from "@/src/ui/home/register-user";
import { UpdateUser } from "@/src/ui/home/update-user";
import { UpdateMachine } from "@/src/ui/home/update-machine";
import { HomeButton } from "@/src/ui/home-btn";

import { SideBar } from "@/src/ui/machine-page/sidebar";

/*export default function HomePage() {
	return (
		<main>
			<div className="flex-row items-center justify-center">
				<RegisterMachine /> <br />
				<RegisterUser /> <br />
				<UpdateUser /> <br />
				<UpdateMachine /> <br />
				<HomeButton /> <br />
				<p>
					<Link href={`/1a2b3c/machine-page/terminal`}>Link</Link>
				</p>
			</div>
		</main>
	);
}*/

export default function HomePage() {
	return (
		<main>
			<SideBar />
		</main>
	);
}
