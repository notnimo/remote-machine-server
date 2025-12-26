"use client";

import { RegisterMachine } from "@/src/ui/home/register-machine";
import { RegisterUser } from "@/src/ui/home/register-user";
import { UpdateUser } from "@/src/ui/home/update-user";
import { UpdateMachine } from "@/src/ui/home/update-machine";
import { HomeButton } from "@/src/ui/home-btn";
import { RecentMachineWrap } from "@/src/ui/recent-machine/recent-machine-wrap";
import { RecentMachineSectionSkeletons } from "@/src/ui/recent-machine/recent-machine-skeletons";

export default function HomePage() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-24">
			<RegisterMachine /> <br />
			<RegisterUser /> <br />
			<UpdateUser /> <br />
			<UpdateMachine /> <br />
			<HomeButton /> <br />
			<RecentMachineWrap /> <br />
			<RecentMachineSectionSkeletons />
		</main>
	);
}
