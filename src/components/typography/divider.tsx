import { ComponentPropsWithoutRef, forwardRef } from "react"

import { cn } from "@/lib/utils"

type DividerProps = ComponentPropsWithoutRef<"hr"> & {
  opaque?: boolean
}
const Divider = forwardRef<HTMLHRElement, DividerProps>(
  ({ className, opaque, ...rest }, ref) => {
    return (
      <hr
        ref={ref}
        className={cn(
          "my-2 h-px w-full rounded-full border-none outline-none",
          opaque ? "bg-separator-opaque" : "bg-separator-non-opaque",
          className
        )}
        {...rest}
      />
    )
  }
)
Divider.displayName = "Divider"

export { Divider, type DividerProps }
