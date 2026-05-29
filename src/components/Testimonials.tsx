import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function Testimonials() {
  return (
    <section id="testimonios" className="py-24 gradient-soft relative overflow-hidden">
      <div className="pointer-events-none absolute top-10 right-10 w-72 h-72 rounded-full bg-pink/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 left-10 w-72 h-72 rounded-full bg-blue/30 blur-3xl" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium mb-4">
            💜 Opiniones
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Lo que dirán nuestros <span className="text-gradient">clientes</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass rounded-3xl p-10 sm:p-14 text-center shadow-soft">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl gradient-brand grid place-items-center shadow-card">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <p className="text-xl sm:text-2xl font-semibold mb-3">
              Próximamente opiniones de nuestros clientes 💜
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Aún estamos creciendo. Muy pronto compartiremos aquí experiencias
              reales de las familias que disfrutan nuestros bolis y yogurts.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
