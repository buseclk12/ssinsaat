import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = ['about', 'parcels', 'plans', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'tr' ? 'en' : 'tr');
  };

  const links = [
    { href: '#about', label: t('nav.about'), id: 'about' },
    { href: '#parcels', label: t('nav.parcels'), id: 'parcels' },
    { href: '#plans', label: t('nav.plans'), id: 'plans' },
    { href: '#contact', label: t('nav.contact'), id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0E1610]/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center transition-transform group-hover:scale-110">
              <span className="text-white font-serif font-bold text-sm">SS</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-serif text-base sm:text-lg font-bold tracking-wide leading-none">
                S.S. İŞARET
              </span>
              <span className="text-white/30 text-[9px] font-medium tracking-[0.2em] mt-0.5 uppercase">
                Konut Yapı Koop.
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group"
              >
                <span
                  className={`relative z-10 transition-colors duration-300 ${
                    activeSection === link.id
                      ? 'text-gold'
                      : 'text-white/50 group-hover:text-white'
                  }`}
                >
                  {link.label}
                </span>
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-gold/10 border border-gold/20 rounded-lg"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* Language toggle */}
            <button
              onClick={toggleLang}
              className="relative w-16 h-8 rounded-full bg-white/5 border border-white/10 flex items-center p-0.5 transition-all hover:border-gold/30"
            >
              <motion.div
                className="absolute w-7 h-7 rounded-full bg-gradient-to-r from-gold to-gold-dark"
                animate={{ x: i18n.language === 'tr' ? 2 : 30 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
              <span
                className={`relative z-10 flex-1 text-center text-[10px] font-bold ${
                  i18n.language === 'tr' ? 'text-white' : 'text-white/40'
                }`}
              >
                TR
              </span>
              <span
                className={`relative z-10 flex-1 text-center text-[10px] font-bold ${
                  i18n.language === 'en' ? 'text-white' : 'text-white/40'
                }`}
              >
                EN
              </span>
            </button>

            {/* CTA */}
            <a
              href="#contact"
              className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-gold to-gold-dark text-white text-xs font-semibold px-4 py-2.5 rounded-xl hover:shadow-lg hover:shadow-gold/20 transition-all hover:scale-105"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {t('nav.callUs')}
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <motion.span
                  animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  className="block h-0.5 w-full bg-white/70 rounded-full origin-center"
                />
                <motion.span
                  animate={menuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                  className="block h-0.5 w-3/4 bg-white/70 rounded-full"
                />
                <motion.span
                  animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  className="block h-0.5 w-full bg-white/70 rounded-full origin-center"
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t border-white/5 bg-[#0E1610]/95 backdrop-blur-2xl"
          >
            <div className="px-4 py-6 space-y-1">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-all ${
                    activeSection === link.id
                      ? 'bg-gold/10 text-gold border border-gold/20'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    activeSection === link.id ? 'bg-gold' : 'bg-white/20'
                  }`} />
                  {link.label}
                </motion.a>
              ))}

              <div className="pt-4 mt-4 border-t border-white/5">
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-gold to-gold-dark text-white text-sm font-semibold px-4 py-3.5 rounded-xl w-full"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {t('nav.callUs')}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
