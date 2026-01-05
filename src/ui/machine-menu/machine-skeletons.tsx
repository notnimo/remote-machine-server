import { Trash, ScreenShare } from "lucide-react";

import { Skeleton } from "@/src/components/skeleton";
import { Button } from "@/src/components/button";
import { Item, ItemActions, ItemContent } from "@/src/components/item";

function RecentMachineSectionSkeleton() {
	return (
		<>
			<div className="flex w-full max-w-md flex-col gap-6">
				<Item variant="outline" className="min-w-2xl">
					<ItemContent>
						<Skeleton className="h-4 w-[250px]" />
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
		</>
	);
}

export function RecentMachineSectionSkeletons() {
	return (
		<>
			<RecentMachineSectionSkeleton /> <br />
			<RecentMachineSectionSkeleton /> <br />
			<RecentMachineSectionSkeleton /> <br />
			<RecentMachineSectionSkeleton />
		</>
	);
}
