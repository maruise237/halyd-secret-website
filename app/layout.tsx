import React from "react"
import type { Metadata, Viewport } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500', '600']
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: "Halyd's Secret — Salon de beauté & Académie",
  description: "Salon de beauté et académie à Bonamoussadi (Douala) : coiffure, makeup, manucure/pédicure, vente et location de perruques, produits lace. Prenez RDV sur WhatsApp.",
  generator: 'v0.app',
  keywords: ['coiffure', 'salon de beauté', 'makeup', 'manucure', 'pédicure', 'perruques', 'lace', 'académie', 'Douala', 'Cameroun'],
}

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${dmSans.variable} ${playfairDisplay.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
