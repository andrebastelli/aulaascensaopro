import { useEffect, useState } from "react";

function CTAButton({ children, large = false }: { children: React.ReactNode; large?: boolean }) {
  return (
    <a
      href="https://chk.eduzz.com/801E4VKNW7"
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-premium inline-flex items-center justify-center gap-3 rounded-full font-semibold text-ink tracking-wide uppercase ${
        large ? "px-10 py-5 text-base md:text-lg" : "px-8 py-4 text-sm md:text-base"
      }`}
    >
      {children}
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14M13 5l7 7-7 7" />
      </svg>
    </a>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="glass gold-border rounded-2xl px-6 py-6 text-center">
      <div className="font-display text-4xl md:text-5xl font-bold text-gradient-gold">
        {value}
      </div>
      <div className="mt-2 text-sm md:text-base text-white/70 leading-snug">
        {label}
      </div>
    </div>
  );
}

function ProblemItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4 group">
      <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold transition-all group-hover:scale-110 group-hover:bg-gold/20">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </div>
      <p className="text-lg md:text-xl text-white/85 leading-relaxed">{children}</p>
    </div>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* NAV */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-ink/80 backdrop-blur-xl border-b border-white/5 py-3" : "py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex flex-col leading-none">
            <span className="font-display text-xl md:text-2xl font-bold tracking-wide">
              ASCENSÃO <span className="text-gradient-gold">PRO</span>
            </span>
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-white/50 mt-1">
              Seu potencial máximo na carreira e negócios
            </span>
          </div>
          <a
            href="https://chk.eduzz.com/801E4VKNW7"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-gold-light transition-colors"
          >
            Quero participar
            <span>→</span>
          </a>
        </div>
      </header>

      {/* VIDEO */}
      <section id="aula" className="px-4 md:px-6 pb-16 md:pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="relative animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="absolute -inset-4 bg-gradient-to-r from-gold/30 via-gold-light/20 to-gold/30 rounded-3xl blur-2xl opacity-60" />
            <div className="relative gold-border rounded-2xl overflow-hidden shadow-glow bg-black">
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  src="https://www.kapwing.com/w/UaYjDAQloZ"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: "none" }}
                  allow="autoplay; encrypted-media; fullscreen"
                  allowFullScreen
                  title="Aula Ascensão Pro"
                />
              </div>
            </div>
          </div>

          <div className="mt-10 md:mt-12 text-center animate-fade-up" style={{ animationDelay: "0.45s" }}>
            <CTAButton large>Quero destravar meu crescimento</CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}