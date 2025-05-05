function getBaseURL(): string {
  const url = process.env.NEXT_PUBLIC_URL

  if (!url) {
    // eslint-disable-next-line no-console
    console.warn(
      "NEXT_PUBLIC_URL is not set. Using an empty string as fallback."
    )
    return ""
  }

  return url
}

export const baseURL = getBaseURL()
