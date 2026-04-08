import { useEffect, useState } from 'react'
import { icons } from '../constraint/icons'
import { images } from '../constraint/images';
import { motion, AnimatePresence } from 'framer-motion';

const useIsAtTop = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isAtTop;
};

function Header() {
  const isAtTop = useIsAtTop();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Stack', id: 'tech' },
    { name: 'Work', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className="fixed top-0 left-0 w-full z-50 flex justify-center p-4 md:p-6 pointer-events-none"
    >
      <div className={`
        pointer-events-auto
        flex items-center justify-between 
        w-full max-w-5xl 
        px-4 md:px-8 py-3 md:py-4
        rounded-2xl md:rounded-full
        transition-all duration-500
        border border-white/10
        ${isAtTop 
          ? 'bg-white/5 backdrop-blur-md shadow-none' 
          : 'bg-[#0B0D17]/80 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] border-white/10'
        }
      `}>
        {/* Brand/Identity */}
        <div className='flex items-center gap-3 shrink-0'>
          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-[#6366F1] to-[#818CF8] rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <img src={images.ayo} alt="Ayo" className='relative w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/10 grayscale-50 group-hover:grayscale-0 transition-all duration-500' />
          </div>
          <div className="flex flex-col">
            <span className='text-sm md:text-base font-bold tracking-tight text-white leading-tight'>Odunayo J.</span>
            <span className='text-[10px] text-slate-400 font-medium hidden sm:block'>Creative Developer</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex items-center gap-1'>
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={`#${item.id}`} 
              onClick={() => setActiveTab(item.name)}
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition-all relative group
                ${activeTab === item.name ? 'text-white' : 'text-slate-400 hover:text-white'}
              `}
            >
              <span className="relative z-10">{item.name}</span>
              {activeTab === item.name && (
                <motion.div 
                  layoutId="activePill"
                  className="absolute inset-0 bg-white/10 rounded-full border border-white/5 shadow-inner"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Dynamic CTA / Status */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-mono text-slate-300 uppercase tracking-wider">Available for freelance</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className='md:hidden p-2 rounded-xl bg-white/5 border border-white/10 relative z-50 transition-transform active:scale-95' 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img className='w-6 h-6 invert opacity-80' src={menuOpen ? icons.close : icons.menu} alt="Menu" />
        </button>
        
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="absolute top-full left-4 right-4 mt-4 p-4 rounded-3xl bg-[#0B0D17]/95 backdrop-blur-3xl border border-white/10 shadow-2xl md:hidden flex flex-col gap-2"
            >
               {navItems.map((item) => (
                <a 
                  key={item.name}
                  href={`#${item.id}`} 
                  onClick={() => {
                    setActiveTab(item.name);
                    setMenuOpen(false);
                  }}
                  className={`
                    px-5 py-4 rounded-2xl text-lg font-bold transition-all
                    ${activeTab === item.name ? 'bg-white/10 text-[#6366F1]' : 'text-slate-300 active:bg-white/5'}
                  `}
                >
                  {item.name}
                </a>
              ))}
              <div className="mt-4 pt-4 border-t border-white/5 flex flex-col gap-2">
                 <div className="flex items-center gap-2 px-4 py-2 opacity-60">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-xs font-mono uppercase tracking-widest text-white">Online Now</span>
                 </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Header