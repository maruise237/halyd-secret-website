"use client"

import { type ReactNode, useId, useState } from "react"
import { MessageCircle } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { VariantProps } from "class-variance-authority"
import { buildBookingMessage, whatsappLink } from "@/lib/contact"
import { cn } from "@/lib/utils"

type BookingDialogProps = VariantProps<typeof buttonVariants> & {
  /** The trailing sentence in the WhatsApp message, e.g. "Je souhaite prendre rendez-vous pour la coiffure." */
  intent: string
  children: ReactNode
  className?: string
}

/**
 * A trigger button that collects the visitor's name and phone number, then
 * opens WhatsApp with a pre-filled message that includes those details.
 */
export function BookingDialog({ intent, children, variant = "gold", size = "lg", className }: BookingDialogProps) {
  const nameId = useId()
  const phoneId = useId()
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [error, setError] = useState<string | null>(null)

  function handleConfirm() {
    if (!name.trim() || !phone.trim()) {
      setError("Merci de renseigner votre nom et votre numéro de téléphone.")
      return
    }
    window.open(whatsappLink(buildBookingMessage(name.trim(), phone.trim(), intent)), "_blank", "noopener,noreferrer")
    setOpen(false)
    setName("")
    setPhone("")
    setError(null)
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        setOpen(next)
        if (!next) setError(null)
      }}
    >
      <DialogTrigger asChild>
        <Button variant={variant} size={size} className={className}>
          {children}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">Vos coordonnées</DialogTitle>
          <DialogDescription>
            Vous serez redirigé(e) vers WhatsApp avec un message déjà rempli pour Halyd&apos;s Secret.
          </DialogDescription>
        </DialogHeader>

        <form
          className="grid gap-4"
          onSubmit={(e) => {
            e.preventDefault()
            handleConfirm()
          }}
        >
          <div className="grid gap-1.5">
            <Label htmlFor={nameId}>Nom complet</Label>
            <Input
              id={nameId}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Votre nom"
              autoComplete="name"
            />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor={phoneId}>Numéro de téléphone</Label>
            <Input
              id={phoneId}
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="6XX XXX XXX"
              autoComplete="tel"
            />
          </div>
          {error && <p className="text-sm text-destructive">{error}</p>}

          <DialogFooter>
            <Button type="submit" variant="gold" className={cn("w-full", className)}>
              <MessageCircle className="w-4 h-4" />
              Continuer sur WhatsApp
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
