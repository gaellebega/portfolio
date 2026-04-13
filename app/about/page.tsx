'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useLanguage } from '@/lib/LanguageContext'

/* ---- SVG Ring Progress Card ---- */
interface Skill {
  name: string; pct: number; level: string
  color: string; glow: string
  Logo: () => JSX.Element
}

function SkillRingCard({ skill, visible, delay, isDark }: {
  skill: Skill; visible: boolean; delay: number; isDark: boolean
}) {
  const SIZE = 120
  const STROKE = 7
  const r = (SIZE - STROKE * 2) / 2
  const circ = 2 * Math.PI * r
  const offset = visible ? circ - (skill.pct / 100) * circ : circ

  return (
    <div
      className={`group flex flex-col items-center gap-3 p-5 rounded-2xl border
        transition-all duration-300 hover:-translate-y-2 cursor-default relative overflow-hidden
        ${isDark
          ? 'bg-dark-card border-slate-800 hover:border-opacity-60'
          : 'bg-white border-slate-200 shadow-sm hover:shadow-xl'}`}
      style={{
        '--glow': skill.glow,
        borderColor: visible ? undefined : undefined,
      } as React.CSSProperties}
      onMouseEnter={e => (e.currentTarget.style.borderColor = skill.color + '60')}
      onMouseLeave={e => (e.currentTarget.style.borderColor = '')}
    >
      {/* Soft background glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at 50% 50%, ${skill.glow}, transparent 70%)` }}
      />

      {/* Ring + Logo */}
      <div className="relative" style={{ width: SIZE, height: SIZE }}>
        <svg
          width={SIZE} height={SIZE}
          className="absolute inset-0"
          style={{ transform: 'rotate(-90deg)' }}
        >
          <defs>
            <linearGradient id={`ring-${skill.name}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={skill.color} stopOpacity="0.6"/>
              <stop offset="100%" stopColor={skill.color}/>
            </linearGradient>
          </defs>
          {/* Track */}
          <circle
            cx={SIZE / 2} cy={SIZE / 2} r={r}
            fill="none"
            stroke={isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.07)'}
            strokeWidth={STROKE}
          />
          {/* Progress arc */}
          <circle
            cx={SIZE / 2} cy={SIZE / 2} r={r}
            fill="none"
            stroke={`url(#ring-${skill.name})`}
            strokeWidth={STROKE}
            strokeLinecap="round"
            strokeDasharray={circ}
            strokeDashoffset={offset}
            style={{ transition: `stroke-dashoffset 1.3s cubic-bezier(0.4,0,0.2,1) ${delay}ms` }}
          />
        </svg>

        {/* Center: logo + percentage */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
          <div className="w-9 h-9 flex items-center justify-center
            group-hover:scale-110 transition-transform duration-300">
            <skill.Logo />
          </div>
          <span className="text-xs font-bold tabular-nums" style={{ color: skill.color }}>
            {skill.pct}%
          </span>
        </div>
      </div>

      {/* Name */}
      <div className="font-display font-bold text-sm text-center leading-tight">
        {skill.name}
      </div>

      {/* Level badge */}
      <div
        className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full"
        style={{ background: skill.glow, color: skill.color }}
      >
        {skill.level}
      </div>
    </div>
  )
}

/* ---- Fade-in wrapper ---- */
function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
    >
      {children}
    </div>
  )
}

const SKILLS: Skill[] = [
  {
    name: 'HTML', pct: 97, level: 'Expert',
    color: '#E34F26', glow: 'rgba(227,79,38,0.14)',
    Logo: () => (
      <svg viewBox="0 0 24 24" fill="#E34F26" className="w-8 h-8">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
      </svg>
    ),
  },
  {
    name: 'CSS', pct: 95, level: 'Expert',
    color: '#1572B6', glow: 'rgba(21,114,182,0.14)',
    Logo: () => (
      <svg viewBox="0 0 24 24" fill="#1572B6" className="w-8 h-8">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.413z"/>
      </svg>
    ),
  },
  {
    name: 'TailwindCSS', pct: 93, level: 'Expert',
    color: '#06B6D4', glow: 'rgba(6,182,212,0.14)',
    Logo: () => (
      <svg viewBox="0 0 24 24" fill="#06B6D4" className="w-8 h-8">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
      </svg>
    ),
  },
  {
    name: 'ReactJS', pct: 92, level: 'Expert',
    color: '#61DAFB', glow: 'rgba(97,218,251,0.14)',
    Logo: () => (
      <svg viewBox="-11.5 -10.23174 23 20.46348" fill="none" stroke="#61DAFB" className="w-8 h-8">
        <circle r="2.05" fill="#61DAFB" stroke="none"/>
        <ellipse rx="11" ry="4.2" strokeWidth="1"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)" strokeWidth="1"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)" strokeWidth="1"/>
      </svg>
    ),
  },
  {
    name: 'Node.js', pct: 85, level: 'Advanced',
    color: '#339933', glow: 'rgba(51,153,51,0.14)',
    Logo: () => (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#339933" d="M11.998.251a1.014 1.014 0 00-.504.136L1.316 5.898a1.012 1.012 0 00-.505.877v11.441a1.012 1.012 0 00.505.877l10.178 5.764a1.009 1.009 0 001.01 0l10.178-5.764a1.012 1.012 0 00.504-.877V6.775a1.012 1.012 0 00-.504-.877L12.503.387a1.014 1.014 0 00-.505-.136z"/>
        <path fill="#fff" d="M12 6.5c-3.033 0-4.5 1.4-4.5 3.1 0 2.1 1.6 2.65 4.2 2.9 3.1.3 3.3.75 3.3 1.35 0 1.05-1.05 1.45-2.8 1.45-2.5 0-3.05-.6-3.25-1.8-.05-.2-.2-.35-.4-.35H7.1c-.25 0-.45.2-.45.45 0 2.65 1.45 3.9 5.35 3.9 3.2 0 5.05-1.25 5.05-3.45 0-2.15-1.45-2.7-4.5-3.1-3.1-.4-3-.6-3-1.3 0-.6.45-1.35 2.45-1.35 1.75 0 2.55.5 2.85 1.65.05.2.25.35.45.35h1.45c.15 0 .3-.05.4-.15.1-.15.15-.3.1-.45-.45-2.55-2.1-3.7-5.25-3.7z"/>
      </svg>
    ),
  },
  {
    name: 'Python', pct: 80, level: 'Advanced',
    color: '#3776AB', glow: 'rgba(55,118,171,0.14)',
    Logo: () => (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#3776AB" d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.9S0 5.789 0 11.969c0 6.18 3.403 5.963 3.403 5.963h2.031v-2.867s-.11-3.403 3.347-3.403h5.765s3.24.052 3.24-3.131V3.26S18.28 0 11.914 0zM8.708 1.882a1.045 1.045 0 11.001 2.09 1.045 1.045 0 01-.001-2.09z"/>
        <path fill="#FFD43B" d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.007-2.752h-5.814v-.826h8.121S24 18.211 24 12.031c0-6.18-3.403-5.963-3.403-5.963h-2.031v2.867s.11 3.403-3.347 3.403H9.454s-3.24-.052-3.24 3.131V20.74S5.72 24 12.086 24zm3.206-1.882a1.045 1.045 0 11-.001-2.09 1.045 1.045 0 01.001 2.09z"/>
      </svg>
    ),
  },
  {
    name: 'Figma', pct: 84, level: 'Advanced',
    color: '#A259FF', glow: 'rgba(162,89,255,0.14)',
    Logo: () => (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#F24E1E" d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z"/>
        <path fill="#FF7262" d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z"/>
        <path fill="#A259FF" d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z"/>
        <path fill="#1ABCFE" d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z"/>
        <path fill="#0ACF83" d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z"/>
      </svg>
    ),
  },
]

