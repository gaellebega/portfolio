'use client'
import { useState, useEffect, FormEvent } from 'react'
import { useTheme } from 'next-themes'
import { useLanguage } from '@/lib/LanguageContext'

export default function ContactPage() {
  const { t } = useLanguage()
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => { setMounted(true); setTimeout(() => setVisible(true), 50) }, [])
  const isDark = !mounted || theme === 'dark'

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    await new Promise(r => setTimeout(r, 1200))
    setSubmitting(false)
    setSuccess(true)
    ;(e.target as HTMLFormElement).reset()
    setTimeout(() => setSuccess(false), 5000)
  }

  const inputCls = `w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 font-sans
    ${isDark
      ? 'bg-dark-secondary border-slate-700 text-slate-100 placeholder-slate-600 focus:border-brand-orange focus:shadow-[0_0_0_3px_rgba(217,119,66,0.12)] focus:bg-dark-primary'
      : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-brand-orange focus:shadow-[0_0_0_3px_rgba(217,119,66,0.1)] focus:bg-white'}`

  const selectCls = inputCls + ' cursor-pointer appearance-none'

  const labelCls = `block text-xs font-bold uppercase tracking-widest mb-1.5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`

  return (
    <div className={`${isDark ? 'bg-dark-primary text-slate-100' : 'bg-light-primary text-slate-900'} pt-16`}>

      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden section-pad !pb-10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-teal/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-brand-orange/4 blur-3xl" />
        </div>
        <div className={`max-w-xl mx-auto text-center relative z-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="inline-block text-xs font-bold uppercase tracking-[3px] text-brand-orange mb-3">
            {t.contact.label}
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-extrabold tracking-tight mb-5">
            {t.contact.title} <span className="text-gradient">{t.contact.title_accent}</span>
          </h1>
          <p className={`text-base leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            {t.contact.desc}
          </p>
        </div>
      </section>

      {/* ============ CONTENT ============ */}
      <section className="section-pad !pt-0">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.6fr] gap-8 items-start">

          {/* LEFT — Info */}
          <div className="space-y-4">
            {/* Info card */}
            <div className={`rounded-2xl border p-6 ${isDark ? 'bg-dark-card border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
              <h2 className="font-display font-bold text-lg mb-1">{t.contact.info_title}</h2>
              <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{t.contact.info_desc}</p>

              {[
                { icon: '📧', label: t.contact.email_label, val: t.contact.email_val },
                { icon: '📍', label: t.contact.location_label, val: t.contact.location_val },
                { icon: '⏰', label: t.contact.response_label, val: t.contact.response_val },
                { icon: '💼', label: t.contact.avail_label, val: t.contact.avail_val, highlight: true },
              ].map((item, i) => (
                <div key={i} className={`flex items-center gap-3 py-3 border-b last:border-b-0 ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                  <div className="w-9 h-9 rounded-lg bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-base flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className={`text-[10px] uppercase tracking-widest font-bold mb-0.5 ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
                      {item.label}
                    </div>
                    <div className={`text-sm font-medium ${item.highlight ? 'text-brand-teal-lt' : ''}`}>
                      {item.val}
                    </div>
                  </div>
                </div>
              ))}

              {/* Social */}
              <div className="mt-5">
                <div className={`text-[10px] uppercase tracking-widest font-bold mb-3 ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
                  {t.contact.social_label}
                </div>
                <div className="flex gap-2">
                  {[
                    { label: 'GitHub', icon: <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /> },
                    { label: 'LinkedIn', icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /> },
                    { label: 'Twitter', icon: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /> },
                    { label: 'Dribbble', icon: <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.017-8.04 6.404 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.073c.232-.396 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.176zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.477 0-.945.04-1.4.106zm8.339 1.629c-.203.285-1.917 2.498-5.704 4.038.24.49.47.985.68 1.486.08.18.15.36.22.53 3.397-.43 6.77.258 7.1.332-.1-2.304-.89-4.425-2.295-6.386z" /> },
                  ].map(s => (
                    <a key={s.label} href="#" aria-label={s.label}
                      className={`w-9 h-9 rounded-lg border flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5
                        ${isDark
                          ? 'border-slate-700 text-slate-500 hover:border-brand-orange hover:text-brand-orange hover:bg-brand-orange/8'
                          : 'border-slate-200 text-slate-400 hover:border-brand-orange hover:text-brand-orange hover:bg-brand-orange/5'}`}>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">{s.icon}</svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Availability card */}
            <div className="rounded-2xl border border-brand-orange/30 bg-brand-orange/5 p-5 flex items-center gap-4">
              <div className="text-3xl">☕</div>
              <div>
                <div className="font-display font-bold text-sm mb-0.5">Buy me a coffee?</div>
                <div className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>If you like my work, support is always appreciated!</div>
              </div>
            </div>
          </div>

          {/* RIGHT — Form */}
          <div className={`rounded-2xl border p-8 ${isDark ? 'bg-dark-card border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
            <div className="mb-6">
              <div className="text-xs font-bold uppercase tracking-[3px] text-brand-orange mb-1">{t.contact.form_label}</div>
              <div className="font-display font-bold text-xl">{t.contact.form_title}</div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>{t.contact.fname}</label>
                  <input type="text" placeholder={t.contact.fname_ph} required className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>{t.contact.lname}</label>
                  <input type="text" placeholder={t.contact.lname_ph} required className={inputCls} />
                </div>
              </div>

              <div>
                <label className={labelCls}>{t.contact.email}</label>
                <input type="email" placeholder={t.contact.email_ph} required className={inputCls} />
              </div>

              <div>
                <label className={labelCls}>{t.contact.subject}</label>
                <select className={selectCls}>
                  <option value="">{t.contact.subject_ph}</option>
                  {t.contact.subject_opts.map(o => <option key={o}>{o}</option>)}
                </select>
              </div>

              <div>
                <label className={labelCls}>{t.contact.budget}</label>
                <select className={selectCls}>
                  <option value="">{t.contact.budget_ph}</option>
                  {t.contact.budget_opts.map(o => <option key={o}>{o}</option>)}
                </select>
              </div>

              <div>
                <label className={labelCls}>{t.contact.message}</label>
                <textarea rows={5} placeholder={t.contact.message_ph} required
                  className={inputCls + ' resize-y min-h-[120px]'} />
              </div>

              <div className="flex items-center justify-between flex-wrap gap-3 pt-1">
                <p className={`text-xs ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>{t.contact.form_note}</p>
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold
                    bg-brand-orange text-white hover:bg-brand-orange-lt hover:-translate-y-0.5
                    shadow-lg shadow-brand-orange/20 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
                >
                  {submitting ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      {t.contact.btn_sending}
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      {t.contact.btn_send}
                    </>
                  )}
                </button>
              </div>

              {success && (
                <div className="rounded-xl p-4 bg-brand-teal/10 border border-brand-teal/30 text-sm font-medium text-brand-teal-lt">
                  {t.contact.success}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className={`section-pad border-t ${isDark ? 'bg-dark-secondary border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-bold uppercase tracking-[3px] text-brand-orange mb-3">{t.contact.faq_label}</span>
            <h2 className="font-display text-4xl font-bold tracking-tight">
              {t.contact.faq_title} <span className="text-gradient">{t.contact.faq_accent}</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {t.contact.faqs.map((faq, i) => (
              <div key={i} className={`rounded-2xl p-5 border transition-all duration-200 hover:-translate-y-1 card-glow
                ${isDark ? 'bg-dark-card border-slate-800 hover:border-brand-orange/30' : 'bg-white border-slate-200 hover:border-brand-orange/30 shadow-sm'}`}>
                <div className="font-semibold text-sm text-brand-orange mb-2">{faq.q}</div>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
