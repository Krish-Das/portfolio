import { ComponentPropsWithoutRef, forwardRef } from "react"

import { cn } from "@/lib/utils"

type ParagraphProps = ComponentPropsWithoutRef<"p"> & {
  highContrast?: boolean
}
const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, highContrast, ...rest }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(
          "pb-4.5 [&_strong]:font-semibold [&_strong]:-tracking-[0.015em] [&:has(+h2)]:pb-6",
          highContrast
            ? "text-label-primary-color/88"
            : "text-label-primary-color/82 [&_strong]:text-label-primary-color/88",
          className
        )}
        {...rest}
      />
    )
  }
)
Paragraph.displayName = "Paragraph"

export { Paragraph, type ParagraphProps }
