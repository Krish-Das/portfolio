import { ComponentPropsWithoutRef, forwardRef } from "react"
import { cva, VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const headingVariants = cva("text-label-primary", {
  variants: {
    level: {
      h1: "text-4xl leading-tight font-bold -tracking-[0.015em] py-4",
      h2: "py-4.5 text-xl leading-tight font-semibold -tracking-[0.015em] [&:has(+h3)]:pb-2 [&:has(+h3)+h3]:pt-1.5",
      // h2: "text-label-primary/88 py-5 text-2xl leading-tight font-bold -tracking-[0.015em] [&:has(+h3)]:pb-0"
      h3: "py-4 text-lg leading-tight font-semibold -tracking-[0.015em] [&:has(+p)]:pb-3",
      // h3: "text-xl font-semibold -tracking-[0.015em] py-4 [&:has(+p)]:pb-3"
      h4: "text-lg font-semibold -tracking-[0.015em] py-4 [&:has(+p)]:pb-3",
    },
    srOnly: {
      true: "hidden",
      false: "",
    },
  },
  defaultVariants: {
    level: "h1",
    srOnly: false,
  },
})
type Levels = NonNullable<VariantProps<typeof headingVariants>["level"]>

type HeadingProps = ComponentPropsWithoutRef<Levels> &
  Omit<VariantProps<typeof headingVariants>, "level"> & {
    level?: Levels
    styleAs?: Levels
    // TODO: implement the anchor in article pages
    addAnchor?: boolean
  }
const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level = "h1", styleAs, srOnly, ...rest }, ref) => {
    const Comp = level

    return (
      <Comp
        ref={ref}
        className={cn(
          headingVariants({ level: styleAs || level, srOnly, className })
        )}
        {...rest}
      />
    )
  }
)
Heading.displayName = "Heading"

export {
  Heading,
  headingVariants,
  type HeadingProps,
  type Levels as HeadingLevels,
}
