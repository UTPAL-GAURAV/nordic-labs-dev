"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(56,189,248,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Noise texture overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-4xl"
      >
        <p className="mb-6 text-xs font-medium tracking-[0.25em] uppercase text-[var(--accent)]">
          Nordic Labs Dev
        </p>

        <h1
          className="mb-8 text-5xl font-bold leading-[1.1] tracking-tight text-[var(--foreground)] sm:text-6xl lg:text-7xl"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Building Elegant{" "}
          <span className="italic text-[var(--accent)]">Digital</span>{" "}
          Experiences
        </h1>

        <p className="mx-auto mb-12 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
          Clean code, thoughtful design, and modern technology — crafted with
          intention from the ground up.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#services"
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-7 py-3.5 text-sm font-semibold text-[#080808] transition-all duration-200 hover:brightness-110 hover:scale-[1.02]"
          >
            Our Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-7 py-3.5 text-sm font-semibold text-[var(--foreground)] transition-all duration-200 hover:border-white/20 hover:bg-white/5"
          >
            Get in Touch
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about" aria-label="Scroll down">
          <ArrowDown
            size={20}
            className="text-[var(--muted)] animate-bounce"
          />
        </a>
      </motion.div>
    </section>
  );
}
