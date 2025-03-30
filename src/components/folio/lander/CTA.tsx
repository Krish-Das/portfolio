import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { BlueskySocialFill, GithubFace } from "@/components/icons/logos"
import {
  MatDownloadingRounded,
  MatMailRounded,
} from "@/components/icons/material-icons"
import { Divider } from "@/components/typography"

export default function CTA() {
  return (
    <Container shorterWidth asChild>
      <Section className="flex items-center justify-start gap-4 pt-3 md:gap-6">
        <Button className="bg-fill-tertiary text-ios-blue" size="lg">
          <MatDownloadingRounded />
          Download CV.
        </Button>

        {/* TODO: Use the Divider component */}
        <Divider className="h-4 w-1" />

        <div className="[&_button]:text-gray-1 [&_button]:bg-fill-quaternary flex items-center gap-2">
          <Button isIconOnly>
            <MatMailRounded />
          </Button>
          <Button isIconOnly>
            <BlueskySocialFill />
          </Button>
          <Button isIconOnly>
            <GithubFace />
          </Button>
        </div>
      </Section>
    </Container>
  )
}
