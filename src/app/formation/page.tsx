'use client'
import React from 'react'
import { CheckCircle } from 'lucide-react'

export default function FormationPage() {
  return (
    <div className="max-w-5xl mx-auto py-16 px-6 space-y-16">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-extralight font-ralewaylight text-center mb-6">
          Maîtrisez l’intelligence artificielle, quel que soit votre niveau
        </h1>
        <p className="text-gray-700 text-lg">
          Chez BackProp, nous pensons que l’IA est accessible à tous : de la personne qui découvre ces technologies pour la première fois jusqu’aux ingénieurs de pointe des centres de recherche.
          Nos parcours de formation sont conçus pour accompagner chaque profil — du néophyte curieux au spécialiste chevronné — dans l’exploration et la maîtrise des outils et méthodes d’IA les plus innovants.
        </p>
      </section>

      {/* Parcours débutants et avancés */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-medium mb-4 flex items-center">
            <CheckCircle className="mr-2 text-blue-600" size={24} />
            Pour les débutants :
          </h2>
          <ul className="space-y-2 text-gray-700">
            {[
              'Introduction à l’IA générative et aux grands modèles linguistiques (ChatGPT, Claude, Copilot)',
              'Premiers pas avec la recherche multimodale (DeepSeek)',
              'Création d’images par IA (MidJourney)',
            ].map((item) => (
              <li key={item} className="flex items-start">
                <CheckCircle className="mt-1 mr-2 text-green-500" size={18} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-medium mb-4 flex items-center">
            <CheckCircle className="mr-2 text-indigo-600" size={24} />
            Pour les utilisateurs avancés et centres de recherche :
          </h2>
          <ul className="space-y-2 text-gray-700">
            {[
              'Développement d’agents autonomes et workflows complexes (Agents IA, n8n, MCP)',
              'Intégration de bibliothèques et frameworks open source (TensorFlow, LangChain)',
              'Conception et déploiement de PoC et applications évolutives',
            ].map((item) => (
              <li key={item} className="flex items-start">
                <CheckCircle className="mt-1 mr-2 text-green-500" size={18} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Méthodologie */}
      <section className="space-y-4">
        <p className="text-gray-700 font-medium flex items-center">
          <CheckCircle className="mr-2 text-purple-600" size={20} />
          Chaque formation allie :
        </p>
        <ul className="space-y-2 text-gray-700">
          {[
            'Théorie ciblée, adaptée à votre expérience et à vos objectifs.',
            'Ateliers hands-on, pour passer de la démonstration à la mise en pratique en quelques heures.',
            'Études de cas concrets, issues de nos missions de conseil, pour créer immédiatement de la valeur à partir de vos données.',
          ].map((item) => (
            <li key={item} className="flex items-start">
              <CheckCircle className="mt-1 mr-2 text-green-500" size={18} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Pourquoi BackProp */}
      <section className="space-y-4">
        <h2 className="text-2xl font-medium flex items-center">
          <CheckCircle className="mr-2 text-red-600" size={24} />
          Pourquoi BackProp est votre meilleur choix :
        </h2>
        <ul className="space-y-2 text-gray-700">
          {[
            'Pédagogie sur-mesure : contenus et rythmes personnalisés, quel que soit votre niveau.',
            'Expertise opérationnelle : retours d’expérience sets-up réels, de l’audit au développement d’applications.',
            'Accompagnement durable : support post-formation, ressources et conseils pour aller toujours plus loin.',
          ].map((item) => (
            <li key={item} className="flex items-start">
              <CheckCircle className="mt-1 mr-2 text-green-500" size={18} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <p className="text-gray-700 mb-4 flex items-center justify-center">
          <CheckCircle className="mr-2 text-blue-500" size={20} />
          Prêt·e à accélérer votre maîtrise de l’IA, débutant ou expert ? Découvrez nos prochaines sessions et construisons ensemble votre parcours idéal.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition inline-flex items-center">
          Voir les prochaines sessions
        </button>
      </section>
    </div>
  )
}
