import { notFound } from "next/navigation"

import { baseURL } from "@/lib/constants"
import { cn, formatDate } from "@/lib/utils"
import { getWritings } from "@/lib/writing/utils"
import Back from "@/components/ui/back-button"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { CustomMDX } from "@/components/mdx"

export async function generateStaticParams() {
  const articles = getWritings()

  return articles.map(article => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params?: Promise<{
    slug: string
  }>
}) {
  const res = await params
  if (!res) return null
  const { slug } = res

  const post = getWritings().find(post => post.slug === slug)
  if (!post) return null

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    // TODO: use these values
    // updatedAt: updateTime,
    // image
  } = post.metadata

  // TODO: Return other OGs
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseURL}/w/${post.slug}`,
    },
  }
}

export default async function Article({
  params,
}: {
  params?: Promise<{
    slug: string
  }>
}) {
  const res = await params
  if (!res) return
  const { slug } = res

  const article = getWritings().find(a => a.slug === slug)
  if (!article) notFound()

  const { metadata, content } = article

  return (
    <>
      <Container asChild>
        <Section asChild>
          <nav>
            <Back label="Home" url="/" />
          </nav>
        </Section>
      </Container>

      <Container asChild>
        <Section asChild>
          <main className="space-y-12">
            <header className="">
              <h1
                className={cn(
                  "leading-tight -tracking-[0.015em]",
                  "font-instrument-serif text-5xl font-normal"
                )}
              >
                {metadata.title}
              </h1>
              <div className="space-x-2 text-base">
                <small className="text-label-tertiary leading-11 font-semibold">
                  {formatDate(metadata.publishedAt)}
                  <span className="tracking-wider"> · </span>
                  {/* TODO: calculate this based on word cound */}
                  34 min read
                </small>

                <small className="text-gray-1 bg-fill-quaternary pointer-events-none hidden touch-none rounded-md px-1.5 py-1 leading-none font-medium tracking-wide select-none md:inline-block">
                  Last updated {formatDate(metadata.updatedAt, true, true)}
                </small>
              </div>
            </header>

            <h3 className="text-label-primary/80 hidden text-xl leading-tight">
              {metadata.summary}
            </h3>

            <article className="">
              <CustomMDX source={content} />
            </article>
          </main>
        </Section>
      </Container>
    </>
  )
}
