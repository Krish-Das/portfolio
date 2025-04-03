import type { NextConfig } from "next"

import { parseBaseURL } from "@/lib/utils"

const { protocol, hostname, port } = parseBaseURL()

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol,
        hostname,
        port,
        pathname: "/images/**",
      },
    ],
  },
}

export default nextConfig
