import { Search } from 'lucide-react'
import ChatWidget from '@/components/ChatWidget'

export default function Home() {
  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <aside className="w-60 bg-white flex flex-col items-start py-8 px-8 space-y-4">
        <div className="text-2xl font-bold mb-6">BackProp</div>
        <nav className="flex flex-col space-y-4 text-base font-medium">
          <a href="/formations" className="hover:text-blue-600">Formations</a>
          <a href="/services"   className="hover:text-blue-600">Services</a>
        </nav>
      </aside>

      {/* Main area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between px-8 py-4">
          <div className="text-xl font-bold">BackProp</div>
          <div className="flex items-center space-x-6">
            <button aria-label="Search" className="text-gray-600 hover:text-gray-800">
              <Search size={20} />
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:bg-gray-100">
              Log in
            </button>
          </div>
        </header>

        {/* Hero prompt */}
        <section className="flex-1 flex items-center justify-center px-8">
          <ChatWidget />
        </section>
      </div>
    </div>
  )
}
