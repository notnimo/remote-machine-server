/*"use client";

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
*/

import Link from "next/link";
import Image from "next/image";

export default function Page() {
	return (
		<main className="flex min-h-screen flex-col p-6">
			<div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52"></div>
			<div className="mt-4 flex grow flex-col gap-4 md:flex-row">
				<div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
					<p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
						<strong>Welcome to Acme.</strong> This is the example for the{" "}
						<a href="https://nextjs.org/learn/" className="text-blue-500">
							Next.js Learn Course
						</a>
						, brought to you by Vercel.
					</p>
					<Link
						href="/login"
						className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
					>
						<span>Log in</span>{" "}
					</Link>
				</div>
				<div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
					<Image
						src="/hero-desktop.png"
						width={1000}
						height={760}
						className="hidden md:block"
						alt="Screenshots of the dashboard project showing desktop version"
					/>

					<Image
						src="/hero-mobile.png"
						width={560}
						height={620}
						className="block md:hidden"
						alt="Screenshots of the dashboard project showing mobile version"
					/>
				</div>
			</div>
		</main>
	);
}

// add your machines
