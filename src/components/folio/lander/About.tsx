import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Heading } from "@/components/typography"

import AboutCopy from "../about/about"

export default function About() {
  return (
    <Container shorterWidth asChild>
      <Section asChild>
        <article className="">
          <Heading styleAs="h3" className="mt-0 mb-4">
            Manish<span aria-hidden>_</span>
          </Heading>

          <AboutCopy />
        </article>
      </Section>
    </Container>
  )
}
