import path from "path"

import { readMDXFile } from "@/lib/writing/utils"
import { CustomMDX } from "@/components/mdx"

const ABOUT_CONTENT_PATH = path.join(
  process.cwd(),
  "src",
  "components",
  "folio",
  "about",
  "copy.mdx"
)

export default function AboutCopy() {
  const { content } = readMDXFile(ABOUT_CONTENT_PATH)

  return <CustomMDX source={content} />
}
