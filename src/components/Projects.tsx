"use client";

import { motion, type Variants } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "BudgetLab",
    description:
      "A clean, intuitive budget tracking app for Android. Take control of your finances with smart categorization and insightful visualizations.",
    href: "https://play.google.com/store/apps/details?id=com.nordiclabs.budgetlab",
    logo: "/assets/budgetLab.webp",
    badge: "Android",
  },
  {
    name: "Venturoir",
    description:
      "A sanctuary for travelers and explorers — where every journey finds its words. Capture the soulful moments, the beautiful interactions, the feeling of being somewhere new, before memory softens the edges.",
    href: "https://www.venturoir.com/",
    logo: "/assets/venturoir.png",
    badge: "Web",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-32 lg:py-40">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.div variants={fadeUp} className="mb-16">
            <p className="mb-4 text-xs font-medium tracking-[0.25em] uppercase text-[var(--accent)]">
              Our Projects
            </p>
            <h2
              className="max-w-md text-4xl font-bold leading-tight text-[var(--foreground)] sm:text-5xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              What We&apos;ve Built
            </h2>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((project) => (
              <motion.a
                key={project.name}
                variants={fadeUp}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col rounded-2xl border border-white/[0.06] bg-[var(--surface)] p-8 transition-all duration-300 hover:border-white/[0.12] hover:bg-[var(--surface-2)]"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 overflow-hidden rounded-xl">
                      <img
                        src={project.logo}
                        alt={`${project.name} logo`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <span className="text-lg font-semibold text-[var(--foreground)]">
                      {project.name}
                    </span>
                  </div>
                  <span className="rounded-full border border-white/[0.08] px-3 py-1 text-xs text-[var(--muted)]">
                    {project.badge}
                  </span>
                </div>

                <p className="mb-6 flex-1 text-sm leading-7 text-[var(--muted)]">
                  {project.description}
                </p>

                <div className="flex items-center gap-1.5 text-xs font-medium text-[var(--accent)] transition-gap duration-200 group-hover:gap-2">
                  <span>View project</span>
                  <ExternalLink size={13} />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
