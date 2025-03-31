import { createElement } from "react"

import { cn, slugify } from "@/lib/utils"

import { MatLink } from "../icons/material-icons"
import { headingVariants } from "../typography/heading"

function createHeading(level: 2 | 3) {
  const Heading = ({ children }: { children: string }) => {
    const slug = slugify(children)

    const AnchorIcon = (
      <MatLink className="text-label-secondary/0 group-hover:text-label-secondary text-[1em] transition-colors duration-250" />
    )

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
              "heading-anchor group absolute inset-0 inline-flex items-start justify-end py-0.5 select-none"
            ),
            "aria-hidden": true,
          },
          AnchorIcon
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
