import { motion } from "framer-motion";
import yogurt from "@/assets/real-yogures-lanieve.png";
import fCoffee from "@/assets/real-filtro-coffee.png";
import fRojo from "@/assets/real-filtro-rojo.png";
import fNegro from "@/assets/real-filtro-negro.png";
import fOso from "@/assets/real-filtro-oso.png";
import fVaca from "@/assets/real-filtro-vaca.png";
import fOzono from "@/assets/real-filtro-ozono.png";
import boliChoco from "@/assets/boli-chocolate.jpg";
import boliCoco from "@/assets/boli-coco.jpg";

const items = [
  { src: yogurt, h: "h-80 sm:h-[28rem]", alt: "Yogures La Nieve" },
  { src: fCoffee, h: "h-56 sm:h-64", alt: "Filtro Manantial O3 café" },
  { src: boliChoco, h: "h-64 sm:h-80", alt: "Boli de chocolate" },
  { src: fOso, h: "h-72 sm:h-96", alt: "Filtro Corbatín osito" },
  { src: fRojo, h: "h-56 sm:h-64", alt: "Filtro Manantial O3 rojo" },
  { src: boliCoco, h: "h-64 sm:h-80", alt: "Boli de coco" },
  { src: fVaca, h: "h-80 sm:h-[28rem]", alt: "Filtro Corbatín vaquita" },
  { src: fNegro, h: "h-56 sm:h-64", alt: "Filtro Manantial O3 negro" },
  { src: fOzono, h: "h-64 sm:h-80", alt: "Filtro Electro Water ozono" },
];

export function Gallery() {
  return (
    <section id="galeria" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium mb-4">
            📸 Galería
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Nuestros <span className="text-gradient">productos reales</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Bolis, yogures y filtros de agua hechos con calidad y cariño.
          </p>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className={`mb-5 break-inside-avoid rounded-3xl overflow-hidden shadow-soft group cursor-zoom-in ${it.h} bg-pink/20`}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
