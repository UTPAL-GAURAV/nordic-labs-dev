"use client";

import { motion } from "framer-motion";

const stack = [
  "React",
  "Flutter",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Tailwind CSS",
  "Vercel",
  "Spring Boot"
];

export default function TechStack() {
  return (
    <section className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-10 flex items-center gap-6">
            <div className="h-px flex-1 bg-white/[0.06]" />
            <p className="text-xs font-medium tracking-[0.25em] uppercase text-[var(--muted)]">
              Built With
            </p>
            <div className="h-px flex-1 bg-white/[0.06]" />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {stack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.05,
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="rounded-full border border-white/[0.08] bg-[var(--surface)] px-5 py-2 text-sm font-medium text-[var(--muted)] transition-colors duration-200 hover:border-[var(--accent)]/30 hover:text-[var(--foreground)]"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
