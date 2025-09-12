import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/variants'; // Assuming same import path as contact section
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { GiMedicalDrip } from 'react-icons/gi'; // Medical-themed icon

const links = [
  { link: 'About Us', section: '#about' },
  { link: 'Programs', section: '#programs' },
  { link: 'Admissions', section: '#admissions' },
  { link: 'Faculty', section: '#faculty' },
  { link: 'Contact', section: '#contact' },
];

const socialLinks = [
  { icon: <FaFacebookF />, url: 'https://facebook.com/johansmedical' },
  { icon: <FaTwitter />, url: 'https://twitter.com/johansmedical' },
  { icon: <FaLinkedinIn />, url: 'https://linkedin.com/in/johansmedical' },
  { icon: <FaInstagram />, url: 'https://instagram.com/johansmedical' },
];

function FooterMain() {
  return (
    <motion.footer
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className="bg-gradient-to-b from-[#003366] via-[#1e3a8a] to-[#2a5caa] text-white py-8 px-4 mt-16"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Institute Info */}
        <div className="flex flex-col items-start">
          <h3 className="text-2xl font-extrabold mb-4 flex items-center gap-2 text-[gold]">
            <GiMedicalDrip className="text-3xl" /> Johans Medical
          </h3>
          <p className="text-sm text-gray-300 mb-4">
            Empowering the next generation of healthcare professionals with world-class training and innovation.
          </p>
          <p className="text-sm text-gray-200">
            Nairobi, Kenya | +254 715 293 537 | admissions@johansmedical.ac.ke
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col">
          <h4 className="text-lg font-semibold mb-4 text-[gold]">Quick Links</h4>
          <ul className="space-y-2">
            {links.map((item, index) => (
              <li key={index}>
                <a
                  href={item.section}
                  className="text-sm text-white hover:text-green-300 transition-colors duration-300"
                >
                  {item.link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media & Contact */}
        <div className="flex flex-col">
          <h4 className="text-lg font-semibold mb-4 text-[gold]">Connect With Us</h4>
          <div className="flex space-x-4 mb-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-green-300 transition-colors duration-300 text-xl"
              >
                {social.icon}
              </a>
            ))}
          </div>
          <p className="text-sm text-gray-200">
            Stay updated with the latest in healthcare education.
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto mt-6 pt-4 border-t border-[gold]/20 text-center">
        <p className="text-xs text-gray-400">
          © 2025 Madeba Simon. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}

export default FooterMain;