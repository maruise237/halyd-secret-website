import type { ReactNode } from "react"
import { Button, buttonVariants } from "@/components/ui/button"
import type { VariantProps } from "class-variance-authority"
import { whatsappLink } from "@/lib/contact"
import { cn } from "@/lib/utils"

type WhatsAppButtonProps = VariantProps<typeof buttonVariants> & {
  message: string
  children: ReactNode
  className?: string
}

export function WhatsAppButton({ message, children, className, variant = "gold", size = "lg" }: WhatsAppButtonProps) {
  return (
    <Button asChild variant={variant} size={size} className={cn("rounded-full", className)}>
      <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </Button>
  )
}
