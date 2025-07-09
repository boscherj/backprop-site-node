'use client'

export default function CoPilotPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6 space-y-12">
      <h1 className="text-4xl font-ralewaylight text-center">
        Formation Copilot - Initiation
      </h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Accélérez votre développement avec l'IA
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Découvrez comment l'assistant de code intelligent peut accélérer votre développement : 
            autocomplétion contextuelle, génération d'extraits de code, refactoring assisté 
            et intégration dans vos IDE.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Au programme
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-3">Autocomplétion contextuelle</h3>
              <p className="text-gray-700">
                Maîtrisez l'autocomplétion intelligente qui comprend votre contexte de développement.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-3">Génération d'extraits de code</h3>
              <p className="text-gray-700">
                Apprenez à générer rapidement des fonctions, classes et modules complets.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-3">Refactoring assisté</h3>
              <p className="text-gray-700">
                Optimisez et restructurez votre code avec l'aide de l'intelligence artificielle.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-3">Intégration IDE</h3>
              <p className="text-gray-700">
                Configurez et utilisez CoPilot dans vos environnements de développement favoris.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Langages et technologies couvertes
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="bg-blue-100 p-3 rounded-full w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                  <span className="text-blue-600 font-bold">JS</span>
                </div>
                <p className="text-sm font-medium">JavaScript</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 p-3 rounded-full w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                  <span className="text-green-600 font-bold">PY</span>
                </div>
                <p className="text-sm font-medium">Python</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 p-3 rounded-full w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                  <span className="text-purple-600 font-bold">TS</span>
                </div>
                <p className="text-sm font-medium">TypeScript</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 p-3 rounded-full w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                  <span className="text-orange-600 font-bold">+</span>
                </div>
                <p className="text-sm font-medium">Et plus...</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Cas d'usage pratiques
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-900">Développement web</h3>
              <p className="text-gray-700">Création rapide de composants React, API REST, et interfaces utilisateur.</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-gray-900">Scripts d'automatisation</h3>
              <p className="text-gray-700">Génération de scripts Python pour le traitement de données et l'automatisation.</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-gray-900">Tests unitaires</h3>
              <p className="text-gray-700">Création automatique de tests complets pour vos fonctions et modules.</p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-semibold text-gray-900">Documentation</h3>
              <p className="text-gray-700">Génération de commentaires et documentation technique automatique.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}