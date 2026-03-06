'use client'

import dynamic from 'next/dynamic'

const CustomCursor = dynamic(
  () => import('@/components/ui/CustomCursor').then((m) => m.CustomCursor),
  { ssr: false }
)
const SpotlightEffect = dynamic(
  () => import('@/components/ui/SpotlightEffect').then((m) => m.SpotlightEffect),
  { ssr: false }
)
const ThemeTransitionOverlay = dynamic(
  () => import('@/components/ui/ThemeTransitionOverlay').then((m) => m.ThemeTransitionOverlay),
  { ssr: false }
)

export function ClientOnlyComponents() {
  return (
    <>
      <ThemeTransitionOverlay />
      <SpotlightEffect />
      <CustomCursor />
    </>
  )
}
