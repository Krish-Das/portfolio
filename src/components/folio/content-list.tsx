import { forwardRef, HTMLAttributes } from "react"

import { cn } from "@/lib/utils"

/* -------------------------------------------------------------------------------------------------
 * Root
 * -----------------------------------------------------------------------------------------------*/
type RootProps = HTMLAttributes<HTMLUListElement>
const Root = forwardRef<HTMLUListElement, RootProps>(
  ({ className, ...rest }, ref) => {
    return (
      <ul
        ref={ref}
        className={cn("contentlist-root flex flex-col gap-2.5", className)}
        {...rest}
      />
    )
  }
)
Root.displayName = "contentlist-root"

/* -------------------------------------------------------------------------------------------------
 * Item
 * -----------------------------------------------------------------------------------------------*/
type ListItemProps = HTMLAttributes<HTMLLIElement>
const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
  ({ className, ...rest }, ref) => {
    return (
      <li
        ref={ref}
        className={cn(
          "toolbar-item relative flex w-full flex-col items-start gap-0 md:flex-row md:items-center md:gap-2.5",
          className
        )}
        {...rest}
      />
    )
  }
)
ListItem.displayName = "toolbar-item"

/* -------------------------------------------------------------------------------------------------
 * Title
 * -----------------------------------------------------------------------------------------------*/
type TitleProps = HTMLAttributes<HTMLHeadingElement>
const Title = forwardRef<HTMLHeadingElement, TitleProps>(
  ({ className, ...rest }, ref) => {
    return (
      <h4
        ref={ref}
        className={cn(
          "contentlist-title leading-8 font-medium md:leading-none",
          className
        )}
        {...rest}
      />
    )
  }
)
Title.displayName = "contentlist-title"

/* -------------------------------------------------------------------------------------------------
 * Footer
 * -----------------------------------------------------------------------------------------------*/
type FooterProps = HTMLAttributes<HTMLDivElement> & {
  alwaysVisible?: boolean
}
const Footer = forwardRef<HTMLDivElement, FooterProps>(
  ({ className, alwaysVisible, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "contentlist-footer text-label-secondary h-fit w-fit text-sm leading-5 md:leading-none",
          !alwaysVisible && "md:hidden",
          className
        )}
        {...rest}
      />
    )
  }
)
Footer.displayName = "contentlist-footer"

/* -------------------------------------------------------------------------------------------------
 * Ruler
 * -----------------------------------------------------------------------------------------------*/
type RulerProps = HTMLAttributes<HTMLHRElement>
const Ruler = forwardRef<HTMLHRElement, RulerProps>(
  ({ className, ...rest }, ref) => {
    return (
      <hr
        ref={ref}
        className={cn(
          "contentlist-ruler border-separator-non-opaque hidden w-full flex-1 border-dashed md:block",
          className
        )}
        {...rest}
      />
    )
  }
)
Ruler.displayName = "contentlist-ruler"

const ContentList = {
  Root,
  Item: ListItem,
  Title,
  Footer,
  Ruler,
}
export {
  ContentList,
  type RootProps as ContentListRootProps,
  type ListItemProps as ContentListItemProps,
  type TitleProps as ContentListTitleProps,
  type FooterProps as ContentListFooterProps,
  type RulerProps as ContentListRulerProps,
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
