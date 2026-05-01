import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Products } from "@/components/site/Products";
import { Visit } from "@/components/site/Visit";
import { Footer } from "@/components/site/Footer";
import { OrderModal } from "@/components/site/OrderModal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gumara Animal Feed Processing Plant — Premium Livestock Feed in Ethiopia" },
      { name: "description", content: "Gumara Animal Feed Processing Plant produces premium dairy, beef cattle, and poultry feed in Addis Ababa, Ethiopia. Trusted by farmers nationwide." },
      { property: "og:title", content: "Gumara Animal Feed Processing Plant" },
      { property: "og:description", content: "Premium quality animal feed powering Ethiopia's livestock." },
    ],
  }),
  component: Index,
});

function Index() {
  const [orderOpen, setOrderOpen] = useState(false);
  const [initialProduct, setInitialProduct] = useState<string | undefined>(undefined);

  const openOrder = (productId?: string) => {
    setInitialProduct(productId);
    setOrderOpen(true);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <Navbar onOrder={() => openOrder()} />
      <main>
        <Hero />
        <About />
        <Products onOrder={openOrder} />
        <Visit />
      </main>
      <Footer onOrder={() => openOrder()} />
      <OrderModal open={orderOpen} onClose={() => setOrderOpen(false)} initialProduct={initialProduct} />
    </div>
  );
}
