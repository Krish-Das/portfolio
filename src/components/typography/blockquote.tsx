import { ComponentPropsWithoutRef, forwardRef } from "react"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/lib/utils"

/* -------------------------------------------------------------------------------------------------
 * Blockquote
 * -----------------------------------------------------------------------------------------------*/
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote"> & {
  asChild?: boolean
}
const Blockquote = forwardRef<HTMLQuoteElement, BlockquoteProps>(
  ({ className, asChild, ...rest }, ref) => {
    const Comp = asChild ? Slot : "blockquote"

    return (
      <Comp
        ref={ref}
        className={cn(
          "font-red0i relative my-10 pl-5 not-italic [&>:last-child]:mb-0",
          "[&_p]:text-label-primary [&_p]:text-[1.1rem] [&_p]:leading-6.5 [&_p]:font-medium [&_p]:tracking-normal",
          "before:bg-separator-opaque before:absolute before:top-0 before:left-0 before:h-full before:w-0.5 before:rounded-full before:content-['']",
          className
        )}
        {...rest}
      />
    )
  }
)
Blockquote.displayName = "Blockquote"

export { Blockquote, type BlockquoteProps }
