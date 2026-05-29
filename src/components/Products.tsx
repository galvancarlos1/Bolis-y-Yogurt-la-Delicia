import { motion } from "framer-motion";
import { MessageCircle, Droplets, Shield, Sparkles } from "lucide-react";
import boliChoco from "@/assets/boli-chocolate.jpg";
import boliCoco from "@/assets/boli-coco.jpg";
import boliRon from "@/assets/boli-ron-pasas.jpg";
import yogurtReal from "@/assets/real-yogures-lanieve.png";
import fCoffee from "@/assets/real-filtro-coffee.png";
import fRojo from "@/assets/real-filtro-rojo.png";
import fNegro from "@/assets/real-filtro-negro.png";
import fElectro from "@/assets/real-filtro-electrowater.png";
import fOzono from "@/assets/real-filtro-ozono.png";
import fOso from "@/assets/real-filtro-oso.png";
import fVaca from "@/assets/real-filtro-vaca.png";
import fUvUf from "@/assets/real-filtro-uvuf.png";
import fUvUfCard from "@/assets/real-filtro-uvuf-card.png";
import fInoxCalidad from "@/assets/real-filtro-inox-calidad.png";
import fBlancoOzono from "@/assets/real-filtro-blanco-ozono.png";
import fPinas from "@/assets/real-filtro-pinas.png";
import fInoxSalud from "@/assets/real-filtro-inox-salud.png";
import fInoxEpo from "@/assets/real-filtro-inox-epo.png";
import fChef from "@/assets/real-filtro-chef.png";
import fNegroPedestal from "@/assets/real-filtro-negro-pedestal.png";
import fBlancoClassic from "@/assets/real-filtro-blanco-classic.png";
import fFresa from "@/assets/real-filtro-fresa.png";
import fGotita from "@/assets/real-filtro-gotita.png";
import fChefElectro from "@/assets/real-filtro-chef-electro.png";

const WA = "https://wa.me/573007169644";
const waLink = (msg: string) => `${WA}?text=${encodeURIComponent(msg)}`;

const bolisFlavors = [
  { name: "Chocolate", img: boliChoco, emoji: "🍫" },
  { name: "Coco", img: boliCoco, emoji: "🥥" },
  { name: "Ron con Pasas", img: boliRon, emoji: "🍇" },
];

