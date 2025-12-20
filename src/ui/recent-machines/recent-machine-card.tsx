import { Trash, ScreenShare } from "lucide-react";

import { Button } from "@/src/components/button";
import {
	Item,
	ItemActions,
	ItemContent,
	ItemTitle,
} from "@/src/components/item";

export function ItemDemo() {
	return (
		<div className="flex w-full max-w-md flex-col gap-6">
			<Item variant="outline" className="min-w-2xl">
				<ItemContent>
					<ItemTitle>Machine ID</ItemTitle>
				</ItemContent>
				<ItemActions>
					<Button variant="outline" size="sm">
						<Trash />
					</Button>
					<Button variant="outline" size="sm">
						<ScreenShare />
					</Button>
				</ItemActions>
			</Item>
		</div>
	);
}
