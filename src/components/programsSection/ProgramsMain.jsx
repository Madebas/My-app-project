import { motion, useAnimation } from 'framer-motion';
import ProgramsText from './ProgramsText';
import ProgramsImage7 from '/images/program7.jpg';
import ProgramsImage2 from '/images/programs2.jpg';
import ProgramsImage8 from '/images/program8.jpg';
import ProgramsImage4 from '/images/programs4.jpg';
import ProgramsImage5 from '/images/programs5.jpg';
import ProgramsImage6 from '/images/programs6.jpg';
import { useState, useEffect } from 'react';

function ProgramsMain() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();
  const programs = [
    { image: ProgramsImage5, title: 'Nursing', desc: 'Comprehensive training in patient care and clinical skills.' },
    { image: ProgramsImage7, title: 'Medical Laboratory Technology', desc: 'Expertise in diagnostic testing and laboratory management.' },
    { image: ProgramsImage6, title: 'Public Health', desc: 'Focus on community health and disease prevention strategies.' },
    { image: ProgramsImage8, title: 'Dental Hygiene', desc: 'Specialized skills in oral health and patient education.' },
    { image: ProgramsImage4, title: 'Clinical Medicine', desc: 'Advanced training for medical practice and patient diagnosis.' },
    { image: ProgramsImage2, title: 'Health Records Management', desc: 'Skills in managing healthcare data and records efficiently.' },
  ];
  const visibleCards = 2; // Number of cards visible at once on desktop
  const cardWidth = 400; // Width of each card (adjusted for proper fit)
  const totalSlides = Math.ceil(programs.length / visibleCards); // Dynamically calculate total slides

  useEffect(() => {
    const offset = currentIndex * visibleCards;
    controls.start({
      x: -offset * cardWidth,
      transition: { duration: 0.3, ease: 'easeInOut' },
    });
  }, [currentIndex, controls]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : totalSlides - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index % totalSlides);
  };

  return (
    <section id="programs" className="px-4 py-24 bg-white">
      <div className="max-w-[1400px] mx-auto">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold text-[#003366] text-center mb-6">
          Our Academic Programs
        </h2>

        {/* Program Carousel - Desktop */}
        <div className="hidden md:block ">
          <motion.div
            className="flex justify-center"
          >
            <motion.div
              animate={controls}
              className="flex gap-4"
              style={{ width: `${programs.length * cardWidth}px` }}
            >
              {programs.map((program, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg shadow-[0_2px_4px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.3)] hover:scale-105 transition-all duration-300 ease-in-out w-[320px] text-left flex-shrink-0"
                >
                  <div className="overflow-hidden rounded-t-lg">
                    <img
                      src={program.image}
                      alt={`${program.title} program`}
                      className="w-full h-[180px] object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                    />
                  </div>
                  <div className="p-12">
                    <h3 className="text-xl text-[#003366] mb-2">{program.title}</h3>
                    <p className="text-base text-[#6e6e6e] mb-4">{program.desc}</p>
                    <button
                      onClick={() => alert(`Learn more clicked for ${program.title}`)}
                      className="text-[#003366] text-base flex items-center gap-2 hover:underline"
                    >
                      <i className="fas fa-arrow-right text-sm"></i> Learn more
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
          {/* Navigation Arrows and Dots - Desktop */}
          <div className="flex justify-center mt-12 gap-4 items-center">
            <i
              className="fas fa-chevron-left text-[#a0a0a0] text-xl cursor-pointer hover:text-[#003366] transition-colors duration-200"
              onClick={handlePrev}
            ></i>
            {Array.from({ length: Math.min(3, totalSlides) }).map((_, i) => (
              <div
                key={i}
                className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-200 ${
                  currentIndex === i ? 'bg-[#003366] scale-125' : 'bg-[#d0d0d0] hover:bg-[#a0a0a0]'
                }`}
                onClick={() => handleDotClick(i)}
              ></div>
            ))}
            <i
              className="fas fa-chevron-right text-[#a0a0a0] text-xl cursor-pointer hover:text-[#003366] transition-colors duration-200"
              onClick={handleNext}
            ></i>
          </div>
        </div>

        {/* Mobile List - sm and below */}
        <div className="md:hidden space-y-4">
          {programs.map((program, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-[0_2px_4px_rgba(0,0,0,0.1)] p-4 text-left"
            >
              <h3 className="text-xl text-[#003366] mb-2 font-semibold">{program.title}</h3>
              <p className="text-base text-[#6e6e6e] mb-4">{program.desc}</p>
              <button
                onClick={() => alert(`Learn more clicked for ${program.title}`)}
                className="text-[#003366] text-base flex items-center gap-2 hover:underline"
              >
                <i className="fas fa-arrow-right text-sm"></i> Learn more
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProgramsMain;