'use client'
import React, { useState, FormEvent, FocusEvent } from 'react'
import Image from 'next/image'
import { CheckCircle, XCircle } from 'lucide-react'

const services = [
  'Conférence / sensibilisation à l’IA',
  'Formation sur mesure',
  'Conseil et audit IA',
]

export default function ContactPage() {
  const [form, setForm] = useState({
    lastName: '',
    firstName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({})
  const [valid, setValid] = useState<{ [key: string]: boolean }>({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (touched[name]) validateField(name, value)
  }

  const handleBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    validateField(name, value)
  }

  const validateField = (name: string, value: string) => {
    let isValid = true
    if (name === 'email') {
      isValid = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value)
    }
    if (name === 'phone') {
      isValid = /^[0-9+\s().-]{6,20}$/.test(value)
    }
    if ((name === 'lastName' || name === 'firstName' || name === 'service') && !value.trim()) {
      isValid = false
    }
    setValid(prev => ({ ...prev, [name]: isValid }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    Object.entries(form).forEach(([key, val]) => validateField(key, val))
    if (Object.values(valid).every(v => v) && form.service) {
      setSubmitted(true)
    }
  }

  return (
    <div className="max-w-5xl mx-auto py-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left column: image + intro */}
        <div className="text-center md:text-left space-y-6">
          <div className="w-40 h-40 mx-auto md:mx-0">
            <Image
              src="/images/ab.png"
              alt="Arnaud"
              width={160}
              height={160}
              className="rounded-full"
            />
          </div>
          <h2 className="text-3xl font-light">Contactez Arnaud</h2>
          <p className="text-gray-700">
            Si vous souhaitez que nous intervenions chez vous pour une conférence, une formation ou du conseil
            en Intelligence Artificielle, n’hésitez pas à nous contacter via ce formulaire ou directement au 06.08.24.22.52.
          </p>
        </div>

        {/* Right column: form */}
        <div>
          {submitted ? (
            <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg text-center">
              Merci pour votre message ! Nous vous répondrons sous 24h.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-800 mb-1">Nom *</label>
                  <input
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-gray-800 mb-1">Prénom *</label>
                  <input
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-gray-800 mb-1">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full border border-gray-300 rounded-md p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {touched.email && (
                  valid.email ? (
                    <CheckCircle className="absolute right-3 top-9 text-green-500" />
                  ) : (
                    <XCircle className="absolute right-3 top-9 text-red-500" />
                  )
                )}
              </div>

              <div className="relative">
                <label className="block text-gray-800 mb-1">Téléphone *</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full border border-gray-300 rounded-md p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {touched.phone && (
                  valid.phone ? (
                    <CheckCircle className="absolute right-3 top-9 text-green-500" />
                  ) : (
                    <XCircle className="absolute right-3 top-9 text-red-500" />
                  )
                )}
              </div>

              <div>
                <label className="block text-gray-800 mb-1">Vous souhaitez *</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="">Sélectionnez...</option>
                  {services.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-800 mb-1">Message (facultatif)</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-md transition"
              >
                Envoyer
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
