import Link from "next/link"

import { cn, formatDate } from "@/lib/utils"
import { ArticleType } from "@/lib/writing/utils"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Heading } from "@/components/typography"

export default function Projects({ projects }: { projects: ArticleType[] }) {
  return (
    <Container shorterWidth asChild>
      <Section>
        <Heading
          level="h3"
          className="section-title text-label-secondary text-sm font-medium tracking-normal"
        >
          Projects
        </Heading>
        <ul className="flex flex-col gap-2">
          {projects.map(({ slug, metadata }) => (
            <li key={slug} className="h-fit">
              <Link
                href={`/w/${slug}`}
                className={cn(
                  "hover:bg-fill-secondary fill-secondary group flex cursor-default flex-col gap-2 truncate rounded-lg px-3 py-2.5 pl-0 leading-none transition-all duration-250 hover:pl-3"
                  // TODO: Check this coloring
                  // TODO: Export the opacity values
                  // "hover:bg-ios-blue/12"
                )}
              >
                <span className="font-semibold -tracking-[0.015em]">
                  {/* "group-hover:text-ios-blue transition-all duration-250 group-hover:contrast-150" */}
                  {metadata.summary.trim().slice(0, 40)}
                </span>
                <small className="text-label-secondary font-jetbrains-mono text-xs">
                  {/* "text-label-secondary font-jetbrains-mono group-hover:text-ios-blue/80 text-xs transition-all duration-250" */}
                  {formatDate(metadata.publishedAt)}
                </small>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </Container>
  )
}
