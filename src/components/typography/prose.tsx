import { ComponentPropsWithoutRef, forwardRef } from "react"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/lib/utils"

type ProseProps = ComponentPropsWithoutRef<"article"> & {
  asChild?: boolean
}
const Prose = forwardRef<HTMLDivElement, ProseProps>(
  ({ className, asChild, ...rest }, ref) => {
    const Comp = asChild ? Slot : "article"

    return (
      <Comp
        ref={ref}
        className={cn(
          "text-label-primary/86 dark:[&_h2]:text-label-primary/90 dark:[&_h3]:text-label-primary/90",
          "[&_h2]:mt-12 [&_h2]:mb-3 [&_h3]:mt-10 [&_h3]:mb-2 [&_p]:mb-4",
          "[&_h2]:text-2xl [&_h2]:leading-8 [&_h2]:font-bold [&_h2]:-tracking-[0.00625em]",
          "[&_h3]:text-lg [&_h3]:leading-6.5 [&_h3]:font-semibold [&_h3]:-tracking-[0.0025em]",
          "[&_p]:text-base [&_p]:leading-6 [&_p]:font-normal [&_p]:tracking-[0em]",
          "[&_a]:text-ios-blue [&_a]:font-medium [&_a]:brightness-115 [&_a]:-hue-rotate-5",
          "[&_strong]:font-bold",
          "[&_code]:font-jetbrains-mono [&_code]:bg-fill-quaternary [&_code]:border-fill-tertiary [&_code]:rounded-lg [&_code]:border [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-sm [&_code]:leading-none",
          "[&_ul]:mb-4 [&_ul]:pl-4",
          "[&_ul>li]:relative",
          "[&_ul>li]:before:absolute [&_ul>li]:before:-translate-x-3.5 [&_ul>li]:before:content-['•']",
          "[&_hr]:bg-separator-non-opaque [&_hr]:my-8 [&_hr]:h-0.5 [&_hr]:w-full [&_hr]:rounded-full [&_hr]:border-none [&_hr+*]:mt-0",
          className
        )}
        {...rest}
      />
    )
  }
)
Prose.displayName = "Prose"

export { Prose, type ProseProps }
