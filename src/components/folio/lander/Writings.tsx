import { formatDate } from "@/lib/utils"
import { ArticleType } from "@/lib/writing/utils"
import { Container } from "@/components/ui/container"
import { List } from "@/components/ui/item-list"
import { Section, SectionHeading } from "@/components/ui/section"

export default function Writings({ articles }: { articles: ArticleType[] }) {
  return (
    <Container shorterWidth asChild>
      <Section>
        <SectionHeading>Writings</SectionHeading>

        <List.Root noGap>
          {articles.map(({ slug, metadata: { title, publishedAt } }) => (
            <List.Item key={slug} href={`/w/${slug}`}>
              <List.Title>{title}</List.Title>
              <List.Subtitle>{formatDate(publishedAt)}</List.Subtitle>
            </List.Item>
          ))}
        </List.Root>
      </Section>
    </Container>
  )
}
