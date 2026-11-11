const Portfolio = () => {
  return (
    <main className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 animate-fade-up">
        <div className="text-center mb-14">
          <p className="text-emerald-600 text-xs font-semibold tracking-widest uppercase mb-3">
            Portfolio
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-gray-900 leading-tight mb-4">
            Projects
          </h2>
          <div className="max-w-2xl mx-auto mb-12">
            <div className="flex items-start gap-3  rounded-xl px-5 py-4 text-sm bg-gray-950 border-gray-800 text-white text-left">
              <span className="text-lg shrink-0">⚠️</span>
              <p>
                <span className="font-semibold">
                  These are demonstration projects only
                </span>{" "}
                — built to show what I can make, not real client work. I'm at
                the start of my journey and I'm upfront about that.
              </p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          <div className="border rounded-2xl p-7 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 bg-stone-50 border-gray-100 text-gray-900">
            <div className="flex items-start justify-between mb-5">
              <p className="text-3xl">💼</p>

              <p className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-600 text-white">
                Demo Project
              </p>
            </div>

            <div>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                Task Management Website
              </p>
              <p className="font-semibold text-gray-900 text-2xl mb-3">
                Task Duty
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                Take control of your day with a smarter approach to
                productivity. Whether it's everyday activities or bigger goals,
                everything you need to stay organised is right here.
              </p>
            </div>

            <a
              href="https://task-management-blue-psi.vercel.app/"
              target="_blank"
            >
              https://task-management-blue-psi.vercel.app/
            </a>
          </div>

          {/* ============================================= */}
          <div className="border rounded-2xl p-7 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 bg-gray-950 border-gray-800 text-white">
            <div className="flex items-start justify-between mb-5">
              <p className="text-3xl">🛍️</p>

              <p className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-600 text-white">
                Demo Project
              </p>
            </div>

            <div>
              <p className="text-xs font-medium text-gray-300 uppercase tracking-wide mb-2">
                sdfgh
              </p>
              <p className="font-semibold text-gray-700 text-2xl mb-3">
                sdfghjk
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                poiuhygfd
              </p>
            </div>

            <a href="" target="_blank"></a>
          </div>

          {/* ============================================= */}
          <div className="border rounded-2xl p-7 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200  bg-stone-50 border-gray-100 text-gray-900">
            <div className="flex items-start justify-between mb-5">
              <p className="text-3xl">🌍</p>

              <p className="text-xs font-semibold px-3 py-1 rounded-full  bg-emerald-600 text-white">
                Demo Project
              </p>
            </div>

            <div>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                Geographical Website
              </p>
              <p className="font-semibold text-gray-900 text-xl mb-3">
                Globe_Pedia
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                Your gateway to discovering the world. Explore detailed
                information about countries across every continent, including
                their capitals, populations, currencies and official languages.
                Everything you need to know about the world, brought together in
                one place.
              </p>
            </div>

            <a href="https://globepedia.vercel.app/" target="_blank">
              https://globepedia.vercel.app/
            </a>
          </div>
          {/* ============================================= */}

          {/* ===================================== */}
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
