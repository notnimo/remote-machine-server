"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Machine } from "@/src/lib/machine-def";

export const columns: ColumnDef<Machine>[] = [
  {
    accessorKey: "id",
    header: () => <div className="text-right">ID</div>,
    cell: ({ row }) => {
      const id = row.getValue("id");
      const formattedId:st = id;

      return (<div className="text-right font-medium">formattedId</div>);
    },
  },
  {
    accessorKey: "name",
    header: () => <div className="text-right">Name</div>,
  },
  {
    accessorKey: "owner",
    header: () => <div className="text-right">Owner</div>,
  },
  {
    accessorKey: "status",
    header: () => <div className="text-right">Status</div>,
  },
  {
    accessorKey: "accessLevel",
    header: () => <div className="text-right">Access Level</div>,
  },
];
