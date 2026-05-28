import ScrollReveal from "./ScrollReveal";

const partners = [
  { name: "GrubHub", emoji: "🍽️" },
  { name: "DoorDash", emoji: "🏃" },
  { name: "Uber Eats", emoji: "🚗" },
  { name: "Postmates", emoji: "📦" },
  { name: "Deliveroo", emoji: "🛵" },
  { name: "Just Eat", emoji: "🥡" },
];

const testimonials = [
  {
    name: "Sarah M.",
    avatar: "SM",
    role: "Food lover",
    quote:
      "Foodiez changed how I order food. The app is so fast and the recommendations are spot-on every single time!",
    rating: 5,
  },
  {
    name: "James K.",
    avatar: "JK",
    role: "Busy professional",
    quote:
      "I use Foodiez at least 3 times a week. Lightning-fast checkout and real-time tracking make it my go-to app.",
    rating: 5,
  },
  {
    name: "Maria G.",
    avatar: "MG",
    role: "Mom of two",
    quote:
      "Finally an app that gets family ordering right. We love the variety and how easy it is to reorder our favorites.",
    rating: 5,
  },
];

export default function SocialProof() {
  return (
    <section id="social-proof" className="py-16 lg:py-24 bg-white" aria-label="Social proof">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Partner logos */}
        <ScrollReveal>
          <p className="text-center text-sm font-medium text-gray-400 uppercase tracking-wider mb-8">
            Trusted by restaurants & delivery networks
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mb-20">
            {partners.map((p) => (
              <div
                key={p.name}
                className="flex items-center gap-2 text-lg font-semibold text-gray-300 grayscale hover:grayscale-0 hover:text-gray-500 transition-all duration-300"
              >
                <span className="text-2xl">{p.emoji}</span>
                <span className="hidden sm:inline">{p.name}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Testimonials */}
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-3">
            Loved by food lovers
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-md mx-auto">
            Thousands of happy customers get their favorite meals delivered every day.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.15}>
              <div className="bg-gray-50 rounded-3xl p-6 h-full flex flex-col">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-500 text-sm">★</span>
                  ))}
                </div>
                <blockquote className="text-gray-600 leading-relaxed mb-6 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-sm font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{t.name}</div>
                    <div className="text-xs text-gray-400">{t.role}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
