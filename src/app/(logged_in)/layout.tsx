import type { ReactNode } from "react";

import { HomeButton } from "@/src/ui/home-btn";
import { AccountMngMenu } from "@/src/ui/account-mng/account-mng.tsx";
import "@/src/app/global.css";

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<div className="flex flex-col h-screen w-full">
			<div className="flex flex-row justify-between p-2 h-[7vh]">
				<HomeButton />
				<AccountMngMenu />
			</div>
			{children}
		</div>
	);
}
