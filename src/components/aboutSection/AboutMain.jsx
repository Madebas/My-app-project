import { motion, useReducedMotion } from "framer-motion";
import AboutText from "./AboutText";
import Aboutimage from "/images/Aboutimage.jpg";
import { fadeIn } from "../../framerMotion/variants";

function AboutMain() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="relative scroll-mt-24 px-4 py-20 bg-no-repeat bg-center bg-cover"
      aria-labelledby="about-heading"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-60 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(255,215,0,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      </div>

      <div className="max-w-[1200px] mx-auto">
        <motion.h2
          id="about-heading"
          variants={fadeIn("down", 0.2)}
          {...(!prefersReducedMotion && { whileInView: "show" })}
          viewport={{ once: false, amount: 0.7 }}
          className="text-4xl sm:text-5xl font-bold text-[gold] text-center mb-8 drop-shadow-[0_2px_8px_rgba(255,215,0,0.35)] tracking-tight"
        >
          About Johans Medical and Health Sciences Training Institute
        </motion.h2>

        <motion.p
          variants={fadeIn("up", 0.4)}
          {...(!prefersReducedMotion && { whileInView: "show" })}
          viewport={{ once: false, amount: 0.7 }}
          className="text-lg sm:text-xl max-w-[900px] mx-auto text-white/90 leading-8 text-center mb-16 lg:mb-20"
        >
          Established in Kenya as a premier institution, Johans Institute is
          dedicated to transforming lives through accessible, high-quality
          medical education. We blend innovative teaching, hands-on clinical
          practice, and ethical training to produce compassionate healthcare
          professionals ready to impact communities globally.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-36 mb-20 lg:mb-24 items-stretch">
          <motion.div
            variants={fadeIn("right", 0.6)}
            {...(!prefersReducedMotion && { whileInView: "show" })}
            viewport={{ once: false, amount: 0.7 }}
            className="group relative rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/[0.04] backdrop-blur-sm shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
          >
            <div
              className="p-0 h-[50vh] md:h-[420px]"
              style={{ width: "100%", height: "50vh" }}
            >
              <img
                src={Aboutimage}
                alt="Students in a medical lab during practical training"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] will-change-transform"
                style={{ width: "100%", height: "-webkit-fill-available" }}
                loading="lazy"
                decoding="async"
                sizes="(min-width: 1024px) 560px, 100vw"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 group-hover:ring-[gold]/30 transition-all duration-500" />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.6)}
            {...(!prefersReducedMotion && { whileInView: "show" })}
            viewport={{ once: false, amount: 0.7 }}
            className="flex flex-col justify-center"
          >
            <AboutText />
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          {...(!prefersReducedMotion && { whileInView: "show" })}
          viewport={{ once: false, amount: 0.7 }}
          className="mb-16"
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-[gold] text-center mb-8 tracking-tight">
            Why Choose Johans Medical and Health Sciences Training Institute?
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "fas fa-check-circle",
                text: "Accredited programs approved by national regulatory bodies.",
              },
              {
                icon: "fas fa-stethoscope",
                text: "Hands-on clinical experience with partner hospitals and health centers.",
              },
              {
                icon: "fas fa-chalkboard-teacher",
                text: "Experienced faculty with real-world healthcare expertise.",
              },
              {
                icon: "fas fa-graduation-cap",
                text: "High pass rates in national licensing exams.",
              },
              {
                icon: "fas fa-users",
                text: "Supportive community with mentorship and leadership opportunities.",
              },
              {
                icon: "fas fa-globe-africa",
                text: "Commitment to community health and global standards.",
              },
            ].map((item, i) => (
              <motion.li
                key={i}
                variants={fadeIn("up", 0.8 + i * 0.1)}
                initial="hidden"
                {...(!prefersReducedMotion && { whileInView: "show" })}
                viewport={{ once: false, amount: 0.7 }}
                whileHover={
                  !prefersReducedMotion ? { y: -4, scale: 1.01 } : undefined
                }
                className="group bg-[rgba(10,9,9,0.8)]/90 p-6 rounded-2xl shadow-[0_2px_18px_rgba(0,0,0,0.25)] flex items-start gap-4 ring-1 ring-white/10 hover:ring-[gold]/35 transition-all"
              >
                <i
                  aria-hidden="true"
                  className={`${item.icon} text-[gold] text-2xl mt-1`}
                />
                <span className="text-white/95 text-base sm:text-lg leading-relaxed">
                  {item.text}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 1.2)}
          {...(!prefersReducedMotion && { whileInView: "show" })}
          viewport={{ once: false, amount: 0.7 }}
          className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-10"
          aria-label="Key institutional statistics"
        >
          {[
            { value: "85%", label: "Graduate Employment Rate" },
            { value: "20+", label: "Accredited Programs" },
            { value: "500+", label: "Students Enrolled Annually" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeIn("up", 1.2 + i * 0.1)}
              {...(!prefersReducedMotion && { whileInView: "show" })}
              viewport={{ once: false, amount: 0.7 }}
              whileHover={!prefersReducedMotion ? { y: -3 } : undefined}
              className="relative overflow-hidden text-center p-6 sm:p-7 border border-white/10 rounded-2xl min-w-[200px] bg-white/[0.035] ring-1 ring-inset ring-white/10 hover:border-[gold]/35 hover:shadow-[0_8px_40px_rgba(255,215,0,0.12)] transition-all"
            >
              <div className="pointer-events-none absolute -top-10 -right-10 h-24 w-24 rounded-full bg-[gold]/10 blur-xl" />
              <h4 className="text-3xl font-extrabold bg-gradient-to-r from-[gold] via-yellow-300 to-[gold] bg-clip-text text-transparent tracking-tight drop-shadow-[0_1px_8px_rgba(255,215,0,0.2)]">
                {stat.value}
              </h4>
              <p className="text-white/90 text-base sm:text-lg mt-1">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default AboutMain;
