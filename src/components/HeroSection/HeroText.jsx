import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/variants';

function HeroText() {
  return (
    <div className="flex flex-col gap-6 justify-center items-center text-center px-4">
      {/* Headline */}
      <motion.h1
        variants={fadeIn('down', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-[gold] leading-tight"
      >
        Transforming Lives Through Excellence in Healthcare Education
      </motion.h1>

      {/* Subtext */}
      <motion.p
        variants={fadeIn('up', 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg sm:text-xl md:text-2xl max-w-[800px] text-white leading-relaxed mx-auto"
      >
      At Johans Medical and Health Sciences Training Institute, we prepare tomorrow’s healthcare leaders through leading programs, hands-on clinical training, and a strong commitment to community care. Join us in shaping a healthier future for Kenya and beyond.
      </motion.p>

      {/* CTA Button */}
      <motion.a
        href="#apply"
        variants={fadeIn('up', 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="inline-block bg-[gold] text-[darkblue] py-3 px-8 rounded-lg font-bold text-lg hover:bg-white hover:text-[darkblue] transition-all duration-300"
      >
        Apply Now <i className="fas fa-arrow-right ml-2"></i>
      </motion.a>

      {/* Highlight Boxes */}
      <motion.div
        variants={fadeIn('up', 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="flex justify-center gap-5 mt-10 flex-wrap"
      >
        {[
          { icon: 'fas fa-graduation-cap', text: 'Accredited Programs' },
          { icon: 'fas fa-stethoscope', text: 'Real-World Training' },
          { icon: 'fas fa-globe-africa', text: 'Global Impact' },
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={fadeIn('up', 0.8 + i * 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className="bg-[rgba(255,255,255,0.2)] text-white py-3 px-6 rounded-lg text-base sm:text-lg flex items-center gap-2"
          >
            <i className={item.icon}></i> {item.text}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default HeroText;