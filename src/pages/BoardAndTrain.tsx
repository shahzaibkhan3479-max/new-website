import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ShieldCheck, Zap, Mail, MessageSquare, ClipboardCheck, ArrowRight, Dog } from "lucide-react";

export default function BoardAndTrain() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <header className="grid md:grid-cols-2 gap-20 items-center mb-32 relative">
          {/* Decorative Floating Icon */}
          <motion.div 
            animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-10 -left-10 text-brand-primary/10 pointer-events-none hidden lg:block"
          >
            <Dog size={120} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 border-2 border-brand-accent/20 translate-x-6 translate-y-6" />
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="relative z-10 border border-brand-border overflow-hidden shadow-2xl bg-white"
            >
               <img 
                src="https://images.unsplash.com/photo-1541364983171-a8ba01d95ecb?q=80&w=1974&auto=format&fit=crop" 
                alt="Dog behavior training" 
                className="w-full h-[600px] object-cover grayscale brightness-50 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
              />
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-brand-primary tracking-[0.5em] uppercase text-xs font-black mb-6 block border-l-8 border-brand-primary pl-6 py-1">
              Residency Programs
            </span>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter uppercase">
              Behavioral <br/>
              <span className="gradient-text italic-serif block">Immersion</span>
            </h1>
            <p className="text-xl text-brand-muted leading-relaxed font-medium mb-12">
              Every residency is an <span className="text-brand-primary">intensive</span>, structured training experience tailored to your dog's unique <span className="text-brand-accent">neurology and temperament</span>.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: <ShieldCheck size={18}/>, label: "Intensive training" },
                  { icon: <Mail size={18}/>, label: "Daily updates" },
                  { icon: <MessageSquare size={18}/>, label: "Direct coaching" },
                  { icon: <ClipboardCheck size={18}/>, label: "Follow-up support" }
                ].map((item, i) => (
                    <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                    className="flex items-center gap-3 text-[10px] tracking-widest uppercase text-brand-text font-black border-b border-brand-border pb-4 group"
                  >
                    <span className="text-brand-primary group-hover:scale-125 transition-transform">{item.icon}</span>
                    <span className="group-hover:text-brand-primary transition-colors">{item.label}</span>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </header>

        {/* Packages Grid with Flashy Reveal */}
        <section className="mb-40">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-light mb-20 text-center uppercase tracking-[0.3em] italic-serif"
          >
            The <span className="not-italic font-light text-brand-text">Programs</span>
          </motion.h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Puppy Head Start", 
                duration: "2 WEEKS", 
                desc: "Foundation skills, house manners, and early socialization for new members of your family.",
                features: ["Foundation Cues", "Potty Training", "Socialization", "Crate Skills"],
                accent: "border-brand-accent/20"
              },
              { 
                title: "Core Obedience", 
                duration: "4 WEEKS", 
                desc: "Mastering essential communication and focus amid real-world distractions with high precision.",
                features: ["5+ Essential Cues", "Distraction Work", "Recall Foundations", "Polite Leash Manners"],
                highlight: true,
                accent: "border-brand-primary/20"
              },
              { 
                title: "Behavior Mod", 
                duration: "4 WEEKS", 
                desc: "Specialized support for reactivity and anxiety in a structured, professional setting.",
                features: ["Trigger Analysis", "Counter Conditioning", "Impulse Control", "Take-home Plan"],
                accent: "border-brand-accent/20"
              }
            ].map((p, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ y: -10 }}
                className={`p-16 bg-white border ${p.accent} shadow-sm group hover:shadow-2xl transition-all duration-500 relative overflow-hidden flex flex-col ${p.highlight ? "ring-2 ring-brand-primary/10" : ""}`}
              >
                {p.highlight && (
                  <div className="absolute top-0 right-0 p-2 bg-brand-primary text-white text-[8px] tracking-[0.2em] font-black uppercase">
                    Recommended
                  </div>
                )}
                
                <span className="text-[10px] font-black text-brand-primary tracking-[0.4em] uppercase mb-6">{p.duration}</span>
                <h3 className="text-3xl font-bold mb-6 tracking-tight group-hover:text-brand-primary transition-colors">{p.title}</h3>
                <p className="text-brand-muted text-sm font-medium leading-relaxed mb-10 flex-grow group-hover:text-brand-text transition-colors">{p.desc}</p>
                
                <div className="space-y-4 mb-12">
                  {p.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-3 text-[10px] tracking-widest uppercase text-brand-text font-black">
                      <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        className="w-2 h-2 rounded-full bg-brand-primary shadow-sm" 
                      />
                      {f}
                    </div>
                  ))}
                </div>
                
                <Link to="/contact" className="btn-primary w-full text-center group-hover:shadow-brand-primary/40 group-hover:-translate-y-1">
                  Apply for {p.duration}
                </Link>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mt-12 bg-brand-primary/5 py-4 border-2 border-brand-primary/10 italic font-serif text-brand-primary text-sm shadow-inner"
          >
            Each program includes 3 follow-up sessions to ensure long-term success.
          </motion.div>
        </section>

        {/* Narrative Blocks with Hover Effects */}
        <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "A Different Approach",
                text: "This isn’t “boarding with training sprinkled in” but rather a full behavior-focused residency designed for real results. We focus on creating lasting change through structured, consistent training in a safe environment."
              },
              {
                title: "Ideal Candidates",
                text: "Ideal for dogs who are reactive, anxious, or testing boundaries, and for owners who want meaningful, lasting progress. This requires a commitment to follow-through at home to maintain behaviors."
              }
            ].map((block, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-16 bg-white border border-brand-border group hover:shadow-xl transition-all duration-500 shadow-sm"
              >
                <h2 className="text-2xl font-bold mb-8 italic-serif uppercase tracking-widest group-hover:text-brand-primary transition-colors">{block.title}</h2>
                <p className="text-brand-muted leading-relaxed font-medium text-sm group-hover:text-brand-text transition-colors">
                  {block.text}
                </p>
              </motion.div>
            ))}
        </div>
      </div>
    </motion.div>
  );
}

