import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/variants';

function ProgramsText() {
  return (
    <div className="flex flex-col gap-4">
      <motion.h3
        variants={fadeIn('left', 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="text-2xl sm:text-3xl font-bold text-[#003366]"
      >
        Program Overview
      </motion.h3>
      <motion.p
        variants={fadeIn('left', 1.0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="text-[#003366] text-base sm:text-lg"
      >
        Our programs are tailored to meet industry standards, offering hands-on training, cutting-edge curriculum, and opportunities for clinical practice. Each course is designed to prepare you for licensure and a thriving career in healthcare.
      </motion.p>
    </div>
  );
}

export default ProgramsText;