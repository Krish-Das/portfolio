import { ReactNode } from "react"

import { PagePadding } from "@/components/ui/page-padding"

export default function Layout({ children }: { children: ReactNode }) {
  return <PagePadding>{children}</PagePadding>
}
