import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, IceCream2, MessageCircle } from "lucide-react";

const WHATSAPP = "https://wa.me/573007169644?text=Hola!%20Quiero%20hacer%20un%20pedido";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#productos", label: "Productos" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#galeria", label: "Galería" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between rounded-3xl px-4 sm:px-5 py-3 transition-all ${
          scrolled ? "glass shadow-soft" : "bg-transparent"
        }`}>
          <a href="#inicio" className="flex items-center gap-2 group">
            <span className="grid place-items-center w-10 h-10 rounded-2xl gradient-brand text-white shadow-soft group-hover:rotate-12 transition-transform">
              <IceCream2 className="w-5 h-5" />
            </span>
            <span className="font-display text-base sm:text-lg font-bold leading-tight">
              Bolis y Yogurt
              <span className="block text-[10px] sm:text-xs font-sans text-muted-foreground -mt-1">Delicias</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-2 rounded-full text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-white/60 transition-all"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full gradient-brand text-white text-sm font-semibold shadow-soft hover:shadow-glow hover:-translate-y-0.5 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            Pedir por WhatsApp
          </a>

          <button
            className="lg:hidden grid place-items-center w-10 h-10 rounded-full glass"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menú"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden mt-3 glass rounded-3xl p-4 shadow-soft"
          >
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-2xl hover:bg-white/70 font-medium"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl gradient-brand text-white font-semibold"
              >
                <MessageCircle className="w-4 h-4" />
                Pedir por WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
