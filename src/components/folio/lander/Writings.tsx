import Link from "next/link"

import { formatDate } from "@/lib/utils"
import { ArticleType } from "@/lib/writing/utils"
import { Container } from "@/components/ui/container"
import { Section, SectionHeading } from "@/components/ui/section"

export default function Writings({ articles }: { articles: ArticleType[] }) {
  return (
    <Container shorterWidth asChild>
      <Section>
        <SectionHeading>Writings</SectionHeading>

        <ul className="flex flex-col gap-2">
          {articles.map(({ slug, metadata }) => (
            <li key={slug} className="h-fit">
              <Link
                href={`/w/${slug}`}
                className="hover:bg-fill-secondary flex cursor-default flex-col gap-2 truncate rounded-lg px-3 py-2.5 pl-0 leading-none transition-all duration-250 hover:pl-3"
              >
                <span className="font-semibold -tracking-[0.015em]">
                  {metadata.title}
                </span>
                <small className="text-label-secondary font-jetbrains-mono text-xs">
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
