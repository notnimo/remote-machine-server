import { Card } from "@/src/components/card"

import { FormHeaderGroup, FormSubmitGroup, FormInputGroup } from "@/src/ui/login-form"

export default function LoginCard() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-6 p-4">
      <Card className="w-full max-w-sm bg-black">
        <FormHeaderGroup 
          formHeader="Welcome Back"
          formDescription="Please sign in to your account"
        />
        <FormInputGroup 
          inputFields={{username: true, password: true}}
        />
        <FormSubmitGroup 
          type="login"
          content="Sign In"
        />
      </Card>
    </div>
  )
}