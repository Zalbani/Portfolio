'use client'

import { useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

// Variables module-level : survivent aux remounts (ex: changement de locale)
let _savedX = -200
let _savedY = -200

export function CustomCursor() {
  // Initialisation avec la dernière position connue → springs déjà à la bonne position au remount
  const x = useMotionValue(_savedX)
  const y = useMotionValue(_savedY)
  const hover = useMotionValue(0)

  // Dot : très réactif
  const dotX = useSpring(x, { damping: 35, stiffness: 500, mass: 0.2 })
  const dotY = useSpring(y, { damping: 35, stiffness: 500, mass: 0.2 })

  // Ring : légèrement décalé pour l'effet de traîne
  const ringX = useSpring(x, { damping: 30, stiffness: 300, mass: 0.5 })
  const ringY = useSpring(y, { damping: 30, stiffness: 300, mass: 0.5 })

  // Spring sur le hover pour une transition douce du scale
  const hoverSpring = useSpring(hover, { damping: 22, stiffness: 350 })
  const ringScale = useTransform(hoverSpring, [0, 1], [1, 3])
  const dotScale = useTransform(hoverSpring, [0, 1], [1, 0.4])

  useEffect(() => {
    // Si pas encore de position connue, snapper au premier mouvement
    let ready = _savedX !== -200

    const move = (e: MouseEvent) => {
      _savedX = e.clientX
      _savedY = e.clientY

      if (!ready) {
        // Tout premier chargement : snap instantané, zéro animation
        x.set(e.clientX)
        y.set(e.clientY)
        dotX.set(e.clientX)
        dotY.set(e.clientY)
        ringX.set(e.clientX)
        ringY.set(e.clientY)
        ready = true
      } else {
        x.set(e.clientX)
        y.set(e.clientY)
      }
      const t = e.target as HTMLElement
      hover.set(t.closest('a, button, [data-hover]') ? 1 : 0)
    }

    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [x, y, hover, dotX, dotY, ringX, ringY])

  return (
    <>
      {/* Dot */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          scale: dotScale,
          translateX: '-50%',
          translateY: '-50%',
          mixBlendMode: 'difference',
        }}
        className="fixed top-0 left-0 z-[9999] pointer-events-none w-5 h-5 rounded-full bg-white"
      />
      {/* Ring */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          scale: ringScale,
          translateX: '-50%',
          translateY: '-50%',
          mixBlendMode: 'difference',
        }}
        className="fixed top-0 left-0 z-[9998] pointer-events-none w-5 h-5 rounded-full border border-white opacity-50"
      />
    </>
  )
}
