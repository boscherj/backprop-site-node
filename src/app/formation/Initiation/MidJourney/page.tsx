'use client'

export default function MidJourneyPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6 space-y-12">
      <h1 className="text-4xl font-ralewaylight text-center">
        Formation MidJourney - Initiation
      </h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Créez des images époustouflantes avec l'IA
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Plongez dans la création d'images par IA : de la génération d'illustrations inspirantes 
            à l'affinage de prompts visuels, en passant par l'optimisation de styles et de compositions 
            pour vos supports de communication.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Au programme
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-3">Prompts visuels</h3>
              <p className="text-gray-700">
                Maîtrisez l'art de décrire vos visions pour obtenir des résultats précis et créatifs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-3">Styles et compositions</h3>
              <p className="text-gray-700">
                Explorez les différents styles artistiques et techniques de composition avancées.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-3">Paramètres avancés</h3>
              <p className="text-gray-700">
                Contrôlez finement vos créations avec les ratios, qualité, chaos et autres options.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-3">Workflow professionnel</h3>
              <p className="text-gray-700">
                Optimisez votre processus créatif pour la production de contenus marketing.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Types de créations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-xl">🎨</span>
              </div>
              <h3 className="font-semibold mb-2">Illustrations artistiques</h3>
              <p className="text-gray-600 text-sm">Créations originales pour vos projets créatifs</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-xl">📱</span>
              </div>
              <h3 className="font-semibold mb-2">Visuels marketing</h3>
              <p className="text-gray-600 text-sm">Images pour réseaux sociaux et communication</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-xl">🏢</span>
              </div>
              <h3 className="font-semibold mb-2">Contenus corporate</h3>
              <p className="text-gray-600 text-sm">Visuels professionnels pour présentations</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Techniques avancées
          </h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <span className="w-6 h-6 bg-blue-500 rounded-full mr-3 flex items-center justify-center text-white text-xs">1</span>
                Prompt engineering visuel
              </h3>
              <p className="text-gray-700">
                Apprenez les mots-clés, les références artistiques et les techniques de description 
                qui produisent les meilleurs résultats visuels.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <span className="w-6 h-6 bg-green-500 rounded-full mr-3 flex items-center justify-center text-white text-xs">2</span>
                Variations et itérations
              </h3>
              <p className="text-gray-700">
                Maîtrisez les techniques de variation, d'upscaling et de remix pour affiner 
                vos créations jusqu'à la perfection.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <span className="w-6 h-6 bg-purple-500 rounded-full mr-3 flex items-center justify-center text-white text-xs">3</span>
                Cohérence visuelle
              </h3>
              <p className="text-gray-700">
                Créez des séries d'images cohérentes pour vos campagnes et maintenez 
                une identité visuelle forte.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">
            Projet final
          </h2>
          <p className="text-gray-700 leading-relaxed">
            À la fin de cette formation, vous aurez créé une série complète de visuels cohérents 
            pour un projet de votre choix : campagne marketing, présentation professionnelle, 
            ou portfolio créatif. Vous repartirez avec des créations concrètes et les compétences 
            pour continuer à innover visuellement.
          </p>
        </section>
      </div>
    </div>
  )
}