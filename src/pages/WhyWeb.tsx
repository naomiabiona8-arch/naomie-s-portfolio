function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">{children}</div>
    </section>
  );
}

const whyPoints = [
  {
    icon: "🔍",
    title: "Customers can find you online",
    desc: "When someone searches for your business or coaching center, a website means they actually find you — not your competitor.",
  },
  {
    icon: "💼",
    title: "Professional first impression",
    desc: "A website builds trust instantly. It signals that you're serious about your business, even if you're just starting out.",
  },
  {
    icon: "📋",
    title: "Display courses & services clearly",
    desc: "Parents and students can check batch timings, fees, and subject lists without having to call you for basic information.",
  },
  {
    icon: "📍",
    title: "Share location & contact details",
    desc: "Make it easy for people to find your address, call you, or open directions with one tap on their phone.",
  },
  {
    icon: "💬",
    title: "WhatsApp contact in one click",
    desc: "A WhatsApp button means customers can reach you immediately — no typing numbers, no friction, just a tap.",
  },
  {
    icon: "🕐",
    title: "Work for you 24/7",
    desc: "Your website answers questions and shows your work even when you're busy, asleep, or away. It never stops working.",
  },
];

const WhyWeb = () => {
  return (
    <Section id="why" className="bg-gray-950">
      <div className="text-center mb-14 animate-fade-up">
        <p className="text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-3">
          The Case for Getting Online
        </p>
        <h2 className="font-display text-4xl sm:text-5xl text-white leading-tight mb-4">
          Why does your business need a website?
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Most local businesses and tuition centers in India don't have one.
          That's actually an opportunity.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {whyPoints.map((point) => (
          <div
            key={point.title}
            className="border border-gray-800 rounded-2xl p-7 hover:border-emerald-800 hover:bg-emerald-950/30 transition-all duration-200"
          >
            <span className="text-3xl mb-4 block">{point.icon}</span>
            <h3 className="text-white font-semibold text-base mb-2">
              {point.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {point.desc}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default WhyWeb;
