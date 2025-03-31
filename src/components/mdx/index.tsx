import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc"

import {
  Anchor,
  Blockquote as blockquote,
  Cite,
  Code,
  Divider,
  Em as em,
  InlineCode,
  Li as li,
  Strong as strong,
  Ul as ul,
} from "../typography"
import { H2 as h2, H3 as h3 } from "./heading"
import { Paragraph as p } from "./paragraph"

const customComponents = {
  h2,
  h3,
  p,
  strong,
  em,
  ul,
  li,
  blockquote,
  Cite,
  a: Anchor,
  code: InlineCode,
  pre: Code,
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
