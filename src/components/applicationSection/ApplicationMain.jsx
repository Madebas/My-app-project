import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { useState, useEffect } from "react";

function ApplicationMain() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    program: "",
    documents: null,
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [documentError, setDocumentError] = useState("");
  const [fullNameRequiredError, setFullNameRequiredError] = useState("");
  const [emailRequiredError, setEmailRequiredError] = useState("");
  const [phoneRequiredError, setPhoneRequiredError] = useState("");
  const [programRequiredError, setProgramRequiredError] = useState("");
  const [documentRequiredError, setDocumentRequiredError] = useState("");

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

  const handleApplyClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      program: "",
      documents: null,
    });
    setSuccessMessage("");
    setErrorMessage("");
    setEmailError("");
    setNameError("");
    setPhoneError("");
    setDocumentError("");
    setFullNameRequiredError("");
    setEmailRequiredError("");
    setPhoneRequiredError("");
    setProgramRequiredError("");
    setDocumentRequiredError("");
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files : value,
    }));

    if (name === "fullName") {
      setFullNameRequiredError("");
      const nameRegex = /^[A-Za-z\s-]{2,}$/;
      if (!nameRegex.test(value) && value !== "") {
        setNameError(
          "Please enter a valid name (letters, spaces, or hyphens only)"
        );
      } else {
        setNameError("");
      }
    }

    if (name === "email") {
      setEmailRequiredError("");
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      if (!emailRegex.test(value) && value !== "") {
        setEmailError(
          "Please enter a valid email address (e.g., user@domain.com)"
        );
      } else {
        setEmailError("");
      }
    }

    if (name === "phone") {
      setPhoneRequiredError("");
      const phoneRegex = /^\+\d{10,14}$/;
      if (!phoneRegex.test(value) && value !== "") {
        setPhoneError(
          "Please enter a valid phone number starting with + (e.g., +254123456789)"
        );
      } else {
        setPhoneError("");
      }
    }

    if (name === "program") {
      setProgramRequiredError("");
    }

    if (name === "documents" && files) {
      setDocumentRequiredError("");
      const validFiles = Array.from(files).every(
        (file) => file.type === "application/pdf"
      );
      if (!validFiles) {
        setDocumentError("Only PDF files are allowed");
        setFormData((prev) => ({ ...prev, documents: null }));
      } else {
        setDocumentError("");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasErrors = false;
    let errorMessages = [];
    if (!formData.fullName) {
      setFullNameRequiredError("Full name is required");
      errorMessages.push("Full name");
      hasErrors = true;
    }
    if (!formData.email) {
      setEmailRequiredError("Email is required");
      errorMessages.push("Email");
      hasErrors = true;
    }
    if (!formData.phone) {
      setPhoneRequiredError("Phone number is required");
      errorMessages.push("Phone number");
      hasErrors = true;
    }
    if (!formData.program) {
      setProgramRequiredError("Program selection is required");
      errorMessages.push("Program");
      hasErrors = true;
    }
    if (!formData.documents || formData.documents.length === 0) {
      setDocumentRequiredError("At least one PDF document is required");
      errorMessages.push("Documents");
      hasErrors = true;
    }

    if (formData.fullName) {
      const nameRegex = /^[A-Za-z\s-]{2,}$/;
      if (!nameRegex.test(formData.fullName)) {
        setNameError(
          "Please enter a valid name (letters, spaces, or hyphens only)"
        );
        errorMessages.push("Invalid name format");
        hasErrors = true;
      }
    }

    if (formData.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      if (!emailRegex.test(formData.email)) {
        setEmailError(
          "Please enter a valid email address (e.g., user@domain.com)"
        );
        errorMessages.push("Invalid email format");
        hasErrors = true;
      }
    }

    if (formData.phone) {
      const phoneRegex = /^\+\d{10,14}$/;
      if (!phoneRegex.test(formData.phone)) {
        setPhoneError(
          "Please enter a valid phone number starting with + (e.g., +254123456789)"
        );
        errorMessages.push("Invalid phone number format");
        hasErrors = true;
      }
    }

    if (formData.documents && formData.documents.length > 0) {
      if (
        !Array.from(formData.documents).every(
          (file) => file.type === "application/pdf"
        )
      ) {
        setDocumentError("Only PDF files are allowed");
        errorMessages.push("Invalid document format");
        hasErrors = true;
      }
    }

    if (hasErrors) {
      setErrorMessage(
        `Please correct the following: ${errorMessages.join(", ")}.`
      );
      return;
    }
    setTimeout(() => {
      setSuccessMessage(
        "Application submitted successfully! Check your email for confirmation."
      );
      setErrorMessage("");
      setEmailError("");
      setNameError("");
      setPhoneError("");
      setDocumentError("");
      setFullNameRequiredError("");
      setEmailRequiredError("");
      setPhoneRequiredError("");
      setProgramRequiredError("");
      setDocumentRequiredError("");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        program: "",
        documents: null,
      });
    }, 500);
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape" && showModal) {
        handleCloseModal();
      }
    };
    const handleTab = (event) => {
      if (showModal && event.key === "Tab") {
        const focusableElements = document.querySelectorAll(
          "#modal-form button, #modal-form input, #modal-form select"
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
    document.addEventListener("keydown", handleEsc);
    document.addEventListener("keydown", handleTab);
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.removeEventListener("keydown", handleTab);
    };
  }, [showModal]);

  return (
    <section
      id="application"
      className="px-4 py-24 bg-gradient-to-b from-[#003366] to-[#010e30] text-white"
      aria-label="Application Section"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="text-4xl sm:text-5xl font-bold text-[gold] text-center mb-10"
        >
          How to Apply ?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-[0_4px_12px_rgba(0,0,0,0.2)]"
            aria-label="Application Steps"
          >
            <h3 className="text-2xl font-semibold mb-4">Application Steps</h3>
            <ol className="list-decimal list-inside space-y-3 text-sm sm:text-base">
              <li>
                Visit our official website and navigate to the "Apply" section.
              </li>
              <li>
                Fill out the online application form with your personal and
                academic details.
              </li>
              <li>
                Upload required documents (e.g., Transcripts, ID or Passport,
                K.C.S.E certificates) in PDF format.
              </li>
              <li>
                Submit the application and pay the non-refundable fee of KES
                2,000.
              </li>
              <li>
                Receive confirmation via email and await further instructions.
              </li>
            </ol>
            <p className="mt-4 text-sm italic">
              Application deadline: December 15, 2025.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="flex items-center justify-center"
          >
            <button
              id="apply-here-button"
              onClick={handleApplyClick}
              className="bg-[gold] text-[#003366] font-bold py-3 px-8 rounded-lg hover:bg-yellow-600 transition-colors duration-300 text-lg shadow-[0_4px_12px_rgba(255,215,0,0.4)] hover:shadow-[0_6px_16px_rgba(255,215,0,0.6)]"
              aria-label="Open Application Form"
            >
              Apply Here
            </button>
          </motion.div>
        </div>
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
              onClick={(e) => e.stopPropagation()}
              id="modal-form"
              tabIndex="-1"
              role="document"
            >
              <div className="flex justify-between items-center mb-4">
                <h3
                  id="modal-title"
                  className="text-2xl font-semibold text-[gold]"
                >
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
                    <div
                      className="text-red-400 text-center py-2"
                      role="alert"
                      aria-live="polite"
                    >
                      {errorMessage}
                    </div>
                  )}
                  <div>
                    <label
                      className="block text-sm font-medium mb-1 text-white"
                      htmlFor="fullName"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`w-full p-2 rounded bg-white/5 text-white border ${
                        nameError || fullNameRequiredError
                          ? "border-red-500"
                          : "border-white/20"
                      } focus:outline-none focus:border-[gold]`}
                      placeholder="Enter your full name"
                      required
                      aria-required="true"
                      aria-label="Full Name Input"
                      aria-invalid={!!nameError || !!fullNameRequiredError}
                      aria-describedby={
                        nameError
                          ? "name-error"
                          : fullNameRequiredError
                          ? "name-required-error"
                          : undefined
                      }
                    />
                    {nameError && (
                      <p
                        id="name-error"
                        className="mt-1 text-sm text-red-500"
                        role="alert"
                        aria-live="polite"
                      >
                        {nameError}
                      </p>
                    )}
                    {fullNameRequiredError && (
                      <p
                        id="name-required-error"
                        className="mt-1 text-sm text-red-500"
                        role="alert"
                        aria-live="polite"
                      >
                        {fullNameRequiredError}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium mb-1 text-white"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full p-2 rounded bg-white/5 text-white border ${
                        emailError || emailRequiredError
                          ? "border-red-500"
                          : "border-white/20"
                      } focus:outline-none focus:border-[gold]`}
                      placeholder="Enter your email"
                      required
                      aria-required="true"
                      aria-label="Email Input"
                      aria-invalid={!!emailError || !!emailRequiredError}
                      aria-describedby={
                        emailError
                          ? "email-error"
                          : emailRequiredError
                          ? "email-required-error"
                          : undefined
                      }
                    />
                    {emailError && (
                      <p
                        id="email-error"
                        className="mt-1 text-sm text-red-500"
                        role="alert"
                        aria-live="polite"
                      >
                        {emailError}
                      </p>
                    )}
                    {emailRequiredError && (
                      <p
                        id="email-required-error"
                        className="mt-1 text-sm text-red-500"
                        role="alert"
                        aria-live="polite"
                      >
                        {emailRequiredError}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium mb-1 text-white"
                      htmlFor="phone"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full p-2 rounded bg-white/5 text-white border ${
                        phoneError || phoneRequiredError
                          ? "border-red-500"
                          : "border-white/20"
                      } focus:outline-none focus:border-[gold]`}
                      placeholder="Enter your phone number (e.g., +254123456789)"
                      required
                      aria-required="true"
                      aria-label="Phone Number Input"
                      aria-invalid={!!phoneError || !!phoneRequiredError}
                      aria-describedby={
                        phoneError
                          ? "phone-error"
                          : phoneRequiredError
                          ? "phone-required-error"
                          : undefined
                      }
                    />
                    {phoneError && (
                      <p
                        id="phone-error"
                        className="mt-1 text-sm text-red-500"
                        role="alert"
                        aria-live="polite"
                      >
                        {phoneError}
                      </p>
                    )}
                    {phoneRequiredError && (
                      <p
                        id="phone-required-error"
                        className="mt-1 text-sm text-red-500"
                        role="alert"
                        aria-live="polite"
                      >
                        {phoneRequiredError}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium mb-1 text-white"
                      htmlFor="program"
                    >
                      Program of Interest
                    </label>
                    <select
                      name="program"
                      id="program"
                      value={formData.program}
                      onChange={handleChange}
                      className={`w-full p-2 rounded bg-white/5 text-blue border ${
                        programRequiredError
                          ? "border-red-500"
                          : "border-white/20"
                      } focus:outline-none focus:border-[gold]`}
                      required
                      aria-required="true"
                      aria-label="Program of Interest Select"
                      aria-invalid={!!programRequiredError}
                      aria-describedby={
                        programRequiredError
                          ? "program-required-error"
                          : undefined
                      }
                    >
                      <option value="">Select a program</option>
                      {programs.map((program, index) => (
                        <option key={index} value={program.title}>
                          {program.title}
                        </option>
                      ))}
                    </select>
                    {programRequiredError && (
                      <p
                        id="program-required-error"
                        className="mt-1 text-sm text-red-500"
                        role="alert"
                        aria-live="polite"
                      >
                        {programRequiredError}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium mb-1 text-white"
                      htmlFor="documents"
                    >
                      Upload Documents (PDF only)
                    </label>
                    <input
                      type="file"
                      name="documents"
                      id="documents"
                      onChange={handleChange}
                      accept="application/pdf"
                      className={`w-full p-2 rounded bg-white/5 text-white border ${
                        documentError || documentRequiredError
                          ? "border-red-500"
                          : "border-white/20"
                      } focus:outline-none`}
                      multiple
                      aria-label="Upload Documents Input"
                      aria-invalid={!!documentError || !!documentRequiredError}
                      aria-describedby={
                        documentError
                          ? "document-error"
                          : documentRequiredError
                          ? "document-required-error"
                          : undefined
                      }
                    />
                    {documentError && (
                      <p
                        id="document-error"
                        className="mt-1 text-sm text-red-500"
                        role="alert"
                        aria-live="polite"
                      >
                        {documentError}
                      </p>
                    )}
                    {documentRequiredError && (
                      <p
                        id="document-required-error"
                        className="mt-1 text-sm text-red-500"
                        role="alert"
                        aria-live="polite"
                      >
                        {documentRequiredError}
                      </p>
                    )}
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
