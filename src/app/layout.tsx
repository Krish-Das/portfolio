import type { Metadata } from "next"
import {
  EB_Garamond,
  Geist,
  Instrument_Serif,
  JetBrains_Mono,
} from "next/font/google"
import localFont from "next/font/local"

import "./globals.css"

import Provider from "@/components/provider"

const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  variable: "--font-garamond",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
})

const MonaSans = localFont({
  src: "../../public/fonts/mona/Mona-Sans.woff2",
  variable: "--font-mona",
  display: "swap",
})

const Red0 = localFont({
  src: "../../public/fonts/redaction/red-0/Redaction-Regular.woff2",
  variable: "--font-red0",
  display: "swap",
})
const Red0I = localFont({
  src: "../../public/fonts/redaction/red-0/Redaction-Italic.woff2",
  variable: "--font-red0i",
  display: "swap",
})
const Red0B = localFont({
  src: "../../public/fonts/redaction/red-0/Redaction-Bold.woff2",
  variable: "--font-red0b",
  display: "swap",
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "NextKit - A nextjs starter kit",
  description:
    "Accelerate web development with NextKit: a pre-configured Next.js, TypeScript, and Tailwind boilerplate.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${Red0.variable} ${Red0I.variable} ${Red0B.variable} ${jetbrainsMono.variable} ${garamond.variable} ${instrumentSerif.variable} ${MonaSans.variable}`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