const filtros = [
  {
    name: "Manantial O³ — Edición Café",
    price: "COP $400.000",
    desc: "Filtro premium con diseño café. Tecnología de ozono para agua pura y saludable.",
    img: fCoffee,
  },
  {
    name: "Manantial O³ — Rojo",
    price: "COP $400.000",
    desc: "Diseño moderno en rojo intenso. Sistema de purificación de alta eficiencia.",
    img: fRojo,
  },
  {
    name: "Manantial O³ — Negro Elegante",
    price: "COP $400.000",
    desc: "Acabado negro premium. Elimina impurezas y bacterias del agua.",
    img: fNegro,
  },
  {
    name: "Electro Water — Manantial O³",
    price: "COP $400.000",
    desc: "Modelo blanco compacto. Ideal para hogar y oficina.",
    img: fElectro,
  },
  {
    name: "Electro Water — Ozono + Agua",
    price: "COP $400.000",
    desc: "Doble switch ozono/agua. Control total sobre la purificación.",
    img: fOzono,
  },
  {
    name: "Filtro UV + UF Inoxidable",
    price: "COP $400.000",
    desc: "Tecnología UV y UF en acero inoxidable. Elimina bacterias y microorganismos.",
    img: fUvUf,
  },
  {
    name: "Electro Water UV/UF Premium",
    price: "COP $400.000",
    desc: "Mejora el sabor del agua. Fácil instalación y uso.",
    img: fUvUfCard,
  },
  {
    name: "Corbatín Osito",
    price: "COP $400.000",
    desc: "Filtro cerámico decorativo en forma de osito. Perfecto para los niños.",
    img: fOso,
  },
  {
    name: "Corbatín Vaquita",
    price: "COP $400.000",
    desc: "Diseño tierno en cerámica con forma de vaca. Agua pura con estilo.",
    img: fVaca,
  },
  {
    name: "Corbatín Gotita Feliz",
    price: "COP $400.000",
    desc: "Filtro cerámico en forma de gotita sonriente. Calidad y confianza para toda la familia.",
    img: fGotita,
  },
  {
    name: "Corbatín Fresita",
    price: "COP $400.000",
    desc: "Diseño en forma de fresa con doble switch ozono/agua. Divertido y funcional.",
    img: fFresa,
  },
  {
    name: "Corbatín Piña",
    price: "COP $400.000",
    desc: "Filtro cerámico tipo piña, disponible en amarillo y blanco. Estilo tropical único.",
    img: fPinas,
  },
  {
    name: "Manantial O³ — Chef Edición",
    price: "COP $400.000",
    desc: "Diseño exclusivo Chef. Agua pura ideal para cocinar y preparar alimentos.",
    img: fChef,
  },
  {
    name: "Manantial O³ — Negro Pedestal",
    price: "COP $400.000",
    desc: "Elegante diseño negro con grifo central. Acabado premium para tu cocina.",
    img: fNegroPedestal,
  },
  {
    name: "Manantial O³ — Blanco Classic",
    price: "COP $400.000",
    desc: "Diseño minimalista en blanco. Encaja perfecto en cualquier espacio.",
    img: fBlancoClassic,
  },
  {
    name: "Electro Water — Blanco Ozono",
    price: "COP $400.000",
    desc: "Modelo blanco con doble switch ozono/agua. El agua es vida.",
    img: fBlancoOzono,
  },
  {
    name: "Electro Water — Inox Calidad de Vida",
    price: "COP $400.000",
    desc: "Acero inoxidable con tecnología UV/UF. Calidad de vida garantizada.",
    img: fInoxCalidad,
  },
  {
    name: "Electro Water — Inox Salud",
    price: "COP $400.000",
    desc: "Inoxidable UV/UF. Protege lo que más importa: tu salud.",
    img: fInoxSalud,
  },
  {
    name: "Electro Water — Inox EPO",
    price: "COP $400.000",
    desc: "Modelo inoxidable EPO con doble switch ozono/agua. Máxima durabilidad.",
    img: fInoxEpo,
  },
  {
    name: "Electro Water — Chef Capitán",
    price: "COP $400.000",
    desc: "Diseño exclusivo en forma de chef capitán. Doble switch ozono/agua, el agua es vida.",
    img: fChefElectro,
  },
];

