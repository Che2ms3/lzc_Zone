import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    step: "01",
    icon: "🔍",
    title: "Browse restaurants",
    description:
      "Explore hundreds of local restaurants, from hidden gems to popular chains. Filter by cuisine, rating, or delivery time to find exactly what you're craving.",
    color: "bg-orange-50 text-orange-600",
  },
  {
    step: "02",
    icon: "⚡",
    title: "Order in seconds",
    description:
      "Tap to customize your meal, save your favorites, and check out instantly with saved payment methods. Reorder past meals with one tap.",
    color: "bg-orange-50 text-orange-600",
  },
  {
    step: "03",
    icon: "🛵",
    title: "Fast delivery",
    description:
      "Track your order in real-time from the restaurant to your doorstep. Most orders arrive in under 30 minutes, hot and fresh.",
    color: "bg-orange-50 text-orange-600",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-gray-50" aria-label="How it works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-3">
            How it works
          </h2>
          <p className="text-center text-gray-500 mb-14 max-w-md mx-auto">
            Getting your favorite food delivered is easier than ever — just three simple steps.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {steps.map((step, i) => (
            <ScrollReveal key={step.step} delay={i * 0.2}>
              <motion.div
                whileHover={{ y: -6 }}
                className="relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <span className="absolute top-6 right-6 text-5xl font-bold text-gray-50 select-none">
                  {step.step}
                </span>
                <div
                  className={`w-14 h-14 ${step.color} rounded-2xl flex items-center justify-center text-2xl mb-5 relative z-10`}
                >
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">
                  {step.title}
                </h3>
                <p className="text-gray-500 leading-relaxed relative z-10">
                  {step.description}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
