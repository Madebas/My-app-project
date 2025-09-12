import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/variants';

function AboutText() {
  return (
    <div className="flex flex-col gap-4">
      <motion.h3
        variants={fadeIn('left', 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="text-2xl sm:text-3xl font-bold text-[gold]"
      >
        Our Mission & Vision
      </motion.h3>
      <motion.p
        variants={fadeIn('left', 1.0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="text-[#ffffff] text-base sm:text-lg"
      >
        Mission: To provide holistic, high-quality training for competent and ethical healthcare delivery.
      </motion.p>
      <motion.p
        variants={fadeIn('left', 1.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="text-[#ffffff] text-base sm:text-lg"
      >
        Vision: To be a global center of excellence in healthcare education, fostering innovation, research, and community engagement.
      </motion.p>
    </div>
  );
}

export default AboutText;