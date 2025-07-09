'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const subModules = [
  { 
    id: 'chatgpt', 
    label: 'ChatGPT',
    href: '/formation/Initiation/ChatGPT',
    description: 'Initiez-vous à la puissance des grands modèles de langage : conception de prompts, bonnes pratiques de formulation, premiers cas d\'usage pour la rédaction, la synthèse et l\'exploration d\'informations.'
  },
  { 
    id: 'copilot', 
    label: 'Copilot',
    href: '/formation/Initiation/Copilot', 
    description: 'Découvrez comment l\'assistant de code intelligent peut accélérer votre développement : autocomplétion contextuelle, génération d\'extraits de code, refactoring assisté et intégration dans vos IDE.'
  },
  { 
    id: 'midjourney', 
    label: 'MidJourney',
    href: '/formation/Initiation/MidJourney',
    description: 'Plongez dans la création d\'images par IA : de la génération d\'illustrations inspirantes à l\'affinage de prompts visuels, en passant par l\'optimisation de styles et de compositions pour vos supports de communication.'
  }
]

export default function InitiationPage() {
  const pathname = usePathname()

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">
          Appréhendez l'IA pas à pas, dès vos premiers pas
        </h1>
        
        <div className="text-lg text-gray-700 leading-relaxed space-y-4">
          <p>
            Toute aventure commence par une initiation solide. Dans l'espace <strong>Initiation</strong> de BackProp, 
            nous proposons trois modules complémentaires qui vous permettront de découvrir, comprendre et maîtriser 
            progressivement les fondamentaux de l'IA générative et de ses usages concrets :
          </p>
        </div>
      </div>

      {/* Sub-navigation avec vrais liens */}
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg mb-8">
        {subModules.map(module => (
          <Link
            key={module.id}
            href={module.href}
            className={`px-6 py-3 rounded-md text-sm font-medium transition-colors ${
              pathname === module.href
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            {module.label}
          </Link>
        ))}
      </div>

      {/* Module descriptions avec liens cliquables */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {subModules.map(module => (
          <Link 
            key={module.id}
            href={module.href}
            className={`p-6 rounded-lg border transition-all cursor-pointer block ${
              pathname === module.href
                ? 'border-blue-200 bg-blue-50 shadow-md'
                : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
            }`}
          >
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              {module.label}
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              {module.description}
            </p>
          </Link>
        ))}
      </div>

      {/* Content sections */}
      <div className="space-y-12">
        {/* What you'll learn */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">
            Chaque module d'initiation combine :
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                Théorie accessible
              </h3>
              <p className="text-gray-700">
                Pour comprendre les principes de base sans jargon inutile.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                Démonstrations en direct
              </h3>
              <p className="text-gray-700">
                Illustrant les mécanismes internes et les limites à connaître.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                Ateliers pratiques
              </h3>
              <p className="text-gray-700">
                Où vous manipulez les outils en temps réel pour réaliser vos premières réalisations concrètes.
              </p>
            </div>
          </div>
        </section>

        {/* What you'll get */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">
            En fin de parcours, vous repartez avec :
          </h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold text-sm">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Repères clairs</h3>
                <p className="text-gray-700">
                  Sur le fonctionnement et les capacités de chaque solution.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold text-sm">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Référentiel de bonnes pratiques</h3>
                <p className="text-gray-700">
                  Pour continuer à explorer en autonomie.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold text-sm">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Premiers cas d'usage</h3>
                <p className="text-gray-700">
                  Déjà implémentés, facilement reproductibles dans votre contexte métier.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg">
          <p className="text-lg text-gray-700 leading-relaxed">
            L'espace Initiation est la porte d'entrée idéale pour toute personne souhaitant intégrer l'IA dans ses projets, 
            qu'il s'agisse d'améliorer la communication, de gagner en productivité ou de poser les bases d'applications plus ambitieuses. 
            Vous y découvrirez la flexibilité de ces technologies et apprendrez à les mettre au service de vos besoins concrets, 
            simplement et en toute confiance.
          </p>
        </section>
      </div>
    </div>
  )
}