import { forwardRef, HTMLAttributes } from "react"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/lib/utils"

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  asChild?: boolean
}
const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, asChild = false, ...rest }, ref) => {
    const Comp = asChild ? Slot : "div"

    return (
      <Comp
        ref={ref}
        className={cn(
          "relative container mx-auto w-full max-w-[50ch]",
          className
        )}
        {...rest}
      />
    )
  }
)
Container.displayName = "Container"

export { Container, type ContainerProps }
