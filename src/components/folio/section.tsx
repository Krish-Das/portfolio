import { forwardRef, HTMLAttributes } from "react"

import { cn } from "@/lib/utils"

/* -------------------------------------------------------------------------------------------------
 * Root
 * -----------------------------------------------------------------------------------------------*/
type RootProps = HTMLAttributes<HTMLDivElement>

const Root = forwardRef<HTMLDivElement, RootProps>(
  ({ className, ...rest }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "section-root relative mx-auto w-full max-w-[50ch] space-y-6",
          className
        )}
        {...rest}
      />
    )
  }
)
Root.displayName = "Root"

/* -------------------------------------------------------------------------------------------------
 * Title
 * -----------------------------------------------------------------------------------------------*/
type TitleProps = HTMLAttributes<HTMLHeadingElement>
const Title = forwardRef<HTMLHeadingElement, TitleProps>(
  ({ className, ...rest }, ref) => {
    return (
      <h3
        ref={ref}
        className={cn(
          "section-title text-label-secondary text-sm font-medium capitalize",
          className
        )}
        {...rest}
      />
    )
  }
)
Title.displayName = "Title"

/* -------------------------------------------------------------------------------------------------
 * Body
 * -----------------------------------------------------------------------------------------------*/
type BodyProps = HTMLAttributes<HTMLDivElement>
const Body = forwardRef<HTMLDivElement, BodyProps>(
  ({ className, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("section-body h-fit w-full", className)}
        {...rest}
      />
    )
  }
)
Body.displayName = "Body"

const Section = {
  Root,
  Title,
  Body,
}
export {
  Section,
  type RootProps as SectionRootProps,
  type TitleProps as SectionTitleProps,
  type BodyProps as SectionBodyProps,
}

/* -------------------------------------------------------------------------------------------------
 * Rename
 * -----------------------------------------------------------------------------------------------*/
// type RenameProps = HTMLAttributes<HTMLDivElement>
// const Rename = forwardRef<HTMLDivElement, RenameProps>(
//   ({ className, ...rest }, ref) => {
//     return <div ref={ref} className={cn("toolbar-rename", className)} {...rest} />
//   }
// )
// Rename.displayName = "Rename"
