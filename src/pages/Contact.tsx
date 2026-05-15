import { motion } from "motion/react";
import { Mail, Phone, Send, Instagram, Facebook, Dog, Bone, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-32 pb-24 overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none paw-pattern" />
      
      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-[5%] text-brand-primary/10 hidden lg:block"
      >
        <Dog size={120} />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-40 left-[2%] text-brand-accent/10 hidden lg:block"
      >
        <Bone size={80} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-5 gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <span className="text-brand-primary tracking-[0.5em] uppercase text-xs font-black mb-6 px-4 py-1 border-l-4 border-brand-primary block bg-white shadow-sm w-fit">
              Get In Touch
            </span>
            <h1 className="text-6xl md:text-8xl font-black mb-12 leading-[0.9] tracking-tighter uppercase">
              Inquire <br/>
              <span className="gradient-text italic-serif block mt-2">With Us</span>
            </h1>
            <p className="text-xl text-brand-muted mb-16 leading-relaxed font-medium">
              Ready to start your journey towards <span className="text-brand-primary">behavioral excellence</span>? Let's discuss your dog's future and build a lasting bond.
            </p>

            <div className="space-y-8">
              {[
                { 
                  icon: <Mail size={20} />, 
                  title: "Correspondence", 
                  value: "concierge@pawsandpraise.com",
                  color: "text-brand-primary",
                  bg: "bg-brand-primary/10"
                },
                { 
                  icon: <Phone size={20} />, 
                  title: "Direct Line", 
                  value: "+1 (555) 123-PAWS",
                  color: "text-brand-accent",
                  bg: "bg-brand-accent/10"
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className="flex gap-6 items-start group p-6 bg-white border border-brand-border hover:shadow-xl hover:border-brand-primary/30 transition-all duration-300 rounded-sm shadow-sm"
                >
                  <div className={`w-12 h-12 ${item.bg} flex items-center justify-center ${item.color} flex-shrink-0 group-hover:scale-110 transition-transform duration-300 rounded-full shadow-inner`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-[10px] tracking-widest uppercase text-brand-primary font-black mb-2 opacity-80">{item.title}</h4>
                    <p className="text-brand-text font-bold text-lg group-hover:text-brand-primary transition-colors">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-20 flex gap-6">
               {[
                 { icon: <Instagram size={20}/>, label: "Instagram" },
                 { icon: <Facebook size={20}/>, label: "Facebook" }
               ].map((social, i) => (
                 <motion.a 
                   key={i}
                   whileHover={{ y: -5, scale: 1.1 }}
                   href="#" 
                   className="w-12 h-12 border-2 border-brand-border flex items-center justify-center text-brand-muted hover:border-brand-primary hover:text-brand-primary transition-all rounded-full bg-white shadow-sm"
                  >
                   {social.icon}
                 </motion.a>
               ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <div className="relative group perspective-1000">
              <div className="absolute inset-0 border-2 border-brand-accent/20 translate-x-4 translate-y-4 rounded-sm transition-transform group-hover:translate-x-2 group-hover:translate-y-2 duration-500" />
              <div className="relative z-10 bg-white p-12 md:p-16 border border-brand-border shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                  <Sparkles size={100} className="text-brand-primary" />
                </div>
                
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20"
                  >
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }}
                      transition={{ duration: 1, type: "spring" }}
                      className="w-24 h-24 bg-brand-primary text-white flex items-center justify-center mx-auto mb-10 rounded-full shadow-2xl"
                    >
                      <Send size={40} />
                    </motion.div>
                    <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter">
                      Submission <span className="gradient-text italic-serif block">Received</span>
                    </h2>
                    <p className="text-brand-muted font-medium mb-12 text-lg">We will review your inquiry and respond within 24 business hours.</p>
                    <button 
                      onClick={() => setSubmitted(false)} 
                      className="btn-primary"
                    >
                      Send Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <form 
                    onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                    className="space-y-12"
                  >
                    <div className="grid md:grid-cols-2 gap-10">
                      <div className="border-b-2 border-brand-border pb-2 focus-within:border-brand-primary transition-all duration-300 group">
                        <label className="block text-[10px] tracking-widest uppercase text-brand-primary font-black mb-2 group-focus-within:text-brand-primary">Owner Name</label>
                        <input type="text" required className="w-full bg-transparent text-brand-text outline-none py-3 placeholder:text-brand-muted/30 font-bold text-lg" placeholder="A. Smith" />
                      </div>
                      <div className="border-b-2 border-brand-border pb-2 focus-within:border-brand-accent transition-all duration-300 group">
                        <label className="block text-[10px] tracking-widest uppercase text-brand-primary font-black mb-2 group-focus-within:text-brand-accent">Dog's Name</label>
                        <input type="text" required className="w-full bg-transparent text-brand-text outline-none py-3 placeholder:text-brand-muted/30 font-bold text-lg" placeholder="Max" />
                      </div>
                    </div>
                    
                    <div className="border-b-2 border-brand-border pb-2 focus-within:border-brand-primary transition-all duration-300 group">
                      <label className="block text-[10px] tracking-widest uppercase text-brand-primary font-black mb-2 group-focus-within:text-brand-primary">Email Address</label>
                      <input type="email" required className="w-full bg-transparent text-brand-text outline-none py-3 placeholder:text-brand-muted/30 font-bold text-lg" placeholder="email@address.com" />
                    </div>
                    
                    <div className="border-b-2 border-brand-border pb-2 focus-within:border-brand-accent transition-all duration-300 group">
                      <label className="block text-[10px] tracking-widest uppercase text-brand-primary font-black mb-2 group-focus-within:text-brand-accent">Training Category</label>
                      <div className="relative">
                        <select className="w-full bg-transparent text-brand-text outline-none py-3 font-bold text-lg appearance-none cursor-pointer">
                          <option className="text-brand-text">Behavior Modification</option>
                          <option className="text-brand-text">Clinical Residency</option>
                          <option className="text-brand-text">Field Adventure</option>
                          <option className="text-brand-text">Puppy Education</option>
                        </select>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                          <Dog size={16} className="text-brand-accent/50" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-b-2 border-brand-border pb-2 focus-within:border-brand-primary transition-all duration-300 group">
                      <label className="block text-[10px] tracking-widest uppercase text-brand-primary font-black mb-2 group-focus-within:text-brand-primary">Observations</label>
                      <textarea required rows={4} className="w-full bg-transparent text-brand-text outline-none py-3 placeholder:text-brand-muted/30 font-bold text-lg resize-none" placeholder="Primary concerns or goals?"></textarea>
                    </div>
                    
                    <button type="submit" className="w-full btn-primary py-6 text-sm group relative overflow-hidden">
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        Transmit Inquiry <Send size={18} />
                      </span>
                      <motion.div 
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                        className="absolute inset-0 bg-white/20 skew-x-12"
                      />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

