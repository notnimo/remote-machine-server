import { House } from "lucide-react";

import { Button } from "@/src/components/button";

export default function HomeButton() {
  return (
    <Button size="lg" variant={"ghost"}>
      <House className="h-4 w-4" />
      Home
    </Button>
  );
}