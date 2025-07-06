import { Search } from 'lucide-react'
import ChatWidget from '../components/ChatWidget'

export default function Home() {
  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <aside className="w-60 bg-white flex flex-col items-start pt-16 px-8 space-y-4">
        <div className="text-2xl font-bold mb-24">BackProp</div>
        <nav className="flex flex-col space-y-4 text-base font-medium">
  <a href="/expertise" className="hover:text-blue-600">Expertise</a>
  <a href="/formation" className="hover:text-blue-600">Formation</a>
  <a href="/conseil" className="hover:text-blue-600">Conseil</a>
  <a href="/developpement" className="hover:text-blue-600">Développement</a>
  <a href="/contact" className="hover:text-blue-600">Contact</a>
  <a href="/team" className="hover:text-blue-600">Team</a>
</nav>
      </aside>

      {/* Main area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-end px-8 py-4">
          <button aria-label="Search" className="text-gray-600 hover:text-gray-800 mr-4">
            <Search size={20} />
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:bg-gray-100">
            Log in
          </button>
        </header>

        {/* Hero prompt */}
        <section className="flex-1 flex items-center justify-center px-8">
          <ChatWidget />
        </section>
      </div>
    </div>
  )
}
