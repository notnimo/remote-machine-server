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

import { columns, Payment } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}