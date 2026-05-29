import { motion } from "framer-motion";
import { Heart, Leaf, Award, Smile } from "lucide-react";
import aboutImg from "@/assets/real-about-delisys.png";

const features = [
  { icon: Leaf, title: "Ingredientes naturales", desc: "Fruta fresca y leche de la mejor calidad." },
  { icon: Heart, title: "Recetas caseras", desc: "Hechas con cariño, como en familia." },
  { icon: Award, title: "Calidad premium", desc: "Cuidamos cada detalle en la elaboración." },
  { icon: Smile, title: "Hecho en Colombia", desc: "Emprendimiento colombiano con amor." },
];

export function About() {
  return (
    <section id="nosotros" className="py-24 gradient-soft relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-[2.5rem] overflow-hidden shadow-card aspect-square group">
              <img src={aboutImg} alt="Yogures cremosos artesanales de Bolis y Yogurt Delicias" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="absolute -bottom-6 -right-6 glass rounded-3xl p-6 shadow-soft max-w-[240px] hidden md:block">
              <div className="text-3xl font-display font-bold text-gradient">100% Artesanal</div>
              <div className="text-sm text-muted-foreground mt-1">Hecho con amor en Colombia 🇨🇴</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium mb-4">
              💖 Nosotros
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Un emprendimiento colombiano con <span className="text-gradient">mucho corazón</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Somos un emprendimiento colombiano dedicado a ofrecer productos artesanales de excelente calidad, preparados con amor y los mejores ingredientes. Cada boli, cada yogurt y cada producto lleva el sello de la frescura y la dedicación de una familia que disfruta endulzar tu día.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-5 rounded-2xl bg-card shadow-soft hover:-translate-y-1 transition-transform"
                >
                  <div className="w-11 h-11 rounded-xl gradient-brand grid place-items-center text-white mb-3">
                    <f.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold mb-1">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
