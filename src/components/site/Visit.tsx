import { Phone, MapPin, Clock } from "lucide-react";
import { Reveal } from "./Reveal";

const MAP_URL = "https://maps.app.goo.gl/LcFx1r1iAiFnu8tv6?g_st=ac";

export function Visit() {
  return (
    <section id="visit" className="py-24 sm:py-32 bg-brand text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-gold/20 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <div className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">Get In Touch</div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl">Visit Us</h2>
          <p className="mt-4 text-white/80 text-lg max-w-2xl mx-auto">
            We'd love to meet you in person. Reach out by phone or stop by our plant.
          </p>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          <Reveal>
            <a href="tel:+251944000011" className="block bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 hover:scale-105 transition-all">
              <Phone className="w-8 h-8 text-gold mx-auto" />
              <div className="mt-3 text-sm text-white/70">Call Us</div>
              <div className="mt-1 font-display font-bold text-2xl">0944-000011</div>
            </a>
          </Reveal>
          <Reveal delay={120}>
            <a href="tel:+251944000022" className="block bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 hover:scale-105 transition-all">
              <Phone className="w-8 h-8 text-gold mx-auto" />
              <div className="mt-3 text-sm text-white/70">Call Us</div>
              <div className="mt-1 font-display font-bold text-2xl">0944-000022</div>
            </a>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <div className="mt-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
            <MapPin className="w-8 h-8 text-gold mx-auto" />
            <p className="mt-4 text-xl font-medium">
              Akaki Kality Sub-city, Woreda 08, Addis Ababa, Ethiopia
            </p>
            <p className="mt-2 text-white/80 text-lg" lang="am">
              አቃቂ ቃሊቲ ክፍለ ከተማ ወረዳ 08
            </p>
            <div className="mt-6 flex items-center justify-center gap-2 text-white/80 text-sm">
              <Clock className="w-4 h-4" />
              We are open Monday – Saturday, 8:00 AM – 6:00 PM
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <a
            href={MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-gold text-gold-foreground px-10 py-4 text-base font-bold shadow-gold hover:scale-105 hover:shadow-[0_20px_50px_-10px_rgba(245,166,35,0.8)] transition-all"
          >
            <MapPin className="w-5 h-5" />
            See On Map
          </a>
        </Reveal>
      </div>
    </section>
  );
}