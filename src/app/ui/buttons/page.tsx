import { Button } from "@/components/ui/button"
import { Section } from "@/components/folio/section"
import { IonPlay } from "@/components/icons/ion-icons/Play"

export default function Page() {
  return (
    <main className="[&_button]:bg-ios-blue/15 [&_button]:text-ios-blue flex flex-col gap-15 px-6 pt-15 pb-15">
      <Section.Root>
        <Section.Title>Button: Small</Section.Title>
        <Section.Body className="item-center flex flex-wrap gap-3">
          <Button size="sm">
            <IonPlay /> Play
          </Button>
          <Button size="sm">Play</Button>
          <Button size="sm" isIconOnly>
            <IonPlay />
          </Button>
        </Section.Body>
      </Section.Root>

      <Section.Root>
        <Section.Title>Button: Medium</Section.Title>
        <Section.Body className="item-center flex flex-wrap gap-3">
          <Button size="md">
            <IonPlay /> Play
          </Button>
          <Button size="md">Play</Button>
          <Button size="md" isIconOnly>
            <IonPlay />
          </Button>
        </Section.Body>
      </Section.Root>

      <Section.Root>
        <Section.Title>Button: Large</Section.Title>
        <Section.Body className="item-center flex flex-wrap gap-3">
          <Button size="lg">
            <IonPlay /> Play
          </Button>
          <Button size="lg">Play</Button>
          <Button size="lg" isIconOnly>
            <IonPlay />
          </Button>
        </Section.Body>
      </Section.Root>
    </main>
  )
}
