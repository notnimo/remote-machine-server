import type { ReactNode } from "react";

import { HomeButton } from "@/src/ui/home-btn";
import { AccountMngMenu } from "@/src/ui/account-mng/account-mng.tsx";
import "@/src/app/global.css";

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<div>
			<div className="flex flex-row justify-between p-3.5 max-h-120px">
				<HomeButton />
				<AccountMngMenu />
			</div>
			{children}
		</div>
	);
}
