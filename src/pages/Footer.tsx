const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <p className="font-display text-base text-white">
          Naomie<span className="text-emerald-500">.</span>dev
        </p>
        <p>Student web developer · Honest work · Fair prices</p>
        <a
          href="mailto:astronot.vaidik@gmail.com"
          className="hover:text-gray-400 transition-colors"
        >
          abionanaomi@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
