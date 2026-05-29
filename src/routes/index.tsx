import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bolis y Yogurt Delicias — Sabores que refrescan tu día" },
      {
        name: "description",
        content: "Bolis artesanales y yogurt casero preparados con amor. Frescura, fruta natural y los mejores ingredientes. Haz tu pedido por WhatsApp.",
      },
      { property: "og:title", content: "Bolis y Yogurt Delicias" },
      { property: "og:description", content: "Bolis artesanales y yogurt casero. Sabores que refrescan tu día." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <About />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
