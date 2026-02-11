"use client";

import { Suspense } from "react";

import { AddMachine } from "@/src/ui/home/add-machine";
import { RegisterMachine } from "@/src/ui/home/register-machine";
import { UpdateMachine } from "@/src/ui/home/update-machine";
import { RegisterUser } from "@/src/ui/home/register-user";
import { UpdateUser } from "@/src/ui/home/update-user";
import { MachineSection } from "@/src/ui/machine-menu/machine-card";
import { MachineSectionSkeletons } from "@/src/ui/machine-menu/machine-skeletons";

import { fetchMachines, fetchRecent } from "@/src/lib/placeholder";

export default function Page() {
  return (
    <div className="flex h-screen justify-around">
      <div className="text-center min-w-full">
        <div className="flex flex-row justify-around p-10 max-h-120px">
          <AddMachine /> <RegisterMachine /> <UpdateMachine /> <RegisterUser />
          <UpdateUser />
        </div>
        <div className="flex justify-center">
          <hr className="h-1 max-w-5xl w-full bg-neutral-quaternary border-3 rounded-sm" />
        </div>
        <br />
        <br />
        <div className="flex flex-row justify-around">
          <div>
            <h1>Your Machines</h1>
            <br /> <br />
            <Suspense fallback={<MachineSectionSkeletons />}>
              <MachineSection fetchMachines={fetchMachines} />
            </Suspense>
          </div>
          <div>
            <h1>Recent Machines</h1>
            <br /> <br />
            <Suspense fallback={<MachineSectionSkeletons />}>
              <MachineSection fetchMachines={fetchRecent} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
