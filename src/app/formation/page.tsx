'use client'
import React from 'react'
import Link from 'next/link'
import { Zap, Cpu, Search, Code } from 'lucide-react'

export default function FormationPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6 space-y-12">
      <h1 className="text-4xl font-ralewaylight text-center">
        Maîtrisez l’intelligence artificielle, quel que soit votre niveau
      </h1>
      <p className="text-gray-700 text-lg">
        Chez BackProp, nous pensons que l’IA est accessible à tous : de la personne qui découvre ces technologies
        pour la première fois jusqu’aux ingénieurs de pointe des centres de recherche. Nos parcours de formation
        sont conçus pour accompagner chaque profil — du néophyte curieux au spécialiste chevronné — dans
        l’exploration et la maîtrise des outils et méthodes d’IA les plus innovants.
      </p>

      <div className="space-y-8">
        <h2 className="text-2xl font-semibold flex items-center">
          <Zap className="mr-2" size={24} /> Nos ateliers et modules couvrent
        </h2>

        <div>
          <h3 className="text-xl font-medium flex items-center">
            <Search className="mr-2" size={20} /> Pour les débutants
          </h3>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
            <li>
              <Search className="inline-block mr-2 align-text-top" size={18} />
              Introduction à l’IA générative et aux grands modèles linguistiques (ChatGPT, Claude, Copilot)
            </li>
            <li>
              <Zap className="inline-block mr-2 align-text-top" size={18} />
              Premiers pas avec la recherche multimodale (DeepSeek)
            </li>
            <li>
              <Code className="inline-block mr-2 align-text-top" size={18} />
              Création d’images par IA (MidJourney)
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-medium flex items-center">
            <Cpu className="mr-2" size={20} /> Pour les utilisateurs avancés et centres de recherche
          </h3>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
            <li>
              <Zap className="inline-block mr-2 align-text-top" size={18} />
              Développement d’agents autonomes et workflows complexes (Agents IA, n8n, MCP)
            </li>
            <li>
              <Code className="inline-block mr-2 align-text-top" size={18} />
              Intégration de bibliothèques et frameworks open source (TensorFlow, LangChain)
            </li>
            <li>
              <Cpu className="inline-block mr-2 align-text-top" size={18} />
              Conception et déploiement de PoC et applications évolutives
            </li>
          </ul>
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-semibold flex items-center">
          <Zap className="mr-2" size={24} /> Chaque formation allie
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Théorie ciblée, adaptée à votre expérience et à vos objectifs.</li>
          <li>Ateliers hands-on, pour passer de la démonstration à la mise en pratique en quelques heures.</li>
          <li>Études de cas concrets, issues de nos missions de conseil, pour créer immédiatement de la valeur à partir de vos données.</li>
        </ul>
      </div>

      <div className="space-y-8 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold flex items-center">
          <Cpu className="mr-2" size={24} /> Pourquoi BackProp est votre meilleur choix
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Pédagogie sur-mesure : contenus et rythmes personnalisés, quel que soit votre niveau.</li>
          <li>Expertise opérationnelle : retours d’expérience réels, de l’audit au développement d’applications.</li>
          <li>Accompagnement durable : support post-formation, ressources et conseils pour aller toujours plus loin.</li>
        </ul>
      </div>

      <div className="text-center">
        <p className="text-lg font-medium">
          Prêt·e à accélérer votre maîtrise de l’IA, débutant ou expert ?
        </p>
        <Link
          href="/inscriptions"
          className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition"
        >
          Découvrez nos prochaines sessions
        </Link>
      </div>
    </div>
  )
}
