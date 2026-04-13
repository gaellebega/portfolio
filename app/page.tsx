'use client'
import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'
import { useTheme } from 'next-themes'
import { useLanguage } from '@/lib/LanguageContext'

/* ---- Typing hook ---- */
function useTyping(words: string[]) {
  const [text, setText] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [charIdx, setCharIdx] = useState(0)

  useEffect(() => {
    const word = words[wordIdx]
    let delay = deleting ? 55 : 95
    if (!deleting && charIdx > word.length) { delay = 1800; }
    if (deleting && charIdx < 0) { delay = 300; }

    const t = setTimeout(() => {
      if (!deleting && charIdx > word.length) {
        setDeleting(true)
      } else if (deleting && charIdx < 0) {
        setDeleting(false)
        setWordIdx(i => (i + 1) % words.length)
        setCharIdx(0)
      } else {
        setText(word.slice(0, charIdx))
        setCharIdx(i => i + (deleting ? -1 : 1))
      }
    }, delay)

    return () => clearTimeout(t)
  }, [charIdx, deleting, wordIdx, words])

  return text
}

/* ---- Counter hook ---- */
function useCounter(target: number, active: boolean) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!active) return
    const dur = 1800
    const start = performance.now()
    const frame = (now: number) => {
      const t = Math.min((now - start) / dur, 1)
      const ease = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
      setVal(Math.round(ease * target))
      if (t < 1) requestAnimationFrame(frame)
    }
    requestAnimationFrame(frame)
  }, [target, active])
  return val
}

