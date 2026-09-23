"use client"

import { type ReactNode, useId, useState } from "react"
import { MessageCircle } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import type { VariantProps } from "class-variance-authority"
import { buildBookingMessage, whatsappLink, WHATSAPP_INTENTS } from "@/lib/contact"
import type { SalonService } from "@/lib/salon-services"
import { cn } from "@/lib/utils"

type BookingDialogProps = VariantProps<typeof buttonVariants> & {
  children: ReactNode
  className?: string
  title?: string
  description?: string
} & (
    | { intent: string; services?: never }
    | { services: SalonService[]; intent?: never }
  )

// One screen, no wizard: a fake calendar/time grid would only dress up a slot
// that doesn't really exist yet (confirmation happens by hand on WhatsApp), so
// asking for a preferred time is a plain optional text field instead of a
// forced pick from invented options.
export function BookingDialog({
  intent,
  services,
  title = "Prendre rendez-vous",
  description = "Laissez vos coordonnées, on confirme ensemble sur WhatsApp.",
  children,
  variant = "gold",
  size = "lg",
  className,
}: BookingDialogProps) {
  const nameId = useId()
  const phoneId = useId()
  const noteId = useId()

  const defaultIntent = intent ?? services?.[0]?.intent ?? WHATSAPP_INTENTS.rdv

  const [open, setOpen] = useState(false)
  const [chosenIntent, setChosenIntent] = useState(defaultIntent)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [note, setNote] = useState("")
  const [error, setError] = useState<string | null>(null)

  function reset() {
    setChosenIntent(defaultIntent)
    setName("")
    setPhone("")
    setNote("")
    setError(null)
  }

  function handleSubmit() {
    if (!name.trim() || !phone.trim()) {
      setError("Merci de renseigner votre nom et votre numéro de téléphone.")
      return
    }
    window.open(
      whatsappLink(buildBookingMessage(name.trim(), phone.trim(), chosenIntent, note.trim() || undefined)),
      "_blank",
      "noopener,noreferrer"
    )
    setOpen(false)
    reset()
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        setOpen(next)
        if (!next) reset()
      }}
    >
      <DialogTrigger asChild>
        <Button variant={variant} size={size} className={className}>
          {children}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <form
          className="grid gap-5"
          onSubmit={(e) => {
            e.preventDefault()
            handleSubmit()
          }}
        >
          {services && (
            <div className="grid gap-2">
              <Label>Service souhaité</Label>
              <div className="flex flex-wrap gap-2">
                {services.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => setChosenIntent(service.intent)}
                    className={cn(
                      "rounded-full border px-3.5 py-1.5 text-sm boty-transition",
                      chosenIntent === service.intent
                        ? "bg-gold text-black border-gold"
                        : "border-border text-foreground/70 hover:border-gold"
                    )}
                  >
                    {service.title}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => setChosenIntent(WHATSAPP_INTENTS.rdv)}
                  className={cn(
                    "rounded-full border px-3.5 py-1.5 text-sm boty-transition",
                    chosenIntent === WHATSAPP_INTENTS.rdv
                      ? "bg-gold text-black border-gold"
                      : "border-border text-foreground/70 hover:border-gold"
                  )}
                >
                  Autre demande
                </button>
              </div>
            </div>
          )}

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-1.5">
              <Label htmlFor={nameId}>Nom</Label>
              <Input
                id={nameId}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Votre nom"
                autoComplete="name"
                autoFocus
              />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor={phoneId}>Téléphone</Label>
              <Input
                id={phoneId}
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="6XX XXX XXX"
                autoComplete="tel"
              />
            </div>
          </div>

          <div className="grid gap-1.5">
            <Label htmlFor={noteId}>
              Créneau souhaité <span className="font-normal text-muted-foreground">(optionnel)</span>
            </Label>
            <Textarea
              id={noteId}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Ex : cet après-midi, samedi matin, dès que possible…"
              rows={2}
            />
          </div>

          {error && <p className="text-sm text-destructive">{error}</p>}

          <Button type="submit" variant="gold" size="lg" className="w-full">
            <MessageCircle className="w-4 h-4" />
            Continuer sur WhatsApp
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
