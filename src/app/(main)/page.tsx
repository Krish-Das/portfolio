import { getWritings } from "@/lib/writing/utils"
import { PagePadding } from "@/components/ui/page-padding"
import About from "@/components/folio/lander/About"
import CTA from "@/components/folio/lander/CTA"
import Location from "@/components/folio/lander/Location"
import Projects from "@/components/folio/lander/Projects"
import Writings from "@/components/folio/lander/Writings"

export default function Home() {
  const allArticles = getWritings()

  return (
    <PagePadding>
      <About />

      <Location />

      <Projects projects={allArticles} />

      <Writings articles={allArticles} />

      <CTA />
    </PagePadding>
  )
}
