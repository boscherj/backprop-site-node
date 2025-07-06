// src/app/page.tsx

import ChatWidget from '../components/ChatWidget'

export default function HomePage() {
  return (
    <>
      {/* On peut garder le titre dans le composant, ou le redéfinir ici */}
      <div className="max-w-4xl mx-auto">
        <ChatWidget />
      </div>
    </>
  )
}
