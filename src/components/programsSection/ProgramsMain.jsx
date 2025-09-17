import React, { useState } from "react";
import { motion } from "framer-motion";

const programs = [
  { title: "Diploma in Nursing", role: "Educator & Researcher" },
  { title: "Certified Nursing Assistant", role: "Healthcare Support" },
  {
    title: "Diploma in Perioperative Theatre Technology",
    role: "Surgical Technician",
  },
  { title: "Diploma in Medical Social Work", role: "Community Advocate" },
  { title: "Diploma in Health Records & IT", role: "Data Specialist" },
  { title: "Diploma in Community Health", role: "Public Health Educator" },
  { title: "Diploma in Mortuary Science", role: "Forensic Technician" },
  {
    title: "Diploma in Orthopedic & Trauma Medicine",
    role: "Trauma Specialist",
  },
  {
    title: "Diploma in Emergency Medical Technology",
    role: "EMT Professional",
  },
  { title: "Diploma in Nutrition & Dietetics", role: "Nutritionist" },
  { title: "Diploma in Occupational Therapy", role: "Therapist" },
  { title: "Diploma in Health Counselling", role: "Mental Health Support" },
  { title: "Diploma in Imaging & Radiology", role: "Radiographer" },
  { title: "Diploma in Physiotherapy", role: "Rehabilitation Expert" },
  {
    title: "Certificate in Nutrition & Dietetics",
    role: "Nutrition Assistant",
  },
  { title: "Certificate in Health Services Support", role: "Support Staff" },
  {
    title: "Certificate in Perioperative Theatre Technology",
    role: "Surgical Assistant",
  },
  {
    title: "Certificate in Health Records & Information",
    role: "Records Clerk",
  },
  {
    title: "Certificate in Social Work & Community Development",
    role: "Social Worker",
  },
  {
    title: "Certificate in Orthopedic Trauma Medicine",
    role: "Orthopedic Assistant",
  },
  {
    title: "Certificate in Community Health Assistant",
    role: "Health Assistant",
  },
  {
    title: "Certificate in Emergency Medical Technician",
    role: "EMT Assistant",
  },
  {
    title: "Certificate in Health Insurance Management",
    role: "Insurance Officer",
  },
];

const ProgramsMain = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPrograms = programs.filter(
    (program) =>
      program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Programs Offered
        </h2>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Search programs..."
            className="w-full sm:w-1/2 lg:w-1/3 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPrograms.map((program, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-blue-50 to-white border border-gray-200 p-6 rounded-xl shadow hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                {program.title}
              </h3>
              <p className="text-sm text-gray-600">{program.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProgramsMain;
