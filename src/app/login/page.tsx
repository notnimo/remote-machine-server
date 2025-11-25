import { Card } from "@/src/components/card"

import {LoginHeaderGroup, LoginInputGroup, LoginButtonGroup } from "@/src/ui/login-form"

export default function LoginCard() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-6 p-4">
      <Card className="w-full max-w-sm bg-black">
        <LoginHeaderGroup />
        <LoginInputGroup />
        <LoginButtonGroup />
      </Card>
    </div>
  )
}