"use client"

import { type ReactNode, useId, useState } from "react"
import { ArrowLeft, MessageCircle, Sparkle, Sunrise, Sun, Sunset } from "lucide-react"
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
import { buildBookingMessage, whatsappLink, WHATSAPP_INTENTS } from "@/lib/contact"
import type { SalonService } from "@/lib/salon-services"
import { cn } from "@/lib/utils"

const DAY_OPTIONS = ["Aujourd'hui", "Demain", "Cette semaine", "La semaine prochaine"]
const MOMENT_OPTIONS = [
  { label: "Matin", icon: Sunrise },
  { label: "Après-midi", icon: Sun },
  { label: "Soir", icon: Sunset },
]

type Step = "service" | "slot" | "contact"

type BookingDialogProps = VariantProps<typeof buttonVariants> & {
  children: ReactNode
  className?: string
  /** Whether to ask for an indicative day/moment before the contact form. */
  withSlot?: boolean
} & (
    | { intent: string; services?: never }
    | { services: SalonService[]; intent?: never }
  )

export function BookingDialog({
  intent,
  services,
  withSlot = true,
  children,
  variant = "gold",
  size = "lg",
  className,
}: BookingDialogProps) {
  const nameId = useId()
  const phoneId = useId()

  const firstStep: Step = services ? "service" : withSlot ? "slot" : "contact"

  const [open, setOpen] = useState(false)
  const [step, setStep] = useState<Step>(firstStep)
  const [chosenIntent, setChosenIntent] = useState(intent ?? WHATSAPP_INTENTS.rdv)
  const [day, setDay] = useState<string | null>(null)
  const [moment, setMoment] = useState<string | null>(null)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [error, setError] = useState<string | null>(null)

  function reset() {
    setStep(firstStep)
    setChosenIntent(intent ?? WHATSAPP_INTENTS.rdv)
    setDay(null)
    setMoment(null)
    setName("")
    setPhone("")
    setError(null)
  }

  function goToNextAfterService() {
    setStep(withSlot ? "slot" : "contact")
  }

  function handleConfirm() {
    if (!name.trim() || !phone.trim()) {
      setError("Merci de renseigner votre nom et votre numéro de téléphone.")
      return
    }
    const slot = [day, moment].filter(Boolean).join(", ") || undefined
    window.open(
      whatsappLink(buildBookingMessage(name.trim(), phone.trim(), chosenIntent, slot)),
      "_blank",
      "noopener,noreferrer"
    )
    setOpen(false)
    reset()
  }

  const stepOrder: Step[] = [services ? "service" : null, withSlot ? "slot" : null, "contact"].filter(
    (s): s is Step => s !== null
  )
  const stepIndex = stepOrder.indexOf(step)
  const canGoBack = stepIndex > 0

  function goBack() {
    if (!canGoBack) return
    setStep(stepOrder[stepIndex - 1])
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
      <DialogContent className="sm:max-w-sm">
        {stepOrder.length > 1 && (
          <div className="flex items-center gap-3 -mt-1 -mb-2">
            {canGoBack ? (
              <button
                type="button"
                onClick={goBack}
                aria-label="Étape précédente"
                className="text-muted-foreground hover:text-foreground boty-transition"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
            ) : (
              <div className="w-4" />
            )}
            <div className="flex gap-1.5 flex-1">
              {stepOrder.map((s, i) => (
                <div
                  key={s}
                  className={cn(
                    "h-1 flex-1 rounded-full",
                    i <= stepIndex ? "bg-gold" : "bg-secondary"
                  )}
                />
              ))}
            </div>
          </div>
        )}

        {step === "service" && services && (
          <>
            <DialogHeader>
              <DialogTitle className="font-serif text-2xl">Quel service vous intéresse ?</DialogTitle>
              <DialogDescription>Choisissez une prestation pour continuer.</DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-3">
              {services.map((service) => (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => {
                    setChosenIntent(service.intent)
                    goToNextAfterService()
                  }}
                  className="flex flex-col items-center text-center gap-2 rounded-xl border border-border bg-card p-4 boty-transition hover:border-gold hover:bg-secondary"
                >
                  <service.icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                  <span className="text-sm font-medium text-foreground">{service.title}</span>
                </button>
              ))}
              <button
                type="button"
                onClick={() => {
                  setChosenIntent(WHATSAPP_INTENTS.rdv)
                  goToNextAfterService()
                }}
                className="flex flex-col items-center text-center gap-2 rounded-xl border border-border bg-card p-4 boty-transition hover:border-gold hover:bg-secondary"
              >
                <Sparkle className="w-6 h-6 text-gold" strokeWidth={1.5} />
                <span className="text-sm font-medium text-foreground">Autre demande</span>
              </button>
            </div>
          </>
        )}

        {step === "slot" && (
          <>
            <DialogHeader>
              <DialogTitle className="font-serif text-2xl">Quand vous conviendrait-il ?</DialogTitle>
              <DialogDescription>Un créneau indicatif — nous confirmons ensemble sur WhatsApp.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="flex flex-wrap gap-2">
                {DAY_OPTIONS.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setDay(day === option ? null : option)}
                    className={cn(
                      "rounded-full border px-4 py-1.5 text-sm boty-transition",
                      day === option
                        ? "bg-gold text-black border-gold"
                        : "border-border text-foreground/70 hover:border-gold"
                    )}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {MOMENT_OPTIONS.map((option) => (
                  <button
                    key={option.label}
                    type="button"
                    onClick={() => setMoment(moment === option.label ? null : option.label)}
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm boty-transition",
                      moment === option.label
                        ? "bg-gold text-black border-gold"
                        : "border-border text-foreground/70 hover:border-gold"
                    )}
                  >
                    <option.icon className="w-3.5 h-3.5" />
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
            <DialogFooter>
              <Button variant="gold" className={cn("w-full", className)} onClick={() => setStep("contact")}>
                Continuer
              </Button>
            </DialogFooter>
          </>
        )}

        {step === "contact" && (
          <>
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
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
