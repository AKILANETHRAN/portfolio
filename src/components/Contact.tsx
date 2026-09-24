'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Trophy, Send, CheckCircle2, Loader2 } from 'lucide-react';

const Github = ({ size = 18 }: { size?: number }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    stroke="currentColor" 
    strokeWidth="2" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const Linkedin = ({ size = 18 }: { size?: number }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    stroke="currentColor" 
    strokeWidth="2" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);


interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate server request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    
    // Clear success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const contactDetails = [
    { icon: <Phone size={18} className="text-cyan-400" />, label: "Phone", value: "+91 9363970620", href: "tel:9363970620" },
    { icon: <Mail size={18} className="text-purple-400" />, label: "Email", value: "akilan20681@gmail.com", href: "mailto:akilan20681@gmail.com" },
    { icon: <MapPin size={18} className="text-pink-400" />, label: "Location", value: "Kovilpatti, Tamil Nadu, India", href: null }
  ];

  const socials = [
    { name: "LinkedIn", icon: <Linkedin size={18} />, href: "#" },
    { name: "GitHub", icon: <Github size={18} />, href: "#" },
    { name: "SkillRack", icon: <Trophy size={18} />, href: "#" }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/20">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-12">
          <span className="text-xs font-semibold tracking-[0.2em] text-cyan-400 uppercase block mb-2">Let's Connect</span>
          <h2 className="text-3xl md:text-4xl font-bold font-head text-white">Get In Touch</h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-3 mx-auto md:mx-0" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Info Details */}
          <div className="md:col-span-5 space-y-6">
            {contactDetails.map((detail, idx) => (
              <div key={idx} className="glass-card p-4 rounded-2xl flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-slate-900/60 flex items-center justify-center border border-slate-800/80 group-hover:scale-110 transition-transform">
                  {detail.icon}
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">{detail.label}</div>
                  {detail.href ? (
                    <a href={detail.href} className="text-xs sm:text-sm text-slate-200 font-medium mt-0.5 hover:text-cyan-400 cursor-none transition-colors">
                      {detail.value}
                    </a>
                  ) : (
                    <div className="text-xs sm:text-sm text-slate-200 font-medium mt-0.5">{detail.value}</div>
                  )}
                </div>
              </div>
            ))}

            {/* Social Buttons */}
            <div className="pt-2">
              <h3 className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-3">Connect With Me</h3>
              <div className="flex gap-3">
                {socials.map((s, idx) => (
                  <a
                    key={idx}
                    href={s.href}
                    className="w-10 h-10 rounded-xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900 hover:border-cyan-400 hover:text-cyan-400 text-slate-400 flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(0,180,255,0.15)] cursor-none"
                    title={s.name}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="md:col-span-7 w-full">
            <div className="glass-card p-6 rounded-2xl relative overflow-hidden">
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    {...register("name", { required: "Name is required" })}
                    className={`w-full bg-slate-900/35 border text-xs sm:text-sm rounded-xl px-4 py-3 outline-none transition-all duration-300 text-slate-200 cursor-none ${
                      errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-slate-800 focus:border-cyan-400'
                    }`}
                  />
                  {errors.name && <span className="text-[10px] font-medium text-red-400 mt-1 block">{errors.name.message}</span>}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className={`w-full bg-slate-900/35 border text-xs sm:text-sm rounded-xl px-4 py-3 outline-none transition-all duration-300 text-slate-200 cursor-none ${
                      errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-slate-800 focus:border-cyan-400'
                    }`}
                  />
                  {errors.email && <span className="text-[10px] font-medium text-red-400 mt-1 block">{errors.email.message}</span>}
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Project Inquiry / Collaboration"
                    {...register("subject", { required: "Subject is required" })}
                    className={`w-full bg-slate-900/35 border text-xs sm:text-sm rounded-xl px-4 py-3 outline-none transition-all duration-300 text-slate-200 cursor-none ${
                      errors.subject ? 'border-red-500/50 focus:border-red-500' : 'border-slate-800 focus:border-cyan-400'
                    }`}
                  />
                  {errors.subject && <span className="text-[10px] font-medium text-red-400 mt-1 block">{errors.subject.message}</span>}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Your message here..."
                    {...register("message", { 
                      required: "Message is required",
                      minLength: { value: 10, message: "Message should be at least 10 characters long" }
                    })}
                    className={`w-full bg-slate-900/35 border text-xs sm:text-sm rounded-xl px-4 py-3 outline-none transition-all duration-300 text-slate-200 cursor-none resize-none ${
                      errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-slate-800 focus:border-cyan-400'
                    }`}
                  />
                  {errors.message && <span className="text-[10px] font-medium text-red-400 mt-1 block">{errors.message.message}</span>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold text-xs sm:text-sm transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,180,255,0.3)] hover:-translate-y-0.5 cursor-none flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              {/* Success Message Banner */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-4 p-4 border border-green-500/20 bg-green-500/5 rounded-xl flex items-center gap-2.5 text-xs sm:text-sm text-green-400 font-semibold"
                  >
                    <CheckCircle2 size={18} />
                    <span>Message sent successfully! I will get back to you shortly.</span>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
