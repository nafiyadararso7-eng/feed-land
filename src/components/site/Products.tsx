import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { PRODUCTS } from "./productsData";

export function Products({ onOrder }: { onOrder: (productId?: string) => void }) {
  return (
    <section id="products" className="py-24 sm:py-32 bg-brand-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">Our Range</div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-brand">Our Products</h2>
            <p className="mt-4 text-lg text-slate-600">
              Scientifically formulated feed for every stage of livestock growth.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 gap-6 lg:gap-8">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 120}>
              <div className="group relative bg-white rounded-2xl p-8 border-t-4 border-brand shadow-sm hover:shadow-glow hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">
                <div className="flex items-start gap-4">
                  <div className="text-5xl">{p.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-2xl text-brand">{p.name}</h3>
                    <p className="mt-2 text-slate-600 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
                <button
                  onClick={() => onOrder(p.id)}
                  className="mt-6 self-start inline-flex items-center gap-2 rounded-full bg-brand text-white px-6 py-2.5 text-sm font-semibold hover:bg-gold hover:text-gold-foreground hover:scale-105 transition-all"
                >
                  Order This
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}