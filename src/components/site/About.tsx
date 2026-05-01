import { Reveal } from "./Reveal";
import aboutImg from "@/assets/about.jpg";

const stats = [
  { icon: "🐄", title: "Cattle Feed", desc: "Premium nutrition for dairy & beef cattle" },
  { icon: "🐔", title: "Poultry Feed", desc: "Optimized blends for layers & broilers" },
  { icon: "🌾", title: "Quality Processing", desc: "Modern equipment, consistent batches" },
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <div className="inline-block text-gold font-semibold text-sm tracking-widest uppercase mb-3">About Gumara</div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-brand leading-tight">
              Who We Are
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Gumara Animal Feed Processing Plant is a leading animal feed manufacturer based in Addis Ababa, Ethiopia. We specialize in producing high-quality, nutritionally balanced feed for cattle, dairy cows, poultry, and all livestock.
            </p>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Our modern processing plant uses advanced equipment to ensure every batch meets the highest standards. We are committed to supporting Ethiopia's agricultural growth by empowering farmers with reliable, affordable, and effective animal nutrition.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-brand/20 to-gold/20 rounded-3xl blur-2xl" />
              <img
                src={aboutImg}
                alt="Gumara modern animal feed processing plant"
                width={1024}
                height={1024}
                loading="lazy"
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover aspect-square"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-brand/10">
                <div className="text-3xl font-display font-bold text-brand">100%</div>
                <div className="text-xs text-slate-600 font-medium">Quality Assured</div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid sm:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.title} delay={i * 120}>
              <div className="group bg-brand-soft rounded-2xl p-8 border border-brand/5 hover:bg-white hover:shadow-glow hover:-translate-y-2 transition-all duration-500">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{s.icon}</div>
                <h3 className="font-display font-bold text-xl text-brand mb-2">{s.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}