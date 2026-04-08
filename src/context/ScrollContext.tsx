import React, { createContext, useContext } from 'react';
import { useScroll, MotionValue } from 'framer-motion';

interface ScrollContextType {
  scrollYProgress: MotionValue<number>;
}

const ScrollContext = createContext<ScrollContextType | null>(null);

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { scrollYProgress } = useScroll();
  
  return (
    <ScrollContext.Provider value={{ scrollYProgress }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollProgress = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScrollProgress must be used within a ScrollProvider');
  }
  return context.scrollYProgress;
};
