import ScrollReveal from "./ScrollReveal";

const features = [
  {
    icon: "📍",
    title: "Real-time order tracking",
    description:
      "Know exactly where your food is from the moment you order. Track your delivery on a live map with estimated arrival time updates.",
    image: (
      <div className="bg-orange-50 rounded-3xl p-6 h-full min-h-[280px] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-transparent" />
        <div className="relative z-10 text-center">
          <div className="w-48 h-48 bg-white rounded-3xl shadow-lg mx-auto overflow-hidden">
            {/* Map UI */}
            <div className="bg-green-100 h-full p-3 relative">
              <div className="bg-white rounded-xl h-full p-3 flex flex-col">
                <div className="text-xs font-semibold text-gray-900 mb-2">Live tracking</div>
                <div className="flex-1 bg-gray-100 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-0.5 bg-gray-300 mx-4 relative">
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-orange-500 rounded-full shadow-lg" />
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-lg">📍</div>
                      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 text-sm">🛵</div>
                    </div>
                  </div>
                </div>
                <div className="text-[10px] text-gray-400 mt-2">Arriving in 12 min</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: "🤖",
    title: "Personalized recommendations",
    description:
      "Our smart algorithm learns your taste preferences and suggests dishes you'll love. The more you order, the better it gets.",
    image: (
      <div className="bg-orange-50 rounded-3xl p-6 h-full min-h-[280px] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-bl from-orange-100 to-transparent" />
        <div className="relative z-10 text-center">
          <div className="w-48 h-48 bg-white rounded-3xl shadow-lg mx-auto overflow-hidden flex flex-col p-3 gap-2">
            <div className="text-xs font-semibold text-gray-900">For you</div>
            <div className="flex-1 flex flex-col gap-2">
              {[
                { name: "Spicy Ramen", match: "98% match" },
                { name: "Açaí Bowl", match: "95% match" },
                { name: "Margherita Pizza", match: "92% match" },
              ].map((item) => (
                <div key={item.name} className="flex items-center gap-2 bg-orange-50 rounded-lg p-1.5">
                  <div className="w-7 h-7 bg-orange-200 rounded-lg flex items-center justify-center text-xs">
                    ✨
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-semibold text-gray-900">{item.name}</div>
                    <div className="text-[8px] text-orange-500">{item.match}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: "💳",
    title: "Lightning-fast checkout",
    description:
      "Save your payment details, apply promo codes, and place your order in seconds. No more typing card numbers every time.",
    image: (
      <div className="bg-orange-50 rounded-3xl p-6 h-full min-h-[280px] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-100 to-transparent" />
        <div className="relative z-10 text-center">
          <div className="w-48 h-48 bg-white rounded-3xl shadow-lg mx-auto overflow-hidden flex flex-col p-3">
            <div className="text-xs font-semibold text-gray-900 mb-2">Checkout</div>
            <div className="flex-1 flex flex-col gap-1.5 text-[10px]">
              <div className="flex justify-between"><span className="text-gray-500">Subtotal</span><span className="font-semibold">$24.99</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Delivery</span><span className="text-green-600 font-medium">Free</span></div>
              <div className="border-t border-gray-100 pt-1.5 flex justify-between">
                <span className="font-semibold text-gray-900">Total</span>
                <span className="font-bold text-orange-500">$24.99</span>
              </div>
              <div className="mt-auto bg-orange-500 text-white text-center py-2 rounded-xl font-semibold text-xs">
                Place Order
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: "🍽️",
    title: "Exclusive local restaurants",
    description:
      "Access restaurants you won't find on other apps. We partner directly with local chefs to bring you unique dining experiences.",
    image: (
      <div className="bg-orange-50 rounded-3xl p-6 h-full min-h-[280px] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-transparent" />
        <div className="relative z-10 text-center">
          <div className="w-48 h-48 bg-white rounded-3xl shadow-lg mx-auto overflow-hidden flex flex-col p-3 gap-2">
            <div className="text-xs font-semibold text-gray-900">Exclusive</div>
            <div className="grid grid-cols-2 gap-1.5 flex-1">
              {["🍕", "🌮", "🍜", "🥗"].map((emoji, i) => (
                <div key={i} className="bg-gray-50 rounded-xl flex items-center justify-center text-2xl">
                  {emoji}
                </div>
              ))}
            </div>
            <div className="text-[10px] text-center text-gray-400">20+ exclusive partners</div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function FeatureHighlights() {
  return (
    <section id="features" className="py-16 lg:py-24 bg-white" aria-label="Features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-3">
            Why you'll love Foodiez
          </h2>
          <p className="text-center text-gray-500 mb-14 max-w-md mx-auto">
            Every feature is designed to make ordering food as delightful as eating it.
          </p>
        </ScrollReveal>

        <div className="space-y-16 lg:space-y-24">
          {features.map((feature, i) => {
            const isReversed = i % 2 === 1;
            return (
              <ScrollReveal key={feature.title}>
                <div
                  className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                    isReversed ? "lg:direction-rtl" : ""
                  }`}
                >
                  <div className={isReversed ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">{feature.icon}</span>
                      <span className="text-xs font-semibold text-orange-500 uppercase tracking-wider">
                        Feature
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed text-lg max-w-lg">
                      {feature.description}
                    </p>
                  </div>
                  <div className={isReversed ? "lg:order-1" : ""}>
                    {feature.image}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
