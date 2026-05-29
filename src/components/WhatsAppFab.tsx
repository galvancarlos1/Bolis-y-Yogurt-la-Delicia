import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function WhatsAppFab() {
  return (
    <motion.a
      href="https://wa.me/573007169644?text=Hola!%20Quiero%20hacer%20un%20pedido"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.8, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white grid place-items-center shadow-glow"
      aria-label="WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 relative" />
    </motion.a>
  );
}
