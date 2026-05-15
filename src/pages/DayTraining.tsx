import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router-dom";
import { Mountain, MapPin, Compass, Users, Sun, Coffee, CheckCircle2, ArrowRight } from "lucide-react";
import { useRef } from "react";

export default function DayTraining() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="pt-32 pb-24 relative overflow-hidden">
      {/* Dynamic Background */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none opacity-5 z-0"
      >
        <div className="absolute top-20 left-10"><Mountain size={400} /></div>
        <div className="absolute bottom-40 right-10"><DogIcon size={300} /></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <header className="text-center max-w-4xl mx-auto mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-primary tracking-[0.5em] uppercase text-xs font-black mb-6 px-4 py-1 border-l-4 border-brand-primary block bg-white shadow-sm w-fit mx-auto">Real-World Application</span>
            <h1 className="text-7xl md:text-9xl font-black mb-10 leading-[0.85] tracking-tighter uppercase">
              Clinical <br/>
              <span className="gradient-text italic-serif block mt-4">Adventures</span>
            </h1>
            <p className="text-2xl text-brand-muted leading-relaxed font-medium max-w-2xl mx-auto">
              Bridging the gap between the <span className="text-brand-text">controlled room</span> and the <span className="text-brand-primary">distracting world</span>.
            </p>
          </motion.div>
        </header>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Hiking */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="group bg-white border-2 border-brand-border relative p-12 shadow-sm hover:shadow-[0_30px_60px_-15px_rgba(160,26,26,0.15)] transition-all duration-700 rounded-sm"
          >
            <div className="relative overflow-hidden mb-12 border border-brand-border aspect-video shadow-inner">
              <img
                src="https://images.unsplash.com/photo-1551730459-92db2a308d6a?q=80&w=1974&auto=format&fit=crop"
                alt="Dog hiking"
                className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-1000"
              />
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-6 left-6 bg-brand-primary text-white shadow-xl px-4 py-1.5 text-[10px] font-black tracking-widest uppercase rounded-full"
              >
                $150 / Field Session
              </motion.div>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <motion.div 
                  whileHover={{ rotate: 180 }}
                  className="text-brand-accent transform transition-transform duration-500"
                >
                  <Mountain size={32} />
                </motion.div>
                <h2 className="text-3xl font-bold tracking-tight italic-serif group-hover:text-brand-primary transition-colors">Play Paws <span className="text-brand-text not-italic font-bold">Adventures</span></h2>
              </div>
              <p className="text-brand-muted font-medium text-sm mb-12 leading-relaxed max-w-md group-hover:text-brand-text transition-colors">
                A 2.5-hour deep immersion into nature trails. We refine recall and engagement amid high-distraction environments with expert care.
              </p>
              <div className="flex gap-10 mb-12 border-y border-brand-border py-6">
                <div className="flex items-center gap-3 text-[10px] tracking-widest uppercase text-brand-text font-black">
                  <Compass size={18} className="text-brand-primary group-hover:animate-spin-slow" />
                  <span>2.5 Hours</span>
                </div>
                <div className="flex items-center gap-3 text-[10px] tracking-widest uppercase text-brand-text font-black">
                  <Sun size={18} className="text-brand-primary group-hover:animate-pulse" />
                  <span>Enrichment</span>
                </div>
              </div>
              <Link to="/contact" className="btn-primary w-full text-center group-hover:shadow-brand-primary/40 group-hover:-translate-y-1">Book Adventure</Link>
            </div>
          </motion.div>

          {/* Urban */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group bg-white border-2 border-brand-border relative p-12 shadow-sm hover:shadow-[0_30px_60px_-15px_rgba(160,26,26,0.15)] transition-all duration-700 rounded-sm"
          >
            <div className="relative overflow-hidden mb-12 border border-brand-border aspect-video shadow-inner">
              <img
                src="https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=2074&auto=format&fit=crop"
                alt="Dog in urban setting"
                className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-1000"
              />
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="absolute top-6 left-6 bg-brand-primary text-white shadow-xl px-4 py-1.5 text-[10px] font-black tracking-widest uppercase rounded-full"
              >
                $150 / City Session
              </motion.div>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="text-brand-accent transition-all duration-300"
                >
                  <MapPin size={32} />
                </motion.div>
                <h2 className="text-3xl font-bold tracking-tight italic-serif group-hover:text-brand-primary transition-colors">Urban <span className="text-brand-text not-italic font-bold">Exposure</span></h2>
              </div>
              <p className="text-brand-muted font-medium text-sm mb-12 leading-relaxed max-w-md group-hover:text-brand-text transition-colors">
                Tactical training in urban settings. Navigating busy streets, traffic, and high-density areas with total poise and focus.
              </p>
              <div className="flex gap-10 mb-12 border-y border-brand-border py-6">
                <div className="flex items-center gap-3 text-[10px] tracking-widest uppercase text-brand-text font-black">
                  <Users size={18} className="text-brand-primary group-hover:scale-110 transition-transform" />
                  <span>Social proofing</span>
                </div>
                <div className="flex items-center gap-3 text-[10px] tracking-widest uppercase text-brand-text font-black">
                  <Coffee size={18} className="text-brand-primary group-hover:rotate-12 transition-transform" />
                  <span>Neutrality work</span>
                </div>
              </div>
              <Link to="/contact" className="btn-primary w-full text-center group-hover:shadow-brand-primary/40 group-hover:-translate-y-1">Book Exposure</Link>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-40"
        >
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black tracking-tighter uppercase mb-6">The Adventure <span className="gradient-text italic-serif">Workflow</span></h2>
            <p className="text-brand-muted font-medium max-w-xl mx-auto uppercase tracking-widest text-[10px]">How we transform your dog's worldview</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { 
                step: "01", 
                title: "Neutrality Load", 
                desc: "We start in low-stake environments to establish a baseline of calm and focus before moving to higher pressure areas." 
              },
              { 
                step: "02", 
                title: "Stress Testing", 
                desc: "Controlled exposure to triggers—wildlife, busy patios, or heavy traffic—while maintaining engagement." 
              },
              { 
                step: "03", 
                title: "Transfer session", 
                desc: "We meet with you to transfer the newly refined behaviors and ensure you can maintain the standard." 
              }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative p-10 bg-brand-surface border border-brand-border group hover:bg-white transition-all duration-500 shadow-sm hover:shadow-xl"
              >
                <div className="text-6xl font-black text-brand-primary/5 absolute top-4 right-4 group-hover:text-brand-primary/10 transition-colors">{step.step}</div>
                <h4 className="text-2xl font-black mb-4 uppercase tracking-tighter">{step.title}</h4>
                <p className="text-brand-muted text-sm leading-relaxed font-medium">{step.desc}</p>
                <motion.div 
                  className="mt-8 text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ x: 5 }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <section className="mt-40 p-24 border-2 border-brand-border relative overflow-hidden group rounded-sm shadow-2xl">
            <div className="absolute inset-0 bg-brand-surface opacity-50 group-hover:opacity-80 transition-opacity" />
            <motion.div 
              className="relative z-10 text-center"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
            >
                <h2 className="text-5xl font-black mb-10 italic-serif uppercase tracking-tighter">Bridging the Gap</h2>
                <div className="w-20 h-1 bg-brand-primary mx-auto mb-10" />
                <p className="text-brand-text max-w-3xl mx-auto font-bold leading-relaxed italic text-2xl md:text-3xl">
                  "Training isn't just what happens in a room; <br/>
                  <span className="text-brand-primary">it's how your dog interprets the world.</span>"
                </p>
            </motion.div>
        </section>
      </div>
    </div>
  );
}

function DogIcon({ size }: { size: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M10 5.172C10 3.782 8.823 2.65 7.433 2.458a1.5 1.5 0 0 0-1.42 2.603l.386.31c.31.248.513.606.571.996L7.5 10c.1 1.6-1.5 2.6-3 2.6S1.5 11.6 1.6 10l.5-4a1.5 1.5 0 1 0-3 0l-.5 4c-.2 3.2 2.1 5.9 5.3 6.1l4 .2c1.3.1 2.5-.4 3.4-1.3l2.8-2.8c.8-.8.8-2.1 0-2.9l-4.1-4.828Z"/>
      <path d="M14.5 10c1.3 0 2.5.5 3.4 1.4l3.1 3.1c1.2 1.2 1 3.2-.5 4.1L19 20c-1.3.8-3 .5-4-1l-1.5-2"/>
      <path d="M12 10v4"/>
    </svg>
  );
}
