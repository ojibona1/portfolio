import { project } from "../constraint/project";
import { social } from "../constraint/social";
import { tech } from "../constraint/tech";
import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

type Project = { 
    name: string; 
    github: string; 
    url: string; 
    pic: string; 
    category: string; 
    description: string;
    stack: { name: string; icon: string }[];
};

const projectList: Project[] = [
     {
        name: 'Porsche 911 Turbo',
        github: 'https://github.com/ojibona1/threejs',
        url: 'https://porche-lemon.vercel.app/',
        pic: project.porsche,
        category: '3D Interactive Experience',
        description: 'A premium, interactive 3D showcase of the legendary 1975 Porsche 911 Turbo (930). Featuring cinematic animations, real-time paint customization, and high-fidelity modeling powered by Three.js.',
        stack: [
            { name: 'JavaScript', icon: tech.javascript },
            { name: 'CSS3', icon: tech.css },
            { name: 'Vite', icon: tech.javascript }, // Fallback icon
            { name: 'Three.js', icon: tech.javascript } // Fallback icon
        ]
    },
     {
        name: 'GameBuddy',
        github: 'https://github.com/ojibona1/frontend-master',
        url: 'https://shopbuddy-frontend.vercel.app/',
        pic: project.gamebuddy,
        category: 'E-commerce & AI',
        description: 'A comprehensive gaming marketplace integrated with AI for personalized recommendations and an intelligent assistance chatbot.',
        stack: [
            { name: 'React', icon: tech.react },
            { name: 'TypeScript', icon: tech.typescript },
            { name: 'MongoDB', icon: tech.mongo },
            { name: 'Python', icon: tech.python }
        ]
    },
    {
        name: 'Public Dripper',
        github: 'https://www.publicdripper.com/',
        url: 'https://www.publicdripper.com/',
        pic: project.publicDripper,
        category: 'Luxury E-commerce',
        description: 'A premium luxury bags marketplace focused on high-end user experience, secure payments, and performance-optimized browsing.',
        stack: [
            { name: 'React', icon: tech.react },
            { name: 'TypeScript', icon: tech.typescript },
            { name: 'Tailwind', icon: tech.css }, // Using CSS icon as fallback
            { name: 'Git', icon: tech.git }
        ]
    },
    {
        name: 'Imagine Cinemas',
        github: 'https://github.com/ojibona1/imagine',
        url: 'https://imagine-cinema-production.vercel.app/',
        pic: project.imagine,
        category: 'Entertainment Platform',
        description: 'A sophisticated cinema management and booking platform featuring real-time showtime updates and seamless user inquiries.',
        stack: [
            { name: 'React', icon: tech.react },
            { name: 'Node.js', icon: tech.node },
            { name: 'JavaScript', icon: tech.javascript },
            { name: 'CSS3', icon: tech.css }
        ]
    }
]

function Projects() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const narrativeOpacity = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0])
    const contentOpacity = useTransform(scrollYProgress, [0.15, 0.25, 0.98, 1], [0, 1, 1, 0])

    return (
        <section ref={containerRef} className='relative h-[400vh] flex flex-col items-center justify-start'>
            {/* Anchors */}
            <div id="projects-chapter" className="absolute top-0 w-full h-px pointer-events-none" />
            <div id='projects' className="absolute top-[100vh] w-full h-px pointer-events-none" />

            {/* Narrative Storytelling Text */}
            <motion.div 
                style={{ opacity: narrativeOpacity }}
                className="sticky top-[40%] flex flex-col items-center gap-4 text-center pointer-events-none z-0"
            >
                <span className="text-xl md:text-3xl font-mono text-[#818CF8]/40 tracking-[0.2em] uppercase">Chapter IV</span>
                <h2 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-linear-to-b from-white/20 to-white/5">The Manifestation</h2>
                <p className="text-slate-500/30 font-medium tracking-wide">Bringing visions into reality through code...</p>
            </motion.div>

            <motion.div 
                style={{ opacity: contentOpacity }}
                className='relative w-full flex flex-col items-center justify-start p-5 mt-[80vh] pb-20 gap-32 scroll-mt-20'
            >
                <div className="flex flex-col items-center gap-40 w-full max-w-7xl">
                {projectList.map((item, index) => (
                    <div 
                        key={item.name + index} 
                        className={`flex flex-col md:flex-row items-center gap-16 w-full ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                    >
                        {/* Project Image - Parallax Container */}
                        <motion.div 
                            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="w-full md:w-3/5 relative group"
                        >
                            <a href={item.url} target="_blank" rel="noopener noreferrer" className="block relative z-10">
                                <div className="rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 aspect-video relative">
                                    <img src={item.pic} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-linear-to-t from-[#0B0D17] via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500" />
                                </div>
                            </a>
                            {/* Decorative Glow */}
                            <div className={`absolute -inset-10 bg-[#6366F1]/5 rounded-full blur-3xl -z-10 group-hover:bg-[#6366F1]/15 transition-all duration-1000 opacity-60`} />
                        </motion.div>

                        {/* Project Info Card - Floating Overlap */}
                        <motion.div 
                            initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                            viewport={{ once: true, amount: 0.3 }}
                            className={`flex flex-col gap-6 w-full md:w-2/5 md:z-20 ${index % 2 === 1 ? 'md:-mr-20 items-start md:text-left' : 'md:-ml-20 items-end md:text-right'} items-center text-center`}
                        >
                            <div className="flex flex-col gap-1">
                                <span className='text-xs font-mono tracking-[0.3em] text-[#818CF8] uppercase opacity-70'>{item.category}</span>
                                <h3 className='text-4xl font-bold text-white tracking-tight'>{item.name}</h3>
                            </div>

                            <div className={`rounded-2xl bg-[#0F111A]/90 backdrop-blur-2xl p-6 md:p-8 border border-white/10 shadow-2xl relative group/card hover:border-[#6366F1]/30 transition-all duration-500 w-full`}>
                                <div className="absolute top-0 left-0 w-1 h-full bg-linear-to-b from-[#6366F1] to-transparent rounded-l-2xl opacity-50" />
                                <p className="text-slate-300 text-sm md:text-base font-light leading-relaxed antialiased">
                                    {item.description}
                                </p>
                                
                                <div className={`flex flex-wrap gap-3 mt-6 ${index % 2 === 1 ? 'justify-start' : 'justify-end'} justify-center`}>
                                    {item.stack.map((techItem) => (
                                        <div key={techItem.name} className="group/tech relative">
                                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 group-hover/tech:bg-white/10 transition-colors">
                                                <img src={techItem.icon} alt={techItem.name} className="w-4 h-4 object-contain opacity-80 group-hover/tech:opacity-100" />
                                                <span className="text-[10px] font-mono text-slate-400 group-hover/tech:text-white uppercase tracking-wider">{techItem.name}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-6 items-center mt-2 px-2">
                                <motion.a 
                                    whileHover={{ y: -2 }}
                                    className="flex items-center gap-2.5 text-white/90 hover:text-white transition-colors font-medium border-b border-white/10 hover:border-[#6366F1] pb-1 group/link" 
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-sm tracking-wide">Live Experience</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                    </svg>
                                </motion.a>
                                <motion.a 
                                    whileHover={{ y: -3, scale: 1.1 }}
                                    className="p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all" 
                                    href={item.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="View Repository"
                                >
                                    <img className="w-5 h-5 invert opacity-70 hover:opacity-100" src={social.github} alt="GitHub" />
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>
                ))}
                </div>
            </motion.div>
        </section>
    )
}

export default Projects
