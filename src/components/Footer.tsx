import { Link } from "react-router-dom";
import { Dog, Instagram, Facebook, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-bg border-t border-brand-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <span className="font-light text-lg tracking-[0.2em] text-brand-primary uppercase">Paws & Praise</span>
            </Link>
            <p className="text-brand-muted leading-relaxed text-sm font-light">
              Crafting behavioral excellence through professional, force-free methodology.
            </p>
          </div>
          
          <div>
            <h4 className="text-[10px] uppercase tracking-widest mb-6 text-brand-primary font-bold">Programs</h4>
            <ul className="space-y-4 text-sm text-brand-muted font-light">
              <li><Link to="/board-and-train" className="hover:text-brand-primary transition-colors">Board & Train</Link></li>
              <li><Link to="/private-training" className="hover:text-brand-primary transition-colors">Private Coaching</Link></li>
              <li><Link to="/day-training" className="hover:text-brand-primary transition-colors">Day Adventures</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-widest mb-6 text-brand-primary font-bold">Inquiries</h4>
            <ul className="space-y-4 text-sm text-brand-muted font-light">
              <li><Link to="/contact" className="hover:text-brand-primary transition-colors">Book Consultation</Link></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Client Portal</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Privacy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-widest mb-6 text-brand-primary font-bold">Stay Updated</h4>
            <p className="text-xs text-brand-muted mb-4 font-light">Join our list for canine psychology insights.</p>
            <div className="flex gap-2">
              <input type="text" placeholder="Email Address" className="bg-brand-surface px-4 py-2 text-xs text-brand-text flex-grow border border-brand-border outline-none focus:border-brand-primary transition-colors" />
              <button className="bg-brand-primary text-white p-2 hover:opacity-90 transition-opacity"><Mail size={16}/></button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] tracking-widest text-brand-muted uppercase">
            © {new Date().getFullYear()} Paws & Praise.
          </p>
          <div className="flex gap-6 text-brand-accent">
             <a href="#" className="hover:text-brand-primary transition-colors"><Instagram size={18}/></a>
             <a href="#" className="hover:text-brand-primary transition-colors"><Facebook size={18}/></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
