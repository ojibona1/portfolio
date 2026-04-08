import { social } from '../constraint/social';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

type Social = { name: string; url: string; pic: string; color: string; }

const Socials: Social[] = [
    {
        name: 'Github',
        url: 'https://github.com/ojibona1',
        pic: social.github,
        color: 'rgba(255, 255, 255, 0.1)'
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/odunayo-jibona-a94ab9227/',
        pic: social.linkedin,
        color: 'rgba(10, 102, 194, 0.2)'
    },
    {
        name: 'Gmail',
        url: 'mailto:ojibona1@gmail.com',
        pic: social.gmail,
        color: 'rgba(234, 67, 53, 0.1)'
    }
]

function Contact() {
    const [copied, setCopied] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText('ojibona1@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id='contact' className='relative min-h-screen flex flex-col items-center justify-center p-5 pt-32 w-full scroll-mt-20'>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6366F1]/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#818CF8]/10 rounded-full blur-[120px] animate-pulse delay-700" />
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-full max-w-4xl relative"
            >
                <div className='flex flex-col items-center gap-6 mb-12 text-center'>
                    <motion.span 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 0.8, scale: 1 }}
                        className='text-sm text-[#818CF8] font-mono tracking-[0.3em] uppercase'
                    >
                        The Final Chapter
                    </motion.span>
                    <h3 className='text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-linear-to-b from-white to-white/40'>Let's Create Magic</h3>
                    <p className='text-slate-400 max-w-xl text-lg leading-relaxed'>
                        Whether you have a groundbreaking idea or a mission-driven project, I'm ready to help you bring it to life with craft and care.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    {/* Contact Card */}
                    <div className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all duration-500 overflow-hidden">
                        <div className="absolute -inset-24 bg-linear-to-br from-[#6366F1]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl pointer-events-none" />
                        
                        <div className="relative z-10 flex flex-col gap-6">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-xs font-mono uppercase tracking-widest text-emerald-500/80">Available for new opportunities</span>
                            </div>
                            
                            <h4 className="text-2xl font-bold text-white">Send me a message</h4>
                            
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-1">
                                    <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Direct Email</span>
                                    <div className="flex items-center gap-3">
                                        <span className="text-xl md:text-2xl font-medium text-slate-200">ojibona1@gmail.com</span>
                                        <button 
                                            onClick={copyEmail}
                                            className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all active:scale-95 group/copy"
                                        >
                                            <AnimatePresence mode="wait">
                                                {copied ? (
                                                    <motion.span 
                                                        key="check"
                                                        initial={{ opacity: 0, scale: 0.5 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        exit={{ opacity: 0, scale: 0.5 }}
                                                        className="text-emerald-500 text-xs font-bold px-1"
                                                    >
                                                        Copied!
                                                    </motion.span>
                                                ) : (
                                                    <motion.svg 
                                                        key="copy"
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        exit={{ opacity: 0 }}
                                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-slate-400 group-hover/copy:text-white"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                                                    </motion.svg>
                                                )}
                                            </AnimatePresence>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <a 
                                href="mailto:ojibona1@gmail.com"
                                className="mt-4 w-full py-4 rounded-2xl bg-linear-to-r from-[#6366F1] to-[#818CF8] text-white font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                            >
                                Start a Conversation
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Socials Card */}
                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col justify-between overflow-hidden relative group/social">
                        <div className="absolute -inset-24 bg-linear-to-tr from-[#818CF8]/10 to-transparent opacity-0 group-hover/social:opacity-100 transition-opacity duration-700 blur-3xl pointer-events-none" />
                        
                        <div className="relative z-10">
                            <h4 className="text-xl font-bold text-white mb-2">Connect Digitally</h4>
                            <p className="text-slate-500 text-sm mb-8">Find me on other platforms where I share code and insights.</p>
                            
                            <div className="flex flex-col gap-3">
                                {Socials.map((item) => (
                                    <motion.a 
                                        key={item.name}
                                        href={item.url} 
                                        className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300 group/link"
                                        whileHover={{ x: 8 }}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div 
                                                className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/5 group-hover/link:scale-110 transition-transform duration-500"
                                                style={{ backgroundColor: item.color }}
                                            >
                                                <img 
                                                    className={`w-5 h-5 ${item.name === 'Github' ? 'invert' : ''}`} 
                                                    src={item.pic} 
                                                    alt={item.name} 
                                                />
                                            </div>
                                            <span className="font-bold text-slate-200">{item.name}</span>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-slate-500 group-hover/link:text-[#6366F1] transition-colors">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                        </svg>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        <div className="relative z-10 pt-8 mt-8 border-t border-white/5">
                            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold block mb-2">Based In</span>
                            <span className="text-sm text-slate-300 font-medium">Lagos, Nigeria • Remote Globally</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Contact
