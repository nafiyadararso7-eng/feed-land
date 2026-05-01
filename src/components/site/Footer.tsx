import { Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer({ onOrder }: { onOrder: () => void }) {
  return (
    <footer className="bg-[#0F2A4F] text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="Gumara logo" className="h-12 w-12 object-contain" />
            <div>
              <div className="font-display font-bold text-white text-lg">Gumara</div>
              <div className="text-xs text-white/70">Animal Feed Processing Plant</div>
            </div>
          </div>
          <p className="mt-4 italic text-gold font-medium">"Feeding Ethiopia's Future"</p>
        </div>

        <div>
          <h4 className="font-display font-bold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-gold transition">Home</a></li>
            <li><a href="#about" className="hover:text-gold transition">About Us</a></li>
            <li><a href="#products" className="hover:text-gold transition">Products</a></li>
            <li><a href="#visit" className="hover:text-gold transition">Visit Us</a></li>
            <li><button onClick={onOrder} className="hover:text-gold transition">Order Now</button></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-white mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-gold" /> <a href="tel:+251944000011" className="hover:text-gold">0944-000011</a></li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-gold" /> <a href="tel:+251944000022" className="hover:text-gold">0944-000022</a></li>
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" /> Akaki Kality Sub-city, Woreda 08, Addis Ababa, Ethiopia</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        © 2025 Gumara Animal Feed Processing Plant. All Rights Reserved.
      </div>
    </footer>
  );
}