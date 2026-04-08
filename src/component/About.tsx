import { useRef } from 'react'
import { motion, useTransform, useScroll } from 'framer-motion'

function About() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    // Local ranges (0.0 - 1.0)
    const narrativeOpacity = useTransform(scrollYProgress, [0, 0.25, 0.35], [1, 1, 0])
    const contentOpacity = useTransform(scrollYProgress, [0.3, 0.45, 0.85, 1], [0, 1, 1, 0])

    return (
        <section ref={containerRef} className='relative h-[300vh] flex flex-col items-center justify-start'>
            {/* Anchors */}
            <div id="about-chapter" className="absolute top-0 w-full h-px pointer-events-none" />
            <div id="about" className="absolute top-[135vh] w-full h-px pointer-events-none" />

            {/* Narrative Storytelling Text */}
            <motion.div 
                style={{ opacity: narrativeOpacity }}
                className="sticky top-[40%] flex flex-col items-center gap-4 text-center pointer-events-none z-0"
            >
                <span className="text-xl md:text-3xl font-mono text-[#818CF8]/40 tracking-[0.2em] uppercase">Chapter II</span>
                <h2 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-linear-to-b from-white/20 to-white/5">The Forge</h2>
                <p className="text-slate-500/30 font-medium tracking-wide">Growing through challenges, refining the craft...</p>
            </motion.div>

            <motion.div 
                style={{ opacity: contentOpacity }}
                className='sticky top-0 h-screen flex flex-col justify-center items-center p-5 pt-28 w-full gap-8 text-center scroll-mt-20'
            >
                <div className='flex flex-col justify-center items-center gap-3 md:gap-6 w-full max-w-4xl'>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col gap-2"
                    >
                        <span className="text-[#818CF8] font-mono text-xs md:text-sm tracking-[0.4em] uppercase opacity-80">Professional Profile</span>
                        <h3 className="text-3xl md:text-6xl font-bold tracking-tight">Software Engineer & Solution Architect</h3>
                    </motion.div>
                </div>
                
                <div className="flex flex-col justify-center items-center w-full max-w-3xl">
                    <p className="text-base md:text-xl leading-relaxed text-slate-300 font-light">
                        I am a <span className="text-white font-medium">results-driven Software Engineer</span> with over 3 years of experience in architecting and implementing scalable, high-performance digital solutions. My approach combines technical rigor with a deep understanding of user-centric design principles.
                    </p>
                    <div className="h-px w-24 bg-linear-to-r from-transparent via-[#6366F1]/50 to-transparent my-8" />
                    <p className="text-sm md:text-lg leading-relaxed text-slate-400">
                        Holding an <span className="text-slate-200">Honours degree in Computer Science</span>, I specialize in bridging the gap between complex business requirements and elegant, maintainable codebases. I thrive in mission-driven environments that prize innovation, technical excellence, and measurable impact.
                    </p>
                </div>
            </motion.div>
        </section>
    )
}

export default About
