import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { CheckCircle2, Calendar, Target, Sparkles, Trophy } from "lucide-react";

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
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
        <header className="max-w-3xl mb-20">
          <span className="text-brand-primary tracking-[0.4em] uppercase text-[10px] font-bold mb-4 block">Personalized Coaching</span>
          <h1 className="text-5xl md:text-7xl font-light mb-8 italic-serif">Customized <span className="text-brand-text not-italic">Private Training</span></h1>
          <p className="text-lg text-brand-muted leading-relaxed font-light">
            Give your dog personalized, force-free training designed to build confidence, good manners, and a stronger bond with you.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border border-brand-border">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-12 flex flex-col border-r border-b border-brand-border last:border-r-0 md:[&:nth-child(2)]:border-r-0 lg:[&:nth-child(3n)]:border-r-0 transition-colors hover:bg-brand-primary/5 ${pkg.featured ? "bg-brand-primary/5" : ""}`}
            >
              <div className="text-brand-primary mb-8">
                {pkg.icon}
              </div>
              <h3 className="text-2xl font-light mb-4">{pkg.name}</h3>
              <div className="flex items-baseline gap-2 mb-6 font-mono">
                <span className="text-3xl text-brand-primary font-medium">{pkg.price}</span>
                <span className="text-brand-muted text-[10px] tracking-widest lowercase">/ {pkg.unit}</span>
              </div>
              <p className="mb-12 flex-grow text-sm text-brand-muted font-light leading-relaxed">
                {pkg.desc}
              </p>
              <Link
                to="/contact"
                className="btn-secondary w-full text-center"
              >
                Select Package
              </Link>
            </motion.div>
          ))}
        </div>

        <section className="mt-40 border-t border-brand-border pt-20">
          <div className="grid md:grid-cols-2 gap-20 items-center">
             <div className="relative">
                <div className="absolute inset-0 border border-brand-border -translate-x-4 -translate-y-4" />
                <img 
                  src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop" 
                  alt="Training interaction" 
                  className="w-full grayscale brightness-75 relative z-10 border border-brand-border"
                />
             </div>
             <div>
                <h2 className="text-4xl font-light mb-12">The <span className="italic-serif">Methodology</span></h2>
                <ul className="space-y-10">
                  <li className="flex gap-6">
                    <div className="text-brand-primary mt-1"><CheckCircle2 className="w-5 h-5" /></div>
                    <p className="text-brand-muted font-light leading-relaxed"><span className="text-brand-text font-medium block mb-1">Tailored Programming</span> Every session matches your dog’s unique sensory profile and personality.</p>
                  </li>
                  <li className="flex gap-6">
                     <div className="text-brand-primary mt-1"><CheckCircle2 className="w-5 h-5" /></div>
                    <p className="text-brand-muted font-light leading-relaxed"><span className="text-brand-text font-medium block mb-1">Force-Free Ethics</span> We exclusively use neurologically-sound, reward-based techniques.</p>
                  </li>
                  <li className="flex gap-6">
                     <div className="text-brand-primary mt-1"><CheckCircle2 className="w-5 h-5" /></div>
                    <p className="text-brand-muted font-light leading-relaxed"><span className="text-brand-text font-medium block mb-1">Owner Empowerment</span> In-depth education to ensure your success continues at home.</p>
                  </li>
                </ul>
             </div>
          </div>
        </section>
      </div>
    </div>
  );
}
