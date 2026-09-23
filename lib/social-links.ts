import type { ComponentType } from "react"
import { FacebookIcon, InstagramIcon, ThreadsIcon } from "@/components/boty/social-icons"

export type SocialLink = {
  name: string
  href: string
  icon: ComponentType<{ className?: string }>
}

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "Instagram", href: "https://www.instagram.com/halyd_secret", icon: InstagramIcon },
  { name: "Facebook", href: "https://web.facebook.com/profile.php?id=100069190351810", icon: FacebookIcon },
  { name: "Threads", href: "https://www.threads.com/@halyd_secret", icon: ThreadsIcon },
]
