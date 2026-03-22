"use client"

import { FranceFlag, IconRussya, UzbekistanFlag } from "@/public/icons/page"
import { useLocale } from "next-intl"
import { useRouter, usePathname } from "@/i18n/navigation" 

type Lang = "ru" | "uz" | "en"

export default function LanguageSelect() {
  const locale = useLocale() as Lang  
  const router = useRouter()
  const pathname = usePathname()

  const changeLang = (newLocale: Lang) => {
    router.replace(pathname, { locale: newLocale })
  }

  const langs = [
    {
      code: "ru",
      label: "Русский",
      icon: <div className="w-5 h-5"><IconRussya/></div>,
    },
    {
      code: "uz",
      label: "O‘zbek",
      icon: <div className="w-5 h-5"><UzbekistanFlag/></div>,
    },
    {
      code: "en",
      label: "English",
      icon: <div className="w-5 h-5"><FranceFlag/></div>,
    },
  ]

  const current = langs.find(l => l.code === locale)

  return (
    <div className="relative group w-35 text-sm font-medium z-50">
      
      <div className="flex items-center justify-between  px-4 py-2 rounded-lg border border-transparent hover:border-[#ffad2d] transition cursor-pointer">
        <div className="flex items-center gap-3">
          {current?.icon}
          <span>{current?.label}</span>
        </div>

        <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>

      <div className="absolute left-0 top-[110%] w-full bg-black border border-[#ffad2d] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden">
        {langs.map(l => (
          <div
            key={l.code}
            onClick={() => changeLang(l.code as Lang)}
            className={`flex items-center gap-3 px-4 py-2 hover:bg-[#ffad2d] hover:text-[#ffad2d] cursor-pointer transition ${
              locale === l.code ? "bg-transparent text-[#ffad2d]" : "text-white"
            }`}
          >
            {l.icon}
            <span>{l.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}