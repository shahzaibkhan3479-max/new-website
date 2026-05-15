import { Link } from "react-router-dom";
import { Dog, Instagram, Facebook, Mail, Send, Heart, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="bg-white border-t-2 border-brand-border pt-32 pb-12 relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none paw-pattern" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-6">
            <Link to="/" className="flex items-center gap-4 mb-8 group">
              <motion.div 
                whileHover={{ rotate: [0, -15, 15, 0] }}
                className="text-brand-primary p-3 bg-brand-surface rounded-xl shadow-inner"
              >
                <Dog size={32} />
              </motion.div>
              <span className="font-black text-2xl tracking-tighter text-brand-text uppercase group-hover:text-brand-primary transition-colors">
                Paws <span className="gradient-text italic-serif">Praise</span>
              </span>
            </Link>
            <p className="text-brand-muted leading-relaxed text-lg font-medium mb-8 max-w-xl">
              Transforming the human-canine bond through neurologically-sound, professional, and force-free methodology. We specialize in behavioral excellence and lasting structural change.
            </p>
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-3 text-brand-text font-black text-xs uppercase tracking-widest bg-brand-surface px-4 py-2 rounded-full border border-brand-border">
                <MapPin size={16} className="text-brand-primary" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-3 text-brand-text font-black text-xs uppercase tracking-widest bg-brand-surface px-4 py-2 rounded-full border border-brand-border">
                <Phone size={16} className="text-brand-primary" />
                <span>+1 (555) 123-PAWS</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.3em] mb-10 text-brand-primary font-black border-b border-brand-primary w-fit pb-2">Programs</h4>
            <ul className="space-y-5 text-sm text-brand-muted font-bold">
              <li><Link to="/board-and-train" className="hover:text-brand-primary transition-all hover:translate-x-1 inline-block">Board & Train</Link></li>
              <li><Link to="/private-training" className="hover:text-brand-primary transition-all hover:translate-x-1 inline-block">Private Coaching</Link></li>
              <li><Link to="/day-training" className="hover:text-brand-primary transition-all hover:translate-x-1 inline-block">Day Adventures</Link></li>
              <li><Link to="/contact" className="hover:text-brand-primary transition-all hover:translate-x-1 inline-block">Puppy Start</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.3em] mb-10 text-brand-primary font-black border-b border-brand-primary w-fit pb-2">Experience</h4>
            <ul className="space-y-5 text-sm text-brand-muted font-bold">
              <li><Link to="/contact" className="hover:text-brand-primary transition-all hover:translate-x-1 inline-block">Book Consultation</Link></li>
              <li><a href="#" className="hover:text-brand-primary transition-all hover:translate-x-1 inline-block">Our Methodology</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-all hover:translate-x-1 inline-block">Success Stories</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-all hover:translate-x-1 inline-block">Contact Support</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t-2 border-brand-border flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <p className="text-[10px] tracking-[0.3em] text-brand-text font-black uppercase">
              © {new Date().getFullYear()} Paws & Praise Excellence.
            </p>
            <span className="hidden md:block w-8 h-px bg-brand-border" />
            <p className="text-[10px] tracking-widest text-brand-muted uppercase font-bold">
              All dogs deserve <span className="text-brand-primary">praise</span>.
            </p>
          </div>
          
          <div className="flex items-center gap-12">
            <div className="flex gap-8 text-brand-text">
               <motion.a whileHover={{ y: -5, color: '#A01A1A' }} href="#" className="transition-all"><Instagram size={20}/></motion.a>
               <motion.a whileHover={{ y: -5, color: '#A01A1A' }} href="#" className="transition-all"><Facebook size={20}/></motion.a>
            </div>
            <div className="text-brand-primary animate-pulse">
              <Heart size={20} fill="currentColor" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
