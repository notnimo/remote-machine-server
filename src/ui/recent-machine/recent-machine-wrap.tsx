import { Suspense } from "react";

import { RecentMachineSection } from "@/src/ui/recent-machine/recent-machine";
import { RecentMachineSectionSkeletons } from "@/src/ui/recent-machine/recent-machine-skeletons";

export function RecentMachineWrap() {
	return (
		<>
			<hr /> <h1>Recent Machines</h1>
			<Suspense fallback={RecentMachineSectionSkeletons()}>
				<RecentMachineSection />
			</Suspense>
		</>
	);
}
