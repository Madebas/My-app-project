import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/variants'; // Assuming this is your animation variant file
import { useState, useEffect } from 'react';

function ApplicationMain() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    program: '',
    documents: null,
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleApplyClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({ fullName: '', email: '', phone: '', program: '', documents: null });
    setSuccessMessage('');
    setErrorMessage('');
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission (replace with actual backend call)
    if (!formData.fullName || !formData.email || !formData.phone || !formData.program) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }
    setTimeout(() => {
      setSuccessMessage('Application submitted successfully! Check your email for confirmation.');
      setErrorMessage('');
      setFormData({ fullName: '', email: '', phone: '', program: '', documents: null });
    }, 1000); // Simulate API delay
  };

  // Keyboard accessibility for modal
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape' && showModal) {
        handleCloseModal();
      }
    };
    const handleTab = (event) => {
      if (showModal && event.key === 'Tab') {
        const focusableElements = document.querySelectorAll(
          '#modal-form button, #modal-form input, #modal-form select'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };
    document.addEventListener('keydown', handleEsc);
    document.addEventListener('keydown', handleTab);
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.removeEventListener('keydown', handleTab);
    };
  }, [showModal]);

  return (
    <section id="application" className="px-4 py-24 bg-gradient-to-b from-[#003366] to-[#1e3a8a] text-white" aria-label="Application Section">
      <div className="max-w-[1400px] mx-auto">
        {/* Heading */}
        <motion.h2
          variants={fadeIn('down', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="text-4xl sm:text-5xl font-bold text-[gold] text-center mb-10"
        >
          How to Apply ?
        </motion.h2>

        {/* Instructions and Apply Button - Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Instructions */}
          <motion.div
            variants={fadeIn('left', 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-[0_4px_12px_rgba(0,0,0,0.2)]"
            aria-label="Application Steps"
          >
            <h3 className="text-2xl font-semibold mb-4">Application Steps</h3>
            <ol className="list-decimal list-inside space-y-3 text-sm sm:text-base">
              <li>Visit our official website and navigate to the "Apply" section.</li>
              <li>Fill out the online application form with your personal and academic details.</li>
              <li>Upload required documents (e.g., Transcripts, ID or Passport, K.C.S.E certificates).</li>
              <li>Submit the application and pay the non-refundable fee of KES 2,000.</li>
              <li>Receive confirmation via email and await further instructions.</li>
            </ol>
            <p className="mt-4 text-sm italic">Application deadline: December 15, 2025.</p>
          </motion.div>

          {/* Apply Button */}
          <motion.div
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="flex items-center justify-center"
          >
            <button
              onClick={handleApplyClick}
              className="bg-[gold] text-[#003366] font-bold py-3 px-8 rounded-lg hover:bg-yellow-600 transition-colors duration-300 text-lg shadow-[0_4px_12px_rgba(255,215,0,0.4)] hover:shadow-[0_6px_16px_rgba(255,215,0,0.6)]"
              aria-label="Open Application Form"
            >
              Apply Here
            </button>
          </motion.div>
        </div>

        {/* Modal Overlay and Form */}
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white/20 backdrop-blur-md rounded-lg p-6 shadow-[0_4px_12px_rgba(0,0,0,0.3)] w-full max-w-md"
              onClick={(e) => e.stopPropagation()} // Prevent closing on modal click
              id="modal-form"
              tabIndex="-1"
              role="document"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 id="modal-title" className="text-2xl font-semibold text-[gold]">
                  Application Form
                </h3>
                <button
                  onClick={handleCloseModal}
                  className="text-white hover:text-[gold] text-2xl"
                  aria-label="Close Modal"
                >
                  &times;
                </button>
              </div>
              {successMessage ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-400 text-center py-4"
                  role="alert"
                  aria-live="polite"
                >
                  {successMessage}
                  <button
                    onClick={handleCloseModal}
                    className="mt-4 bg-[gold] text-[#003366] font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors duration-300"
                    aria-label="Close Success Message"
                  >
                    Close
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {errorMessage && (
                    <div className="text-red-400 text-center py-2" role="alert" aria-live="polite">
                      {errorMessage}
                    </div>
                  )}
                  <div>
                    <label className="block text-sm font-medium mb-1 text-white">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full p-2 rounded bg-white/5 text-white border border-white/20 focus:outline-none focus:border-[gold]"
                      placeholder="Enter your full name"
                      required
                      aria-required="true"
                      aria-label="Full Name Input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-white">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-2 rounded bg-white/5 text-white border border-white/20 focus:outline-none focus:border-[gold]"
                      placeholder="Enter your email"
                      required
                      aria-required="true"
                      aria-label="Email Input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-white">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-2 rounded bg-white/5 text-white border border-white/20 focus:outline-none focus:border-[gold]"
                      placeholder="Enter your phone number"
                      required
                      aria-required="true"
                      aria-label="Phone Number Input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-white">Program of Interest</label>
                    <select
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      className="w-full p-2 rounded bg-white/5 text-white border border-white/20 focus:outline-none focus:border-[gold]"
                      required
                      aria-required="true"
                      aria-label="Program of Interest Select"
                    >
                      <option value="">Select a program</option>
                      <option value="nursing">Nursing</option>
                      <option value="medical-lab">Medical Laboratory Technology</option>
                      <option value="public-health">Public Health</option>
                      <option value="dental-hygiene">Dental Hygiene</option>
                      <option value="clinical-medicine">Clinical Medicine</option>
                      <option value="health-records">Health Records Management</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-white">Upload Documents</label>
                    <input
                      type="file"
                      name="documents"
                      onChange={handleChange}
                      className="w-full p-2 rounded bg-white/5 text-white border border-white/20 focus:outline-none"
                      multiple
                      aria-label="Upload Documents Input"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-[gold] text-[#003366] font-bold py-2 px-6 rounded-lg hover:bg-yellow-600 transition-colors duration-300 w-full"
                    aria-label="Submit Application"
                  >
                    Submit Application
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default ApplicationMain;