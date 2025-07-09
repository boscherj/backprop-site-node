'use client'

export default function ChatGPTPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6 space-y-12">
      <h1 className="text-4xl font-ralewaylight text-center">
        Formation ChatGPT - Initiation
      </h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Maîtrisez les grands modèles de langage
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Initiez-vous à la puissance des grands modèles de langage : conception de prompts, 
            bonnes pratiques de formulation, premiers cas d'usage pour la rédaction, 
            la synthèse et l'exploration d'informations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Au programme
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-3">Conception de prompts</h3>
              <p className="text-gray-700">
                Apprenez à formuler des demandes claires et efficaces pour obtenir les meilleurs résultats.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-3">Bonnes pratiques</h3>
              <p className="text-gray-700">
                Découvrez les techniques avancées et les pièges à éviter.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-3">Cas d'usage concrets</h3>
              <p className="text-gray-700">
                Explorez des exemples pratiques pour la rédaction et la synthèse.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-3">Exploration d'informations</h3>
              <p className="text-gray-700">
                Utilisez ChatGPT pour analyser et extraire des insights de vos données.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}