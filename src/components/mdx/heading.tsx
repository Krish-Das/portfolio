import { createElement } from "react"

import { cn } from "@/lib/utils"

import { headingVariants } from "../typography/heading"

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
}

function createHeading(level: 2 | 3) {
  const Heading = ({ children }: { children: string }) => {
    const slug = slugify(children)

    return createElement(
      `h${level}`,
      {
        id: slug,
        className: cn(
          "group relative",
          headingVariants({ level: `h${level}` })
        ),
      },
      [
        createElement(
          "a",
          {
            href: `#${slug}`,
            key: `link-${slug}`,
            className: cn(
              "anchor pr-1 font-normal text-label-quaternary group:hover group-hover:text-label-secondary transition-colors hidden"
            ),
            "aria-hidden": true,
          },
          "#"
        ),
      ],
      children
    )
  }

  Heading.displayName = `Heading${level}`

  return Heading
}

const H2 = createHeading(2)
const H3 = createHeading(3)

export { H2, H3, createHeading }
