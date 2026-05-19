"use client";

import { motion, type Variants } from "framer-motion";
import { Layers, Code2, Zap, MessageSquare } from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Design Systems",
    description:
      "Cohesive component libraries and visual languages that scale. Figma-to-code workflows that keep design and implementation in sync.",
  },
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Full-stack web applications built with modern frameworks. React, Next.js, TypeScript — performant, accessible, and maintainable.",
  },
  {
    icon: Zap,
    title: "Performance Engineering",
    description:
      "Core Web Vitals optimization, bundle analysis, edge caching. We make fast sites faster and slow sites feel instant.",
  },
  {
    icon: MessageSquare,
    title: "Technical Consulting",
    description:
      "Architecture reviews, tech stack guidance, and code audits. Honest advice from engineers who have shipped real products.",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function Services() {
  return (
    <section id="services" className="px-6 py-32 lg:py-40">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.div variants={fadeUp} className="mb-16">
            <p className="mb-4 text-xs font-medium tracking-[0.25em] uppercase text-[var(--accent)]">
              Services
            </p>
            <h2
              className="max-w-md text-4xl font-bold leading-tight text-[var(--foreground)] sm:text-5xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              What We Do
            </h2>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={fadeUp}
                  className="group relative rounded-2xl border border-white/[0.06] bg-[var(--surface)] p-8 transition-colors duration-300 hover:border-white/[0.12] hover:bg-[var(--surface-2)]"
                >
                  <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent)]/10">
                    <Icon size={20} className="text-[var(--accent)]" />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-7 text-[var(--muted)]">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
