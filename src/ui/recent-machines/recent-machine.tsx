import { RecentMenu } from "@/src/ui/recent-machines/recent-machine-menu";

const fetchMachines = () => {
	return ["stringify", "deinfie"];
}; //placeholder
const recent_machines: string[] = fetchMachines(/*user to be passed*/);

export function RecentMachineSection() {
	return (
		<>
			<hr /> <h1>Recent Machines</h1> <RecentMenu machines={recent_machines} />
		</>
	);
}
