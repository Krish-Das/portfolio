import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { MatArrowBack } from "@/components/icons/material-icons"

export default function Page() {
  return (
    <section className="flex flex-col gap-6 px-6 pt-15 pb-15">
      <Container asChild>
        <nav>
          <Button size="sm" className="text-label-secondary pl-0">
            <MatArrowBack />
            Home
          </Button>
        </nav>
      </Container>

      <Container asChild>
        <main className="space-y-6">
          <header className="">
            <h1 className="text-4xl leading-tight font-bold">
              Moebius-style post-processing and other stylized shaders
            </h1>
            <div className="space-x-2 text-base">
              <small className="text-label-tertiary leading-11 font-semibold">
                March 26, 2024
                <span className="tracking-wider"> · </span>
                34 min read
              </small>

              <small className="text-gray-1 bg-fill-quaternary pointer-events-none hidden touch-none rounded-md px-1.5 py-1 leading-none font-medium tracking-wide select-none md:inline-block">
                Updated on Aug’ 25
              </small>
            </div>
          </header>

          <h3 className="text-lg font-medium">
            There&apos;s been a recent resurgence in distinct artistic
            directions through the use of stylized shaders in many games. At
            least since Zelda BOTW came out,
          </h3>

          <article className="text-label-primary-color/85 [&_em]:text-label-primary space-y-6 text-base leading-relaxed [&_em]:font-semibold [&_em]:not-italic">
            <p>
              Physically Based Rendering (PBR) is often the defacto stylistic
              choice for 3D developers as tools/frameworks, for the most part,
              optimize for realistic materials, shadows, and lighting
              out-of-the-box. However, in an industry constantly pushing for
              realism, adopting Non-Photorealistic Rendering (NPR) or stylized
              shaders while still following physical principles can really make
              your project stand out.
            </p>

            <p>
              There&apos;s been a recent resurgence in distinct artistic
              directions through the use of stylized shaders in many games. At
              least since Zelda BOTW came out, it&apos;s becoming more
              prevalent. While Hi-Fi Rush or the Persona series are great
              examples of Non-Photorealistic Rendering, there are a few indie
              games out there (e.g. Sable and Synergy) doing wonders by
              emulating a flavor of a hand-drawn art style which I particularly
              enjoy from legendary artist Jean Giraud aka Moebius.
            </p>

            <p>
              So far, I&apos;ve only ever tried reproducing physically accurate
              lighting effects or base my scene in the &quot;<em>real world</em>
              &quot; with no styling at all, and I wanted to see whether
              reproducing some aspect of Jean Giraud&apos;s visual art in a
              WebGL environment was possible. Luckily, @UselessGameDev made a
              great video on reproducing the Moebius style. In it, he
              deconstructs the key characteristics that make the Moebius style
              so unique and rebuilds each of them in Unity. After carefully
              studying the subjects covered in that video and spending a couple
              of days heads-down on the problem, I managed to build what is to
              me a very satisfying Moebius post-processing pass on top of a
              React Three Fiber scene. It features not only all the elements of
              Moebius&apos; style (outlines, crosshatched shadows, and specular)
              but also elements usually featured in his more sci-fi-focused
              comic books: desert, spaceships, and alien planets looming in the
              distance.
            </p>
          </article>
        </main>
      </Container>
    </section>
  )
}
