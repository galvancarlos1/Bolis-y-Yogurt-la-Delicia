import { IceCream2, MessageCircle } from "lucide-react";

const PHONE = "3007169644";
const WA = "https://wa.me/573007169644";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#productos", label: "Productos" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#galeria", label: "Galería" },
  { href: "#contacto", label: "Contacto" },
];

export function Footer() {
  return (
    <footer className="gradient-brand text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="grid place-items-center w-10 h-10 rounded-2xl bg-white/20 backdrop-blur">
                <IceCream2 className="w-5 h-5" />
              </span>
              <span className="font-display text-xl font-bold">Bolis y Yogurt Delicias</span>
            </div>
            <p className="text-white/85 leading-relaxed">
              Productos artesanales hechos con amor: bolis cremosos, yogurt natural y filtros de agua para tu hogar.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold mb-4">Navegación</h4>
            <ul className="grid grid-cols-2 gap-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/85 hover:text-white transition">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold mb-4">Síguenos</h4>
            <div className="flex gap-3">
              <a href={WA} target="_blank" rel="noreferrer" className="w-11 h-11 rounded-2xl bg-white/15 hover:bg-white/25 grid place-items-center transition" aria-label="WhatsApp">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
            <p className="text-white/85 text-sm mt-4 font-semibold">📱 +57 {PHONE}</p>
            <p className="text-white/75 text-sm">Pedidos por WhatsApp</p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 flex flex-col sm:flex-row gap-3 justify-between items-center text-sm text-white/80">
          <p>© {new Date().getFullYear()} Bolis y Yogurt Delicias. Todos los derechos reservados.</p>
          <p>Hecho con 💖 en Colombia 🇨🇴</p>
        </div>
      </div>
    </footer>
  );
}
