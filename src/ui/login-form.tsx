import { Divide, LogIn } from "lucide-react";

import { Button } from "@/src/components/button"
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/card"
import { Input } from "@/src/components/input"
import { Label } from "@/src/components/label"

export function FormHeaderGroup({ formHeader, formDescription }: { formHeader?: string; formDescription?: string }){
  return(
    <CardHeader>
      <CardTitle className="text-white"> {formHeader} </CardTitle>
      <CardDescription className="text-white"> {formDescription} </CardDescription>
    </CardHeader>
  );
}

export function FormInputGroup({ inputFields }: { inputFields?: any }){
  let g: any = (<div>foo</div>);
  for (const field in inputFields) {}

  return(<div>DIO CANE</div>);
  /*return(
    <CardContent className="text-white">
      <form>
        <div className="flex flex-col gap-6">
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="user-name"
              type="user-name"
              placeholder="username"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <a
                href="#"
                className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
              >
                Forgot your password?
              </a>
            </div>
            <Input id="password" type="password" placeholder="password" required />
          </div>
        </div>
      </form>
    </CardContent>
  );*/
}

export function LoginButtonGroup(){
  return (
    <CardFooter className="flex-col gap-2">
      <Button type="submit" className="w-full">
        <LogIn className="" />
        Login
      </Button>
    </CardFooter>
  );
}