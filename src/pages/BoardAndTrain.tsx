import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ShieldCheck, Zap, Mail, MessageSquare, ClipboardCheck, ArrowRight } from "lucide-react";

export default function BoardAndTrain() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <header className="grid md:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 border border-brand-border translate-x-6 translate-y-6" />
            <div className="relative z-10 border border-brand-border overflow-hidden">
               <img 
                src="https://images.unsplash.com/photo-1541364983171-a8ba01d95ecb?q=80&w=1974&auto=format&fit=crop" 
                alt="Dog behavior training" 
                className="w-full h-[600px] object-cover grayscale brightness-50"
              />
            </div>
          </motion.div>
          <div>
            <span className="text-brand-primary tracking-[0.4em] uppercase text-[10px] font-bold mb-6 block">Residency Programs</span>
            <h1 className="text-5xl md:text-7xl font-light mb-8 italic-serif">Behavioral <span className="text-brand-text not-italic font-light">Immersion</span></h1>
            <p className="text-lg text-brand-muted leading-relaxed font-light mb-12">
              Every residency is an intensive, structured training experience tailored to your dog's neurology and temperament.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: <ShieldCheck size={16}/>, label: "Intensive training" },
                  { icon: <Mail size={16}/>, label: "Daily updates" },
                  { icon: <MessageSquare size={16}/>, label: "Direct coaching" },
                  { icon: <ClipboardCheck size={16}/>, label: "Follow-up support" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-[10px] tracking-widest uppercase text-brand-muted border-b border-brand-border/30 pb-3">
                    <span className="text-brand-accent">{item.icon}</span>
                    {item.label}
                  </div>
                ))}
            </div>
          </div>
        </header>

        {/* Packages Grid */}
        <section className="mb-40">
          <h2 className="text-4xl font-light mb-20 text-center uppercase tracking-widest italic-serif">The <span className="not-italic">Programs</span></h2>
          <div className="grid lg:grid-cols-3 gap-px bg-brand-border border border-brand-border">
            {[
              { 
                title: "Puppy Head Start", 
                duration: "2 WEEKS", 
                desc: "Foundation skills, house manners, and early socialization for new members of your family.",
                features: ["Foundation Cues", "Potty Training", "Socialization", "Crate Skills"]
              },
              { 
                title: "Core Obedience", 
                duration: "4 WEEKS", 
                desc: "Mastering essential communication and focus amid real-world distractions.",
                features: ["5+ Essential Cues", "Distraction Work", "Recall Foundations", "Polite Leash Manners"],
                highlight: true
              },
              { 
                title: "Behavior Mod", 
                duration: "4 WEEKS", 
                desc: "Specialized support for reactivity and anxiety in a structured, professional setting.",
                features: ["Trigger Analysis", "Counter Conditioning", "Impulse Control", "Take-home Plan"]
              }
            ].map((p, i) => (
              <div key={i} className={`p-16 bg-brand-bg transition-colors hover:bg-brand-primary/5 flex flex-col ${p.highlight ? "bg-brand-surface/30" : ""}`}>
                <span className="text-[10px] font-bold text-brand-primary tracking-[0.3em] uppercase mb-4">{p.duration}</span>
                <h3 className="text-3xl font-light mb-6 tracking-tight">{p.title}</h3>
                <p className="text-brand-muted text-sm font-light leading-relaxed mb-10 flex-grow">{p.desc}</p>
                <div className="space-y-4 mb-12">
                  {p.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-3 text-[10px] tracking-widest uppercase text-brand-muted/80">
                      <div className="w-1 h-1 rounded-full bg-brand-accent" />
                      {f}
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="btn-secondary w-full text-center group-hover:bg-brand-primary group-hover:text-brand-bg">
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 bg-brand-primary/10 py-3 border-x border-brand-primary/20 italic font-serif text-brand-primary text-sm">
            Each program includes 3 follow-up sessions to ensure long-term success.
          </div>
        </section>

        {/* Narrative Blocks */}
        <div className="grid md:grid-cols-2 gap-px bg-brand-border border border-brand-border">
            <div className="p-20 bg-brand-bg">
              <h2 className="text-2xl font-light mb-8 italic-serif uppercase tracking-widest">A Different Approach</h2>
              <p className="text-brand-muted leading-relaxed font-light text-sm">
                This isn’t “boarding with training sprinkled in” but rather a full behavior-focused residency designed for real results. We focus on creating lasting change through structured, consistent training.
              </p>
            </div>
            <div className="p-20 bg-brand-bg">
              <h2 className="text-2xl font-light mb-8 italic-serif uppercase tracking-widest">Ideal Candidates</h2>
              <p className="text-brand-muted leading-relaxed font-light text-sm">
                Ideal for dogs who are reactive, anxious, or testing boundaries, and for owners who want meaningful, lasting progress. This requires a commitment to follow-through at home.
              </p>
            </div>
        </div>
      </div>
    </div>
  );
}
