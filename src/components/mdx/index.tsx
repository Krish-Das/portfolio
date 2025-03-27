import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc"

import { Divider } from "../typography"
import { H2 as h2, H3 as h3 } from "./heading"
import { Paragraph as p } from "./paragraph"

const customComponents = {
  h2,
  h3,
  p,
  hr: Divider,
}

export function CustomMDX(props: MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      components={{ ...customComponents, ...(props.components || {}) }}
    />
  )
}
