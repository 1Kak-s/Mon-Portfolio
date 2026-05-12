
// CONTACT.JSX — avec ScrollReveal 


import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from '../config/emailjs'
import ScrollReveal from './ScrollReveal'

function Contact() {
    const [formData, setFormData] = useState({ from_name: '', from_email: '', message: '' })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus(null)
        try {
            await emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, formData, EMAILJS_CONFIG.PUBLIC_KEY)
            setSubmitStatus('success')
            setFormData({ from_name: '', from_email: '', message: '' })
            setTimeout(() => setSubmitStatus(null), 5000)
        } catch (error) {
            console.error('Erreur EmailJS:', error)
            setSubmitStatus('error')
            setTimeout(() => setSubmitStatus(null), 5000)
        } finally {
            setIsSubmitting(false)
        }
    }

    const contactInfo = [
        { icon: '📞', label: 'Téléphone', value: '06 80 75 57 81', href: 'tel:+33680755781' },
        { icon: '✉️', label: 'Email', value: 'Maxime.goeffier@gmail.com', href: 'mailto:Maxime.goeffier@gmail.com' },
        { icon: '📍', label: 'Localisation', value: '91260 Juvisy-sur-Orge', href: null },
    ]

    return (
        <section id="contact" className="py-24 bg-slate-800">
            <div className="max-w-6xl mx-auto px-6">

                {/* Titre */}
                <ScrollReveal direction="up" className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Me <span className="text-rose-500">Contacter</span>
                    </h2>
                    <p className="text-gray-400 text-lg">Discutons de votre prochain projet !</p>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 gap-12">

                    {/* Infos  arrive depuis la gauche */}
                    <ScrollReveal direction="left" delay={0.1}>
                        <div className="space-y-8">
                            <h3 className="text-2xl font-bold text-white">Restons en contact</h3>
                            <p className="text-gray-400">
                                Je suis actuellement à la recherche d'une alternance en développement web pour septembre 2026. N'hésitez pas à me contacter !
                            </p>
                            <div className="space-y-4">
                                {contactInfo.map((info) => (
                                    <div key={info.label} className="flex items-center gap-4 group">
                                        <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center group-hover:bg-rose-500/20 transition-colors">
                                            <span className="text-xl">{info.icon}</span>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 text-sm">{info.label}</p>
                                            {info.href ? (
                                                <a href={info.href} className="text-white hover:text-rose-400 transition-colors">{info.value}</a>
                                            ) : (
                                                <p className="text-white">{info.value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex gap-4 pt-4">
                                <a href="https://github.com/1Kak-s" target="_blank" rel="noopener noreferrer"
                                    className="px-6 py-3 bg-slate-900 rounded-xl text-gray-400 hover:bg-rose-500/20 hover:text-rose-400 transition-all">
                                    GitHub
                                </a>
                                <a href="https://www.linkedin.com/in/maxime-go%C3%ABffier-a4b8b7214/" target="_blank" rel="noopener noreferrer"
                                    className="px-6 py-3 bg-slate-900 rounded-xl text-gray-400 hover:bg-rose-500/20 hover:text-rose-400 transition-all">
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Formulaire  arrive depuis la droite */}
                    <ScrollReveal direction="right" delay={0.2}>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {submitStatus === 'success' && (
                                <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400 text-sm">
                                    ✅ Message envoyé avec succès ! Je vous répondrai bientôt.
                                </div>
                            )}
                            {submitStatus === 'error' && (
                                <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400 text-sm">
                                    Erreur lors de l'envoi. Veuillez réessayer ou me contacter directement.
                                </div>
                            )}
                            <input type="text" name="from_name" placeholder="Votre nom"
                                value={formData.from_name} onChange={handleChange} required
                                className="w-full px-6 py-4 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-gray-500 focus:border-rose-500 focus:outline-none transition-colors" />
                            <input type="email" name="from_email" placeholder="Votre email"
                                value={formData.from_email} onChange={handleChange} required
                                className="w-full px-6 py-4 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-gray-500 focus:border-rose-500 focus:outline-none transition-colors" />
                            <textarea name="message" placeholder="Votre message"
                                value={formData.message} onChange={handleChange} rows={5} required
                                className="w-full px-6 py-4 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-gray-500 focus:border-rose-500 focus:outline-none transition-colors resize-none" />
                            <button type="submit" disabled={isSubmitting}
                                className="w-full py-4 bg-gradient-to-r from-rose-500 to-rose-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-rose-500/30 transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">
                                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                            </button>
                        </form>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    )
}

export default Contact
