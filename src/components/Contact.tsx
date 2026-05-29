import { motion } from "framer-motion";
import { useState } from "react";
import { MessageCircle, Phone, Send } from "lucide-react";

const PHONE = "3007169644";
const WA = "https://wa.me/573007169644";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola! Soy ${form.name} (tel: ${form.phone}). ${form.message}`;
    window.open(`${WA}?text=${encodeURIComponent(text)}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contacto" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium mb-4">
            📞 Contáctanos
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Hagamos tu pedido <span className="text-gradient">hoy</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Escríbenos directo a nuestro WhatsApp para pedidos e información.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <a
              href={WA}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-6 rounded-3xl bg-card shadow-soft hover:shadow-card hover:-translate-y-1 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-mint/60 grid place-items-center group-hover:scale-110 transition-transform">
                <MessageCircle className="w-7 h-7 text-emerald-700" />
              </div>
              <div>
                <div className="font-bold text-lg">WhatsApp</div>
                <div className="text-sm text-muted-foreground">+57 {PHONE} · Respuesta inmediata</div>
              </div>
            </a>

            <a
              href={`tel:+57${PHONE}`}
              className="flex items-center gap-4 p-6 rounded-3xl bg-card shadow-soft hover:shadow-card hover:-translate-y-1 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue/60 grid place-items-center group-hover:scale-110 transition-transform">
                <Phone className="w-7 h-7 text-blue-800" />
              </div>
              <div>
                <div className="font-bold text-lg">Llámanos</div>
                <div className="text-sm text-muted-foreground">+57 {PHONE}</div>
              </div>
            </a>

            <a
              href={WA}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-6 rounded-3xl bg-card shadow-soft hover:-translate-y-1 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-pink/60 grid place-items-center group-hover:scale-110 transition-transform">
                <Send className="w-7 h-7 text-pink-700" />
              </div>
              <div>
                <div className="font-bold text-lg">Haz tu pedido</div>
                <div className="text-sm text-muted-foreground">Te atendemos por WhatsApp todos los días</div>
              </div>
            </a>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="bg-card rounded-3xl p-8 shadow-card"
          >
            <h3 className="font-display text-2xl font-bold mb-6">Envíanos un mensaje</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Tu nombre</label>
                <input
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-5 py-3 rounded-2xl bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-ring transition"
                  placeholder="Ej. María García"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Tu teléfono</label>
                <input
                  required
                  type="tel"
                  maxLength={20}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-5 py-3 rounded-2xl bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-ring transition"
                  placeholder="Ej. 300 123 4567"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Mensaje</label>
                <textarea
                  required
                  rows={5}
                  maxLength={1000}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-5 py-3 rounded-2xl bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-ring transition resize-none"
                  placeholder="Cuéntanos qué te gustaría ordenar..."
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-2xl gradient-brand text-white font-semibold shadow-soft hover:shadow-glow hover:-translate-y-0.5 transition-all"
              >
                {sent ? "¡Enviado!" : (<>Enviar por WhatsApp <Send className="w-4 h-4" /></>)}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
