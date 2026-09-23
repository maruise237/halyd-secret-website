"use client"

export function AboutFounderSection() {
  return (
    <section id="apropos" className="py-24 bg-background scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden boty-shadow bg-black">
            {/* preload="none": this file isn't web-optimized (no "faststart" flag,
                so its metadata sits at the end), which makes preload="metadata"
                pull most of the ~5MB file just to read the duration. None means
                nothing downloads until the visitor actually presses play. */}
            <video
              src="/images/fondatrice/fondatrice-presentation-video.mp4"
              controls
              playsInline
              preload="none"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div>
            <span className="text-sm tracking-[0.3em] uppercase text-gold mb-4 block">À propos</span>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-foreground mb-6 text-balance">
              La fondatrice
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Passionnée par la beauté et la coiffure, la fondatrice de Halyd&apos;s Secret a créé un salon où
              chaque cliente est accueillie avec soin — du choix de la perruque à la pose finale, en passant par
              le maquillage et la manucure.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Aujourd&apos;hui, Halyd&apos;s Secret, c&apos;est aussi une académie qui transmet ce savoir-faire aux
              futures professionnelles de la beauté.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
