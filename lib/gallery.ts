export type GalleryCategory = "coiffure" | "maquillage" | "manucure"

export type GalleryItem = {
  image: string
  category: GalleryCategory
  alt: string
}

export const GALLERY_ITEMS: GalleryItem[] = [
  { image: "/images/realisations/realisation-coiffure-longue-lisse-01.jpg", category: "coiffure", alt: "Coiffure longue lisse" },
  { image: "/images/realisations/realisation-coiffure-raide-lunettes-01.jpg", category: "coiffure", alt: "Coiffure raide" },
  { image: "/images/realisations/realisation-pose-perruque-frontale-01.jpg", category: "coiffure", alt: "Pose de perruque frontale" },
  { image: "/images/realisations/realisation-coiffure-glam-brune-01.jpg", category: "coiffure", alt: "Coiffure glamour brune" },
  { image: "/images/realisations/realisation-maquillage-coiffure-updo-01.jpg", category: "maquillage", alt: "Maquillage et coiffure updo" },
  { image: "/images/realisations/realisation-maquillage-cheveux-gris-01.jpg", category: "maquillage", alt: "Maquillage soirée" },
  { image: "/images/realisations/realisation-coiffure-bouclee-cuivree-01.jpg", category: "coiffure", alt: "Coiffure bouclée cuivrée" },
  { image: "/images/realisations/realisation-coiffure-meches-lunettes-01.jpg", category: "coiffure", alt: "Coiffure mèches" },
  { image: "/images/realisations/realisation-manucure-vernis-fonce-01.jpg", category: "manucure", alt: "Manucure vernis foncé" },
  { image: "/images/realisations/realisation-coiffure-bouclee-afro-01.jpg", category: "coiffure", alt: "Coiffure bouclée afro" },
  { image: "/images/realisations/realisation-coiffure-raide-lunettes-02.jpg", category: "coiffure", alt: "Coiffure raide lisse" },
  { image: "/images/realisations/realisation-maquillage-mariee-duo-01.jpg", category: "maquillage", alt: "Maquillage mariée" },
  { image: "/images/realisations/realisation-maquillage-mariee-duo-02.jpg", category: "maquillage", alt: "Maquillage mariée duo" },
  { image: "/images/realisations/realisation-coiffure-raide-glam-01.jpg", category: "coiffure", alt: "Coiffure glamour" },
  { image: "/images/realisations/realisation-coiffure-updo-bouclee-01.jpg", category: "coiffure", alt: "Coiffure updo bouclée" },
  { image: "/images/realisations/realisation-manucure-orange-leopard-01.jpg", category: "manucure", alt: "Manucure imprimé léopard" },
  { image: "/images/realisations/realisation-manucure-rose-chrome-01.jpg", category: "manucure", alt: "Manucure rose chromé" },
  { image: "/images/realisations/realisation-coiffure-raide-bijoux-01.jpg", category: "coiffure", alt: "Coiffure raide avec bijoux" },
  { image: "/images/realisations/realisation-maquillage-glam-bijoux-01.jpg", category: "maquillage", alt: "Maquillage glamour" },
]
