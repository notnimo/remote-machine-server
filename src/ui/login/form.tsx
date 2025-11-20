import { HelpCircle, InfoIcon } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/src/components/input-group"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/src/components/tooltip"

export function InputGroupTooltip() {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <InputGroup>
        <InputGroupInput placeholder="Enter password" type="password" />
        <InputGroupAddon align="inline-end">
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Your email address" />
        <InputGroupAddon align="inline-end">
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Enter API key" />
      </InputGroup>
    </div>
  )
}
