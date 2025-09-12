import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroText from './HeroText';
import Hero1 from '/images/Hero1.jpg';
import Hero2 from '/images/Hero2.jpg';
import hero3 from '/images/hero3.jpg';
import hero4 from '/images/hero4.jpg';
import Heropic from '/images/Heropic.jpg';

function HeroMain() {
  const images = [Hero1, Hero2, hero3, hero4, Heropic];
  const [current, setCurrent] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  // Variants for left-to-right slide with scaling
  const slideVariants = {
    initial: { x: '-100%', opacity: 0, scale: 1 },
    animate: { x: 0, opacity: 1, scale: 1.2, transition: { duration: 1.5, ease: 'easeInOut' } },
    exit: { x: '100%', opacity: 0, scale: 1, transition: { duration: 0, ease: 'easeInOut' } },
  };

  return (
    <div className="relative min-h-[80vh] flex flex-col justify-center items-center text-center pt-40 pb-16 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          variants={slideVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute inset-0"
          style={{ zIndex: 0 }}
        >
          <img
            src={images[current]}
            alt={`hero-image-${current}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,51,0.85),rgba(0,0,51,0.85))]" />
        </motion.div>
      </AnimatePresence>

      <div className="max-w-[1200px] mx-auto px-4 relative" style={{ zIndex: 1 }}>
        <HeroText />
      </div>
    </div>
  );
}

export default HeroMain;