import { motion } from 'framer-motion';
import AboutText from './AboutText';
import Aboutimage from '/images/Aboutimage.jpg';
import { fadeIn } from '../../framerMotion/variants';

function AboutMain() {
  return (
    <section
      id="about"
      className="px-4 py-20 ,url('https://images.unsplash.com/photo-1588776814546-d739c50c8e4f?auto=format&fit=crop&w=1470&q=80')] bg-no-repeat bg-center bg-cover"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Heading and Subtext */}
        <motion.h2
          variants={fadeIn('down', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="text-4xl sm:text-5xl font-bold text-[gold] text-center mb-6"
        >
          About Johans Medical and Health Sciences Training Institute
        </motion.h2>
        <motion.p
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="text-lg sm:text-xl max-w-[900px] mx-auto text-[#ffffff] leading-relaxed text-center mb-10"
        >
          Established in Kenya as a premier institution, Johans Institute is dedicated to transforming lives through accessible, high-quality medical education. We blend innovative teaching, hands-on clinical practice, and ethical training to produce compassionate healthcare professionals ready to impact communities globally.
        </motion.p>

        {/* Grid: Image and Mission/Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="rounded-lg overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.2)]"
          >
            <img
              src={Aboutimage}
              alt="Students in lab"
              className="w-full h-auto"
            />
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="flex flex-col justify-center"
          >
            <AboutText />
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <motion.div
          variants={fadeIn('up', 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="mb-16"
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-[gold] text-center mb-8">
            Why Choose Johans Medical and Health Sciences Training Institute?
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: 'fas fa-check-circle', text: 'Accredited programs approved by national regulatory bodies.' },
              { icon: 'fas fa-stethoscope', text: 'Hands-on clinical experience with partner hospitals and health centers.' },
              { icon: 'fas fa-chalkboard-teacher', text: 'Experienced faculty with real-world healthcare expertise.' },
              { icon: 'fas fa-graduation-cap', text: 'High pass rates in national licensing exams.' },
              { icon: 'fas fa-users', text: 'Supportive community with mentorship and leadership opportunities.' },
              { icon: 'fas fa-globe-africa', text: 'Commitment to community health and global standards.' },
            ].map((item, i) => (
              <motion.li
                key={i}
                variants={fadeIn('up', 0.8 + i * 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
                className="bg-[rgba(10,9,9,0.8)] p-6 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.1)] flex items-center gap-4"
              >
                <i className={`${item.icon} text-[gold] text-2xl`}></i>
                <span className="text-[#ffffff] text-base sm:text-lg">{item.text}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Statistics */}
        <motion.div
          variants={fadeIn('up', 1.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="flex flex-wrap justify-center gap-10"
        >
          {[
            { value: '95%', label: 'Graduate Employment Rate' },
            { value: '20+', label: 'Accredited Programs' },
            { value: '500+', label: 'Students Enrolled Annually' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeIn('up', 1.2 + i * 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="text-center p-6 border-2 border-[gold] rounded-lg min-w-[200px]"
            >
              <h4 className="text-3xl font-bold text-[gold]">{stat.value}</h4>
              <p className="text-[#ffffff] text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default AboutMain;