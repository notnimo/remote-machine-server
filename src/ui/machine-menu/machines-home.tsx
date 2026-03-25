import { Trash, ScreenShare, Link } from "lucide-react";

import { columns } from "@/src/ui/machine-menu/column";
import { DataTable } from "@/src/ui/machine-menu/data-table";
import { getUserId } from "@/src/lib/placeholder";
import { Machine, fetchMachines, fetchRecent } from "@/src/lib/machine-def";

async function getMachineData(): Promise<Machine[]> {
  const machines = await fetchMachines(getUserId());
  return machines;
}

async function getRecentData(): Promise<Machine[]> {
  const recent = await fetchRecent(getUserId());
  return recent;
}

export async function MachineSection() {
  const data = await getMachineData();

  return <DataTable columns={columns} data={data} />;
}

export async function RecentSection() {
  const recentData = await getRecentData();

  return <DataTable columns={columns} data={recentData} />;
}
