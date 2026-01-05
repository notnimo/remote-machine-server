"use client";

import { AddMachine } from "@/src/ui/home/add-machine";
import { RegisterMachine } from "@/src/ui/home/register-machine";
import { UpdateMachine } from "@/src/ui/home/update-machine";
import { RegisterUser } from "@/src/ui/home/register-user";
import { UpdateUser } from "@/src/ui/home/update-user";

export default function Page() {
	/*return (
		<main className="flex flex-col h-screen">
			<div className="flex flex-row justify-around p-24">
				<AddMachine /> <RegisterMachine /> <UpdateMachine /> <RegisterUser />
				<UpdateUser />
			</div>

			<hr className="h-1 max-w-4xl rounded-sm" />
		</main>
	);*/

	return (
		<div className="flex h-screen justify-around">
			<div className="text-center min-w-full">
				<div className="flex flex-row justify-around p-24">
					<AddMachine /> <RegisterMachine /> <UpdateMachine /> <RegisterUser />
					<UpdateUser />
				</div>
				<div className="flex justify-center">
					<hr className="h-1 max-w-5xl w-full bg-neutral-quaternary border-3 rounded-sm" />
				</div>
			</div>
		</div>
	);
}
