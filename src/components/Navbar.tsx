import { Link, useLocation } from "react-router-dom";
import { Dog, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Private Training", path: "/private-training" },
  { name: "Day Training", path: "/day-training" },
  { name: "Board & Train", path: "/board-and-train" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/80 backdrop-blur-xl border-b-2 border-brand-border py-4 shadow-sm" : "bg-transparent py-8"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-4 group">
          <motion.div 
            whileHover={{ rotate: [0, -15, 15, 0], scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className={`transition-colors duration-500 ${scrolled ? "text-brand-primary" : "text-brand-text"}`}
          >
            <Dog size={28} />
          </motion.div>
          <span className={`font-black text-xl md:text-2xl tracking-tighter uppercase transition-colors duration-500 ${scrolled ? "text-brand-text" : "text-brand-text"}`}>
            Paws <span className="gradient-text italic-serif">Praise</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.filter(l => l.path !== "/contact").map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[10px] uppercase tracking-[0.3em] font-black transition-all relative group/link py-2 ${
                location.pathname === link.path ? "text-brand-primary" : "text-brand-text/60 hover:text-brand-primary"
              }`}
            >
              <span className="relative z-10">{link.name}</span>
              <motion.div 
                layoutId="activeTab"
                className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-primary transition-transform duration-300 ${location.pathname === link.path ? "scale-x-100" : "scale-x-0 group-hover/link:scale-x-100"}`}
              />
            </Link>
          ))}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="ml-4">
            <Link to="/contact" className="btn-primary px-8 py-3 text-[10px] tracking-widest uppercase font-black">
              Book Session
            </Link>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-brand-text p-2 hover:bg-brand-surface rounded-full transition-colors" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-white border-b-2 border-brand-border overflow-hidden lg:hidden shadow-2xl"
          >
            <div className="p-8 flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-2xl font-black uppercase tracking-tighter transition-colors ${
                    location.pathname === link.path ? "text-brand-primary" : "text-brand-text hover:text-brand-primary"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center justify-between">
                    <span>{link.name}</span>
                    <Dog size={20} className="opacity-10" />
                  </div>
                </Link>
              ))}
              <Link 
                to="/contact" 
                onClick={() => setIsOpen(false)} 
                className="btn-primary text-center py-6 text-sm font-black uppercase tracking-widest"
              >
                Inquire Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
