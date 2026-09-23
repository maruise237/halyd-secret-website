"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ChevronDown, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { WhatsAppLinkButton } from "./whatsapp-link-button"
import { FAQ_ITEMS, type FaqItem } from "@/lib/faq"

function FAQItemRow({ question, answer, index }: FaqItem & { index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.08, ease: "easeOut" }}
      className={cn(
        "group border-border/60 rounded-lg border",
        "transition-all duration-200 ease-in-out",
        isOpen ? "bg-background shadow-sm" : "hover:bg-background/60"
      )}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-6 py-4"
      >
        <h3
          className={cn(
            "text-left font-serif text-lg transition-colors duration-200",
            "text-foreground/80",
            isOpen && "text-foreground"
          )}
        >
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0, scale: isOpen ? 1.1 : 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={cn(
            "shrink-0 rounded-full p-0.5 transition-colors duration-200",
            isOpen ? "text-gold" : "text-muted-foreground"
          )}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
                opacity: { duration: 0.25, delay: 0.1 },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.3, ease: "easeInOut" },
                opacity: { duration: 0.25 },
              },
            }}
          >
            <div className="border-border/40 border-t px-6 pt-2 pb-4">
              <motion.p
                initial={{ y: -8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -8, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="text-muted-foreground text-sm leading-relaxed"
              >
                {answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FaqSection() {
  return (
    <section id="faq" className="bg-card relative w-full overflow-hidden py-16 sm:py-24 scroll-mt-20">
      <div className="bg-gold/5 absolute top-20 -left-20 h-64 w-64 rounded-full blur-3xl pointer-events-none" />
      <div className="bg-gold/5 absolute -right-20 bottom-20 h-64 w-64 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-10 sm:mb-12 max-w-2xl text-center"
        >
          <Badge variant="outline" className="border-gold text-gold mb-4 px-3 py-1 text-xs font-medium tracking-wider uppercase">
            Questions fréquentes
          </Badge>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight text-foreground mb-3 text-balance">
            Vous vous demandez peut-être
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Tout ce qu'il faut savoir avant de venir chez Halyd&apos;s Secret
          </p>
        </motion.div>

        <div className="mx-auto max-w-2xl space-y-2">
          {FAQ_ITEMS.map((faq, index) => (
            <FAQItemRow key={faq.question} {...faq} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-12 max-w-md rounded-lg p-6 text-center"
        >
          <div className="bg-gold/10 text-gold mb-4 inline-flex items-center justify-center rounded-full p-2">
            <MessageCircle className="h-4 w-4" />
          </div>
          <p className="text-foreground mb-1 text-sm font-medium">Encore des questions ?</p>
          <p className="text-muted-foreground mb-4 text-xs">On vous répond directement sur WhatsApp.</p>
          <WhatsAppLinkButton
            message="Bonjour Halyd's Secret, j'ai une question."
            variant="gold"
            size="sm"
          >
            <MessageCircle className="h-4 w-4" />
            Nous écrire sur WhatsApp
          </WhatsAppLinkButton>
        </motion.div>
      </div>
    </section>
  )
}
