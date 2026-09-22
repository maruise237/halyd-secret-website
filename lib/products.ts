export type Product = {
  id: string
  name: string
  description: string
  price: string | null
  image: string
  category: "cheveux" | "lace" | "soin"
}

export const PRODUCTS: Product[] = [
  {
    id: "perruque-lace-bob-brune",
    name: "Perruque Lace Bob Brune",
    description: "Perruque lace front coupe carrée, cheveux naturels brun profond.",
    price: null,
    image: "/images/produits/produit-perruque-lace-bob-brune.jpg",
    category: "cheveux",
  },
  {
    id: "perruque-lace-bob-frange",
    name: "Perruque Lace Bob avec Frange",
    description: "Perruque lace front coupe carrée avec frange, rendu naturel.",
    price: null,
    image: "/images/produits/produit-perruque-lace-bob-frange.jpg",
    category: "cheveux",
  },
  {
    id: "perruque-longue-ombree",
    name: "Perruque Longue Ombrée",
    description: "Perruque lace longueur XL, effet balayage ombré caramel.",
    price: null,
    image: "/images/produits/produit-perruque-longue-ombree-01.jpg",
    category: "cheveux",
  },
  {
    id: "hair-wax-stick",
    name: "Hair Wax Stick HS",
    description: "Stick cire coiffante pour fixer les baby hairs et discipliner les contours.",
    price: null,
    image: "/images/produits/produit-hair-wax-stick.jpg",
    category: "soin",
  },
  {
    id: "melting-spray",
    name: "Melting Spray",
    description: "Spray fondant pour lace : stylise les bords, renforce la colle, pose sans colle.",
    price: null,
    image: "/images/produits/produit-melting-spray-infographie.jpg",
    category: "lace",
  },
  {
    id: "lace-cleaner",
    name: "Lace Cleaner",
    description: "Nettoyant professionnel pour lace, élimine les résidus de colle en douceur.",
    price: null,
    image: "/images/produits/produit-lace-cleaner.jpg",
    category: "lace",
  },
  {
    id: "lace-glue-remover",
    name: "Lace Glue Remover",
    description: "Dissolvant de colle pour lace, formule douce pour un démaquillage sans irritation.",
    price: null,
    image: "/images/produits/produit-lace-cleaner-glue-remover-duo.jpg",
    category: "lace",
  },
  {
    id: "dyed-mousse",
    name: "Dyed Mousse",
    description: "Mousse teintée pour lace, action immédiate et longue tenue, 4 teintes disponibles.",
    price: "6 500 FCFA",
    image: "/images/produits/produit-dyed-mousse-infographie.jpg",
    category: "lace",
  },
  {
    id: "lace-tint-spray",
    name: "Lace Tint Spray",
    description: "Spray teinté pour tulle, adapte la couleur à la peau, sans acétone, 4 carnations.",
    price: "6 000 FCFA",
    image: "/images/produits/produit-lace-tint-spray-infographie.jpg",
    category: "lace",
  },
  {
    id: "adhesive-skin-protector",
    name: "Adhesive Skin Protector",
    description: "Protecteur de peau avant application de colle, préserve le cuir chevelu et le front.",
    price: null,
    image: "/images/produits/produit-adhesive-skin-protector.jpg",
    category: "lace",
  },
  {
    id: "kit-outils-pose-lace",
    name: "Kit d'outils Pose Lace",
    description: "Trousse complète d'outils professionnels pour la pose et l'entretien des lace.",
    price: null,
    image: "/images/produits/produit-kit-outils-pose-lace.jpg",
    category: "lace",
  },
  {
    id: "gamme-soins-cheveux",
    name: "Gamme Soins Cheveux",
    description: "Sérums et huiles nourrissantes pour fortifier et faire briller la chevelure.",
    price: null,
    image: "/images/produits/produit-gamme-soins-cheveux.jpg",
    category: "soin",
  },
]
