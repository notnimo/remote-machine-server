import { Trash, ScreenShare, Link } from "lucide-react";

import { Button } from "@/src/components/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemTitle,
} from "@/src/components/item";
import { Machine, deleteMachine, connectMachine } from "@/src/lib/machine-def";
import { getUserId } from "@/src/lib/placeholder";

function MachineItem({ machineID }: { machineID: string }) {
  return (
    <>
      <div></div>
    </>
  );
}

export function MachineSection({
  fetchMachines,
}: {
  fetchMachines: (userId: string) => Machine[];
}) {}
