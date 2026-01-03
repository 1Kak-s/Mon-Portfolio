import { useState } from 'react'

function Contact() {
    // État du formulaire
const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
})

  // État de soumission
const [isSubmitting, setIsSubmitting] = useState(false)

    // Fonction pour gérer les changements dans les inputs
const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
    ...prev,
    [name]: value
    }))
}

    // Fonction pour gérer la soumission du formulaire
const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulation d'envoi (remplace par mon API plus tard)
    setTimeout(() => {
        setIsSubmitting(false)
        alert('Message envoyé ! (simulation)')
        setFormData({ name: '', email: '', message: '' })
    }, 1500)
}

  // Informations de contact
const contactInfo = [
    { 
        icon: '📞', 
        label: 'Téléphone', 
        value: '06 80 75 57 81', 
        href: 'tel:+33680755781' 
    },
    { 
        icon: '✉️', 
        label: 'Email', 
        value: 'Maxime.goeffier@gmail.com', 
        href: 'mailto:Maxime.goeffier@gmail.com' 
    },
    { 
        icon: '📍', 
        label: 'Localisation', 
        value: '91260 Juvisy-sur-Orge', 
        href: null 
    },
]

return (
    <section id="contact" className="py-24 bg-slate-800">
        <div className="max-w-6xl mx-auto px-6">
        
        {/* Titre */}
        <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Me <span className="text-rose-500">Contacter</span>
        </h2>
        <p className="text-gray-400 text-lg">Discutons de votre prochain projet !</p>
        </div>

        {/* Contenu en 2 colonnes */}
        <div className="grid md:grid-cols-2 gap-12">
        
            {/* Colonne gauche : Infos de contact */}
        <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white">Restons en contact</h3>
            <p className="text-gray-400">
            Je suis actuellement à la recherche d'une alternance en développement web ou applicatif 
            pour septembre 2025. N'hésitez pas à me contacter !
            </p>

            {/* Cartes d'infos */}
            <div className="space-y-4">
            {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center group-hover:bg-rose-500/20 transition-colors">
                    <span className="text-xl">{info.icon}</span>
                    </div>
                <div>
                    <p className="text-gray-500 text-sm">{info.label}</p>
                    {info.href ? (
                    <a 
                        href={info.href} 
                        className="text-white hover:text-rose-400 transition-colors"
                    >
                        {info.value}
                    </a>
                    ) : (
                    <p className="text-white">{info.value}</p>
                    )}
                    </div>
                </div>
            ))}
            </div>

            {/* Liens sociaux (optionnel) */}
            <div className="flex gap-4 pt-4">
            <a 
                href="https://github.com/1Kak-s" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-slate-900 rounded-xl text-gray-400 hover:bg-rose-500/20 hover:text-rose-400 transition-all"
            >
                GitHub
            </a>
            <a 
                href="https://www.linkedin.com/in/maxime-go%C3%ABffier-a4b8b7214/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-slate-900 rounded-xl text-gray-400 hover:bg-rose-500/20 hover:text-rose-400 transition-all"
            >
                LinkedIn
            </a>
            </div>
        </div>

          {/* Colonne droite : Formulaire */}
        <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Input Nom */}
            <div>
            <input
                type="text"
                name="name"
                placeholder="Votre nom"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-gray-500 focus:border-rose-500 focus:outline-none transition-colors"
            />
            </div>

            {/* Input Email */}
            <div>
            <input
                type="email"
                name="email"
                placeholder="Votre email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-gray-500 focus:border-rose-500 focus:outline-none transition-colors"
            />
            </div>

            {/* Textarea Message */}
            <div>
            <textarea
                name="message"
                placeholder="Votre message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                className="w-full px-6 py-4 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-gray-500 focus:border-rose-500 focus:outline-none transition-colors resize-none"
            />
            </div>

            {/* Bouton Submit */}
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-rose-500 to-rose-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-rose-500/30 transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
            </button>
        </form>

        </div>
    </div>
    </section>
)
}

export default Contact