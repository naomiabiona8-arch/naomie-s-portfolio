import { useState } from "react";

const faqs = [
  {
    q: "What sevices do you offer?",
    a: "I create responsive and user-friendly websites,focusing on clean designs, functionality and seamless user experiences.",
  },
  {
    q: "Can you create a website based on my business idea?",
    a: "Yes! I'd love to understand your idea, your goals and the features you have in mind so we can work towards bringing it to life.",
  },
  {
    q: "Can my website include a search feature?",
    a: "Yes! Search functionality can be added to help visitors find specific information or products more easily.",
  },
  {
    q: "How long does it take to build a website?",
    a: "Timelines depends on the complexity,features and requirements of the project. I'll give you a realistic estimate before development begins.",
  },
  {
    q: "Can I see your previous projects?",
    a: "Yes! You can explore my portfolio to see some of my projects I've worked on and the skills I've developed.",
  },
  {
    q: "What information do I need to provide?",
    a: "You'll need to provide: your business name and logo (if you have one), the text/content for each page, photos or images you want to use, and your contact details. If you're not sure what content to write, I can help you figure it out.",
  },
  {
    q: " How can I get started with a project?",
    a: "Simply reach out through my contact section. We can discuss your idea, requirements and the next steps",
  },
  {
    q: "Why should I hire a student instead of an agency?",
    a: "Honestly? Much lower cost, and personal attention. Agencies have high overheads. I work directly with you, care about doing a good job, and charge a fair student rate. If you need a solid website on a budget, that's where I can genuinely help.",
  },
];

const Faq = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section>
      <div className="animate-fade-up mt-20 mx-auto max-w-4xl px-5">
        <div className="text-center mb-14">
          <p className="text-emerald-600 text-xs font-semibold tracking-widest uppercase mb-3">
            FAQ
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-gray-900 leading-tight mb-4">
            Common Questions
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-gray-200 transition-colors"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
              >
                <span className="font-semibold text-gray-900 text-sm sm:text-base">
                  {faq.q}
                </span>
                <span
                  className={`shrink-0 w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 transition-transform duration-200 ${
                    open === i
                      ? "rotate-45 bg-emerald-600 border-emerald-600 text-white"
                      : ""
                  }`}
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="currentColor"
                  >
                    <rect x="4.5" y="0" width="1" height="10" />
                    <rect x="0" y="4.5" width="10" height="1" />
                  </svg>
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-64" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-6 text-gray-500 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
