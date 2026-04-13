'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { useLanguage } from '@/lib/LanguageContext'
import Link from 'next/link'

type Cat = 'all' | 'fullstack' | 'frontend' | 'backend' | 'ai' | 'design'

const PROJECTS = [
  { emoji: '🛍️', title: 'ShopFlow E-Commerce', desc: 'A production-ready e-commerce platform with cart management, Stripe payments, and a real-time order dashboard.', tags: ['React', 'Node.js', 'MongoDB', 'Stripe'], cat: 'fullstack' as Cat },
  { emoji: '📊', title: 'DataViz Dashboard', desc: 'An analytics dashboard featuring real-time charts, customisable widgets, and full responsiveness.', tags: ['Next.js', 'TypeScript', 'Chart.js'], cat: 'frontend' as Cat },
  { emoji: '🤖', title: 'AI Chat Assistant', desc: 'A GPT-powered conversational assistant with streaming responses and context memory.', tags: ['Python', 'FastAPI', 'OpenAI'], cat: 'ai' as Cat },
  { emoji: '🔐', title: 'Auth Microservice', desc: 'Production-grade authentication with OAuth2, JWT refresh tokens, rate limiting, and RBAC.', tags: ['Node.js', 'PostgreSQL', 'JWT'], cat: 'backend' as Cat },
  { emoji: '🎨', title: 'Pulse Design System', desc: 'A comprehensive design system with 200+ components and guidelines built in Figma and exported to React.', tags: ['Figma', 'React', 'TailwindCSS'], cat: 'design' as Cat },
  { emoji: '📝', title: 'Notion-like Editor', desc: 'Collaborative rich-text editor with real-time syncing, slash commands, and nested pages.', tags: ['React', 'Supabase', 'TipTap'], cat: 'fullstack' as Cat },
  { emoji: '🖼️', title: 'AI Image Generator', desc: 'A web app wrapping Stable Diffusion with a clean prompt builder and gallery management.', tags: ['Python', 'Stable Diffusion', 'Flask'], cat: 'ai' as Cat },
  { emoji: '🎵', title: 'Spotify Clone', desc: 'Full Spotify Web Player clone with Vue 3 and the official Spotify Web API.', tags: ['Vue 3', 'Pinia', 'Spotify API'], cat: 'frontend' as Cat },
  { emoji: '🌐', title: 'Real-time Chat API', desc: 'High-performance WebSocket chat server in Go supporting 10k+ concurrent connections.', tags: ['Go', 'Redis', 'WebSockets'], cat: 'backend' as Cat },
]

export default function ProjectsPage() {
  const { t } = useLanguage()
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [active, setActive] = useState<Cat>('all')
  const [visible, setVisible] = useState(false)

  useEffect(() => { setMounted(true); setTimeout(() => setVisible(true), 50) }, [])
  const isDark = !mounted || theme === 'dark'

  const filters: { key: Cat; label: string }[] = [
    { key: 'all', label: t.projects.filter_all },
    { key: 'fullstack', label: t.projects.filter_fullstack },
    { key: 'frontend', label: t.projects.filter_frontend },
    { key: 'backend', label: t.projects.filter_backend },
    { key: 'ai', label: t.projects.filter_ai },
    { key: 'design', label: t.projects.filter_design },
  ]

  const shown = PROJECTS.filter(p => active === 'all' || p.cat === active)

  return (
    <div className={`${isDark ? 'bg-dark-primary text-slate-100' : 'bg-light-primary text-slate-900'} pt-16`}>

      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden section-pad !pb-8">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-orange/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-brand-teal/5 blur-3xl" />
        </div>
        <div className={`max-w-3xl mx-auto text-center relative z-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="inline-block text-xs font-bold uppercase tracking-[3px] text-brand-orange mb-3">
            {t.projects.label}
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-extrabold tracking-tight mb-5">
            {t.projects.title}{' '}
            <span className="text-gradient">{t.projects.title_accent}</span>
          </h1>
          <p className={`text-base leading-relaxed max-w-lg mx-auto mb-8 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            {t.projects.desc}
          </p>

          {/* Filter bar */}
          <div className="flex flex-wrap gap-2 justify-center">
            {filters.map(f => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200
                  ${active === f.key
                    ? 'bg-brand-orange border-brand-orange text-white shadow-lg shadow-brand-orange/25'
                    : isDark
                      ? 'border-slate-700 text-slate-400 hover:border-brand-orange hover:text-brand-orange bg-dark-card'
                      : 'border-slate-300 text-slate-600 hover:border-brand-orange hover:text-brand-orange bg-white'}`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ============ GRID ============ */}
      <section className="section-pad !pt-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {shown.map((p, i) => (
              <div
                key={p.title}
                className={`group rounded-2xl overflow-hidden border transition-all duration-300 card-glow hover:-translate-y-2
                  ${isDark ? 'bg-dark-card border-slate-800 hover:border-brand-orange/40' : 'bg-white border-slate-200 hover:border-brand-orange/30 shadow-sm hover:shadow-xl'}`}
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {/* Thumb */}
                <div className={`h-36 flex items-center justify-center text-5xl border-b relative overflow-hidden
                  ${isDark ? 'bg-dark-secondary border-slate-800' : 'bg-gradient-to-br from-slate-50 to-slate-100 border-slate-200'}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/3 to-brand-teal/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-orange to-brand-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="group-hover:scale-110 transition-transform duration-300 inline-block relative z-10">{p.emoji}</span>
                </div>

                <div className="p-5">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {p.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-brand-orange/10 text-brand-orange-lt border border-brand-orange/20">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-display font-bold text-base mb-2">{p.title}</h3>
                  <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{p.desc}</p>

                  <div className={`flex gap-4 mt-4 pt-4 border-t ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                    <a href="#" className={`flex items-center gap-1.5 text-xs font-semibold transition-colors duration-150
                      ${isDark ? 'text-slate-500 hover:text-brand-orange' : 'text-slate-400 hover:text-brand-orange'}`}>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      {t.projects.btn_demo}
                    </a>
                    <a href="#" className={`flex items-center gap-1.5 text-xs font-semibold transition-colors duration-150
                      ${isDark ? 'text-slate-500 hover:text-brand-orange' : 'text-slate-400 hover:text-brand-orange'}`}>
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      {t.projects.btn_github}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className={`section-pad border-t ${isDark ? 'bg-dark-secondary border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
        <div className="max-w-lg mx-auto text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-[3px] text-brand-orange mb-3">
            {t.projects.cta_label}
          </span>
          <h2 className="font-display text-4xl font-bold tracking-tight mb-4">
            {t.projects.cta_title} <span className="text-gradient">{t.projects.cta_accent}</span>
          </h2>
          <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            {t.projects.cta_desc}
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm
            bg-brand-orange text-white hover:bg-brand-orange-lt hover:-translate-y-0.5 shadow-lg shadow-brand-orange/20 transition-all duration-200">
            {t.projects.cta_btn}
          </Link>
        </div>
      </section>
    </div>
  )
}
