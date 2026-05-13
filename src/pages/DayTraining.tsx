import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Mountain, MapPin, Compass, Users, Sun, Coffee } from "lucide-react";

export default function DayTraining() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center max-w-4xl mx-auto mb-24">
          <span className="text-brand-primary tracking-[0.4em] uppercase text-[10px] font-bold mb-4 block">Real-World Application</span>
          <h1 className="text-5xl md:text-7xl font-light mb-8">Clinical <span className="italic-serif">Adventures</span></h1>
          <p className="text-lg text-brand-muted leading-relaxed font-light">
            Bridging the gap between the training room and the real world. We strengthen obedience where distractions actually exist—in the field.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-px bg-brand-border border border-brand-border overflow-hidden">
          {/* Hiking */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="group bg-brand-bg relative p-12 transition-colors hover:bg-brand-primary/5"
          >
            <div className="relative overflow-hidden mb-12 border border-brand-border aspect-square md:aspect-video">
              <img
                src="https://images.unsplash.com/photo-1551730459-92db2a308d6a?q=80&w=1974&auto=format&fit=crop"
                alt="Dog hiking"
                className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
              />
              <div className="absolute top-6 left-6 bg-brand-primary text-brand-bg px-4 py-1 text-[10px] font-bold tracking-widest uppercase">
                $150 / Field Session
              </div>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <Mountain size={24} className="text-brand-primary" />
                <h2 className="text-3xl font-light tracking-tight italic-serif">Play Paws <span className="text-brand-text not-italic font-light">Adventures</span></h2>
              </div>
              <p className="text-brand-muted font-light text-sm mb-12 leading-relaxed max-w-md">
                A 2.5-hour deep immersion into nature trails. We refine recall and engagement amid high-distraction environments.
              </p>
              <div className="flex gap-10 mb-12 border-y border-brand-border/50 py-6">
                <div className="flex items-center gap-2 text-[10px] tracking-widest uppercase text-brand-muted">
                  <Compass size={14} className="text-brand-primary" />
                  <span>2.5 Hours</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] tracking-widest uppercase text-brand-muted">
                  <Sun size={14} className="text-brand-primary" />
                  <span>Physical enrichment</span>
                </div>
              </div>
              <Link to="/contact" className="btn-primary w-full md:w-auto inline-block text-center lowercase">Book session</Link>
            </div>
          </motion.div>

          {/* Urban */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="group bg-brand-bg relative p-12 transition-colors hover:bg-brand-primary/5"
          >
            <div className="relative overflow-hidden mb-12 border border-brand-border aspect-square md:aspect-video">
              <img
                src="https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=2074&auto=format&fit=crop"
                alt="Dog in urban setting"
                className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
              />
              <div className="absolute top-6 left-6 bg-brand-primary text-brand-bg px-4 py-1 text-[10px] font-bold tracking-widest uppercase">
                $150 / City Session
              </div>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <MapPin size={24} className="text-brand-primary" />
                <h2 className="text-3xl font-light tracking-tight italic-serif">Urban <span className="text-brand-text not-italic font-light">Exposure</span></h2>
              </div>
              <p className="text-brand-muted font-light text-sm mb-12 leading-relaxed max-w-md">
                Tactical training in urban settings. Navigating coffee shops, traffic, and high-density areas with poise and focus.
              </p>
              <div className="flex gap-10 mb-12 border-y border-brand-border/50 py-6">
                <div className="flex items-center gap-2 text-[10px] tracking-widest uppercase text-brand-muted">
                  <Users size={14} className="text-brand-primary" />
                  <span>Social proofing</span>
                </div>
                <div className="flex items-center gap-3 text-[10px] tracking-widest uppercase text-brand-muted">
                  <Coffee size={14} className="text-brand-primary" />
                  <span>Neutrality work</span>
                </div>
              </div>
              <Link to="/contact" className="btn-primary w-full md:w-auto inline-block text-center lowercase">Book session</Link>
            </div>
          </motion.div>
        </div>

        <section className="mt-40 p-20 border border-brand-border relative overflow-hidden group">
            <div className="absolute inset-0 bg-brand-surface opacity-50 group-hover:opacity-80 transition-opacity" />
            <div className="relative z-10 text-center">
                <h2 className="text-4xl font-light mb-8 italic-serif uppercase tracking-widest">Bridging the Gap</h2>
                <p className="text-brand-muted max-w-2xl mx-auto font-light leading-loose italic text-xl">
                  "Training isn't just what happens in a room; it's how your dog interprets the world."
                </p>
            </div>
        </section>
      </div>
    </div>
  );
}
