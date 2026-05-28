import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function FinalCTA() {
  return (
    <section id="final-cta" className="py-16 lg:py-24" aria-label="Call to action">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative bg-gray-900 rounded-3xl overflow-hidden shadow-2xl">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-orange-500/10" />
            {/* Blobs */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />

            <div className="relative z-10 px-6 py-16 lg:py-24 text-center max-w-2xl mx-auto">
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
              >
                Download Foodiez and get your food faster than ever
              </motion.h2>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-gray-400 text-lg mb-10"
              >
                Join millions of happy eaters. Available now on iOS and Android.
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap items-center gap-3 justify-center"
              >
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 font-medium px-6 py-3.5 rounded-2xl transition-all active:scale-95"
                  aria-label="Download on the App Store"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.5-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <span className="text-left leading-tight">
                    <span className="block text-xs font-normal text-gray-500">Download on the</span>
                    App Store
                  </span>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 font-medium px-6 py-3.5 rounded-2xl transition-all active:scale-95"
                  aria-label="Get it on Google Play"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 0 1 0 1.732l-2.82 1.62L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                  </svg>
                  <span className="text-left leading-tight">
                    <span className="block text-xs font-normal text-gray-500">Get it on</span>
                    Google Play
                  </span>
                </a>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
