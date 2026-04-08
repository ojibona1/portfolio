import { images } from '../constraint/images'
import { useRef } from 'react'
import { motion, useTransform, useScroll } from 'framer-motion'
import HeroScene from './HeroScene'

function Info() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Local ranges (0.0 - 1.0 within the 300vh section)
  const narrativeOpacity = useTransform(scrollYProgress, [0, 0.25, 0.35], [1, 1, 0])
  const narrativeY = useTransform(scrollYProgress, [0, 0.35], [0, -40])

  // Content transforms (Fade in after narrative)
  const contentOpacity = useTransform(scrollYProgress, [0.3, 0.45, 0.85, 1], [0, 1, 1, 0])
  const contentScale = useTransform(scrollYProgress, [0.3, 0.45], [0.95, 1])

  return (
    <section ref={containerRef} className='relative h-[300vh] flex flex-col items-center justify-start'>
      {/* Anchors */}
      <div id="home-chapter" className="absolute top-0 w-full h-px pointer-events-none" />
      <div id="home" className="absolute top-[135vh] w-full h-px pointer-events-none" />

      {/* Narrative Storytelling Text */}
      <motion.div 
        style={{ opacity: narrativeOpacity, y: narrativeY }}
        className="sticky top-[40%] flex flex-col items-center gap-4 text-center pointer-events-none z-0"
      >
        <span className="text-xl md:text-3xl font-mono text-[#818CF8]/40 tracking-[0.2em] uppercase">Chapter I</span>
        <h2 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-linear-to-b from-white/20 to-white/5">The Genesis</h2>
        <p className="text-slate-500/30 font-medium tracking-wide">It started with a single line of code...</p>
      </motion.div>

      {/* Main Content */}
      <motion.div 
        style={{ opacity: contentOpacity, scale: contentScale }}
        className='sticky top-0 h-screen flex flex-col md:flex-row p-5 pt-28 items-center justify-center w-full gap-5 md:gap-10'
      >
        <div className="flex-1 w-full max-w-[500px] aspect-square relative" >
           <div className="absolute inset-0 z-0">
              <HeroScene />
           </div>
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
             <div className="w-35 h-35 md:w-65 md:h-65 rounded-full flex justify-center items-center overflow-hidden border-2 border-[#6366F1]/20 backdrop-blur-xl shadow-2xl">
               <img className="w-25 h-25 md:w-55 md:h-55 z-10 relative rounded-full object-cover grayscale-20 hover:grayscale-0 transition-all duration-500" src={images.ayo} alt="Odunayo Jibona" />
             </div>
          </div>
        </div>

        <div className='flex flex-col p-5 justify-center items-start gap-3 md:gap-7'>
          <span className="text-sm md:text-3xl font-bold tracking-tight">
            Hello! I Am <span className='animate-pulse text-[#6366F1]'>Jibona Odunayo</span>
          </span>
          <div className='flex flex-col justify-center items-start'>
            <span className="text-xs md:text-xl text-slate-300">A Programmer who</span>
            <span className="text-xs md:text-xl text-slate-300">Judges a book</span>
            <span className="text-xs md:text-xl text-slate-300">by its <span className='text-[#818CF8] font-bold'>cover</span>...</span>
            <span className="text-[8px] md:text-[10px] mt-2 text-slate-500">Because if the cover does not impress you what else can?...</span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Info
