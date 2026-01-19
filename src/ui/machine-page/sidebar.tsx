import Link from "next/link";
import { MonitorOff } from "lucide-react";

import { Button } from "@/src/components/button";

import { NavLinks } from "@/src/ui/machine-page/nav-links";
import { Logo } from "@/src/ui/logo";

export function SideBar() {
	return (
		<div className="flex h-[93vh] flex-col py-2 px-2 max-w-min">
			<div className="mb-2 flex items-end justify-start rounded-md bg-primary p-4 h-40">
				<div className="text-white w-40">
					<Logo />
				</div>
			</div>
			<div className="flex flex-col flex-1 min-h-0 space-y-2">
				<NavLinks />

				<div className="flex-1 bg-primary w-full rounded-md" />

				<div>
					<Button
						variant="ghost"
						className="flex h-[48px] w-full items-center gap-2 rounded-md text-sm font-medium justify-start p-2 px-3"
					>
						<MonitorOff />
						<div className="block">End Connection</div>
					</Button>
				</div>
			</div>
		</div>
	);
}
