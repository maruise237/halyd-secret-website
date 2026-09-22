import type { ReactNode } from "react"
import { whatsappLink } from "@/lib/contact"

export function WhatsAppButton({
  message,
  children,
  className,
}: {
  message: string
  children: ReactNode
  className?: string
}) {
  return (
    <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  )
}
