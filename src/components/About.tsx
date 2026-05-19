"use client";

import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function About() {
  return (
    <section id="about" className="px-6 py-32 lg:py-40">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid gap-16 lg:grid-cols-2 lg:items-center"
        >
          <motion.div variants={fadeUp}>
            <p className="mb-4 text-xs font-medium tracking-[0.25em] uppercase text-[var(--accent)]">
              About
            </p>
            <blockquote
              className="text-3xl font-medium leading-snug text-[var(--foreground)] sm:text-4xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              &ldquo;We believe the best digital products are the ones you
              barely notice — because they just{" "}
              <em className="not-italic text-[var(--accent)]">work</em>.&rdquo;
            </blockquote>
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-6">
            <p className="text-base leading-8 text-[var(--muted)]">
              Nordic Labs Dev is a digital studio built around one principle:
              craft matters. We bring together design sensibility and engineering
              precision to create products that are both beautiful and
              dependable.
            </p>
            <p className="text-base leading-8 text-[var(--muted)]">
              Our work spans from pixel-perfect interfaces to robust backend
              systems — always with an eye on performance, clarity, and
              longevity. No shortcuts, no bloat. Just considered solutions to
              real problems.
            </p>
            <div className="flex gap-10 pt-4">
              {[
                { value: "100%", label: "Remote-first" },
                { value: "Fast", label: "Turnaround" },
                { value: "Clean", label: "Codebase, always" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-xl font-bold text-[var(--foreground)]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-[var(--muted)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
