import { Frame } from "lucide-react";

export function Logo() {
	return (
		<div className="flex flex-row items-center leading-none text-white">
			<Frame className="h-12 w-12" />
			<p className="text-[44px]">RCT</p>
		</div>
	);
}
