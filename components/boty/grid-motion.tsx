"use client"

import { useEffect, useRef, type ReactNode } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import styles from "./grid-motion.module.css"

export type GridMotionItem = string | ReactNode

export function GridMotion({
  items = [],
  gradientColor = "black",
}: {
  items?: GridMotionItem[]
  gradientColor?: string
}) {
  const gridRef = useRef<HTMLDivElement>(null)
  const rowRefs = useRef<(HTMLDivElement | null)[]>([])
  const mouseXRef = useRef(0)

  const totalItems = 28
  const defaultItems = Array.from({ length: totalItems }, (_, index) => `Item ${index + 1}`)
  const combinedItems = items.length > 0 ? items.slice(0, totalItems) : defaultItems

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const container = gridRef.current
    if (!container) return

    mouseXRef.current = window.innerWidth / 2
    gsap.ticker.lagSmoothing(0)

    // Touch devices have no hover/mouse signal, so the grid would sit
    // frozen on mobile. Drive the same motion from scroll depth instead —
    // scrolling is the interaction mobile visitors actually do.
    const isTouchDevice = window.matchMedia("(hover: none), (pointer: coarse)").matches

    const handleMouseMove = (e: MouseEvent) => {
      mouseXRef.current = e.clientX
    }

    const handleScroll = () => {
      const t = window.scrollY / 120
      mouseXRef.current = window.innerWidth / 2 + Math.sin(t) * (window.innerWidth / 2)
    }

    const updateMotion = () => {
      const maxMoveAmount = 300
      const baseDuration = 0.8
      const inertiaFactors = [0.6, 0.4, 0.3, 0.2]

      rowRefs.current.forEach((row, index) => {
        if (row) {
          const direction = index % 2 === 0 ? 1 : -1
          const moveAmount = ((mouseXRef.current / window.innerWidth) * maxMoveAmount - maxMoveAmount / 2) * direction

          gsap.to(row, {
            x: moveAmount,
            duration: baseDuration + inertiaFactors[index % inertiaFactors.length],
            ease: "power3.out",
            overwrite: "auto",
          })
        }
      })
    }

    // This otherwise runs for the whole time the page is open, even long
    // after the user has scrolled the Hero out of view — pause the ticker
    // and the listeners driving it outside the viewport, resume on return.
    let active = false
    const start = () => {
      if (active) return
      active = true
      gsap.ticker.add(updateMotion)
      if (isTouchDevice) {
        handleScroll()
        window.addEventListener("scroll", handleScroll, { passive: true })
      } else {
        window.addEventListener("mousemove", handleMouseMove)
      }
    }
    const stop = () => {
      if (!active) return
      active = false
      gsap.ticker.remove(updateMotion)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }

    const observer = new IntersectionObserver(([entry]) => (entry.isIntersecting ? start() : stop()), {
      threshold: 0,
    })
    observer.observe(container)

    return () => {
      stop()
      observer.disconnect()
    }
  }, [])

  return (
    <div className={styles.noscroll} ref={gridRef}>
      <section
        className={styles.intro}
        style={{
          background: `radial-gradient(circle, ${gradientColor} 0%, transparent 100%)`,
        }}
      >
        <div className={styles.gridMotionContainer}>
          {[...Array(4)].map((_, rowIndex) => (
            <div
              key={rowIndex}
              className={styles.row}
              ref={(el) => {
                rowRefs.current[rowIndex] = el
              }}
            >
              {[...Array(7)].map((_, itemIndex) => {
                const content = combinedItems[rowIndex * 7 + itemIndex]
                return (
                  <div key={itemIndex} className={styles.rowItem}>
                    <div className={styles.rowItemInner}>
                      {typeof content === "string" && content.startsWith("/") ? (
                        <Image
                          src={content}
                          alt=""
                          fill
                          sizes="220px"
                          priority={rowIndex === 0 && itemIndex === 0}
                          className={styles.rowItemImg}
                        />
                      ) : (
                        <div className={styles.rowItemContent}>{content}</div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
