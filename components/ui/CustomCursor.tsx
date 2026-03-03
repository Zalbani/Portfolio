'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

// Module-level variables: persist across remounts (e.g. locale change)
let _savedX = -200
let _savedY = -200

function isTouchDevice() {
  return window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window
}

function CursorContent() {
  const x = useMotionValue(_savedX)
  const y = useMotionValue(_savedY)
  const hover = useMotionValue(0)

  const dotX = useSpring(x, { damping: 50, stiffness: 1200, mass: 0.05 })
  const dotY = useSpring(y, { damping: 50, stiffness: 1200, mass: 0.05 })
  const ringX = useSpring(x, { damping: 45, stiffness: 700, mass: 0.15 })
  const ringY = useSpring(y, { damping: 45, stiffness: 700, mass: 0.15 })
  const hoverSpring = useSpring(hover, { damping: 35, stiffness: 500 })
  const ringScale = useTransform(hoverSpring, [0, 1], [1, 3])
  const dotScale = useTransform(hoverSpring, [0, 1], [1, 0.4])

  useEffect(() => {
    let ready = _savedX !== -200

    const move = (e: MouseEvent) => {
      _savedX = e.clientX
      _savedY = e.clientY

      if (!ready) {
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
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          scale: dotScale,
          translateX: '-50%',
          translateY: '-50%',
          mixBlendMode: 'difference',
          willChange: 'transform',
        }}
        className="fixed top-0 left-0 z-[9999] pointer-events-none w-5 h-5 rounded-full bg-white"
      />
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          scale: ringScale,
          translateX: '-50%',
          translateY: '-50%',
          mixBlendMode: 'difference',
          willChange: 'transform',
        }}
        className="fixed top-0 left-0 z-[9998] pointer-events-none w-5 h-5 rounded-full border border-white opacity-50"
      />
    </>
  )
}

export function CustomCursor() {
  const [showCursor, setShowCursor] = useState(false)

  useEffect(() => {
    if (!isTouchDevice()) setShowCursor(true)
  }, [])

  if (!showCursor) return null
  return <CursorContent />
}
