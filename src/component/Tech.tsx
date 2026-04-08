import { useRef } from 'react'
import { tech } from '../constraint/tech'
import { motion, useTransform, useScroll } from 'framer-motion'
import TechScene from './TechScene'


const CATEGORIES = [
    {
        name: 'Frontend',
        items: [
            { name: 'React', image: tech.react, color: '#61DAFB' },
            { name: 'TypeScript', image: tech.typescript, color: '#3178C6' },
            { name: 'JavaScript', image: tech.javascript, color: '#F7DF1E' },
            { name: 'CSS3', image: tech.css, color: '#1572B6' },
            { name: 'HTML5', image: tech.html, color: '#E34F26' },
        ]
    },
    {
        name: 'Backend & Data',
        items: [
            { name: 'Node.js', image: tech.node, color: '#339933' },
            { name: 'MongoDB', image: tech.mongo, color: '#47A248' },
            { name: 'Python', image: tech.python, color: '#3776AB' },
        ]
    },
    {
        name: 'Tools & Mobile',
        items: [
            { name: 'React Native', image: tech.react_native, color: '#61DAFB' },
            { name: 'Git', image: tech.git, color: '#F05032' },
        ]
    }
]

function Tech() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })
    
    const narrativeOpacity = useTransform(scrollYProgress, [0, 0.25, 0.35], [1, 1, 0])
    const contentOpacity = useTransform(scrollYProgress, [0.3, 0.45, 0.85, 1], [0, 1, 1, 0])

    return (
        <section ref={containerRef} className='relative h-[300vh] flex flex-col items-center justify-start'>
            {/* Anchors */}
            <div id="tech-chapter" className="absolute top-0 w-full h-px pointer-events-none" />
            <div id='tech' className="absolute top-[135vh] w-full h-px pointer-events-none" />

            {/* Narrative Storytelling Text */}
            <motion.div 
                style={{ opacity: narrativeOpacity }}
                className="sticky top-[40%] flex flex-col items-center gap-4 text-center pointer-events-none z-0"
            >
                <span className="text-xl md:text-3xl font-mono text-[#818CF8]/40 tracking-[0.2em] uppercase">Chapter III</span>
                <h2 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-linear-to-b from-white/20 to-white/5">The Constellation</h2>
                <p className="text-slate-500/30 font-medium tracking-wide">Building a personal universe of technologies...</p>
            </motion.div>

            <motion.div 
                style={{ opacity: contentOpacity }}
                className='sticky top-0 h-screen w-full flex flex-col justify-center items-center p-5 pt-32 gap-12 scroll-mt-20 overflow-hidden'
            >
                <div className="absolute inset-0 -z-10 bg-radial-gradient from-indigo-500/5 to-transparent blur-3xl opacity-50" />
                
                <div className="relative w-full h-[30vh] md:h-[40vh]">
                    <TechScene />
                </div>

                <div className='flex flex-col justify-center items-center gap-12 w-full max-w-6xl z-10'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-4'>
                        {CATEGORIES.map((cat, catIdx) => (
                            <motion.div 
                                key={cat.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: catIdx * 0.1 }}
                                className="flex flex-col gap-5 p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl relative group"
                            >
                                <div className="absolute -inset-1 bg-linear-to-r from-[#6366F1]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl pointer-events-none" />
                                
                                <div className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#818CF8]" />
                                    <h4 className="text-sm font-mono tracking-widest uppercase text-slate-400 group-hover:text-white transition-colors">{cat.name}</h4>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    {cat.items.map((item) => (
                                        <motion.div
                                            key={item.name}
                                            whileHover={{ y: -5, scale: 1.05 }}
                                            className="flex items-center gap-3 p-2 pr-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group/item"
                                        >
                                            <div 
                                                className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/5 border border-white/10 group-hover/item:border-white/30 transition-colors"
                                            >
                                                <img 
                                                    className={`w-5 h-5 object-contain ${item.name === 'Git' || item.name === 'TypeScript' || item.name === 'React Native' ? '' : 'invert-0'}`} 
                                                    src={item.image} 
                                                    alt={item.name} 
                                                />
                                            </div>
                                            <span className="text-sm font-medium text-slate-300 group-hover/item:text-white transition-colors">{item.name}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className='flex flex-col items-center gap-2 text-center max-w-2xl'
                    >
                        <p className='text-slate-400 text-sm md:text-base leading-relaxed'>
                            Continuously expanding this stellar collection with tools that drive <span className='text-white font-medium'>performance, scalability, and exceptional user experiences.</span>
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default Tech
