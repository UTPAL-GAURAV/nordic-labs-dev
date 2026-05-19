"use client";

import { motion } from "framer-motion";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={16} height={16}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/[0.06] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center"
        >
          <p className="mb-3 text-xs font-medium tracking-[0.25em] uppercase text-[var(--accent)]">
            Get in Touch
          </p>
          <h2
            className="mb-6 text-3xl font-bold text-[var(--foreground)] sm:text-4xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Let&apos;s Build Something
          </h2>
          <p className="mb-10 max-w-sm text-sm leading-7 text-[var(--muted)]">
            Have a project in mind? We&apos;d love to hear about it.
          </p>

          <a
            href="mailto:nordiclabsdev@gmail.com"
            className="mb-12 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-8 py-3.5 text-sm font-semibold text-[#080808] transition-all duration-200 hover:brightness-110 hover:scale-[1.02]"
          >
            nordiclabsdev@gmail.com
          </a>

          <div className="mb-14 flex items-center gap-5">
            <a
              href="https://www.instagram.com/nordiclabsdev"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 rounded-full border border-white/[0.08] px-4 py-2 text-[var(--muted)] transition-all duration-200 hover:border-transparent hover:text-white"
              style={{
                ["--ig-shadow" as string]: "0 0 14px 2px rgba(225,48,108,0.55)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "var(--ig-shadow)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(225,48,108,0.6)";
                (e.currentTarget as HTMLElement).style.color = "#e1306c";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "";
                (e.currentTarget as HTMLElement).style.borderColor = "";
                (e.currentTarget as HTMLElement).style.color = "";
              }}
            >
              <InstagramIcon />
              <span className="text-xs font-medium">@nordiclabsdev</span>
            </a>
          </div>

          <div className="h-px w-full bg-white/[0.06]" />

          <div className="mt-8 flex flex-col items-center gap-2 sm:flex-row sm:justify-between sm:w-full">
            <p className="text-xs text-[var(--muted)]">
              © {new Date().getFullYear()} Nordic Labs Dev. All rights reserved.
            </p>
            <p className="text-xs text-[var(--muted)]">
              Clean code. Thoughtful design. Modern technology.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
