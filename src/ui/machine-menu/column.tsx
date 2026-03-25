"use client";

import { ColumnDef } from "@tanstack/react-table";

import { MoreHorizontal, ScreenShare, Trash2, ArrowUpDown } from "lucide-react";

import { Button } from "@/src/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/src/components/dropdown-menu";

import {
  Machine,
  deleteMachine,
  connectMachine,
  getMachine,
} from "@/src/lib/machine-def";
import { getUserId } from "@/src/lib/placeholder";

export const columns: ColumnDef<Machine>[] = [
  {
    accessorKey: "id",
    cell: ({ row }) => {
      const id: string = row.getValue("id") as string;
      const formattedId = id;

      return <div className="text-right font-medium">{formattedId}</div>;
    },
    header: () => <div className="text-right">ID</div>,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
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
  {
    id: "actions",
    cell: ({ row }) => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-black text-white">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem
            onClick={() =>
              connectMachine(getMachine(row.original.id), getUserId())
            }
          >
            <ScreenShare />
            Connect
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() =>
              deleteMachine(getMachine(row.original.id), getUserId())
            }
          >
            <Trash2 />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];
