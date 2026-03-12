"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Machine } from "@/src/lib/machine-def";

export const columns: ColumnDef<Machine>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
];
