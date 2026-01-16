import { MonitorOff } from "lucide-react";

import { Button } from "@/src/components/button";

import { NavLinks } from "@/src/ui/machine-page/nav-links";

export function SideBar() {
	/*return (
		<div className="flex min-h-full flex-col px-3 py-4 md:px-2 max-w-md bg-secondary-foreground">
			<div className="w-32 text-white md:w-40 bg-accent rounded-md">
				something
			</div>
			<div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
				<div className="hidden h-auto w-full grow rounded-md md:block bg-accent">
					<NavLinks />
				</div>
				<div>
					<Button variant="ghost">
						<MonitorOff className="w-6" />
						<div className="hidden md:block">End Connection</div>
					</Button>
				</div>
			</div>
		</div>
	);*/
	return (
		<div className="bg-accent/75 max-w-100 rounded-2xl">
			<div>Browse, transfer files and program routines</div>
			<div>
				<NavLinks />
			</div>
			<div>
				<Button variant="ghost">
					<MonitorOff />
					End Connection
				</Button>
			</div>
		</div>
	);
}
