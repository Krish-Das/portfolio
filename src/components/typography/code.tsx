import { ComponentPropsWithoutRef, forwardRef } from "react"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/lib/utils"

/* -------------------------------------------------------------------------------------------------
 * Code
 * -----------------------------------------------------------------------------------------------*/
type CodeProps = ComponentPropsWithoutRef<"code"> & {
  asChild?: boolean
}
const Code = forwardRef<HTMLElement, CodeProps>(
  ({ className, asChild, ...rest }, ref) => {
    const Comp = asChild ? Slot : "code"
    return (
      <Comp
        ref={ref}
        className={cn(
          "font-jetbrains-mono bg-fill-quaternary border-fill-tertiary rounded-lg border px-1.5 py-0.5 text-sm leading-none",
          className
        )}
        {...rest}
      />
    )
  }
)
Code.displayName = "Code"
export { Code, type CodeProps }
