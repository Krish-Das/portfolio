import fs from "fs"
import path from "path"
import { z } from "zod"

export const ARTICLE_PATH = path.join(process.cwd(), "src", "articles")

export const metadataSchema = z.object({
  title: z.string().min(3),
  publishedAt: z.string().date(),
  updatedAt: z.string().date(),
  summary: z.string().min(3),
  image: z.string().url().optional(),
})
export type Metadata = z.infer<typeof metadataSchema>

export type ArticleType = {
  metadata: Metadata
  slug: string
  content: string
}

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  const match = frontmatterRegex.exec(fileContent)
  const frontMatterBlock = match![1]
  const content = fileContent.replace(frontmatterRegex, "").trim()
  const frontMatterLines = frontMatterBlock.trim().split("\n")
  const metadata: Partial<Metadata> = {}

  frontMatterLines.forEach(line => {
    const [key, ...valueArr] = line.split(": ")
    let value = valueArr.join(": ").trim()
    value = value.replace(/^['"](.*)['"]$/, "$1") // Remove quotes
    metadata[key.trim() as keyof Metadata] = value
  })

  const parsedMetadata = metadataSchema.strict().safeParse(metadata)

  if (!parsedMetadata.success)
    throw new Error(`Validation failed: ${parsedMetadata.error.toString()}`)

  return { metadata: parsedMetadata.data, content }
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter(file => path.extname(file) === ".mdx")
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, "utf-8")

  return parseFrontmatter(rawContent)
}

function getMDXData(dir: string): ArticleType[] {
  const mdxFiles = getMDXFiles(dir)
  return mdxFiles.map(file => {
    const { metadata, content } = readMDXFile(path.join(dir, file))
    const slug = path.basename(file, path.extname(file))

    return {
      metadata,
      slug,
      content,
    }
  })
}

export function getWritings() {
  return getMDXData(ARTICLE_PATH)
}
