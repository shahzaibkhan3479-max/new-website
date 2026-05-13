import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Shield, Heart, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden border-b border-brand-border">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=2070&auto=format&fit=crop"
            alt="Happy dog training"
            className="w-full h-full object-cover opacity-20 grayscale brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-bg via-brand-bg/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block tracking-[0.3em] uppercase text-brand-primary text-xs mb-6 px-4 py-1 border border-brand-border rounded-sm bg-brand-primary/5">
              Force-Free & Professional
            </span>
            <h1 className="text-6xl md:text-8xl font-light leading-[1] mb-8 tracking-tighter">
              Behavioral <br />
              <span className="italic-serif">Excellence</span>
            </h1>
            <p className="text-lg text-brand-muted mb-12 max-w-lg leading-relaxed font-light">
              Structured, intensive training tailored to your dog's reactivity and confidence. Creating lasting change through daily professional sessions.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link to="/contact" className="btn-primary">
                Book Consultation
              </Link>
              <Link to="/board-and-train" className="btn-secondary">
                Our Programs
              </Link>
            </div>
          </motion.div>

          {/* Luxury Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative p-4 md:p-8"
          >
            <div className="absolute inset-0 border border-brand-border translate-x-4 translate-y-4 rounded-sm" />
            <div className="relative z-10 overflow-hidden shadow-2xl border border-brand-border">
              <img
                src="https://images.unsplash.com/photo-1541591490109-6a45bd952c94?q=80&w=2000&auto=format&fit=crop"
                alt="Focused White Swiss Shepherd"
                className="w-full aspect-[4/5] object-cover grayscale-[0.3] hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-0 border-b border-brand-border">
        <div className="grid md:grid-cols-3">
          {[
            {
              id: "01",
              title: "Private Coaching",
              desc: "Personalized one-on-one sessions addressing leash manners, reactivity, and intermediate obedience.",
              link: "/private-training",
              price: "START AT $125 / HR",
            },
            {
              id: "02",
              title: "Day Adventures",
              desc: "Urban and nature excursions where your dog practices skills in real-world environments while building confidence.",
              link: "/day-training",
              price: "2.5 HR SESSIONS — $150",
            },
            {
              id: "03",
              title: "Board & Train",
              desc: "The ultimate 2nd-home immersion for foundational house manners and specialized behavior support.",
              link: "/board-and-train",
              price: "INTENSIVE PROGRAMS",
            },
          ].map((s, i) => (
            <motion.div
              key={i}
              className="service-card group border-l-0 md:border-l first:border-l-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="flex flex-col h-full">
                <span className="text-[10px] tracking-[0.2em] text-brand-primary mb-2 font-bold">{s.id}</span>
                <h3 className="text-3xl font-light mb-6">
                  {s.title.split(' ')[0]} <span className="italic-serif">{s.title.split(' ')[1]}</span>
                </h3>
                <p className="text-brand-muted text-sm mb-8 leading-loose font-light">{s.desc}</p>
                <div className="mt-auto">
                   <div className="font-mono text-[10px] text-brand-muted tracking-widest mb-6">{s.price}</div>
                   <Link to={s.link} className="btn-secondary w-full text-center group-hover:bg-brand-primary group-hover:text-brand-bg">
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 relative overflow-hidden bg-brand-surface/20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <h2 className="text-5xl font-light leading-tight">
              Crafting <span className="italic-serif">Lasting</span> Habits
            </h2>
            <div className="space-y-10">
              {[
                { title: "Structured, Positive Training", desc: "Every minute is intentionally designed to foster clarity and trust." },
                { title: "Daily Visual Reports", desc: "Cinematic updates showing your dog's progress and daily wins." },
                { title: "Tailored Methodology", desc: "No generic templates. We adapt to your dog's unique neurological profile." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="bg-brand-accent/10 p-3 border border-brand-accent/20 rounded-sm">
                    <Shield className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-2 tracking-tight">{item.title}</h4>
                    <p className="text-brand-muted text-sm leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute inset-0 border border-brand-primary/30 -m-4 group-hover:m-0 transition-all duration-700" />
            <img 
              src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=2074&auto=format&fit=crop" 
              alt="Golden Retriever training" 
              className="w-full grayscale brightness-75 hover:grayscale-0 transition-all duration-1000 object-cover h-[600px]"
            />
            <div className="absolute bottom-10 right-10 p-6 bg-brand-bg/90 backdrop-blur-md border border-brand-border">
                <p className="text-[10px] tracking-widest text-brand-primary uppercase mb-2">Our Mission</p>
                <p className="font-serif italic text-xl">Helping dogs learn, grow & thrive.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 border-t border-brand-border bg-brand-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-left">
            <div className="max-w-2xl">
              <span className="text-brand-primary tracking-[0.4em] uppercase text-[10px] font-bold mb-4 block">Testimonials</span>
              <h2 className="text-5xl font-light italic-serif tracking-tight">Verified <span className="text-brand-text not-italic">Success Stories</span></h2>
            </div>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[10px] tracking-widest uppercase text-brand-primary font-bold border-b border-brand-primary/30 pb-2 hover:border-brand-primary transition-all mb-2"
            >
              Read all 30+ reviews on Google Maps
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-brand-border border border-brand-border overflow-hidden">
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
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-brand-bg p-8 hover:bg-brand-primary/5 transition-colors group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 overflow-hidden border border-brand-border group-hover:border-brand-primary/50 transition-colors">
                    <img src={review.img} alt={review.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium tracking-tight whitespace-nowrap">{review.name}</h4>
                    <p className="text-[10px] text-brand-primary uppercase tracking-widest">{review.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={10} className="fill-brand-accent text-brand-accent" />)}
                </div>
                <p className="text-brand-muted text-sm font-light leading-relaxed italic">"{review.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
