"use client";

import Link from "next/link";

import { ArrowRight, Github } from "lucide-react";

import { Button } from "@/src/components/button";

import { TextTyping } from "@/src/ui/text-writing";

export default function WelcomePage() {
	const welcomeMsg: string = "Welcome to Remote Machine Server";
	return (
		<div className="flex flex-col min-h-screen">
			<div className="flex flex-col items-center justify-end min-h-[45vh]">
				<TextTyping toType={[welcomeMsg]} />
				<div className="text-base">Log In or explore the project on Github</div>
			</div>
			<div className="grow"></div>
			<div className="flex justify-center min-h-[45vh]">
				<div>
					<Link href={"/login"}>
						<Button className="bg-primary-foreground hover:bg-gray-200 text-black flex items-center flex-row justify-between">
							<ArrowRight className="h-4 w-4" />
							Log In
						</Button>
					</Link>
				</div>
				<div>
					<Link
						href={"https://github.com/notnimo/remote-machine-server"}
						target="_blank"
					>
						<Button variant="outline" className="ml-4">
							<Github className="mr-2 h-4 w-4" />
							View on GitHub
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}
