"use client"

import { type ReactNode, useId, useMemo, useState } from "react"
import { ArrowLeft, MessageCircle, Sparkle } from "lucide-react"
import { fr } from "date-fns/locale"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Calendar } from "@/components/ui/calendar"
import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { VariantProps } from "class-variance-authority"
import { buildBookingMessage, whatsappLink, WHATSAPP_INTENTS } from "@/lib/contact"
import type { SalonService } from "@/lib/salon-services"
import { cn } from "@/lib/utils"

const TIME_SLOTS = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"]

type Step = "service" | "date" | "time" | "contact"

type BookingDialogProps = VariantProps<typeof buttonVariants> & {
  children: ReactNode
  className?: string
  title?: string
  description?: string
  /** Whether to ask for a preferred date/time before the contact form. */
  withSlot?: boolean
} & (
    | { intent: string; services?: never }
    | { services: SalonService[]; intent?: never }
  )

function formatDate(date: Date) {
  const formatted = date.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" })
  return formatted.charAt(0).toUpperCase() + formatted.slice(1)
}

function isPast(date: Date) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return date < today
}

export function BookingDialog({
  intent,
  services,
  title = "Prendre rendez-vous",
  description = "Choisissez ce qui vous arrange, on confirme la disponibilité ensemble sur WhatsApp.",
  withSlot = true,
  children,
  variant = "gold",
  size = "lg",
  className,
}: BookingDialogProps) {
  const nameId = useId()
  const phoneId = useId()

  const defaultIntent = intent ?? services?.[0]?.intent ?? WHATSAPP_INTENTS.rdv
  const stepOrder: Step[] = useMemo(
    () => [services ? "service" : null, withSlot ? "date" : null, withSlot ? "time" : null, "contact"].filter(
      (s): s is Step => s !== null
    ),
    [services, withSlot]
  )

  const [open, setOpen] = useState(false)
  const [step, setStep] = useState<Step>(stepOrder[0])
  const [chosenService, setChosenService] = useState<SalonService | null>(services?.[0] ?? null)
  const [chosenIntent, setChosenIntent] = useState(defaultIntent)
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [time, setTime] = useState<string | null>(null)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [error, setError] = useState<string | null>(null)

  function reset() {
    setStep(stepOrder[0])
    setChosenService(services?.[0] ?? null)
    setChosenIntent(defaultIntent)
    setDate(undefined)
    setTime(null)
    setName("")
    setPhone("")
    setError(null)
  }

  function goTo(next: Step) {
    setError(null)
    setStep(next)
  }

  const stepIndex = stepOrder.indexOf(step)
  const canGoBack = stepIndex > 0

  function goBack() {
    if (!canGoBack) return
    goTo(stepOrder[stepIndex - 1])
  }

  function handleSubmit() {
    if (!name.trim() || !phone.trim()) {
      setError("Merci de renseigner votre nom et votre numéro de téléphone.")
      return
    }
    const slot = withSlot && date && time ? `${formatDate(date)} à ${time}` : undefined
    window.open(
      whatsappLink(buildBookingMessage(name.trim(), phone.trim(), chosenIntent, slot)),
      "_blank",
      "noopener,noreferrer"
    )
    setOpen(false)
    reset()
  }

  const recap = [chosenService?.title, date && formatDate(date), time].filter(Boolean)

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
          <div className="flex items-center gap-3 -mt-1 -mb-1">
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
                <div key={s} className={cn("h-1 flex-1 rounded-full", i <= stepIndex ? "bg-gold" : "bg-secondary")} />
              ))}
            </div>
          </div>
        )}

        {recap.length > 0 && step !== stepOrder[0] && (
          <div className="flex flex-wrap items-center gap-1.5 -mt-1 text-xs text-muted-foreground">
            {recap.map((label, i) => (
              <span key={label} className="inline-flex items-center gap-1.5">
                {i > 0 && <span className="text-border">·</span>}
                {label}
              </span>
            ))}
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
                    setChosenService(service)
                    setChosenIntent(service.intent)
                    goTo(stepOrder[stepIndex + 1])
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
                  setChosenService(null)
                  setChosenIntent(WHATSAPP_INTENTS.rdv)
                  goTo(stepOrder[stepIndex + 1])
                }}
                className="flex flex-col items-center text-center gap-2 rounded-xl border border-border bg-card p-4 boty-transition hover:border-gold hover:bg-secondary"
              >
                <Sparkle className="w-6 h-6 text-gold" strokeWidth={1.5} />
                <span className="text-sm font-medium text-foreground">Autre demande</span>
              </button>
            </div>
          </>
        )}

        {step === "date" && (
          <>
            <DialogHeader>
              <DialogTitle className="font-serif text-2xl">Quel jour vous conviendrait ?</DialogTitle>
              <DialogDescription>Un jour indicatif — la disponibilité exacte se confirme sur WhatsApp.</DialogDescription>
            </DialogHeader>
            <Calendar
              mode="single"
              locale={fr}
              selected={date}
              onSelect={(next) => {
                if (!next) return
                setDate(next)
                goTo(stepOrder[stepIndex + 1])
              }}
              disabled={isPast}
              className="mx-auto"
            />
          </>
        )}

        {step === "time" && (
          <>
            <DialogHeader>
              <DialogTitle className="font-serif text-2xl">À quelle heure ?</DialogTitle>
              <DialogDescription>{date && formatDate(date)}</DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-3 gap-2">
              {TIME_SLOTS.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => {
                    setTime(slot)
                    goTo(stepOrder[stepIndex + 1])
                  }}
                  className={cn(
                    "rounded-full border py-2 text-sm boty-transition",
                    time === slot
                      ? "bg-gold text-black border-gold"
                      : "border-border text-foreground/70 hover:border-gold"
                  )}
                >
                  {slot}
                </button>
              ))}
            </div>
          </>
        )}

        {step === "contact" && (
          <>
            <DialogHeader>
              <DialogTitle className="font-serif text-2xl">
                {stepOrder.length === 1 ? title : "Vos coordonnées"}
              </DialogTitle>
              <DialogDescription>
                {stepOrder.length === 1
                  ? description
                  : "Vous serez redirigé(e) vers WhatsApp avec un message déjà rempli pour Halyd's Secret."}
              </DialogDescription>
            </DialogHeader>

            <form
              className="grid gap-4"
              onSubmit={(e) => {
                e.preventDefault()
                handleSubmit()
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
                  autoFocus
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
                  Confirmer sur WhatsApp
                </Button>
              </DialogFooter>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
