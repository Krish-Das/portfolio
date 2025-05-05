import { formatDate } from "@/lib/utils"
import { ArticleType } from "@/lib/writing/utils"
import { Container } from "@/components/ui/container"
import { List } from "@/components/ui/item-list"
import { Section, SectionHeading } from "@/components/ui/section"

export default function Projects({ projects }: { projects: ArticleType[] }) {
  return (
    <Container shorterWidth asChild>
      <Section>
        <SectionHeading>Projects</SectionHeading>

        <List.Root noGap>
          {projects.map(({ slug, metadata }) => (
            <List.Item key={slug} href={`/w/${slug}`}>
              <List.Title>{metadata.summary.trim().slice(0, 40)}</List.Title>
              <List.Subtitle>{formatDate(metadata.publishedAt)}</List.Subtitle>
            </List.Item>
          ))}
        </List.Root>
      </Section>
    </Container>
  )
}
