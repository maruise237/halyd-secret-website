import type { ReactNode } from "react"
import { Button, buttonVariants } from "@/components/ui/button"
import type { VariantProps } from "class-variance-authority"
import { whatsappLink } from "@/lib/contact"

type WhatsAppLinkButtonProps = VariantProps<typeof buttonVariants> & {
  message: string
  children: ReactNode
  className?: string
}

/** Direct WhatsApp link — no dialog, no name/phone capture. Used for product orders. */
export function WhatsAppLinkButton({
  message,
  children,
  className,
  variant = "gold",
  size = "lg",
}: WhatsAppLinkButtonProps) {
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </Button>
  )
}
