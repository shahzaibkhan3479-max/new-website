import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Shield, Heart, Zap, Bone } from "lucide-react";

export default function Home() {
  return (
    <div className="pt-20 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden border-b border-brand-border">
        {/* Background Paw Pattern */}
        <div className="absolute inset-0 z-0 opacity-40 paw-pattern" />
        
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=2070&auto=format&fit=crop"
            alt="Happy dog training"
            className="w-full h-full object-cover opacity-10 grayscale brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-bg via-brand-bg/60 to-transparent" />
        </div>

        {/* Floating "Fun" Elements */}
        <motion.div 
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-[10%] opacity-20 text-brand-primary hidden lg:block"
        >
          <Bone size={80} className="rotate-45" />
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 left-[5%] opacity-15 text-brand-accent hidden lg:block"
        >
          <Bone size={60} className="-rotate-12" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-block tracking-[0.3em] uppercase text-brand-primary text-[10px] font-bold mb-6 px-4 py-1.5 border border-brand-primary/20 rounded-full bg-white shadow-sm">
                Force-Free & Professional
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-8xl font-black leading-[0.9] mb-8 tracking-tighter"
            >
              <span className="block mb-2">Behavioral</span>
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4, type: "spring" }}
                className="gradient-text italic-serif block"
              >
                Excellence
              </motion.span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-brand-muted mb-12 max-w-lg leading-relaxed font-medium"
            >
              Structured, intensive training <span className="text-brand-primary font-bold">tailored</span> to your dog's reactivity. Creating <span className="text-brand-accent font-bold">lasting change</span> through professional sessions.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-6"
            >
              <Link to="/contact" className="btn-primary group relative overflow-hidden">
                <span className="relative z-10">Book Consultation</span>
                <motion.div 
                  animate={{ x: ['100%', '-100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-white/20 skew-x-12"
                />
              </Link>
              <Link to="/board-and-train" className="btn-secondary group">
                <span className="group-hover:translate-x-1 transition-transform inline-block">Our Programs</span>
              </Link>
            </motion.div>
          </div>

          {/* Luxury Frame with Floating Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="relative p-4 md:p-8 perspective-1000"
          >
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 border-2 border-brand-accent/30 translate-x-4 translate-y-4 rounded-sm" 
            />
            <motion.div 
              whileHover={{ scale: 1.02, rotateY: 5 }}
              className="relative z-10 overflow-hidden shadow-[20px_20px_0px_rgba(160,26,26,0.1)] border border-brand-border bg-white"
            >
              <img
                src="https://images.unsplash.com/photo-1541591490109-6a45bd952c94?q=80&w=2000&auto=format&fit=crop"
                alt="Focused White Swiss Shepherd"
                className="w-full aspect-[4/5] object-cover grayscale-[0.2] transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-brand-primary/10 mix-blend-overlay" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid with Flashy Reveal */}
      <section className="py-24 border-b border-brand-border relative">
        <div className="grid md:grid-cols-3">
          {[
            {
              id: "01",
              title: "Private Coaching",
              desc: "Personalized one-on-one sessions addressing leash manners, reactivity, and intermediate obedience.",
              link: "/private-training",
              price: "START AT $125 / HR",
              accent: "bg-brand-primary/5"
            },
            {
              id: "02",
              title: "Day Adventures",
              desc: "Urban and nature excursions where your dog practices skills in real-world environments while building confidence.",
              link: "/day-training",
              price: "2.5 HR SESSIONS — $150",
              accent: "bg-brand-accent/5"
            },
            {
              id: "03",
              title: "Board & Train",
              desc: "The ultimate 2nd-home immersion for foundational house manners and specialized behavior support.",
              link: "/board-and-train",
              price: "INTENSIVE PROGRAMS",
              accent: "bg-brand-primary/5"
            },
          ].map((s, i) => (
            <motion.div
              key={i}
              className={`service-card group border-r border-brand-border last:border-r-0 relative overflow-hidden`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <div className={`absolute inset-0 ${s.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="flex flex-col h-full relative z-10">
                <span className="text-[10px] tracking-[0.2em] text-brand-primary mb-2 font-black uppercase">{s.id}</span>
                <h3 className="text-3xl font-bold mb-6 group-hover:text-brand-primary transition-colors">
                  {s.title.split(' ')[0]} <span className="italic-serif">{s.title.split(' ')[1]}</span>
                </h3>
                <p className="text-brand-muted text-sm mb-8 leading-loose font-medium group-hover:text-brand-text transition-colors">{s.desc}</p>
                <div className="mt-auto">
                   <div className="font-mono text-[10px] text-brand-text tracking-widest mb-6 font-black uppercase opacity-90 border-b border-brand-primary/20 pb-2 w-fit">{s.price}</div>
                   <Link 
                     to={s.link} 
                     className="btn-secondary w-full text-center group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary transition-all duration-300 font-black"
                    >
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pillars Section with Cinematic Images */}
      <section className="py-32 relative overflow-hidden bg-brand-surface">
        {/* Floating Bubbles */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-brand-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-brand-accent/5 rounded-full blur-3xl animate-pulse-slow" />
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-5xl md:text-7xl font-black leading-none tracking-tighter uppercase">
              Crafting <span className="gradient-text italic-serif font-black underline decoration-brand-accent/30 underline-offset-8">Lasting</span> Impressions
            </h2>
            <div className="space-y-10">
              {[
                { title: "Structured, Positive Training", desc: "Every minute is intentionally designed to foster clarity and trust." },
                { title: "Daily Visual Reports", desc: "Cinematic updates showing your dog's progress and daily wins." },
                { title: "Tailored Methodology", desc: "No generic templates. We adapt to your dog's unique neurological profile." }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="flex gap-6 items-start group"
                >
                  <div className="bg-brand-accent/10 p-4 border border-brand-accent/20 rounded-xl group-hover:bg-brand-primary group-hover:border-brand-primary transition-all duration-300 shadow-sm">
                    <Shield className="w-6 h-6 text-brand-accent group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black mb-2 tracking-tighter group-hover:text-brand-primary transition-colors">{item.title}</h4>
                    <p className="text-brand-muted text-base leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group perspective-1000"
          >
            <div className="absolute inset-0 border-2 border-brand-primary/20 -m-6 group-hover:-m-4 transition-all duration-700 rounded-sm" />
            <div className="overflow-hidden relative shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=2074&auto=format&fit=crop" 
                alt="Golden Retriever training" 
                className="w-full grayscale brightness-75 hover:grayscale-0 hover:scale-105 transition-all duration-1000 object-cover h-[650px]"
              />
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="absolute bottom-10 right-10 p-8 bg-white shadow-2xl border-l-4 border-brand-primary max-w-xs"
              >
                  <p className="text-[10px] tracking-widest text-brand-primary uppercase mb-3 font-black">Our Philosophy</p>
                  <p className="font-serif italic text-2xl text-brand-text">"Helping dogs learn, grow & thrive."</p>
                  <div className="mt-4 flex gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-brand-accent text-brand-accent" />)}
                  </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reviews Section with Fancy Cards */}
      <section className="py-32 border-t border-brand-border bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] paw-pattern pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 text-left relative z-10">
            <div className="max-w-2xl">
              <span className="text-brand-primary tracking-[0.4em] uppercase text-[10px] font-black mb-4 block">Testimonials</span>
              <h2 className="text-5xl md:text-6xl font-light italic-serif tracking-tight">Verified <span className="text-brand-text not-italic">Success Stories</span></h2>
            </div>
            <motion.a 
              whileHover={{ x: 5 }}
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[10px] tracking-widest uppercase text-brand-primary font-black border-b-2 border-brand-primary/30 pb-2 hover:border-brand-primary transition-all mb-2 flex items-center gap-2"
            >
              Read all 30+ reviews on Google Maps <ArrowRight size={14} />
            </motion.a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Sarah Jenkins",
                role: "GSD Owner",
                text: "The board and train program completely changed our lives. Our reactive dog is now calm and focused on walks.",
                img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
              },
              {
                name: "Michael Ross",
                role: "Golden Retriever Owner",
                text: "Amazing experience. The daily cinematic updates kept us at ease while Max was learning so much.",
                img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
              },
              {
                name: "Emily White",
                role: "Doodle Owner",
                text: "Professional and force-free. I can't recommend Paws & Praise enough for their intermediate coaching sessions.",
                img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
              },
              {
                name: "David Kim",
                role: "Beagle Owner",
                text: "Urban adventures were just what my city dog needed. He's much more confident on busy streets now.",
                img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
              }
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-brand-surface p-10 border border-brand-border transition-all duration-300 group hover:shadow-2xl hover:bg-white"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 overflow-hidden rounded-full border-2 border-brand-accent/20 group-hover:border-brand-primary transition-colors">
                    <img src={review.img} alt={review.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold tracking-tight whitespace-nowrap">{review.name}</h4>
                    <p className="text-[10px] text-brand-primary uppercase tracking-widest font-black">{review.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-brand-accent text-brand-accent" />)}
                </div>
                <p className="text-brand-text text-sm font-medium leading-relaxed italic group-hover:text-brand-primary transition-colors">"{review.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

