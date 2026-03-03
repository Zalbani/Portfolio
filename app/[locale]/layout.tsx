import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic'
import { notFound } from 'next/navigation'
import { getTranslations } from 'next-intl/server'
import { LocaleProvider } from '@/components/providers/LocaleProvider'
import { ThemeProvider } from 'next-themes'
import { routing } from '@/i18n/routing'
import { ParticlesBackground } from '@/components/ui/ParticlesBackground'
import { TopRightControls } from '@/components/layout/TopRightControls'
import { FaviconSwitcher } from '@/components/ui/FaviconSwitcher'
import { LocaleAnimatedContent } from '@/components/ui/LocaleAnimatedContent'
import '../globals.css'

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

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'meta' })
  return {
    title: t('title'),
    description: t('description'),
    icons: [
      // Default icon for prefers-color-scheme: no-preference and fallback
      { rel: 'icon', url: '/favicon-light.svg' },
      { rel: 'icon', url: '/favicon-light.svg', media: '(prefers-color-scheme: light)' },
      { rel: 'icon', url: '/favicon-dark.svg', media: '(prefers-color-scheme: dark)' },
    ],
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const { locale } = params
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound()
  }

  const themeScript = `
    (function() {
      var theme = localStorage.getItem('theme');
      var resolved = theme === 'dark' || theme === 'light' ? theme
        : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      var bg = resolved === 'dark' ? '#222831' : '#FFFBF8';
      document.documentElement.classList.add(resolved);
      document.documentElement.style.backgroundColor = bg;
      document.body.style.backgroundColor = bg;
    })();
  `

  return (
    <html lang={locale} className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} suppressHydrationWarning />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LocaleProvider initialLocale={locale as 'en' | 'fr'}>
            <ThemeTransitionOverlay />
            <FaviconSwitcher />
            <ParticlesBackground />
            <SpotlightEffect />
            <CustomCursor />
            <TopRightControls />
            <LocaleAnimatedContent>{children}</LocaleAnimatedContent>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
