"use client";

//import { DropdownMenuDialog } from "@/src/ui/account-mng";
import { DropdownMenuDialog } from "@/src/ui/dialog/dialog-build/temp";
import { Button } from "@/src/components/button";
import { setFooState } from "@/src/lib/dialog-states";

export default function Foo() {
	return (
		<div>
			<DropdownMenuDialog />
			<Button onClick={() => setFooState(true)}>click</Button>
		</div>
	);
}
