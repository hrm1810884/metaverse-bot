import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  PROFILE_DISPLAY_NAME_MAX,
  PROFILE_USERNAME_MAX,
  PROFILE_USERNAME_MIN
} from "@/db/limits"
import {
  IconCircleCheckFilled,
  IconCircleXFilled,
  IconLoader2
} from "@tabler/icons-react"
import { FC, useCallback, useState } from "react"
import { LimitDisplay } from "../ui/limit-display"

interface ProfileStepProps {
  displayName: string
  onDisplayNameChange: (name: string) => void
}

export const ProfileStep: FC<ProfileStepProps> = ({
  displayName,
  onDisplayNameChange
}) => {
  return (
    <>
      <div className="space-y-1">
        <div className="flex items-center space-x-2">
          <Label>Display Name</Label>
        </div>

        <div className="relative">
          <Input
            className="mt-2 pr-10"
            placeholder="Enter your display name"
            value={displayName}
            onChange={e => {
              onDisplayNameChange(e.target.value)
            }}
            maxLength={PROFILE_DISPLAY_NAME_MAX}
          />
        </div>

        <LimitDisplay
          used={displayName.length}
          limit={PROFILE_DISPLAY_NAME_MAX}
        />
      </div>
    </>
  )
}
