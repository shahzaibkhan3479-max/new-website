import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Instagram, Facebook } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-20">
          <div className="lg:col-span-2">
            <h1 className="text-5xl md:text-7xl font-light mb-12 italic-serif">Inquire <br/><span className="text-brand-text not-italic font-light">With Us</span></h1>
            <p className="text-lg text-brand-muted mb-16 leading-relaxed font-light">
              Ready to start your journey towards behavioral excellence? Let's discuss your dog's future.
            </p>

            <div className="space-y-12">
              <div className="flex gap-6 items-start">
                <div className="w-10 h-10 border border-brand-border flex items-center justify-center text-brand-primary flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-[10px] tracking-widest uppercase text-brand-primary font-bold mb-2">Correspondence</h4>
                  <p className="text-brand-text font-light">concierge@pawsandpraise.com</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-10 h-10 border border-brand-border flex items-center justify-center text-brand-primary flex-shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-[10px] tracking-widest uppercase text-brand-primary font-bold mb-2">Direct Line</h4>
                  <p className="text-brand-text font-light">+1 (555) 123-PAWS</p>
                </div>
              </div>
            </div>

            <div className="mt-20 flex gap-6">
               <a href="#" className="w-10 h-10 border border-brand-border flex items-center justify-center text-brand-muted hover:border-brand-primary hover:text-brand-primary transition-all">
                  <Instagram size={16} />
               </a>
               <a href="#" className="w-10 h-10 border border-brand-border flex items-center justify-center text-brand-muted hover:border-brand-primary hover:text-brand-primary transition-all">
                  <Facebook size={16} />
               </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="p-1 border border-brand-border">
              <div className="bg-brand-surface p-12 md:p-16 border border-brand-border">
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-20"
                  >
                    <div className="w-16 h-16 border border-brand-primary text-brand-primary flex items-center justify-center mx-auto mb-8">
                      <Send size={24} />
                    </div>
                    <h2 className="text-3xl font-light mb-4 italic-serif">Submission <span className="not-italic">Received</span></h2>
                    <p className="text-brand-muted font-light mb-8">We will review your inquiry and respond within 24 business hours.</p>
                    <button onClick={() => setSubmitted(false)} className="text-[10px] tracking-widest uppercase text-brand-primary font-bold underline underline-offset-4">New Inquiry</button>
                  </motion.div>
                ) : (
                  <form 
                    onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                    className="space-y-10"
                  >
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="border-b border-brand-border pb-2 focus-within:border-brand-primary transition-colors">
                        <label className="block text-[10px] tracking-widest uppercase text-brand-primary font-bold mb-2">Owner Name</label>
                        <input type="text" required className="w-full bg-transparent text-brand-text outline-none py-2 placeholder:text-brand-muted/30 font-light" placeholder="A. Smith" />
                      </div>
                      <div className="border-b border-brand-border pb-2 focus-within:border-brand-primary transition-colors">
                        <label className="block text-[10px] tracking-widest uppercase text-brand-primary font-bold mb-2">Dog's Name</label>
                        <input type="text" required className="w-full bg-transparent text-brand-text outline-none py-2 placeholder:text-brand-muted/30 font-light" placeholder="Max" />
                      </div>
                    </div>
                    <div className="border-b border-brand-border pb-2 focus-within:border-brand-primary transition-colors">
                      <label className="block text-[10px] tracking-widest uppercase text-brand-primary font-bold mb-2">Email Address</label>
                      <input type="email" required className="w-full bg-transparent text-brand-text outline-none py-2 placeholder:text-brand-muted/30 font-light" placeholder="email@address.com" />
                    </div>
                    <div className="border-b border-brand-border pb-2 focus-within:border-brand-primary transition-colors">
                      <label className="block text-[10px] tracking-widest uppercase text-brand-primary font-bold mb-2">Training Category</label>
                      <select className="w-full bg-transparent text-brand-text outline-none py-2 font-light appearance-none">
                        <option className="bg-brand-surface">Behavior Modification</option>
                        <option className="bg-brand-surface">Clinical Residency</option>
                        <option className="bg-brand-surface">Field Adventure</option>
                        <option className="bg-brand-surface">Puppy Education</option>
                      </select>
                    </div>
                    <div className="border-b border-brand-border pb-2 focus-within:border-brand-primary transition-colors">
                      <label className="block text-[10px] tracking-widest uppercase text-brand-primary font-bold mb-2">Observations</label>
                      <textarea required rows={4} className="w-full bg-transparent text-brand-text outline-none py-2 placeholder:text-brand-muted/30 font-light resize-none" placeholder="Primary concerns or goals?"></textarea>
                    </div>
                    <button type="submit" className="w-full btn-primary py-5">Transmit Inquiry</button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
