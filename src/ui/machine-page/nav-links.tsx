"use client";

import { Terminal, FileOutput, Clock } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export function NavLinks() {
	const path = usePathname();
	const basePathname = () => {
		const parts = path.split("/");
		return `/${parts[1]}/${parts[2]}/`;
	};

	const links = [
		{ name: "Terminal", href: `${basePathname()}/terminal`, icon: Terminal },
		{
			name: "File Transfer",
			href: `${basePathname()}/file-transfer`,
			icon: FileOutput,
		},
		{
			name: "Program Routines",
			href: `${basePathname()}/program-routine`,
			icon: Clock,
		},
	];

	return (
		<>
			{links.map((link) => {
				const LinkIcon = link.icon;
				return (
					<Link
						key={link.name}
						href={link.href}
						className={clsx(
							"flex h-[48px] items-center gap-2 rounded-md bg-primary text-sm font-medium hover:bg-accent flex-none justify-start p-2 px-3",
							{
								"bg-secondary": basePathname() === link.href,
							},
						)}
					>
						<LinkIcon className="w-6" />
						<p className="block">{link.name}</p>
					</Link>
				);
			})}
		</>
	);
}
