import { Suspense } from "react";

import { RecentMachineSection } from "@/src/ui/machine-menu/machine-card";
import { RecentMachineSectionSkeletons } from "@/src/ui/machine-menu/machine-skeletons";

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
