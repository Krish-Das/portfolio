"use client"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Section, SectionHeading } from "@/components/ui/section"
import { MatLocationOn } from "@/components/icons/material-icons"

export default function Location() {
  return (
    <Container shorterWidth asChild>
      <Section>
        <SectionHeading>Where</SectionHeading>

        <div
          className="bg-fill-quaternary relative h-75 overflow-hidden rounded-xl bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://brianlovin.com/_next/image?url=%2Fstatic%2Fimg%2Fsf.png&w=828&q=100')",
          }}
        >
          {/* TODO: Add component boundary */}
          <span
            className={cn(
              buttonVariants({ size: "sm" }),
              "text-label-secondary bg-background/80 absolute right-2 bottom-2 rounded-lg text-xs shadow-md backdrop-blur-lg"
            )}
          >
            <MatLocationOn />
            Location, Sublocate
          </span>
        </div>
      </Section>
    </Container>
  )
}
