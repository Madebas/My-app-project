import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/variants'; // Assuming this is your animation variant file
import { useState } from 'react';

function GoalsMain() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const goals = [
    {
      title: 'Enhance Medical Education',
      desc: 'By 2026, we aim to deliver world-class healthcare training programs that empower students with the most advanced skills and knowledge to thrive in a rapidly evolving medical landscape.',
      icon: 'fas fa-book-medical',
    },
    {
      title: 'Expand Clinical Partnerships',
      desc: 'By 2027, we plan to partner with more than 10 leading hospitals and clinics to give our students real-world, hands-on experience in patient care and clinical practice.',
      icon: 'fas fa-hospital',
    },
    {
      title: 'Promote Community Health',
      desc: 'Each year, we are launching five impactful community health initiatives to expand access to quality healthcare for local communities.',
      icon: 'fas fa-heartbeat',
    },
    {
      title: 'Achieve Global Recognition',
      desc: 'By 2028, we are committed to achieving international accreditation and building strong global partnerships that elevate our standards and open doors to world-class opportunities.',
      icon: 'fas fa-globe',
    },
    {
      title: 'Innovate Learning Technology',
      desc: 'We are integrating AI and VR into our curriculum to create immersive, future-ready learning experiences that transform how students engage with knowledge.',
      icon: 'fas fa-vr-cardboard',
    },
  ];

  return (
    <section id="goals" className="px-4 py-24 bg-gradient-to-b from-[#003366] to-[#1e3a8a] text-white">
      <div className="max-w-[1400px] mx-auto">
        {/* Heading */}
        <motion.h2
          variants={fadeIn('down', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="text-4xl sm:text-5xl font-bold text-[gold] text-center mb-10"
        >
          Our Goals
        </motion.h2>

        {/* Goals Carousel/Grid - Desktop */}
        <div className="hidden md:grid md:grid-cols-4 gap-6 mb-12">
          {goals.map((goal, i) => (
            <motion.div
              key={i}
              variants={fadeIn('up', 0.2 + i * 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-[0_4px_12px_rgba(0,0,0,0.2)] transition-all duration-300 hover:bg-white/20 hover:shadow-[0_6px_16px_rgba(0,0,0,0.3)]"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                transform: hoveredIndex === i ? 'scale(1.05)' : 'scale(1)',
                transition: 'transform 0.3s ease',
              }}
            >
              <i className={`${goal.icon} text-[gold] text-3xl mb-4`}></i>
              <h3 className="text-xl font-semibold mb-2">{goal.title}</h3>
              <p className="text-sm leading-relaxed">{goal.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Goals List - Mobile */}
        <div className="md:hidden space-y-6">
          {goals.map((goal, i) => (
            <motion.div
              key={i}
              variants={fadeIn('up', 0.2 + i * 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="bg-white/10 backdrop-blur-md rounded-lg p-4 shadow-[0_2px_8px_rgba(0,0,0,0.1)]"
            >
              <h3 className="text-lg font-semibold mb-2">{goal.title}</h3>
              <p className="text-sm leading-relaxed">{goal.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GoalsMain;