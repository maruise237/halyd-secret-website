import { ImageResponse } from "next/og"
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/site-config"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1410 55%, #3d2c12 100%)",
          color: "#F7F3EC",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            color: "#B68C40",
            fontSize: 28,
            letterSpacing: 6,
            textTransform: "uppercase",
            marginBottom: 28,
          }}
        >
          Salon de beauté &amp; Académie
        </div>
        <div style={{ display: "flex", fontSize: 96, fontWeight: 600, lineHeight: 1.05 }}>{SITE_NAME}</div>
        <div style={{ display: "flex", fontSize: 32, color: "#E5DDCC", marginTop: 28, maxWidth: 880 }}>
          {SITE_DESCRIPTION}
        </div>
      </div>
    ),
    { ...size }
  )
}
