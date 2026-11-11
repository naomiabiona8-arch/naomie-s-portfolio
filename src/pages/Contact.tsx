import { useState } from "react";

const EMAIL = "abionanaomi29@gmail.com";

const inputClass =
  "w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all";

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = `Website enquiry from ${form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || "Not provided"}`,
      "",
      form.message,
    ].join("\n");

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-20 grid lg:grid-cols-2 gap-12 items-start animate-fade-up">
        {/* Left: info */}
        <div>
          <p className="text-emerald-600 font-semibold text-sm uppercase tracking-wide mb-2">
            Get In Touch
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's talk about your website.
          </h1>
          <p className="text-gray-500 leading-relaxed mb-8">
            Fill in the form with some basic details about your project and I'll
            get back to you during my availability window. No commitment, no
            pressure — just a conversation.
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 p-4 bg-stone-50 rounded-xl border border-gray-100">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-lg">
                ✉️
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Email</p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-gray-900 font-semibold text-sm hover:text-emerald-600 transition-colors"
                >
                  {EMAIL}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-stone-50 rounded-xl border border-gray-100">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-lg">
                🕔
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">
                  Availability
                </p>
                <p className="text-gray-900 font-semibold text-sm">
                  Every day · 5:00 PM – 8:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div>
          {sent ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-10 text-center">
              <span className="text-5xl block mb-4">🎉</span>
              <h3 className="font-semibold text-gray-900 text-xl mb-2">
                Your email client should have opened!
              </h3>
              <p className="text-gray-500 text-sm">
                If it didn't, email me directly at{" "}
                <a
                  href={`mailto:${EMAIL}`}
                  className="font-semibold text-gray-900 underline"
                >
                  {EMAIL}
                </a>
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-6 text-sm text-emerald-600 underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-stone-50 border border-gray-100 rounded-2xl p-6 sm:p-8 flex flex-col gap-5"
            >
              <h2 className="font-semibold text-gray-900 text-lg">
                Tell me about your project
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium text-gray-600 mb-1.5"
                  >
                    Your Name *
                  </label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="John Doe"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-gray-600 mb-1.5"
                  >
                    Email Address *
                  </label>
                  <input
                    id="email"
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder="you@gmail.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-medium text-gray-600 mb-1.5"
                >
                  Phone / WhatsApp (optional)
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+234 918764532145"
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-gray-600 mb-1.5"
                >
                  Project details *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="What kind of website do you need? What's your business/center about? Any features you have in mind?"
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="bg-emerald-600 text-white font-semibold py-4 rounded-xl hover:bg-emerald-700 transition-colors text-sm"
              >
                Send Message →
              </button>
              <p className="text-gray-400 text-xs text-center">
                This will open your email client with the message pre-filled.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
