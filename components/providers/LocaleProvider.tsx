'use client'

import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import { routing } from '@/i18n/routing'

import enMessages from '@/messages/en.json'
import frMessages from '@/messages/fr.json'

const messagesMap = { en: enMessages, fr: frMessages } as const
const LOCALE_COOKIE = 'NEXT_LOCALE'

type Locale = (typeof routing.locales)[number]

type LocaleContextValue = {
  locale: Locale
  pendingLocale: Locale | null
  isTransitioning: boolean
  setLocale: (locale: Locale) => void
  onExitComplete: () => void
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

function setLocaleCookie(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000`
}

export function LocaleProvider({
  initialLocale,
  children,
}: {
  initialLocale: Locale
  children: React.ReactNode
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale)
  const [pendingLocale, setPendingLocale] = useState<Locale | null>(null)
  const pendingLocaleRef = useRef<Locale | null>(null)

  useEffect(() => {
    pendingLocaleRef.current = pendingLocale
  }, [pendingLocale])

  const isTransitioning = pendingLocale !== null

  const onExitComplete = useCallback(() => {
    const next = pendingLocaleRef.current
    if (next) {
      setLocaleState(next)
      setLocaleCookie(next)
      setPendingLocale(null)
    }
  }, [])

  const setLocale = useCallback((next: Locale) => {
    if (next === (pendingLocale ?? locale)) return
    setPendingLocale(next)
  }, [locale, pendingLocale])

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  return (
    <LocaleContext.Provider value={{ locale, pendingLocale, isTransitioning, setLocale, onExitComplete }}>
      <NextIntlClientProvider
        locale={locale}
        messages={messagesMap[locale]}
        timeZone="Europe/Paris"
        now={new Date()}
      >
        {children}
      </NextIntlClientProvider>
    </LocaleContext.Provider>
  )
}

export function useLocaleContext() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocaleContext must be used within LocaleProvider')
  return ctx
}
