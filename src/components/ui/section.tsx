import { ComponentPropsWithoutRef, forwardRef } from "react"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/lib/utils"

/* -------------------------------------------------------------------------------------------------
 * Section
 * -----------------------------------------------------------------------------------------------*/
type SectionProps = ComponentPropsWithoutRef<"section"> & {
  asChild?: boolean
  noGap?: boolean
}
const Section = forwardRef<HTMLDivElement, SectionProps>(
  ({ className, asChild = false, noGap, ...rest }, ref) => {
    const Comp = asChild ? Slot : "section"

    return (
      <Comp
        ref={ref}
        className={cn(
          "section-root relative mx-auto w-full",
          !noGap && "[&:has(+.section-root)]:mb-6",
          className
        )}
        {...rest}
      />
    )
  }
)
Section.displayName = "Section"

export { Section, type SectionProps }
