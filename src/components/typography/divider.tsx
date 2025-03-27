import { ComponentPropsWithoutRef, forwardRef } from "react"

import { cn } from "@/lib/utils"

type DividerProps = ComponentPropsWithoutRef<"hr">
const Divider = forwardRef<HTMLHRElement, DividerProps>(
  ({ className, ...rest }, ref) => {
    return (
      <hr
        ref={ref}
        className={cn(
          "bg-separator-opaque my-2 h-px w-full rounded-full border-none outline-none",
          className
        )}
        {...rest}
      />
    )
  }
)
Divider.displayName = "Divider"

export { Divider, type DividerProps }
