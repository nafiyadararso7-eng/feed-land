import { Phone, MapPin } from "lucide-react";
import { useEffect, useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";

const MAP_URL = "https://maps.app.goo.gl/LcFx1r1iAiFnu8tv6?g_st=ac";

export function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!bgRef.current) return;
      const y = window.scrollY;
      bgRef.current.style.transform = `translate3d(0, ${y * 0.3}px, 0) scale(1.1)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <div
        ref={bgRef}
        className="absolute inset-0 will-change-transform"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A3D6E]/85 via-[#1A3D6E]/55 to-[#1A3D6E]/30" />
      <div className="absolute inset-0 bg-gradient-to-tr from-[#1A3D6E]/40 to-transparent" />

      {/* Top-left logo */}
      <div className="absolute top-6 left-6 z-10 flex items-center gap-3 animate-[fade-up_0.8s_ease-out]">
        <img src={logo} alt="Gumara Animal Feed Processing Plant" className="h-14 w-14 sm:h-16 sm:w-16 object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]" />
        <div className="text-white">
          <div className="font-display font-bold text-base sm:text-lg leading-tight">Gumara</div>
          <div className="text-xs text-white/80 leading-tight hidden sm:block">Animal Feed Processing Plant</div>
        </div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6">
        <div className="max-w-5xl">
          <div
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/15 border border-white/30 backdrop-blur-md text-white/90 text-xs sm:text-sm font-medium opacity-0"
            style={{ animation: "fade-up 0.7s 0.1s ease-out forwards" }}
          >
            🇪🇹 Trusted Across Ethiopia
          </div>
          <h1
            className="font-display font-extrabold text-white text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight opacity-0"
            style={{ animation: "fade-up 0.9s 0.25s ease-out forwards" }}
          >
            Premium Quality Animal Feed
            <span className="block mt-2 bg-gradient-to-r from-[#F5A623] to-[#FFD27A] bg-clip-text text-transparent">
              Powering Ethiopia's Livestock
            </span>
          </h1>
          <p
            className="mt-6 text-base sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed opacity-0"
            style={{ animation: "fade-up 0.9s 0.45s ease-out forwards" }}
          >
            Gumara Animal Feed Processing Plant — Trusted by farmers across Ethiopia for high-nutrition feed solutions for cattle, poultry, and livestock.
          </p>

          <div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0"
            style={{ animation: "fade-up 0.9s 0.65s ease-out forwards" }}
          >
            <a
              href="tel:+251944000011"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold text-gold-foreground px-8 py-4 text-base font-bold shadow-gold hover:shadow-[0_15px_40px_-5px_rgba(245,166,35,0.7)] hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              CALL US
            </a>
            <a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-transparent border-2 border-white text-white px-8 py-4 text-base font-bold hover:bg-white hover:text-brand hover:scale-105 hover:shadow-[0_15px_40px_-5px_rgba(255,255,255,0.4)] transition-all duration-300"
            >
              <MapPin className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
              VISIT US
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}