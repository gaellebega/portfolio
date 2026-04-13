'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import ThemeToggle from './ThemeToggle'
import LanguageSelector from './LanguageSelector'
import { useLanguage } from '@/lib/LanguageContext'

export default function Navbar() {
  const pathname = usePathname()
  const { t } = useLanguage()
  const { theme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => setMenuOpen(false), [pathname])

  const isDark = !mounted || theme === 'dark'

  const links = [
    { href: '/', label: t.nav.home },
    { href: '/about', label: t.nav.about },
    { href: '/projects', label: t.nav.projects },
    { href: '/contact', label: t.nav.contact },
  ]

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${scrolled
            ? isDark
              ? 'bg-dark-primary/95 backdrop-blur-xl border-b border-slate-800 shadow-xl shadow-black/30'
              : 'bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-lg shadow-slate-200/50'
            : isDark
              ? 'bg-dark-primary/60 backdrop-blur-md border-b border-transparent'
              : 'bg-white/60 backdrop-blur-md border-b border-transparent'
          }
        `}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

          {/* ---- Logo ---- */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-brand-orange flex items-center justify-center shadow-lg shadow-brand-orange/30 group-hover:scale-110 transition-transform duration-200">
              <span className="text-white font-display font-bold text-sm leading-none">B</span>
            </div>
            <span className={`font-display font-bold text-lg leading-none tracking-tight transition-colors duration-200
              ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Bega<span className="text-brand-orange">.</span>
            </span>
          </Link>

          {/* ---- Desktop Nav ---- */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`
                  relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 group
                  ${isActive(href)
                    ? 'text-brand-orange'
                    : isDark
                      ? 'text-slate-400 hover:text-white'
                      : 'text-slate-600 hover:text-slate-900'}
                `}
              >
                {/* Active indicator */}
                {isActive(href) && (
                  <span className="absolute inset-0 rounded-lg bg-brand-orange/10" />
                )}
                {/* Hover bg */}
                <span className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200
                  ${isDark ? 'bg-white/5' : 'bg-slate-900/4'}`} />
                <span className="relative">{label}</span>
                {/* Active dot */}
                {isActive(href) && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-orange" />
                )}
              </Link>
            ))}
          </nav>

          {/* ---- Right Controls ---- */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-2">
              <LanguageSelector />
              <ThemeToggle />
            </div>

            {/* Hire Me button */}
            <Link
              href="/contact"
              className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold bg-brand-orange text-white
                hover:bg-brand-orange-lt hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-orange/25
                transition-all duration-200 ml-1"
            >
              {t.nav.hire}
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(o => !o)}
              className={`
                md:hidden w-10 h-10 rounded-xl flex flex-col items-center justify-center gap-[5px]
                border transition-all duration-200
                ${isDark
                  ? 'border-slate-700 bg-dark-card hover:border-brand-orange'
                  : 'border-slate-200 bg-white hover:border-brand-orange shadow-sm'}
              `}
              aria-label="Menu"
            >
              <span className={`block w-5 h-0.5 rounded-full transition-all duration-300 origin-center
                ${isDark ? 'bg-slate-300' : 'bg-slate-600'}
                ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block w-5 h-0.5 rounded-full transition-all duration-300
                ${isDark ? 'bg-slate-300' : 'bg-slate-600'}
                ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block w-5 h-0.5 rounded-full transition-all duration-300 origin-center
                ${isDark ? 'bg-slate-300' : 'bg-slate-600'}
                ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </button>
          </div>
        </div>

        {/* ---- Mobile Menu ---- */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
          <div className={`px-4 pb-4 pt-2 border-t ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
            <div className="flex flex-col gap-1 mb-4">
              {links.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-150
                    ${isActive(href)
                      ? 'bg-brand-orange/12 text-brand-orange font-semibold'
                      : isDark
                        ? 'text-slate-300 hover:bg-dark-card hover:text-white'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`}
                >
                  {label}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-2 pt-3 border-t border-slate-800/50">
              <LanguageSelector />
              <ThemeToggle />
              <Link
                href="/contact"
                className="ml-auto px-4 py-2 rounded-xl text-sm font-semibold bg-brand-orange text-white hover:bg-brand-orange-lt transition-colors duration-200"
              >
                {t.nav.hire}
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
