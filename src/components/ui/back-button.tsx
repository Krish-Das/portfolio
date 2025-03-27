"use client"

import { useRouter } from "next/navigation"

import { MatArrowBack } from "../icons/material-icons/ArrowBack"
import { Button } from "../ui/button"

export default function Back({
  label = "Back",
  url,
}: {
  label?: string
  url: string
}) {
  const router = useRouter()

  return (
    <Button
      size="sm"
      className="text-label-secondary data-[hovered]:bg-fill-secondary pl-0 transition-all data-[hovered]:pl-2.5"
      onPress={() => router.push(url)}
    >
      <MatArrowBack />
      {label}
    </Button>
  )
}
