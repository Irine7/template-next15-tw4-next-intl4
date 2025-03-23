"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { type Language, translations, type TranslationKey, languageFlags } from "@/lib/translations"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: TranslationKey) => string
  flag: string
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: (key) => key,
  flag: "🇬🇧",
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [isClient, setIsClient] = useState(false)

  // Set isClient to true when component mounts
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Load language preference from localStorage on client side
  useEffect(() => {
    if (isClient) {
      const savedLanguage = localStorage.getItem("language") as Language
      if (savedLanguage && ["en", "ru", "uk", "es", "ca", "be", "pl"].includes(savedLanguage)) {
        setLanguage(savedLanguage)
      }
    }
  }, [isClient])

  // Save language preference to localStorage
  useEffect(() => {
    if (isClient) {
      localStorage.setItem("language", language)
    }
  }, [language, isClient])

  // Translation function
  const t = (key: TranslationKey): string => {
    return translations[language][key] || translations.en[key] || key
  }

  // Get flag for current language
  const flag = languageFlags[language]

  return <LanguageContext.Provider value={{ language, setLanguage, t, flag }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  return context
}

