import { Button } from "@/components/ui/button"
import { Section } from "@/components/folio/section"

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

export function MaterialSymbolsMail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z"
      ></path>
    </svg>
  )
}

export function IonPlay(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M133 440a35.37 35.37 0 0 1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0 1 35.77.45l247.85 148.36a36 36 0 0 1 0 61l-247.89 148.4A35.5 35.5 0 0 1 133 440"
      ></path>
    </svg>
  )
}
