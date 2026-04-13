'use client'
import { useState, useRef, useEffect } from 'react'
import { useLanguage } from '@/lib/LanguageContext'
import { Lang } from '@/lib/translations'
import { useTheme } from 'next-themes'

const LANGS: Lang[] = ['en', 'fr', 'rw', 'tr']

/* ---- Proper inline SVG flags (no emoji — renders on all platforms) ---- */
const FlagIcon = ({ code }: { code: Lang }) => {
  const cls = 'w-5 h-3.5 rounded-[2px] overflow-hidden flex-shrink-0'

  if (code === 'en') return (
    <svg viewBox="0 0 60 36" className={cls} xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="36" fill="#012169"/>
      {/* White diagonals */}
      <line x1="0" y1="0" x2="60" y2="36" stroke="white" strokeWidth="7.2"/>
      <line x1="60" y1="0" x2="0" y2="36" stroke="white" strokeWidth="7.2"/>
      {/* Red diagonals */}
      <line x1="0" y1="0" x2="60" y2="36" stroke="#C8102E" strokeWidth="4.8"/>
      <line x1="60" y1="0" x2="0" y2="36" stroke="#C8102E" strokeWidth="4.8"/>
      {/* White cross */}
      <rect x="27" y="0" width="6" height="36" fill="white"/>
      <rect x="0" y="15" width="60" height="6" fill="white"/>
      {/* Red cross */}
      <rect x="28.5" y="0" width="3" height="36" fill="#C8102E"/>
      <rect x="0" y="16.5" width="60" height="3" fill="#C8102E"/>
    </svg>
  )

  if (code === 'fr') return (
    <svg viewBox="0 0 3 2" className={cls} xmlns="http://www.w3.org/2000/svg">
      <rect width="1" height="2" fill="#002395"/>
      <rect x="1" width="1" height="2" fill="#EDEDED"/>
      <rect x="2" width="1" height="2" fill="#ED2939"/>
    </svg>
  )

  if (code === 'rw') return (
    /* Rwanda — sky blue (top 50%), yellow (25%), green (25%) + sun */
    <svg viewBox="0 0 60 40" className={cls} xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="20" fill="#00A3DD"/>
      <rect y="20" width="60" height="10" fill="#FAD201"/>
      <rect y="30" width="60" height="10" fill="#20603D"/>
      {/* Sun in upper-right */}
      <circle cx="48" cy="10" r="6" fill="#FAD201"/>
      {/* Sun rays */}
      {[0,45,90,135].map(deg => (
        <line
          key={deg}
          x1={48 + 7.5 * Math.cos((deg * Math.PI) / 180)}
          y1={10 + 7.5 * Math.sin((deg * Math.PI) / 180)}
          x2={48 + 10 * Math.cos((deg * Math.PI) / 180)}
          y2={10 + 10 * Math.sin((deg * Math.PI) / 180)}
          stroke="#FAD201" strokeWidth="1.5" strokeLinecap="round"
        />
      ))}
      {[0,45,90,135].map(deg => (
        <line
          key={deg + 180}
          x1={48 + 7.5 * Math.cos(((deg + 180) * Math.PI) / 180)}
          y1={10 + 7.5 * Math.sin(((deg + 180) * Math.PI) / 180)}
          x2={48 + 10 * Math.cos(((deg + 180) * Math.PI) / 180)}
          y2={10 + 10 * Math.sin(((deg + 180) * Math.PI) / 180)}
          stroke="#FAD201" strokeWidth="1.5" strokeLinecap="round"
        />
      ))}
    </svg>
  )

  /* tr — Turkey: red bg + white crescent + star */
  return (
    <svg viewBox="0 0 30 20" className={cls} xmlns="http://www.w3.org/2000/svg">
      <rect width="30" height="20" fill="#E30A17"/>
      {/* Crescent: white circle minus red offset circle */}
      <circle cx="11" cy="10" r="6" fill="white"/>
      <circle cx="13" cy="10" r="4.8" fill="#E30A17"/>
      {/* Star */}
      <polygon
        points="19.5,10 20.8,13.8 17.2,11.5 21.8,11.5 18.2,13.8"
        fill="white"
      />
    </svg>
  )
}

const shortNames: Record<Lang, string> = {
  en: 'EN', fr: 'FR', rw: 'RW', tr: 'TR',
}

const fullNames: Record<Lang, string> = {
  en: 'English',
  fr: 'Français',
  rw: 'Kinyarwanda',
  tr: 'Türkçe',
}

export default function LanguageSelector() {
  const { lang, setLang } = useLanguage()
  const { theme } = useTheme()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const isDark = theme === 'dark'

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        className={`
          flex items-center gap-2 px-3 h-10 rounded-xl text-sm font-semibold
          border transition-all duration-300
          ${isDark
            ? 'border-slate-700 bg-dark-card hover:border-brand-orange hover:bg-brand-orange/10 text-slate-300'
            : 'border-slate-200 bg-white hover:border-brand-orange hover:bg-brand-orange/5 text-slate-700 shadow-sm'}
        `}
      >
        <FlagIcon code={lang} />
        <span>{shortNames[lang]}</span>
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className={`
          absolute top-12 right-0 min-w-[180px] rounded-xl border shadow-2xl z-50 overflow-hidden
          ${isDark
            ? 'bg-dark-secondary border-slate-700 shadow-black/40'
            : 'bg-white border-slate-200 shadow-slate-300/30'}
        `}>
          {LANGS.map(l => (
            <button
              key={l}
              onClick={() => { setLang(l); setOpen(false) }}
              className={`
                w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-left
                transition-colors duration-150
                ${lang === l
                  ? 'bg-brand-orange/12 text-brand-orange'
                  : isDark
                    ? 'text-slate-300 hover:bg-dark-card hover:text-white'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'}
              `}
            >
              <FlagIcon code={l} />
              <span className="flex-1">{fullNames[l]}</span>
              {lang === l && (
                <svg className="w-3.5 h-3.5 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
