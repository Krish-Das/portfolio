import { Divider } from "./divider"
import { Heading } from "./heading"
import { Paragraph } from "./paragraph"
import { Prose } from "./prose"

export { Heading, Paragraph, Divider, Prose }

/* -------------------------------------------------------------------------------------------------
 * Rename
 * -----------------------------------------------------------------------------------------------*/
// type RenameProps = ComponentPropsWithoutRef<"XXX">
// const Rename = forwardRef<XXX, RenameProps>(
//   ({ className, ...rest }, ref) => {
//     return <XXX ref={ref} className={cn("", className)} {...rest} />
//   }
// )
// Rename.displayName = "Rename"

/* -------------------------------------------------------------------------------------------------
 * Rename
 * -----------------------------------------------------------------------------------------------*/
// type RenameProps = ComponentPropsWithoutRef<"XXX"> & {
//   asChild?: boolean
// }
// const Rename = forwardRef<XX, RenameProps>(
//   ({ className, asChild, ...rest }, ref) => {
//     const Comp = asChild ? Slot : "XXX"
//
//     return <Comp ref={ref} className={cn("", className)} {...rest} />
//   }
// )
// Rename.displayName = "Rename"
