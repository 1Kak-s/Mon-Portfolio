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
            window.addEventListener("scroll", handleScroll);
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