/* ---- Stat component ---- */
function Stat({ num, suffix, label, active, isDark }: { num: number; suffix: string; label: string; active: boolean; isDark: boolean }) {
  const val = useCounter(num, active)
  return (
    <div className="text-center">
      <div className="font-display text-3xl md:text-4xl font-extrabold text-brand-orange leading-none mb-1">
        {val}{suffix}
      </div>
      <div className={`text-xs uppercase tracking-widest font-semibold ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
        {label}
      </div>
    </div>
  )
}

export default function HomePage() {
  const { t } = useLanguage()
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [statsActive, setStatsActive] = useState(false)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => setMounted(true), [])
  const typedText = useTyping(t.hero.roles)
  const isDark = !mounted || theme === 'dark'

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsActive(true) }, { threshold: 0.4 })
    if (statsRef.current) obs.observe(statsRef.current)
    return () => obs.disconnect()
  }, [])

  const techs = ['⚛️ React', '🟦 TypeScript', '🟢 Node.js', '🐍 Python', '🎨 Figma', '🚀 Next.js', '💨 Tailwind', '🐳 Docker']

  return (
    <div className={`${isDark ? 'bg-dark-primary text-slate-100' : 'bg-light-primary text-slate-900'}`}>

      {/* ============ HERO ============ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-16">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className={`absolute inset-0 ${isDark
            ? 'bg-gradient-to-br from-dark-primary via-dark-secondary to-dark-primary'
            : 'bg-gradient-to-br from-light-primary via-white to-light-secondary'}`} />
          <div className="absolute inset-0 bg-grid opacity-100" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-teal/5 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-brand-orange/5 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-widest mb-8
            border-brand-orange/30 bg-brand-orange/8 text-brand-orange-lt">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
            {t.hero.badge}
          </div>

          {/* Title */}
          <h1 className="font-display font-extrabold leading-[1.05] tracking-tight mb-6">
            <span className={`block text-xl md:text-2xl font-medium mb-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              {t.hero.greeting}
            </span>
            <span className={`block text-5xl md:text-7xl lg:text-8xl ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {t.hero.name}
            </span>
            <span className="block text-3xl md:text-5xl lg:text-6xl mt-3 text-gradient typing-cursor min-h-[1.2em]">
              {typedText}
            </span>
          </h1>

          {/* Description */}
          <p className={`text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            {t.hero.desc}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm
                bg-brand-orange text-white hover:bg-brand-orange-lt hover:-translate-y-1
                shadow-lg shadow-brand-orange/25 hover:shadow-brand-orange/40 transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0l-7 7m7-7l-7-7" />
              </svg>
              {t.hero.btn_projects}
            </Link>
            <Link
              href="/contact"
              className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm
                border hover:-translate-y-1 transition-all duration-200
                ${isDark
                  ? 'border-slate-700 text-slate-300 hover:border-brand-orange hover:text-brand-orange hover:bg-brand-orange/5'
                  : 'border-slate-300 text-slate-700 hover:border-brand-orange hover:text-brand-orange hover:bg-brand-orange/5'}`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {t.hero.btn_contact}
            </Link>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-20 pt-10 border-t border-slate-800/40">
            <Stat num={25} suffix="+" label={t.hero.stats_labels.projects} active={statsActive} isDark={isDark} />
            <Stat num={3} suffix="+" label={t.hero.stats_labels.exp} active={statsActive} isDark={isDark} />
            <Stat num={15} suffix="+" label={t.hero.stats_labels.clients} active={statsActive} isDark={isDark} />
            <Stat num={100} suffix="%" label={t.hero.stats_labels.satisfaction} active={statsActive} isDark={isDark} />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-xs animate-bounce ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ============ TECH STRIP ============ */}
      <div className={`py-5 overflow-hidden border-y ${isDark ? 'bg-dark-secondary border-slate-800' : 'bg-white border-slate-200'}`}>
        <div className="flex gap-4 animate-marquee w-max">
          {[...techs, ...techs].map((tech, i) => (
            <div key={i} className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium whitespace-nowrap
              ${isDark ? 'bg-dark-card border-slate-700 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-600'}`}>
              {tech}
            </div>
          ))}
        </div>
      </div>

      {/* ============ SERVICES ============ */}
      <section className="section-pad">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-[3px] text-brand-orange mb-3">
              {t.services.label}
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              {t.services.title}{' '}
              <span className="text-gradient">{t.services.title_accent}</span>
            </h2>
            <p className={`mt-4 max-w-lg text-base leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              {t.services.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.services.items.map((item, i) => (
              <div key={i} className={`group relative rounded-2xl p-6 border transition-all duration-300 card-glow
                hover:-translate-y-2 overflow-hidden
                ${isDark
                  ? 'bg-dark-card border-slate-800 hover:border-brand-orange/40'
                  : 'bg-white border-slate-200 hover:border-brand-orange/50 shadow-sm hover:shadow-md'}`}>
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-orange to-brand-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-12 h-12 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-2xl mb-4">
                  {item.icon}
                </div>
                <h3 className="font-display font-bold text-base mb-2">{item.title}</h3>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURED PROJECTS ============ */}
      <section className={`section-pad border-y ${isDark ? 'bg-dark-secondary border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-[3px] text-brand-orange mb-3">Portfolio</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
                {t.projects.label.split(' ')[0]}{' '}
                <span className="text-gradient">{t.projects.label.split(' ').slice(1).join(' ')}</span>
              </h2>
            </div>
            <Link href="/projects" className={`text-sm font-semibold flex items-center gap-1 transition-colors duration-150
              ${isDark ? 'text-slate-400 hover:text-brand-orange' : 'text-slate-500 hover:text-brand-orange'}`}>
              View all →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { emoji: '🛍️', title: 'ShopFlow', desc: 'Full-stack e-commerce with Stripe payments and real-time dashboard.', tags: ['React', 'Node.js', 'MongoDB'], cat: 'fullstack' },
              { emoji: '📊', title: 'DataViz Dashboard', desc: 'Analytics platform with live charts and customisable widgets.', tags: ['Next.js', 'TypeScript', 'Chart.js'], cat: 'frontend' },
              { emoji: '🤖', title: 'AI Assistant', desc: 'GPT-powered chat assistant with streaming and context memory.', tags: ['Python', 'FastAPI', 'OpenAI'], cat: 'ai' },
            ].map((p, i) => (
              <div key={i} className={`group rounded-2xl overflow-hidden border transition-all duration-300 card-glow hover:-translate-y-2
                ${isDark ? 'bg-dark-card border-slate-800 hover:border-brand-orange/40' : 'bg-white border-slate-200 shadow-sm hover:shadow-lg hover:border-brand-orange/30'}`}>
                <div className={`h-36 flex items-center justify-center text-5xl border-b
                  ${isDark ? 'bg-dark-secondary border-slate-800' : 'bg-gradient-to-br from-slate-50 to-slate-100 border-slate-200'}`}>
                  <span className="group-hover:scale-110 transition-transform duration-300 inline-block">{p.emoji}</span>
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {p.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-brand-orange/10 text-brand-orange-lt border border-brand-orange/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-display font-bold text-base mb-1.5">{p.title}</h3>
                  <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{p.desc}</p>
                  <div className={`flex gap-3 mt-4 pt-4 border-t ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                    <a href="#" className={`text-xs font-semibold flex items-center gap-1 transition-colors ${isDark ? 'text-slate-500 hover:text-brand-orange' : 'text-slate-400 hover:text-brand-orange'}`}>
                      ↗ {t.projects.btn_demo}
                    </a>
                    <a href="#" className={`text-xs font-semibold flex items-center gap-1 transition-colors ${isDark ? 'text-slate-500 hover:text-brand-orange' : 'text-slate-400 hover:text-brand-orange'}`}>
                      ⌥ {t.projects.btn_github}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="section-pad">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-[3px] text-brand-orange mb-3">
            {t.contact.label}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-5">
            {t.contact.title} <span className="text-gradient">{t.contact.title_accent}</span>
          </h2>
          <p className={`text-base leading-relaxed mb-8 max-w-md mx-auto ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            {t.contact.desc}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold bg-brand-orange text-white
              hover:bg-brand-orange-lt hover:-translate-y-1 shadow-lg shadow-brand-orange/25 transition-all duration-200"
          >
            {t.hero.btn_contact} →
          </Link>
        </div>
      </section>
    </div>
  )
}
