import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const screens = [
  {
    title: "Discover",
    description: "Browse curated restaurants near you",
    color: "from-orange-500 to-red-400",
    content: (
      <div className="flex flex-col gap-2 p-2">
        {["Trending", "Nearby", "New", "Popular"].map((tag, i) => (
          <div key={tag} className="bg-white/20 rounded-lg px-3 py-2 text-sm font-medium text-white flex items-center gap-2">
            <span className="w-5 h-5 bg-white/30 rounded-full flex items-center justify-center text-xs">{i + 1}</span>
            {tag}
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Track",
    description: "Real-time delivery at your fingertips",
    color: "from-green-500 to-emerald-500",
    content: (
      <div className="flex flex-col items-center justify-center h-full gap-3 p-2">
        <div className="text-4xl">🛵</div>
        <div className="bg-white/20 rounded-full px-4 py-1.5 text-sm font-medium text-white">Your order is on the way!</div>
        <div className="text-xs text-white/70">Estimated arrival: 12 min</div>
        <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden mt-1">
          <div className="w-3/4 h-full bg-white rounded-full" />
        </div>
      </div>
    ),
  },
  {
    title: "Re-order",
    description: "One tap to get your favorites again",
    color: "from-purple-500 to-violet-400",
    content: (
      <div className="flex flex-col gap-2 p-2">
        {[
          { name: "Pepperoni Pizza", date: "Last ordered May 10" },
          { name: "Chicken Pad Thai", date: "Last ordered May 3" },
          { name: "Açaí Bowl", date: "Last ordered Apr 28" },
        ].map((item) => (
          <div key={item.name} className="bg-white/20 rounded-lg px-3 py-2 flex items-center justify-between">
            <div>
              <div className="text-sm font-medium text-white">{item.name}</div>
              <div className="text-[10px] text-white/60">{item.date}</div>
            </div>
            <span className="text-white/80 text-sm">Reorder →</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Earn Rewards",
    description: "Points on every order, free food faster",
    color: "from-amber-500 to-yellow-400",
    content: (
      <div className="flex flex-col items-center justify-center h-full gap-3 p-2">
        <div className="text-4xl">⭐</div>
        <div className="text-3xl font-bold text-white">2,450</div>
        <div className="text-xs text-white/70">points</div>
        <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
          <div className="w-[65%] h-full bg-white rounded-full" />
        </div>
        <div className="text-xs text-white/80">650 points until free delivery!</div>
      </div>
    ),
  },
];

export default function AppPreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: containerRef });

  return (
    <section className="py-16 lg:py-24 bg-gray-50 overflow-hidden" aria-label="App preview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-3">
            A look inside the app
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-md mx-auto">
            Beautiful, fast, and packed with features that make ordering a breeze.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div
            ref={containerRef}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4"
            style={{ scrollbarWidth: "none" }}
          >
            {screens.map((screen) => (
              <motion.div
                key={screen.title}
                whileHover={{ scale: 1.02 }}
                className="snap-center shrink-0 first:ml-0 last:mr-4"
              >
                <div className="w-64 bg-gray-900 rounded-[2rem] p-2 shadow-xl">
                  <div className={`bg-gradient-to-b ${screen.color} rounded-[1.7rem] overflow-hidden h-[400px] flex flex-col`}>
                    {/* Status bar */}
                    <div className="px-5 py-2 flex items-center justify-between text-white text-[10px]">
                      <span>9:41</span>
                      <span>●●●●○</span>
                    </div>
                    {/* Content area */}
                    <div className="flex-1 px-3 py-2 flex flex-col">
                      <h3 className="text-white font-bold text-base mb-1 px-1">{screen.title}</h3>
                      <p className="text-white/70 text-xs mb-3 px-1">{screen.description}</p>
                      <div className="flex-1 bg-black/10 rounded-2xl overflow-hidden flex">
                        {screen.content}
                      </div>
                    </div>
                    {/* Home indicator */}
                    <div className="py-2 flex justify-center">
                      <div className="w-20 h-1 bg-white/40 rounded-full" />
                    </div>
                  </div>
                </div>
                <p className="text-center text-sm font-semibold text-gray-900 mt-3">{screen.title}</p>
                <p className="text-center text-xs text-gray-400">{screen.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="max-w-xs mx-auto mt-6 h-1 bg-gray-200 rounded-full overflow-hidden lg:hidden">
            <motion.div
              className="h-full bg-orange-500 rounded-full"
              style={{ scaleX: scrollXProgress, transformOrigin: "left" }}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
