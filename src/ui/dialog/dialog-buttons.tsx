import { Button } from "@/src/components/button";
import { DialogClose } from "@/src/components/dialog";

import { baseCloseButton } from "@/src/ui/dialog/dialog-type-define";

export function Buttons({
	buttons,
}: {
	buttons: Record<string, baseCloseButton>;
}) {
	let temp = <></>;
	for (const button in buttons) {
		if (buttons[button].closeDialogOnClick) {
			temp = (
				<>
					{temp}
					<DialogClose asChild>
						<Button
							variant={buttons[button].variant}
							type={buttons[button].type}
							onClick={buttons[button].onClick}
						>
							{buttons[button].text}
						</Button>
					</DialogClose>
				</>
			);
			continue;
		}
		temp = (
			<>
				{temp}
				<Button
					variant={buttons[button].variant}
					type={buttons[button].type}
					onClick={buttons[button].onClick}
				>
					{buttons[button].text}
				</Button>
			</>
		);
	}
	return temp;
}
