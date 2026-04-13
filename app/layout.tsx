import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { LanguageProvider } from '@/lib/LanguageContext'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Portfolio — Full Stack Developer',
  description: 'Personal portfolio of a Full Stack Developer specialising in React, Node.js, Python, and modern web technologies.',
  keywords: ['portfolio', 'developer', 'react', 'nodejs', 'python', 'fullstack'],
  openGraph: {
    title: 'Portfolio — Full Stack Developer',
    description: 'Personal portfolio showcasing projects and skills.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LanguageProvider>
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
