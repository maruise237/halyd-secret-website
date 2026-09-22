/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Vercel's built-in image optimizer handles resizing + AVIF/WebP conversion in production.
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
