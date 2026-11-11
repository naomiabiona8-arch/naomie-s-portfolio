import { Link } from "react-router-dom";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Portfolio from "./Portfolio";
import WhyWeb from "./WhyWeb";
import Faq from "./Faq";
import Contact from "./Contact";

const Homepage = () => {
  return (
    <nav>
      <section className="min-h-screen bg-gray-950 flex flex-col items-center justify-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* ======================= */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 bg-emerald-600/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-5 lg:px-8 text-center py-32">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 bg-emerald-600/15 text-emerald-400 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full border border-emerald-600/20 mb-8">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              welcome to Naomie's world...
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-6 animate-fade-up delay-100">
            Turning Ideas,
            <br />
            <span className="text-emerald-400 italic">Into</span> Digital
            Experiences.
          </h1>

          <p className="text-gray-400 text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up delay-200">
            Hi, I'm Naomi, a student developer passionate about technology and
            innovation. Welcome to my portfolio, a glimpse into my journey,
            creativity and growth as a developer.
          </p>

          <div className="flex flex-col lg:flex-row gap-4 justify-center animate-fade-up delay-300">
            <Link
              to="/portfolio"
              className="bg-white text-gray-900 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors text-base"
            >
              Explore My Work
            </Link>
            <Link
              to="/contact"
              className="bg-emerald-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-emerald-700 transition-colors text-base"
            >
              Let's Connect
            </Link>
          </div>

          <p className="mt-8 text-gray-600 text-sm animate-fade-up delay-400">
            Creative Thinking · Clean Execution
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 border-2 border-gray-700 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-gray-600 rounded-full" />
          </div>
        </div>
      </section>
      <section className="animate-fade-up delay-200">
        <AboutUs />
        <Services />
        <Portfolio />
        <WhyWeb />
        <Faq />
        <Contact />
      </section>
    </nav>
  );
};

export default Homepage;
