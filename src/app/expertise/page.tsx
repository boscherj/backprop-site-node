// src/app/expertise/page.tsx
'use client'
import React from 'react'

export default function ExpertisePage() {
  // Left column: nos expertises
  const leftItems = [
    {
      icon: '/icons/chatgpt.png',
      title: 'ChatGPT',
      points: [
        'la génération de texte avec GPT-4o',
        'les GPTs qui automatisent les process',
        'l’API pour les développeurs',
        'la création d’images via l’API image generation'
      ]
    },
    {
      icon: '/icons/midjourney.png',
      title: 'MidJourney',
      points: [
        'comprendre les prompts',
        'technique avancée du prompt',
        'les prompt builders',
        'les caractères permanents'
      ]
    },
    {
      icon: '/icons/ms365.png',
      title: 'MS365 Copilot',
      points: [
        'structure de prompts par métiers',
        'utilisation Copilot dans la suite Microsoft',
        'création d’agents (simples et avancés)'
      ]
    }
  ];

  // Center column: images provenant de public/images/back-1.png etc.
  const centerImages = [
    '/images/back-1.png',
    '/images/back-2.png',
    '/images/back-3.png'
  ];

  // Right column: autres expertises
  const rightItems = [
    {
      icon: '/icons/n8n.png',
      title: 'n8n',
      points: [
        'créer des workflows simples (et avancés)',
        'intégrer des API tierces (HTTP, Webhook)',
        'comprendre les types de noeuds',
        'utiliser les concepts d’IA dans n8n'
      ]
    },
    {
      icon: '/icons/langchain.png',
      title: 'LangChain - LlamaIndex',
      points: [
        'Prompt engineering',
        'Fine-tuning',
        'RAG'
      ]
    },
    {
      icon: '/icons/tensorflow.png',
      title: 'TensorFlow',
      points: [
        'développer des modèles ML',
        'utiliser TF2 et Keras',
        'optimisation et déploiement sur cloud'
      ]
    }
  ];

  return (
    <div className="flex-1 max-w-[1400px] mx-auto px-8 pt-4 pb-12">
      {/* Intro section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-4">
          Notre expertise <span className="text-5xl font-black">BackProp</span>
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Notre expertise en Intelligence Artificielle ne date pas d’hier ! Nous en avons suivi toutes les
          évolutions, du système expert à l’intelligence artificielle générative en passant par
          l’intelligence artificielle discriminative. Nous avons formé aussi bien des centres de
          recherche, des équipes RH, communication et marketing, que des écoles d’ingénieurs.
        </p>
      </section>
            <div className="grid grid-cols-3 gap-x-12 gap-y-8">
        {/* Left descriptions */}
        <div className="flex flex-col space-y-8">
          {leftItems.map((item, i) => (
            <div key={i} className="space-y-4">
              <div className="w-12 h-12 p-2 border border-gray-200 rounded-md">
                <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
              </div>
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {item.points.map((pt, idx) => <li key={idx}>{pt}</li>)}
              </ul>
            </div>
          ))}
        </div>

        {/* Center images */}
        <div className="space-y-8">
          {centerImages.map((src, i) => (
            <img key={i} src={src} alt="Expertise image" className="w-full h-auto rounded-md shadow-lg" />
          ))}
        </div>

        {/* Right descriptions */}
        <div className="flex flex-col space-y-8">
          {rightItems.map((item, i) => (
            <div key={i} className="space-y-4">
              <div className="w-12 h-12 p-2 border border-gray-200 rounded-md">
                <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
              </div>
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {item.points.map((pt, idx) => <li key={idx}>{pt}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
