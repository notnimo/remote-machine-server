import { MachineCard } from "@/src/ui/recent-machines/recent-machine-card";

export function RecentMenu({ machines }: { machines: string[] }) {
	let temp;
	for (let machineID in machines) {
		temp = (
			<>
				{temp} <MachineCard machineID={machines[machineID]} />
			</>
		);
	}
	return temp;
}
