import type { ReactNode } from "react";

import { SideBar } from "@/src/ui/machine-page/sidebar";
import "../../../global.css";

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<div className="flex flex-row h-full">
			<SideBar />
			{children}
		</div>
	);
}