export function Products() {
  return (
    <section id="productos" className="py-20 sm:py-24 relative overflow-hidden">
      {/* ── Encabezado general ── */}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium mb-4">
            🍨 Nuestros productos
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Frescura que <span className="text-gradient">enamora</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Productos artesanales preparados con ingredientes seleccionados y mucho cariño.
          </p>
        </motion.div>

        {/* ═══════════════ BOLIS ARTESANALES ═══════════════ */}
        <div id="bolis" className="mb-24 scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink/40 text-xs font-bold uppercase tracking-wide mb-3">
                <Sparkles className="w-3.5 h-3.5" /> Bolis Artesanales
              </div>
              <h3 className="font-display text-3xl sm:text-4xl font-bold">
                Sabores que <span className="text-gradient">refrescan</span>
              </h3>
              <p className="text-muted-foreground mt-2">Hechos a mano, cremosos y deliciosos. Solo <span className="font-bold text-foreground">COP $1.000</span> c/u.</p>
            </div>
            <a
              href={waLink("Hola, quiero pedir bolis artesanales.")}
              target="_blank"
              rel="noreferrer"
              className="self-start inline-flex items-center gap-2 px-5 py-3 rounded-full glass font-semibold text-sm shadow-soft hover:-translate-y-0.5 transition"
            >
              <MessageCircle className="w-4 h-4 text-primary" /> Pedir variados
            </a>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
            {bolisFlavors.map((f, i) => (
              <motion.article
                key={f.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-card transition-all flex flex-col"
              >
                <div className="relative aspect-square overflow-hidden bg-pink/30">
                  <img
                    src={f.img}
                    alt={`Boli sabor ${f.name}`}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full glass text-xs font-semibold">
                    {f.emoji} Boli
                  </span>
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full gradient-brand text-white text-xs font-bold shadow-soft">
                    COP $1.000
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h4 className="font-display text-xl font-bold mb-1">{f.name}</h4>
                  <p className="text-sm text-muted-foreground mb-4">Boli artesanal cremoso sabor {f.name.toLowerCase()}.</p>
                  <a
                    href={waLink(`Hola, quiero pedir bolis sabor ${f.name}.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto w-full inline-flex items-center justify-center gap-2 py-3 rounded-2xl gradient-brand text-white font-semibold text-sm shadow-soft group-hover:shadow-glow transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Pedir este sabor
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* ═══════════════ YOGURT CREMOSO ═══════════════ */}
        <div id="yogurt" className="mb-24 scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-gradient-to-br from-sky/30 via-pink/20 to-blue/20 rounded-[2.5rem] p-6 sm:p-10 lg:p-12 shadow-card"
          >
            <div className="relative order-2 lg:order-1 group">
              <div className="rounded-3xl overflow-hidden shadow-card aspect-[4/5]">
                <img
                  src={yogurtReal}
                  alt="Yogures La Nieve — Super cremosos y con trozos de fruta"
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-3 shadow-soft hidden sm:block"
              >
                <div className="text-xs text-muted-foreground">Presentación</div>
                <div className="font-bold">2 Litros</div>
              </motion.div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue/30 text-xs font-bold uppercase tracking-wide mb-3 text-primary">
                <Sparkles className="w-3.5 h-3.5" /> Yogurt Cremoso
              </div>
              <h3 className="font-display text-3xl sm:text-4xl font-bold mb-3">
                Super cremoso con <span className="text-gradient">trozos de fruta</span>
              </h3>
              <p className="text-muted-foreground text-lg mb-5">
                Yogurt artesanal preparado con fruta natural. Perfecto para compartir en familia.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Fresa", "Melocotón", "Kumis", "Mora", "Arequipe", "Guanábana", "Frutos Rojos"].map((s) => (
                  <span key={s} className="px-3 py-1.5 rounded-full bg-white text-xs font-semibold border border-border shadow-soft">
                    {s}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl font-display font-bold text-gradient">COP $18.000</div>
                <div className="text-sm text-muted-foreground">Botella 2 Litros</div>
              </div>
              <a
                href={waLink("Hola, quiero pedir yogurt cremoso.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full gradient-brand text-white font-semibold shadow-soft hover:shadow-glow hover:-translate-y-1 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Pedir Yogurt
              </a>
            </div>
          </motion.div>
        </div>

        {/* ═══════════════ FILTROS DE AGUA ═══════════════ */}
        <div id="filtros" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue/30 text-xs font-bold uppercase tracking-wide mb-3 text-primary">
              <Droplets className="w-3.5 h-3.5" /> Filtros de Agua
            </div>
            <h3 className="font-display text-3xl sm:text-4xl font-bold mb-3">
              Agua pura, <span className="text-gradient">vida sana</span>
            </h3>
            <p className="text-muted-foreground">
              Variedad de modelos para tu hogar o negocio. Tecnología de ozono, UV y UF. Desde <span className="font-bold text-foreground">COP $400.000</span>.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-5">
              {[
                { icon: Droplets, t: "Agua pura" },
                { icon: Shield, t: "Elimina bacterias" },
                { icon: Sparkles, t: "Mejora el sabor" },
              ].map(({ icon: Icon, t }) => (
                <span key={t} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-semibold">
                  <Icon className="w-3.5 h-3.5 text-primary" /> {t}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
            {filtros.map((f, i) => (
              <motion.article
                key={f.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-card transition-all flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-pink/20">
                  <img
                    src={f.img}
                    alt={f.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full glass text-xs font-semibold">
                    💧 Filtro
                  </span>
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full gradient-brand text-white text-xs font-bold shadow-soft">
                    {f.price}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h4 className="font-display text-lg font-bold leading-tight mb-2">{f.name}</h4>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">{f.desc}</p>
                  <a
                    href={waLink(`Hola, quiero información sobre el filtro: ${f.name}.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-2xl gradient-brand text-white font-semibold text-sm shadow-soft group-hover:shadow-glow transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Solicitar Información
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
