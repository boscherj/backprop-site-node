'use client'
import React from 'react'
import Link from 'next/link'
import { Search, Zap, Code, Cpu } from 'lucide-react'

export default function ConseilPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6 space-y-12">
      <h1 className="text-4xl font-ralewaylight text-center">
        La donnée et l’IA, levier de compétitivité pour votre PME
      </h1>
      <p className="text-gray-700 text-lg">
        BackProp met son expertise de haut niveau au service de votre transformation,
        en alliant rigueur méthodologique et pragmatisme opérationnel.
      </p>

      <div className="space-y-8">
        <h2 className="text-2xl font-semibold flex items-center">
          <Search className="mr-2" size={24} /> Diagnostic Data & IA sur mesure
        </h2>
        <p className="text-gray-700">
          Nous démarrons par un diagnostic Data & IA sur mesure, fondé sur des entretiens ciblés
          avec vos équipes et l’analyse de vos processus existants. Cette étape expose à la fois
          les irritants – tâches répétitives, flux manuels lourds, gestion dispersée des contenus –
          et les usages spontanés de l’IA, pour vous offrir une vision complète des opportunités.
        </p>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-semibold flex items-center">
          <Zap className="mr-2" size={24} /> Qualification des solutions IA
        </h2>
        <p className="text-gray-700">
          Nous sélectionnons ou concevons les outils et modèles les plus adaptés à vos données,
          à vos objectifs et à vos contraintes métier. Qu’il s’agisse de solutions packagées
          ou de développements sur mesure, chaque choix est guidé par la robustesse technique
          et la facilité d’intégration.
        </p>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-semibold flex items-center">
          <Code className="mr-2" size={24} /> Plan de mise en œuvre et formation
        </h2>
        <p className="text-gray-700">
          Le plan de mise en œuvre précise jalons, responsabilités et indicateurs de succès.
          Il comprend également un programme de formation pour garantir l’appropriation rapide
          des nouveaux outils par vos collaborateurs.
        </p>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-semibold flex items-center">
          <Cpu className="mr-2" size={24} /> Conduite du changement
        </h2>
        <p className="text-gray-700">
          Au-delà de la technique, nous plaçons la conduite du changement au cœur de notre démarche :
          donner du sens à chaque projet, débuter par de petits pilotes à fort retour d’expérience,
          former des référents internes et instaurer une gouvernance claire (validation des contenus,
          contrôles qualité).
        </p>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-semibold flex items-center">
          <Zap className="mr-2" size={24} /> Feuille de route détaillée
        </h2>
        <p className="text-gray-700">
          À l’issue de notre mission, vous disposez d’une feuille de route détaillée, déclinée par service,
          pour transformer vos données en moteur de performance, fiabiliser vos processus et concentrer
          vos équipes sur l’innovation.
        </p>
      </div>

      <div className="text-center">
        <Link
          href="/contact"
          className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition"
        >
          Contactez-nous pour un diagnostic
        </Link>
      </div>
    </div>
  )
}
