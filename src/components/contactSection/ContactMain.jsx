import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { TiLocationOutline } from "react-icons/ti";
import { SiQuantconnect } from "react-icons/si";
import { SiWhatsapp } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { LiaBattleNet } from "react-icons/lia";
import { GiMedicalDrip } from "react-icons/gi";
import Contactimage from "/images/contactus.jpg";

function ContactLeft() {
  const [showPhoneOptions, setShowPhoneOptions] = useState(false);

  const contacts = [
    {
      icon: <MdOutlineMarkEmailRead className="text-white text-2xl" />,
      label: "Admissions Email",
      value: "admissions@johansmedical.ac.ke",
      link: "mailto:admissions@johansmedical.ac.ke",
    },
    {
      icon: <LuPhoneCall className="text-white text-2xl" />,
      label: "Admissions Hotline",
      value: "+254 742451676",
      isPhone: true,
    },
    {
      icon: <TiLocationOutline className="text-white text-2xl" />,
      label: "Campus Location",
      value: "KISUMU, Kenya",
    },
  ];

  return (
    <motion.div
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="bg-white/10 p-12 py-8 md:p-10 rounded-xl backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-500 border border-[gold]/30 flex-1"
    >
      <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 flex items-center gap-2 md:gap-3 text-[gold]">
        <SiQuantconnect className="text-2xl md:text-4xl" /> Contact Us
      </h3>
      <div className="space-y-3 md:space-y-5">
        {contacts.map((item, index) => (
          <div
            key={index}
            className="bg-white/5 p-3 md:p-5 rounded-lg md:rounded-xl flex items-center justify-between group hover:bg-[gold]/10 transition-all duration-300"
          >
            <div className="flex items-center gap-2 md:gap-4">
              {item.icon}
              <div>
                <p className="font-semibold text-white text-base md:text-lg">
                  {item.label}
                </p>
                {item.isPhone ? (
                  <p
                    onClick={() =>
                      setShowPhoneOptions(
                        showPhoneOptions === index ? false : index
                      )
                    }
                    className="text-sm md:text-base text-gray-200 hover:text-[gold] cursor-pointer transition-colors duration-200"
                  >
                    {item.value}
                  </p>
                ) : item.link ? (
                  <a
                    href={item.link}
                    className="text-sm md:text-base text-gray-200 hover:text-[gold] transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm md:text-base text-gray-200">
                    {item.value}
                  </p>
                )}
                {item.isPhone && showPhoneOptions === index && (
                  <div className="absolute mt-2 bg-gray-900/90 text-white text-xs md:text-sm rounded-lg md:rounded-xl shadow-xl p-2 md:p-3 w-40 md:w-52 z-10">
                    <a
                      href="tel:+254 742451676"
                      className="block hover:text-[gold] py-1 md:py-2 flex items-center gap-1 md:gap-2 transition-colors duration-200"
                    >
                      <LuPhoneCall /> Call Now
                    </a>
                    <a
                      href="https://wa.me/254742451676"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:text-[gold] py-1 md:py-2 flex items-center gap-1 md:gap-2 transition-colors duration-200"
                    >
                      <SiWhatsapp /> WhatsApp Us
                    </a>
                  </div>
                )}
              </div>
            </div>
            <button className="text-[gold] hover:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="bg-white/10 p-6 md:p-10 rounded-xl backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-500 border border-[gold]/30 flex-1"
    >
      <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 flex gap-2 md:gap-3 text-[gold]">
        <GiMedicalDrip className="text-2xl md:text-4xl" /> Our Status
      </h3>
      <div className="space-y-3 md:space-y-5 text-sm md:text-base">
        <div className="flex gap-2 md:gap-3">
          <span className="text-cyan-300 font-medium">Focus:</span>
          <p className="font-bold text-white">Advanced Healthcare Training</p>
          <p className="text-cyan-300">@ Johans Medical</p>
        </div>
        <div className="flex gap-2 md:gap-3">
          <span className="text-white font-medium">Admissions:</span>
          <p className="text-green-400 font-semibold">● Open for 2026 Cohort</p>
        </div>
        <div className="flex items-center gap-2 md:gap-3">
          <span className="text-white font-medium">Response:</span>
          <p className="font-bold text-white">Within 24 Hours</p>
        </div>
        <div className="flex items-center gap-2 md:gap-3">
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
      icon: <FaLinkedinIn className="text-white text-2xl" />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/johansmedical",
      stat: "600+ Healthcare Experts",
    },
    {
      icon: <FaTwitter className="text-white text-2xl" />,
      label: "Twitter",
      desc: "Latest Health Insights",
      stat: "250+ Followers",
    },
  ];

  return (
    <motion.div
      variants={fadeIn("left", 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="bg-white/10 p-6 md:p-10 rounded-xl backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-500 border border-[gold]/30 flex-1"
    >
      <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 flex items-center gap-2 md:gap-3 text-[gold]">
        <LiaBattleNet className="text-2xl md:text-4xl" /> Connect With Us
      </h3>
      <div className="space-y-3 md:space-y-5">
        {networks.map((item, index) => (
          <div
            key={index}
            className="bg-white/5 p-3 md:p-5 rounded-lg md:rounded-xl flex items-center justify-between group hover:bg-[gold]/10 transition-all duration-300"
          >
            <div className="flex items-center gap-2 md:gap-4">
              {item.icon}
              <div>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-white text-base md:text-lg hover:text-[gold] transition-colors duration-200"
                >
                  {item.label}
                </a>
                {item.desc && (
                  <p className="text-xs md:text-sm text-gray-300">
                    {item.desc}
                  </p>
                )}
                <p className="text-cyan-300 text-sm md:text-base">
                  {item.stat}
                </p>
              </div>
            </div>
            <span className="text-[gold] text-xl md:text-2xl group-hover:scale-110 transition-transform duration-300">
              ↗
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function ContactMain() {
  return (
    <motion.section
      variants={fadeIn("down", 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      id="contact"
      className="py-16 px-6 bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{ backgroundImage: `url(${Contactimage})` }}
    >

      <div className="absolute inset-0 bg-gradient-to-b from-[#003366]/80 via-[#1e3a8a]/80 to-[#2a5caa]/80 z-0"></div>


      <motion.div
        variants={fadeIn("down", 0.1)}
        className="text-center mb-10 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-[gold] tracking-wide drop-shadow-md">
          Johans Medical & Health Sciences
        </h2>
        <p className="text-lg md:text-xl text-white mt-3 mb-5 drop-shadow-sm">
          Empowering Future Healthcare Leaders
        </p>
        <motion.p
          variants={fadeIn("up", 0.2)}
          className="text-base mt-3 text-gray-200 max-w-2xl mx-auto"
        >
          Join us today and transform lives through healthcare excellence!
        </motion.p>
      </motion.div>


      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 md:gap-8 max-w-7xl mx-auto relative z-10">
        <ContactLeft />
        <ContactStatus />
        <ContactRight />
      </div>
    </motion.section>
  );
}

export default ContactMain;
