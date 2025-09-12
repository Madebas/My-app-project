import React from 'react';
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import Heropic from "../../../public/images/heropic.jpg"; 

function HeroPic() {
  const techStack = [
    { name: "Python", size: "base" },
    { name: "RStudio", size: "base" },
    { name: "Tableau", size: "base" },
    { name: "React", size: "base" },
    { name: "HTML", size: "sm" },
    { name: "Tailwind", size: "sm" },
    { name: "JavaScript", size: "base" },
    { name: "QGIS", size: "base" }
  ];

  return (
    <motion.div 
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="relative h-full flex justify-center items-center group"
    >
      {/* Main Image Container */}
      <div className="relative" style={{ width: "288px", height: "288px" }}>
        {/* Profile Image */}
        <motion.img 
          src={profilePic}  
          alt="Madeba Simon" 
          className="rounded-full shadow-2xl w-full h-full object-cover border-[3px] border-white/20 group-hover:border-cyan transition-all duration-500 z-10 relative"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        />

        {/* Circular Orbit Technologies */}
        {techStack.map((tech, i) => {
          const angle = (i / techStack.length) * Math.PI * 2;
          const radius = 140; // Distance from center
          
          return (
            <motion.div
              key={i}
              className={`absolute bg-white text-gray-800 ${
                tech.size === "base" ? "text-sm" : "text-xs"
              } font-bold rounded-full px-3 py-1 shadow-sm z-20 whitespace-nowrap`}
              initial={{ 
                opacity: 0,
                x: Math.cos(angle) * radius,
                y: Math.sin(angle) * radius
              }}
              animate={{ 
                opacity: 1,
                x: Math.cos(angle + Math.PI * 2) * radius,
                y: Math.sin(angle + Math.PI * 2) * radius,
                rotate: [0, 360] // Optional: spin the badges
              }}
              transition={{
                duration: 20,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {tech.name}
            </motion.div>
          );
        })}

        {/* Solid Cyan Glow Effect */}
        <div className="absolute inset-0 rounded-full bg-cyan blur-xl group-hover:opacity-30 opacity-0 transition-opacity duration-700 -z-10" />
      </div>
    </motion.div>
  );
}

export default HeroPic;