import { motion } from "framer-motion";

export default function PromoBanner() {
  return (
    <section className="py-12 lg:py-16" aria-label="Promotion banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl overflow-hidden shadow-xl shadow-orange-500/25"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/3 -translate-x-1/4" />

          <div className="relative z-10 px-6 py-12 lg:py-16 text-center">
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="inline-block text-4xl lg:text-5xl mb-4"
            >
              🎉
            </motion.span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
              Free delivery on your first order
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-md mx-auto">
              New to Foodiez? Your first delivery is on us. No minimum order, no strings attached.
            </p>
            <motion.a
              href="#final-cta"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 bg-white text-orange-600 font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              Claim free delivery
              <span aria-hidden="true">→</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
