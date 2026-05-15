import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router-dom";
import { CheckCircle2, Calendar, Target, Sparkles, Trophy, ArrowRight, Star } from "lucide-react";
import { useRef } from "react";

const packages = [
  {
    name: "Custom Private Training",
    price: "$125",
    unit: "hour",
    icon: <Target />,
    desc: "Work with your dog on any skill, behavior, or challenge in a focused, one-on-one session.",
  },
  {
    name: "Behavior Modification",
    price: "$150",
    unit: "hour",
    icon: <Sparkles />,
    desc: "Target unwanted behaviors such as reactivity, anxiety, or aggression using positive methods.",
    featured: true,
  },
  {
    name: "Leash Reactivity",
    price: "$700",
    unit: "6 Weeks",
    icon: <Calendar />,
    desc: "Designed for dogs who struggle with reactivity or distractions during walks. Focus on engagement.",
  },
  {
    name: "Puppy Training",
    price: "$625",
    unit: "6 Weeks",
    icon: <HeartIcon />,
    desc: "Foundational skills, socialization, and confidence building for puppies ages 8-20 weeks.",
  },
  {
    name: "Basic Obedience",
    price: "$500",
    unit: "5 Weeks",
    icon: <CheckCircle2 />,
    desc: "Essential skills like sit, stay, come, and leave it. For older dogs or those needing a refresher.",
  },
  {
    name: "CGC Certification",
    price: "$400",
    unit: "4 Weeks",
    icon: <Trophy />,
    desc: "Prepare your dog for the Canine Good Citizen test with focus on social manners and reliability.",
  }
];

function HeartIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>;
}

export default function PrivateTraining() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <div ref={containerRef} className="pt-32 pb-24 relative overflow-hidden">
      {/* Dynamic Background */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none opacity-[0.03] z-0 flex items-center justify-center"
      >
        <Sparkles size={800} className="text-brand-primary" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <header className="max-w-3xl mb-24 md:text-left text-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-primary tracking-[0.5em] uppercase text-xs font-black mb-6 px-4 py-1 border-l-4 border-brand-primary block bg-white shadow-sm w-fit mx-auto md:mx-0">
              Personalized Coaching
            </span>
            <h1 className="text-7xl md:text-9xl font-black mb-8 leading-[0.85] tracking-tighter uppercase">
              Customized <br/>
              <span className="gradient-text italic-serif block mt-2">Private Training</span>
            </h1>
            <p className="text-2xl text-brand-muted leading-relaxed font-medium max-w-2xl">
              Give your dog <span className="text-brand-primary">personalized</span>, force-free training designed to build <span className="text-brand-accent">unshakable confidence</span>.
            </p>
          </motion.div>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -12 }}
              className={`p-12 flex flex-col border-2 border-brand-border bg-white shadow-sm transition-all duration-700 hover:shadow-[0_30px_60px_-15px_rgba(160,26,26,0.1)] hover:border-brand-primary/30 group relative overflow-hidden rounded-sm ${pkg.featured ? "ring-2 ring-brand-primary/20" : ""}`}
            >
              {pkg.featured && (
                <div className="absolute top-0 right-0 p-4">
                  <Star className="text-brand-primary fill-brand-primary animate-pulse" size={20} />
                </div>
              )}
              
              <motion.div 
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                className="text-brand-accent mb-8 p-5 bg-brand-surface rounded-2xl w-fit group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 shadow-inner"
              >
                {pkg.icon}
              </motion.div>
              
              <h3 className="text-3xl font-black mb-4 group-hover:text-brand-primary transition-colors tracking-tighter uppercase">{pkg.name}</h3>
              
              <div className="flex items-baseline gap-2 mb-6 font-mono border-b border-brand-border pb-4 w-fit">
                <span className="text-4xl text-brand-primary font-black tracking-tighter">{pkg.price}</span>
                <span className="text-brand-text text-[10px] tracking-widest uppercase font-black opacity-60">/ {pkg.unit}</span>
              </div>
              
              <p className="mb-12 flex-grow text-base text-brand-muted font-medium leading-relaxed group-hover:text-brand-text transition-colors">
                {pkg.desc}
              </p>
              
              <Link
                to="/contact"
                className="btn-primary w-full text-center py-5 text-xs font-black uppercase tracking-widest group-hover:shadow-brand-primary/40"
              >
                <div className="flex items-center justify-center gap-2">
                  Inquire Now <ArrowRight size={14} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <section className="mt-48 border-t-2 border-brand-border pt-32">
          <div className="grid md:grid-cols-2 gap-24 items-center">
             <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative group lg:pr-12"
             >
                <div className="absolute inset-0 border-2 border-brand-primary/20 -translate-x-6 -translate-y-6 rounded-sm group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700" />
                <div className="relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop" 
                    alt="Training interaction" 
                    className="w-full grayscale brightness-75 relative z-10 border-2 border-brand-border transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-primary/10 opacity-0 group-hover:opacity-100 transition-opacity z-20" />
                </div>
             </motion.div>
             
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-6xl font-black mb-16 tracking-tighter uppercase leading-[0.9]">
                  The <br/>
                  <span className="gradient-text italic-serif block">Methodology</span>
                </h2>
                <ul className="space-y-12">
                  {[
                    { title: "Tailored Programming", desc: "Every session matches your dog’s unique sensory profile and personality." },
                    { title: "Force-Free Ethics", desc: "We exclusively use neurologically-sound, reward-based techniques." },
                    { title: "Owner Empowerment", desc: "In-depth education to ensure your success continues at home." }
                  ].map((item, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.2 }}
                      className="flex gap-8 group"
                    >
                      <div className="text-brand-primary mt-1 flex-shrink-0 bg-brand-surface p-3 rounded-full group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <div>
                        <span className="text-brand-text font-black block mb-2 uppercase tracking-tighter text-lg leading-none group-hover:text-brand-primary transition-colors">{item.title}</span>
                        <p className="text-brand-muted font-medium leading-relaxed text-sm group-hover:text-brand-text">{item.desc}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
             </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
