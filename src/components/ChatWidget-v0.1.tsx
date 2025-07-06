'use client'
import { useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ChatWidget() {
  const [query, setQuery] = useState('')
  const suggestions = [
    'Search with ChatGPT',
    'Talk with ChatGPT',
    'Research',
    'Sora',
    'More'
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return
    console.log('Query:', query)
    // TODO: appeler votre API chat ici
  }

  return (
    <div className="w-full max-w-3xl flex flex-col items-center">
      {/* Titre */}
      <h2 className="text-3xl font-bold mb-6">What can I help with?</h2>

      {/* Formulaire avec textarea */}
      <form onSubmit={handleSubmit} className="w-full">
        <div className="relative">
          <textarea
            rows={3}
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="India stock market today"
            className={
              `w-full bg-white border border-gray-300 rounded-full py-4 px-6 pr-16 text-lg ` +
              `resize-none focus:outline-none`
            }
          />
          <button
            type="submit"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-100 rounded-full p-2 hover:bg-gray-200 focus:outline-none"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </form>

      {/* Suggestions */}
      <div className="flex flex-wrap justify-center gap-2 mt-6">
        {suggestions.map(label => (
          <button
            key={label}
            className="bg-gray-100 rounded-full py-2 px-4 text-sm hover:bg-gray-200 transition"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}
