'use client'
import { useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ChatWidget() {
  const [query, setQuery] = useState('')
  const suggestions = [
    'Formations ChatGPT',
    'MidJourney',
    'Agents IA',
    'Outils IA',
    'Conseil IA'
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
      <h2 className="text-3xl font-semibold mb-6">Comment pouvons-nous vous aider ?</h2>

      {/* Formulaire avec textarea */}
      <form onSubmit={handleSubmit} className="w-full">
        <div className="relative">
          <textarea
            rows={3}
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Quelles sont les formations IA proposées par BackProp ?"
            className="w-full resize-none rounded-full border border-gray-300 bg-white py-4 px-6 pr-16 text-lg placeholder:text-gray-500 focus:outline-none"
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
