// src/app/team/page.tsx

'use client'
import React from 'react'

export default function TeamPage() {
  const members = [
    {
      name: 'JB',
      role: 'CEO',
      image: '/images/jb.png',
      bio: `Jackie a un Master en Intelligence Artificielle et en Traitement d’Images obtenu en école d’ingénieurs. Il a aussi un 3ème cycle en informatique. Il a étudié le traitement du langage naturel alors qu’il préparait un doctorat sur l’analyse de données textuelles. Il enseigne régulièrement TensorFlow, le framework de Deep Learning.
Jackie a créé plusieurs Meetup en IA et y a assuré des formations. Il est aussi un conférencier régulier en IA.
Jackie a lancé de nombreuses entreprises après avoir travaillé dans des centres de recherche ainsi que chez E&Y.`
    },
    {
      name: 'AB',
      role: 'COO',
      image: '/images/ab.png',
      bio: `Arnaud a un MBA et a étudié dans une école de commerce spécialisée dans le management (INSEEC).
Il a auparavant travaillé chez Orange, Yves Rocher, HelloWork, Leroy Merlin. Il possède des compétences en Marketing digital et E-commerce.
Il s’est spécialisé dans les outils d’IA générative (ChatGPT, MS365 Copilot, Midjourney).` 
    }
  ];

  return (
    <div className="flex-1 max-w-[1200px] mx-auto px-8 py-12">
      <h1 className="text-4xl font-extralight font-ralewaylight text-center mb-6">
        L’équipe derrière BackProp&nbsp;!
      </h1>
      <div className="h-1 w-16 bg-blue-500 mx-auto mb-12" />
      <div className="space-y-16">
        {members.map((m, idx) => (
          <div key={idx} className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Image */}
            <div className="flex-shrink-0">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-200 mx-auto">
                <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
              </div>
              <h2 className="mt-4 text-2xl font-semibold text-center md:text-left">{m.name}</h2>
              <p className="text-gray-500 text-center md:text-left">{m.role}</p>
            </div>
            {/* Bio */}
            <div className="prose prose-lg max-w-none text-gray-800">
              {m.bio.split('\n').map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
