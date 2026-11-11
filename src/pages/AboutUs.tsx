import { Link } from "react-router-dom";

const AboutUs = () => {
  const highlights = [
    {
      icon: "🎓",
      label: "Currently a student",
      sub: "Balancing academics and development.",
    },
    {
      icon: "💬",
      label: "Personal service",
      sub: "You deal with me directly, no middlemen.",
    },
    {
      icon: "💰",
      label: "Honest pricing",
      sub: "Affordable rates with no hidden costs",
    },
    {
      icon: "📱",
      label: "Cross-device ready",
      sub: "Every site works great on phones and other devices.",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-stone-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 animate-fade-up">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-emerald-600 text-xs font-semibold tracking-widest uppercase mb-3">
              About Me
            </p>
            <h2 className="font-display text-4xl sm:text-5xl text-gray-900 leading-tight mb-4">
              A student developer who turns your vision into experiences worth
              exploring.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              I'm one person who genuinely cares about delivering a good product
              at a price that works for small businesses and tuition centers.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Every project gets my full attention. You'll communicate directly
              with me throughout — no middlemen, no confusion. I believe in
              honest, straightforward work: Real timelines, and websites that
              actually do the job.
            </p>
            <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-100 rounded-2xl px-5 py-4">
              <span className="text-2xl">✉️</span>
              <div>
                <Link
                  to="/contact"
                  className="text-sm font-semibold text-gray-900"
                >
                  naomiabiona8@gmail.com
                </Link>
                <p className="text-xs text-gray-500">
                  Available daily · 5:00 PM – 8:00 PM
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <span className="text-2xl mb-3 block">{h.icon}</span>
                <p className="font-semibold text-gray-900 text-sm mb-1">
                  {h.label}
                </p>
                <p className="text-gray-500 text-xs leading-relaxed">{h.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
