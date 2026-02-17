import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: 'url(/images/page-02.jpg)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f1923]/80 via-[#0f1923]/40 to-[#0f1923]/90" />

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block glass-gold px-6 py-2 rounded-full mb-8"
        >
          <span className="text-gold font-medium tracking-[0.3em] uppercase text-xs sm:text-sm">
            {t('hero.location')}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl sm:text-5xl md:text-7xl text-white font-bold leading-tight mb-6"
        >
          {t('hero.title')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/50 text-lg sm:text-xl font-light mb-10"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block bg-gold/90 hover:bg-gold backdrop-blur-sm text-anthracite-dark font-semibold px-8 py-4 rounded-lg text-sm tracking-wider uppercase transition-all shadow-lg shadow-gold/20"
        >
          {t('hero.cta')}
        </motion.a>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="glass w-8 h-12 rounded-full flex items-start justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-3 bg-gold/60 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
