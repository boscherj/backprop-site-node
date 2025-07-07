'use client'
import './globals.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search } from 'lucide-react'
import type { ReactNode } from 'react'

const sections = [
  { label: 'Home', href: '/' },
  { label: 'Expertise', href: '/expertise' },
  { label: 'Conseil', href: '/conseil' },
  { label: 'Développement', href: '/developpement' },
  { label: 'Contact', href: '/contact' },
]

// Sous-menu Formation
const formationSubs = [
  { label: 'Initiation', href: '/formation/initiations' },
  { label: 'Niveau 2', href: '/formation/niveau-2' },
  { label: 'Experts', href: '/formation/experts' },
]

export default function RootLayout({ children }: { children: ReactNode }) {
  const path = usePathname() || '/'
  const mainPaddingTop = path === '/' ? 'pt-44' : 'pt-4'

  return (
    <html lang="fr">
      <body className="flex h-screen bg-white">
        {/* Sidebar */}
        <aside className="w-60 bg-white flex flex-col pt-16 px-8 space-y-4">
          <div className="text-2xl font-bold mb-12">BackProp</div>

          {/* Main sections */}
          {sections.map(s => {
            const active = path === s.href
            return (
              <Link
                key={s.href}
                href={s.href}
                className={
                  `group block py-2 px-3 rounded-lg transition-colors ` +
                  (active
                    ? 'bg-gray-100 font-semibold text-black'
                    : 'text-gray-700 hover:bg-gray-50')
                }
              >
                <span className="flex-1">{s.label}</span>
                {!active && (
                  <span className="opacity-0 group-hover:opacity-100 text-gray-500 ml-2">➔</span>
                )}
              </Link>
            )
          })}

          {/* Formation dropdown */}
          <div className="relative group">
            <Link
              href="/formation"
              className="w-full text-left py-2 px-3 rounded-lg text-gray-700 hover:bg-gray-50 flex items-center justify-between"
            >
              <span>Formation</span>
              <span className="transform transition-transform group-hover:rotate-180">▼</span>
            </Link>
            <div className="absolute left-0 mt-1 w-full bg-white shadow-lg rounded-lg hidden group-hover:block z-10">
              {formationSubs.map(sub => {
                const active = path === sub.href
                return (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    className={
                      `block py-2 px-4 transition-colors ` +
                      (active
                        ? 'bg-gray-100 font-semibold text-black'
                        : 'text-gray-700 hover:bg-gray-50')
                    }
                  >{sub.label}</Link>
                )
              })}
            </div>
          </div>
        </aside>

        {/* Main area */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="flex items-center justify-end px-8 py-4 border-b border-gray-100">
            <button aria-label="Search" className="text-gray-600 hover:text-gray-800 mr-4">
              <Search size={20} />
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:bg-gray-100">
              Log in
            </button>
          </header>

          {/* Page content with dynamic padding */}
          <main className={`flex-1 px-8 ${mainPaddingTop} overflow-auto`}>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