/* ---- Grid wrapper with scroll-triggered ring animation ---- */
function SkillsGrid({ isDark }: { isDark: boolean }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4"
    >
      {SKILLS.map((sk, i) => (
        <SkillRingCard
          key={sk.name}
          skill={sk}
          visible={visible}
          delay={i * 120}
          isDark={isDark}
        />
      ))}
    </div>
  )
}

export default function AboutPage() {
  const { t } = useLanguage()
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const isDark = !mounted || theme === 'dark'

  return (
    <div className={`${isDark ? 'bg-dark-primary text-slate-100' : 'bg-light-primary text-slate-900'} pt-16`}>

      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden section-pad">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-brand-teal/5 blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-brand-orange/5 blur-3xl translate-x-1/4" />
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <FadeIn>
            <span className="inline-block text-xs font-bold uppercase tracking-[3px] text-brand-orange mb-3">
              {t.about.label}
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6">
              {t.about.title}<br />
              <span className="text-gradient">{t.about.title_accent}</span>
            </h1>
            <p className={`text-base leading-relaxed mb-8 max-w-md ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              {t.about.desc}
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm
                bg-brand-orange text-white hover:bg-brand-orange-lt hover:-translate-y-0.5 shadow-lg shadow-brand-orange/20 transition-all duration-200">
                {t.about.btn_hire}
              </Link>
              <a href="#" className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm border transition-all duration-200 hover:-translate-y-0.5
                ${isDark ? 'border-slate-700 text-slate-300 hover:border-brand-orange hover:text-brand-orange' : 'border-slate-300 text-slate-700 hover:border-brand-orange hover:text-brand-orange'}`}>
                ↓ {t.about.btn_cv}
              </a>
            </div>
          </FadeIn>

          {/* Avatar */}
          <FadeIn delay={150}>
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-brand-orange via-brand-teal to-brand-orange-lt opacity-60 blur-sm" />
              <div className={`relative rounded-2xl aspect-square flex items-center justify-center text-8xl
                ${isDark ? 'bg-dark-card' : 'bg-white'} shadow-2xl`}>
                🧑‍💻
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-brand-orange text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                3+ yrs
              </div>
              <div className={`absolute -bottom-4 -left-4 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border
                ${isDark ? 'bg-dark-card border-slate-700 text-brand-teal-lt' : 'bg-white border-slate-200 text-brand-teal'}`}>
                25+ projects
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============ VALUES ============ */}
      <section className={`section-pad border-y ${isDark ? 'bg-dark-secondary border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <span className="inline-block text-xs font-bold uppercase tracking-[3px] text-brand-orange mb-3">
              {t.about.values_label}
            </span>
            <h2 className="font-display text-4xl font-bold tracking-tight mb-12">
              {t.about.values_title} <span className="text-gradient">{t.about.values_accent}</span>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {t.about.values.map((v, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className={`rounded-2xl p-5 border transition-all duration-300 hover:-translate-y-1.5 card-glow
                  ${isDark ? 'bg-dark-card border-slate-800 hover:border-brand-orange/30' : 'bg-white border-slate-200 hover:border-brand-orange/30 shadow-sm'}`}>
                  <div className="text-2xl mb-3">{v.icon}</div>
                  <div className="font-display font-bold text-sm mb-1.5">{v.title}</div>
                  <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SKILLS ============ */}
      <section className="section-pad">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <span className="inline-block text-xs font-bold uppercase tracking-[3px] text-brand-orange mb-3">
              {t.about.skills_label}
            </span>
            <h2 className="font-display text-4xl font-bold tracking-tight mb-3">
              {t.about.skills_title} <span className="text-gradient">{t.about.skills_accent}</span>
            </h2>
            <p className={`text-sm mb-12 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{t.about.skills_desc}</p>
          </FadeIn>

          {/* Ring cards grid */}
          <SkillsGrid isDark={isDark} />
        </div>
      </section>

      {/* ============ EXPERIENCE + EDUCATION ============ */}
      <section className={`section-pad border-t ${isDark ? 'bg-dark-secondary border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          {/* Experience */}
          <div>
            <FadeIn>
              <span className="inline-block text-xs font-bold uppercase tracking-[3px] text-brand-orange mb-3">
                {t.about.exp_label}
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight mb-8">
                {t.about.exp_title} <span className="text-gradient">{t.about.exp_accent}</span>
              </h2>
            </FadeIn>
            <div className="relative pl-5">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-orange via-brand-teal to-transparent" />
              {t.about.experience.map((exp, i) => (
                <FadeIn key={i} delay={i * 100}>
                  <div className="relative mb-8 last:mb-0">
                    <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-brand-orange border-2 border-dark-primary shadow-[0_0_0_4px_rgba(217,119,66,0.15)]" />
                    <div className="text-xs font-bold text-brand-orange uppercase tracking-wider mb-1">{exp.date}</div>
                    <div className="font-display font-bold text-base">{exp.role}</div>
                    <div className="text-sm text-brand-teal-lt mb-1.5">{exp.company}</div>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{exp.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <FadeIn>
              <span className="inline-block text-xs font-bold uppercase tracking-[3px] text-brand-orange mb-3">
                {t.about.edu_label}
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight mb-8">
                {t.about.edu_title} <span className="text-gradient">{t.about.edu_accent}</span>
              </h2>
            </FadeIn>
            <div className="relative pl-5">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-teal via-brand-orange to-transparent" />
              {t.about.education.map((edu, i) => (
                <FadeIn key={i} delay={i * 100}>
                  <div className="relative mb-8 last:mb-0">
                    <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-brand-teal border-2 border-dark-primary shadow-[0_0_0_4px_rgba(26,143,160,0.15)]" />
                    <div className="text-xs font-bold text-brand-orange uppercase tracking-wider mb-1">{edu.date}</div>
                    <div className="font-display font-bold text-base">{edu.role}</div>
                    <div className="text-sm text-brand-teal-lt mb-1.5">{edu.company}</div>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{edu.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
