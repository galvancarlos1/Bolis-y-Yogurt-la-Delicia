import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MessageCircle } from "lucide-react";
import heroImg from "@/assets/real-hero-delisys.png";

const WHATSAPP = "https://wa.me/573007169644?text=Hola!%20Quiero%20hacer%20un%20pedido";

export function Hero() {
  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden gradient-hero">
      <div className="pointer-events-none absolute -top-20 -left-20 w-96 h-96 rounded-full bg-blue/50 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute top-40 -right-20 w-96 h-96 rounded-full bg-pink/50 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />
      <div className="pointer-events-none absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-sky/40 blur-3xl animate-blob" style={{ animationDelay: "6s" }} />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium shadow-soft mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              Hecho en casa, con amor 🇨🇴
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
              Super cremosos y con <span className="text-gradient">trozos de fruta</span> <span className="inline-block animate-float">🍓</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed">
              Disfruta nuestros deliciosos productos artesanales hechos con amor: bolis, yogurt cremoso y filtros de agua para tu hogar.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a
                href="#productos"
                className="group inline-flex items-center gap-2 px-6 sm:px-7 py-4 rounded-full gradient-brand text-white font-semibold shadow-soft hover:shadow-glow hover:-translate-y-1 transition-all"
              >
                Ver productos
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-4 rounded-full glass font-semibold shadow-soft hover:-translate-y-1 transition-all"
              >
                <MessageCircle className="w-5 h-5 text-primary" />
                Pedir ahora
              </a>
            </div>

            <div className="flex items-center gap-6 sm:gap-8 mt-12">
              {[
                { n: "7+", l: "Sabores" },
                { n: "100%", l: "Artesanal" },
                { n: "🇨🇴", l: "Hecho en Colombia" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-2xl sm:text-3xl font-display font-bold text-gradient">{s.n}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-card aspect-[4/5] sm:aspect-[4/3] lg:aspect-[5/4] group">
              <img
                src={heroImg}
                alt="Yogurt cremoso y bolis artesanales Delisys"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -left-6 glass rounded-3xl p-4 shadow-soft hidden sm:block"
            >
              <div className="text-2xl">🍓</div>
              <div className="text-xs font-semibold mt-1">Fruta fresca</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
