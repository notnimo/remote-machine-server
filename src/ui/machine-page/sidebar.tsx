import Link from "next/link";

import { Plus, MonitorOff } from "lucide-react";

import { NavLinks } from "@/src/ui/machine-page/nav-links";

export function SideBar() {
	return (
		<div className="flex h-full flex-col px-3 py-4 md:px-2 max-w-md">
			<div className="w-32 text-white md:w-40">
				<Plus />
			</div>
			<div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
				<div className="hidden h-auto w-full grow rounded-md md:block">
					<NavLinks />
				</div>
				<form>
					<button className="flex h-12 w-full grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3">
						<MonitorOff className="w-6" />
						<div className="hidden md:block">End Connection</div>
					</button>
				</form>
			</div>
		</div>
	);
}
