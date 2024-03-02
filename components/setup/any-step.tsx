import { FC } from "react"

interface AnyStepProps {
  displayName: string
}

export const AnyStep: FC<AnyStepProps> = ({ displayName }) => {
  return (
    <div className="space-y-4">
      <div>
        We can show some setup here
        {displayName.length > 0 ? ` for ${displayName.split(" ")[0]}` : null}!
      </div>
    </div>
  )
}
