import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/variants';
import { MdOutlineMarkEmailRead } from 'react-icons/md';
import { LuPhoneCall } from 'react-icons/lu';
import { TiLocationOutline } from 'react-icons/ti';
import { SiQuantconnect } from 'react-icons/si';
import { SiWhatsapp } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { LiaBattleNet } from 'react-icons/lia';
import { GiMedicalDrip } from 'react-icons/gi'; // Medical-themed icon

function ContactLeft() {
  const [showPhoneOptions, setShowPhoneOptions] = useState(false);

  const contacts = [
    {
      icon: <MdOutlineMarkEmailRead className="text-black text-xl" />,
      label: 'Admissions Email',
      value: 'admissions@johansmedical.ac.ke',
      link: 'mailto:admissions@johansmedical.ac.ke',
    },
    {
      icon: <LuPhoneCall className="text-black text-xl" />,
      label: 'Admissions Hotline',
      value: '+254 715 293 537',
      isPhone: true,
    },
    {
      icon: <TiLocationOutline className="text-black text-xl" />,
      label: 'Campus Location',
      value: 'Nairobi, Kenya',
    },
  ];

  return (
    <motion.div
      variants={fadeIn('right', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="bg-[#ffffff1a] p-4 rounded-xl backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-300 border border-[gold]/20"
    >
      <h3 className="text-2xl font-extrabold mb-4 flex items-center gap-3 text-[gold]">
        <SiQuantconnect className="text-3xl" /> Contact Us
      </h3>
      <div className="space-y-4">
        {contacts.map((item, index) => (
          <div
            key={index}
            className="bg-[#ffffff0d] p-4 rounded-lg flex items-center justify-between group hover:bg-[#ffffff14] transition-colors duration-300"
          >
            <div className="flex items-center gap-4">
              {item.icon}
              <div>
                <p className="font-semibold text-white text-lg">{item.label}</p>
                {item.isPhone ? (
                  <p
                    onClick={() => setShowPhoneOptions(showPhoneOptions === index ? false : index)}
                    className="text-base text-white hover:text-green-300 cursor-pointer transition-colors duration-200"
                  >
                    {item.value}
                  </p>
                ) : item.link ? (
                  <a
                    href={item.link}
                    className="text-base text-white hover:text-green-300 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-base text-white">{item.value}</p>
                )}
                {item.isPhone && showPhoneOptions === index && (
                  <div className="absolute mt-2 bg-gray-900 text-white text-sm rounded-lg shadow-xl p-2 w-48">
                    <a
                      href="tel:+254715293537"
                      className="block hover:text-green-300 py-1 flex items-center gap-2"
                    >
                      <LuPhoneCall /> Call Now
                    </a>
                    <a
                      href="https://wa.me/254715293537"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:text-green-300 py-1 flex items-center gap-2"
                    >
                      <SiWhatsapp /> WhatsApp Us
                    </a>
                  </div>
                )}
              </div>
            </div>
            <button className="text-[gold] hover:text-green-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              📋
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function ContactStatus() {
  return (
    <motion.div
      variants={fadeIn('up', 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="bg-[#ffffff1a] p-4 rounded-xl backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-300 border border-[gold]/20"
    >
      <h3 className="text-2xl font-extrabold mb-4 flex items-center gap-3 text-[gold]">
        <GiMedicalDrip className="text-3xl" /> Our Status
      </h3>
      <div className="space-y-4 text-base">
        <div className="flex items-center gap-3">
          <span className="text-cyan-400 font-medium">Focus:</span>
          <p className="font-bold text-white">Advanced Healthcare Training</p>
          <p className="text-cyan-400">@ Johans Medical</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-white font-medium">Admissions:</span>
          <p className="text-green-400 font-semibold">● Open for 2026 Cohort</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-white font-medium">Response:</span>
          <p className="font-bold text-white">Within 24 Hours</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-white font-medium">Time Zone:</span>
          <p className="font-bold text-white">East Africa Time (EAT)</p>
        </div>
      </div>
    </motion.div>
  );
}

function ContactRight() {
  const networks = [
    {
      icon: <FaLinkedinIn className="text-black text-xl" />,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/johansmedical',
      stat: '600+ Healthcare Experts',
    },
    {
      icon: <FaTwitter className="text-black text-xl" />,
      label: 'Twitter',
      desc: 'Latest Health Insights',
      stat: '250+ Followers',
    },
  ];

  return (
    <motion.div
      variants={fadeIn('left', 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="bg-[#ffffff1a] p-4 rounded-xl backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-300 border border-[gold]/20"
    >
      <h3 className="text-2xl font-extrabold mb-4 flex items-center gap-3 text-[gold]">
        <LiaBattleNet className="text-3xl" /> Connect With Us
      </h3>
      <div className="space-y-4">
        {networks.map((item, index) => (
          <div
            key={index}
            className="bg-[#ffffff0d] p-4 rounded-lg flex items-center justify-between group hover:bg-[#ffffff14] transition-colors duration-300"
          >
            <div className="flex items-center gap-4">
              {item.icon}
              <div>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-white text-lg hover:text-green-300 transition-colors duration-200"
                >
                  {item.label}
                </a>
                {item.desc && <p className="text-sm text-gray-300">{item.desc}</p>}
                <p className="text-cyan-400 text-base">{item.stat}</p>
              </div>
            </div>
            <span className="text-[gold] text-2xl">↗</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function ContactMain() {
  return (
    <motion.section
      variants={fadeIn('down', 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      id="contact"
      className="py-10 px-4 mt-24 bg-gradient-to-b from-[#003366] via-[#1e3a8a] to-[#2a5caa] text-white overflow-hidden"
    >
      {/* Header without Logo */}
      <motion.div
        variants={fadeIn('down', 0.1)}
        className="text-center mb-6"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-[gold] tracking-wide">
          Johans Medical & Health Sciences
        </h2>
        <p className="text-lg md:text-xl text-white mt-2 mb-4">
          Empowering Future Healthcare Leaders
        </p>
        <motion.p
          variants={fadeIn('up', 0.2)}
          className="text-base mt-2 text-gray-200"
        >
          Join us today and transform lives through healthcare excellence!
        </motion.p>
      </motion.div>

      {/* Three-Column Layout */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 max-w-7xl mx-auto">
        <ContactLeft />
        <ContactStatus />
        <ContactRight />
      </div>
    </motion.section>
  );
}

export default ContactMain;