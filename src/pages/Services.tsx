const services = [
  {
    icon: "🏪",
    title: "Business Websites",
    desc: "Clean, professional websites for local shops, services, and small businesses that want a strong online presence.",
  },
  {
    icon: "📚",
    title: "Tuition & Coaching Centers",
    desc: "Websites built for institutes — course listings, batch timings, contact info, and parent-friendly layouts.",
  },
  {
    icon: "📄",
    title: "Landing Pages",
    desc: "Single-page focused sites for a specific offer, service, or announcement. Fast to build, easy to update.",
  },
  {
    icon: "📱",
    title: "Mobile-Friendly Design",
    desc: "Every site I build looks great and works perfectly on phones, tablets, and desktops — no exceptions.",
  },
  {
    icon: "📬",
    title: "Contact Forms",
    desc: "Integrated contact forms so visitors can reach you directly from your website without leaving the page.",
  },
  {
    icon: "💬",
    title: "WhatsApp Integration",
    desc: "A WhatsApp chat button so customers can message you instantly — a must-have for Indian small businesses.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 animate-fade-up">
        <div className="text-center mb-14">
          <p className="text-emerald-600 text-xs font-semibold tracking-widest uppercase mb-3">
            What I Build
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-gray-900 leading-tight mb-4">
            Services
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Straightforward web solutions tailored for local businesses and
            coaching centers.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-stone-50 border border-gray-100 rounded-2xl p-7 hover:border-emerald-200 hover:bg-emerald-50/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              <span className="text-3xl mb-4 block">{service.icon}</span>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
