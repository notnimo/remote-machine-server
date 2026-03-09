import { Trash, ScreenShare, Link } from "lucide-react";

import { Button } from "@/src/components/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemTitle,
} from "@/src/components/item";
import {
  Machine,
  getUserId,
  deleteMachine,
  connectMachine,
} from "@/src/lib/placeholder";

function MachineItem({ machineID }: { machineID: string }) {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <Item variant="outline" className="min-w-lg">
        <ItemContent>
          <ItemTitle>{machineID}</ItemTitle>
        </ItemContent>
        <ItemActions>
          <Button
            variant="outline"
            size="sm"
            onClick={() => deleteMachine(machineID, getUserId())}
          >
            <Trash />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => connectMachine(machineID, getUserId())}
          >
            <ScreenShare />
          </Button>
        </ItemActions>
      </Item>
    </div>
  );
}

export function MachineSection({
  fetchMachines,
}: {
  fetchMachines: (userId: string) => Machine[];
}) {
  const machines: Machine[] = fetchMachines(getUserId());
  let temp;
  for (let machine in machines) {
    temp = (
      <>
        {temp} <MachineItem machineID={machines[machine]} /> <br />
      </>
    );
  }
  return temp;
}
