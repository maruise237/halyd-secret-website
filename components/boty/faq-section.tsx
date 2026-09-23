import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FAQ_ITEMS } from "@/lib/faq"
import { SectionHeading } from "./section-heading"

export function FaqSection() {
  return (
    <section id="faq" className="py-16 sm:py-24 bg-card scroll-mt-20">
      <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Questions fréquentes" title="Vous vous demandez peut-être" />

        <Accordion type="single" collapsible className="w-full">
          {FAQ_ITEMS.map((item) => (
            <AccordionItem key={item.question} value={item.question}>
              <AccordionTrigger className="font-serif text-lg sm:text-xl text-foreground">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
