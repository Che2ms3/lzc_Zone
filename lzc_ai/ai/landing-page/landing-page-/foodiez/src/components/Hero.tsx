import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const floatingCards = [
  { emoji: "🍕", label: "Pizza", delay: 0, x: -20, y: -10 },
  { emoji: "🍔", label: "Burger", delay: 1.5, x: 20, y: -30 },
  { emoji: "🍣", label: "Sushi", delay: 0.8, x: 40, y: 10 },
  { emoji: "🥗", label: "Salad", delay: 2.2, x: -40, y: -20 },
  { emoji: "🌮", label: "Taco", delay: 1.2, x: 10, y: 30 },
  { emoji: "🍜", label: "Ramen", delay: 1.8, x: -30, y: 20 },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-20 lg:pt-24 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-white"
      aria-label="Hero section"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-100 rounded-full opacity-40 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-orange-50 rounded-full opacity-50 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <ScrollReveal className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-full px-4 py-1.5 text-sm font-medium text-orange-600 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Available in 50+ cities
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.08] mb-6">
              Your favorite food,
              <br />
              <span className="text-orange-500">delivered fast</span>
            </h1>

            <p className="text-lg text-gray-500 leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8">
              From local gems to national favorites — browse hundreds of
              restaurants, order in seconds, and get fresh meals delivered
              to your door in under 30 minutes.
            </p>

            {/* App store buttons */}
            <div className="flex flex-wrap items-center gap-3 justify-center lg:justify-start mb-10">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-medium px-5 py-3 rounded-2xl transition-all active:scale-95"
                aria-label="Download on the App Store"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.5-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <span className="text-left leading-tight">
                  <span className="block text-xs font-normal text-gray-300">Download on the</span>
                  App Store
                </span>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-medium px-5 py-3 rounded-2xl transition-all active:scale-95"
                aria-label="Get it on Google Play"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 0 1 0 1.732l-2.82 1.62L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                </svg>
                <span className="text-left leading-tight">
                  <span className="block text-xs font-normal text-gray-300">Get it on</span>
                  Google Play
                </span>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start text-sm text-gray-500">
              <div className="flex items-center gap-1.5">
                <span className="text-yellow-500 text-base">★</span>
                <span className="font-semibold text-gray-900">4.8</span>
                <span>Rating</span>
              </div>
              <div className="w-px h-5 bg-gray-200 hidden sm:block" />
              <div className="flex items-center gap-1.5">
                <span>🚀</span>
                <span className="font-semibold text-gray-900">30 min</span>
                <span>Delivery</span>
              </div>
              <div className="w-px h-5 bg-gray-200 hidden sm:block" />
              <div className="flex items-center gap-1.5">
                <span>🍽️</span>
                <span className="font-semibold text-gray-900">500+</span>
                <span>Restaurants</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Right side: iPhone mockup + floating cards */}
          <div className="relative flex items-center justify-center">
            {/* Floating food cards */}
            {floatingCards.map((card) => (
              <motion.div
                key={card.label}
                className="absolute bg-white rounded-2xl shadow-lg border border-gray-100 px-3 py-2 flex items-center gap-2 text-sm font-medium text-gray-700 z-10"
                style={{ left: "50%", top: "50%" }}
                animate={{
                  x: [card.x, card.x + 8, card.x],
                  y: [card.y, card.y - 12, card.y],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: card.delay,
                  ease: "easeInOut",
                }}
              >
                <span className="text-xl">{card.emoji}</span>
                {card.label}
              </motion.div>
            ))}

            {/* iPhone mockup */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="relative"
            >
              <div className="w-64 sm:w-72 bg-gray-900 rounded-[2.5rem] p-2.5 shadow-2xl shadow-gray-900/20">
                <div className="bg-white rounded-[2rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="bg-orange-500 h-8 flex items-center justify-between px-5 text-white text-[10px] font-medium">
                    <span>9:41</span>
                    <span className="flex gap-1">●●●●○</span>
                  </div>
                  {/* App header */}
                  <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
                    <span className="font-bold text-sm text-gray-900">Foodiez</span>
                    <span className="text-lg">🔔</span>
                  </div>
                  {/* Search */}
                  <div className="px-4 py-3">
                    <div className="bg-gray-100 rounded-xl px-3 py-2 text-xs text-gray-400">
                      🔍 Search restaurants...
                    </div>
                  </div>
                  {/* Categories */}
                  <div className="px-4 pb-3 flex gap-2 overflow-hidden">
                    {["🍕 Pizza", "🍔 Burger", "🍣 Sushi", "🌮 Tacos"].map((cat) => (
                      <span
                        key={cat}
                        className="text-xs bg-orange-50 text-orange-600 px-2.5 py-1 rounded-full font-medium whitespace-nowrap"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                  {/* Restaurant cards */}
                  <div className="px-4 pb-4 space-y-3">
                    {[
                      { name: "Pizza Roma", time: "20-30 min", rating: "4.9" },
                      { name: "Sushi Express", time: "25-35 min", rating: "4.7" },
                      { name: "Burger Lab", time: "15-25 min", rating: "4.8" },
                    ].map((r) => (
                      <div
                        key={r.name}
                        className="flex items-center gap-3 bg-gray-50 rounded-xl p-2.5"
                      >
                        <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-lg shrink-0">
                          {r.name.includes("Pizza") ? "🍕" : r.name.includes("Sushi") ? "🍣" : "🍔"}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-semibold text-gray-900">{r.name}</div>
                          <div className="text-[10px] text-gray-400">
                            {r.time} · ⭐ {r.rating}
                          </div>
                        </div>
                        <span className="text-orange-500 text-lg">+</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Bottom shadow */}
              <div className="absolute -bottom-2 left-4 right-4 h-4 bg-gray-200 rounded-b-[2.5rem] -z-10 blur-sm" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
