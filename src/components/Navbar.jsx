import { useState, useEffect } from "react";

function Navbar() {
    const [Scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navItems = [
        { id: "home", label: "Acceuil" },
        { id: "about", label: "À propos" },
        { id: "skills", label: "Compétences" },
        { id: "projects", label: "Projets" },
        { id: "experiences", label: "Expériences" },
        { id: "contact", label: "Contact" },
    ]
    // Fonction pour scroll vers uns section spécifique

    const scrollTo = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false); // Pour fermer le menu sur téléphone après un clic
    }

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${Scrolled ? "bg-slate-900/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-6"}`}>
            <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">

    {/* Logo */}

    <div 
    onClick={
        () => scrollTo("home")}
        className="text-2xl font-bold cursor-pointer group">
            <span className="text-white group-hover:text-rose-400 transition-colors">M</span>
            <span className="text-rose-500 group-hover:text-white transition-colors">G</span>
    </div>

    {/* Menu pour desktop */}

    <div className="hidden md:flex gap-8">
        {navItems.map((item) => (
            <button 
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="text-sm font-medium text-gray-300 hover:text-rose-400 transition-colors">
                {item.label}
            </button>
        ))}
    </div>

    {/* Bouton menu pour mobile */}

    <button
        className="md:hidden text-white p-2"
        onClick={() => setMenuOpen(!menuOpen)}>

        <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            menuOpen ? 'rotate-45 translate-y-1.5' : ''
        }`} />
        <div className={`w-6 h-0.5 bg-white my-1.5 transition-all duration-300 ${
            menuOpen ? 'opacity-0' : ''
        }`} />
        <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            menuOpen ? '-rotate-45 -translate-y-1.5' : ''
        }`} />
        </button>
        </div>

        {/* Menu pour mobile */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-slate-900/98 backdrop-blur-md transition-all duration-500 overflow-hidden ${
        menuOpen ? 'max-h-96 border-t border-slate-700' : 'max-h-0'}`}>
        {navItems.map((item) => (
        <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="block w-full text-left px-6 py-4 text-gray-300 hover:text-rose-400 hover:bg-slate-800/50 transition-all">
            {item.label}
        </button>
        ))}
        </div>
    </nav>
)
}

export default Navbar;