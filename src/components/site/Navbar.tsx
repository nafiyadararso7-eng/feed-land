import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Visit Us", href: "#visit" },
];

export function Navbar({ onOrder }: { onOrder: () => void }) {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("home");
    if (!hero) return;
    const io = new IntersectionObserver(
      ([entry]) => setShow(!entry.isIntersecting),
      { threshold: 0, rootMargin: "-80px 0px 0px 0px" }
    );
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        show ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <nav className="glass-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <img src={logo} alt="Gumara logo" className="h-10 w-10 object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)]" />
            <span className="font-display font-bold text-white hidden sm:block drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">Gumara</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-semibold text-white/90 hover:text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOrder}
              className="hidden sm:inline-flex items-center rounded-full bg-brand/90 backdrop-blur-md text-white px-5 py-2 text-sm font-semibold border border-white/20 hover:shadow-[0_0_25px_rgba(26,61,110,0.6)] hover:scale-105 transition-all"
            >
              Order Now
            </button>
            <button
              onClick={() => setOpen((o) => !o)}
              className="md:hidden p-2 rounded-md text-white"
              aria-label="Toggle menu"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden glass-nav border-t border-white/20 px-4 py-4 space-y-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-white font-semibold py-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                onOrder();
              }}
              className="w-full rounded-full bg-brand/90 text-white px-5 py-2.5 font-semibold border border-white/20"
            >
              Order Now
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}