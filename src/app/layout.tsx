import type { ReactNode } from "react";

import { ubuntu } from "@/src/ui/fonts";

import "./global.css";

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className={`${ubuntu.className} antialiased`}>{children}</body>
		</html>
	);
}
