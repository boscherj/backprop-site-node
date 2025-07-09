'use client'
import './globals.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search, ArrowLeft } from 'lucide-react'
import type { ReactNode } from 'react'

// Sections principales (sans Home et sans Contact)
const sections = [
  { label: 'Expertise', href: '/expertise' },
  { label: 'Conseil', href: '/conseil' },
  { label: 'Développement', href: '/developpement' },
]

// Sous-menu Formation
const formationSubs = [
  { label: 'Initiation', href: '/formation/Initiation' },
  { label: 'Niveau 2', href: '/formation/niveau-2' },
  { label: 'Experts', href: '/formation/experts' },
]

// Sous-menu Initiation
const initiationSubs = [
  { label: 'ChatGPT', href: '/formation/Initiation/ChatGPT' },
  { label: 'Copilot', href: '/formation/Initiation/Copilot' },
  { label: 'MidJourney', href: '/formation/Initiation/MidJourney' },
]

export default function RootLayout({ children }: { children: ReactNode }) {
  const path = usePathname() || '/'
  const isHomePage = path === '/'
  const isFormationSubPage = formationSubs.some(sub => path === sub.href)
  const isInitiationSubPage = initiationSubs.some(sub => path === sub.href)
  const mainPaddingTop = isHomePage ? 'pt-44' : 'pt-4'

  return (
    <html lang="fr">
      <body className="flex h-screen bg-white">
        {/* Sidebar */}
        <aside className="w-60 bg-white flex flex-col pt-16 px-8 space-y-4">
          <div className="text-2xl font-bold mb-12">BackProp</div>

          {/* Home link - affiché uniquement si on n'est pas sur la page d'accueil */}
          {!isHomePage && (
            <Link
              href="/"
              className="group flex items-center py-2 px-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors mb-4 border-b border-gray-100 pb-4"
            >
              <ArrowLeft size={16} className="mr-2 text-gray-500" />
              <span>Home</span>
            </Link>
          )}

          {/* Affichage conditionnel des menus principaux */}
          {!isFormationSubPage && !isInitiationSubPage && (
            <>
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
                  className={
                    `w-full text-left py-2 px-3 rounded-lg flex items-center justify-between transition-colors ` +
                    (path.startsWith('/formation')
                      ? 'bg-gray-100 font-semibold text-black'
                      : 'text-gray-700 hover:bg-gray-50')
                  }
                >
                  <span>Formation</span>
                  <span className="transform transition-transform group-hover:rotate-180">▼</span>
                </Link>
                {/* Zone invisible pour maintenir le hover */}
                <div className="absolute left-0 top-full w-full h-2 bg-transparent hidden group-hover:block z-10"></div>
                <div className="absolute left-0 top-full mt-2 w-full bg-white shadow-lg rounded-lg border border-gray-100 hidden group-hover:block z-20 py-1">
                  {formationSubs.map(sub => {
                    const active = path === sub.href
                    return (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className={
                          `block py-3 px-4 transition-colors text-sm ` +
                          (active
                            ? 'bg-gray-100 font-semibold text-black'
                            : 'text-gray-700 hover:bg-gray-50')
                        }
                      >{sub.label}</Link>
                    )
                  })}
                </div>
              </div>

              {/* Contact menu - placé après Formation */}
              <Link
                href="/contact"
                className={
                  `group block py-2 px-3 rounded-lg transition-colors ` +
                  (path === '/contact'
                    ? 'bg-gray-100 font-semibold text-black'
                    : 'text-gray-700 hover:bg-gray-50')
                }
              >
                <span className="flex-1">Contact</span>
                {path !== '/contact' && (
                  <span className="opacity-0 group-hover:opacity-100 text-gray-500 ml-2">➔</span>
                )}
              </Link>
            </>
          )}

          {/* Si on est dans un sous-menu de Formation, afficher un lien vers Formation */}
          {isFormationSubPage && !isInitiationSubPage && (
            <Link
              href="/formation"
              className="group flex items-center py-2 px-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft size={16} className="mr-2 text-gray-500" />
              <span>Formation</span>
            </Link>
          )}

          {/* Si on est dans un sous-menu d'Initiation, afficher les liens de navigation */}
          {isInitiationSubPage && (
            <>
              <Link
                href="/formation"
                className="group flex items-center py-2 px-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors mb-2"
              >
                <ArrowLeft size={16} className="mr-2 text-gray-500" />
                <span>Formation</span>
              </Link>
              <Link
                href="/formation/Initiation"
                className="group flex items-center py-2 px-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors mb-4 border-b border-gray-100 pb-4"
              >
                <ArrowLeft size={16} className="mr-2 text-gray-500" />
                <span>Initiation</span>
              </Link>
              
              {/* Sous-menus Initiation */}
              {initiationSubs.map(sub => {
                const active = path === sub.href
                return (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    className={
                      `block py-2 px-3 rounded-lg transition-colors ` +
                      (active
                        ? 'bg-gray-100 font-semibold text-black'
                        : 'text-gray-700 hover:bg-gray-50')
                    }
                  >
                    {sub.label}
                  </Link>
                )
              })}
            </>
          )}
        </aside>

        {/* Main area */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="flex items-center justify-end px-8 py-4 border-b border-gray-100">
            <button aria-label="Search" className="text-gray-600 hover:text-gray-800 mr-4">
              <Search size={20} />
            </button>
            <Link 
              href="/contact"
              className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:bg-gray-100 transition-colors"
            >
              Contact
            </Link>
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