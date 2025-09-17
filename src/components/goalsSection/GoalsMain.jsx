import { motion, useReducedMotion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { useState } from "react";

function GoalsMain() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const prefersReducedMotion = useReducedMotion();

  const goals = [
    {
      title: "Enhance Medical Education",
      desc: "By 2026, we aim to deliver world-class healthcare training programs that empower students with the most advanced skills and knowledge to thrive in a rapidly evolving medical landscape.",
      icon: "fas fa-book-medical",
    },
    {
      title: "Expand Clinical Partnerships",
      desc: "By 2027, we plan to partner with more than 10 leading hospitals and clinics to give our students real-world, hands-on experience in patient care and clinical practice.",
      icon: "fas fa-hospital",
    },
    {
      title: "Promote Community Health",
      desc: "Each year, we are launching five impactful community health initiatives to expand access to quality healthcare for local communities.",
      icon: "fas fa-heartbeat",
    },
    {
      title: "Achieve Global Recognition",
      desc: "By 2028, we are committed to achieving international accreditation and building strong global partnerships that elevate our standards and open doors to world-class opportunities.",
      icon: "fas fa-globe",
    },
    {
      title: "Innovate Learning Technology",
      desc: "We are integrating AI and VR into our curriculum to create immersive, future-ready learning experiences that transform how students engage with knowledge.",
      icon: "fas fa-vr-cardboard",
    },
  ];

  return (
    <section
      id="goals"
      className="relative px-4 py-24 bg-gradient-to-b from-[#003366] to-[#1e3a8a] text-white"
      aria-labelledby="goals-heading"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_50%_-10%,rgba(255,215,0,0.10),transparent_60%)] opacity-70" />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.25'/%3E%3C/svg%3E\")",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
      </div>

      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          id="goals-heading"
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          {...(!prefersReducedMotion && { whileInView: "show" })}
          viewport={{ once: false, amount: 0.7 }}
          className="text-4xl sm:text-5xl font-extrabold text-[gold] text-center tracking-tight drop-shadow-[0_2px_8px_rgba(255,215,0,0.35)] mb-10"
        >
          Our Goals
        </motion.h2>

        <div className="hidden md:grid md:grid-cols-4 gap-6 mb-12 auto-rows-[1fr]">
          {goals.map((goal, i) => (
            <motion.div
              key={i}
              variants={fadeIn("up", 0.2 + i * 0.1)}
              initial="hidden"
              {...(!prefersReducedMotion && { whileInView: "show" })}
              viewport={{ once: false, amount: 0.7 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={[
                "group relative rounded-2xl p-[1px]",
                "bg-gradient-to-br from-white/25 via-white/10 to-transparent",
                i === 0 ? "md:col-span-2" : "",
              ].join(" ")}
              style={{
                transform:
                  hoveredIndex === i
                    ? "translateY(-6px) scale(1.02)"
                    : "translateY(0) scale(1)",
                transition: "transform 0.35s cubic-bezier(0.2, 0.7, 0.2, 1)",
              }}
              whileHover={!prefersReducedMotion ? { y: -4 } : undefined}
            >
              <div
                className={[
                  "relative h-full rounded-[calc(1rem-1px)]",
                  "bg-white/[0.07] backdrop-blur-md",
                  "ring-1 ring-inset ring-white/10",
                  "transition-all duration-300",
                  hoveredIndex === i
                    ? "ring-[gold]/30 shadow-[0_10px_40px_rgba(255,215,0,0.15)]"
                    : "shadow-[0_6px_20px_rgba(0,0,0,0.25)]",
                ].join(" ")}
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-full w-[3px] bg-[gold]/60 rounded-l-[calc(1rem-1px)] opacity-0 group-hover:opacity-100 transition-opacity"
                />

                <div
                  aria-hidden="true"
                  className="absolute right-3 top-2 text-6xl font-black text-white/10 select-none pointer-events-none"
                >
                  {(i + 1).toString().padStart(2, "0")}
                </div>

                <div className="relative p-6 flex flex-col min-h-[220px]">
                  <div className="flex items-start gap-3">
                    <i
                      aria-hidden="true"
                      className={`${goal.icon} text-[gold] text-3xl drop-shadow-[0_2px_8px_rgba(255,215,0,0.35)]`}
                    />
                    <h3 className="text-xl font-semibold tracking-tight">
                      {goal.title}
                    </h3>
                  </div>

                  <p className="mt-3 text-sm text-white/90 leading-relaxed">
                    {goal.desc}
                  </p>

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-6 bottom-3 h-px bg-gradient-to-r from-transparent via-[gold]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="md:hidden space-y-6">
          {goals.map((goal, i) => (
            <motion.div
              key={i}
              variants={fadeIn("up", 0.2 + i * 0.1)}
              initial="hidden"
              {...(!prefersReducedMotion && { whileInView: "show" })}
              viewport={{ once: false, amount: 0.7 }}
              className="relative bg-white/10 backdrop-blur-md rounded-2xl p-5 ring-1 ring-inset ring-white/10 shadow-[0_6px_20px_rgba(0,0,0,0.25)]"
            >
              <div
                aria-hidden="true"
                className="absolute right-3 top-2 text-5xl font-black text-white/10 select-none"
              >
                {(i + 1).toString().padStart(2, "0")}
              </div>

              <div className="flex items-start gap-3">
                <i
                  aria-hidden="true"
                  className={`${goal.icon} text-[gold] text-2xl`}
                />
                <h3 className="text-lg font-semibold tracking-tight">
                  {goal.title}
                </h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-white/90">
                {goal.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GoalsMain;
