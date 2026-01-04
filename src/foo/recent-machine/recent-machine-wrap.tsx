import { Suspense } from "react";

import { RecentMachineSection } from "@/src/ui/recent-machine/recent-machine";
import { RecentMachineSectionSkeletons } from "@/src/ui/recent-machine/recent-machine-skeletons";

export function RecentMachineWrap() {
	return (
		<>
			<hr className="h-1 my-8 bg-neutral-quaternary border min-w-2xl rounded-sm " />
			<h1>Recent Machines</h1> <br />
			<Suspense fallback={RecentMachineSectionSkeletons()}>
				<RecentMachineSection />
			</Suspense>
		</>
	);
}
