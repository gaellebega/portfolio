'use client'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useLanguage } from '@/lib/LanguageContext'
import { useEffect, useState } from 'react'

export default function Footer() {
  const { t } = useLanguage()
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const isDark = !mounted || theme === 'dark'

  return (
    <footer className={`border-t section-pad !py-10 ${isDark ? 'bg-dark-secondary border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded-lg bg-brand-orange flex items-center justify-center">
              <span className="text-white font-display font-bold text-xs">B</span>
            </div>
            <span className={`font-display font-bold text-base tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Bega<span className="text-brand-orange">.</span>
            </span>
          </Link>

          {/* Links */}
          <nav className="flex items-center gap-1 flex-wrap justify-center">
            {Object.entries(t.footer.links).map(([key, label]) => {
              const hrefs: Record<string, string> = { home: '/', about: '/about', projects: '/projects', contact: '/contact' }
              return (
                <Link
                  key={key}
                  href={hrefs[key]}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-150
                    ${isDark ? 'text-slate-500 hover:text-slate-300' : 'text-slate-400 hover:text-slate-700'}`}
                >
                  {label}
                </Link>
              )
            })}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-2">
            {[
              { label: 'GitHub', href: '#', icon: <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /> },
              { label: 'LinkedIn', href: '#', icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /> },
              { label: 'Twitter', href: '#', icon: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /> },
            ].map(s => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200
                  ${isDark
                    ? 'text-slate-500 hover:text-brand-orange hover:bg-brand-orange/10'
                    : 'text-slate-400 hover:text-brand-orange hover:bg-brand-orange/8'}`}
              >
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">{s.icon}</svg>
              </a>
            ))}
          </div>
        </div>

        <div className={`mt-8 pt-6 border-t text-center text-xs ${isDark ? 'border-slate-800 text-slate-600' : 'border-slate-200 text-slate-400'}`}>
          {t.footer.built}
        </div>
      </div>
    </footer>
  )
}
