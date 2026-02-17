import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    titleKey: 'about.feature1Title',
    descKey: 'about.feature1Desc',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    titleKey: 'about.feature2Title',
    descKey: 'about.feature2Desc',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    titleKey: 'about.feature3Title',
    descKey: 'about.feature3Desc',
  },
];

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="relative py-20 sm:py-28 bg-[#0f1923] overflow-hidden">
      {/* Background orb */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/3 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass rounded-2xl p-3 overflow-hidden">
              <img
                src="/images/page-05.jpg"
                alt="Dodurga Parseller"
                className="w-full rounded-xl"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-bold mb-6">
              {t('about.title')}
            </h2>
            <p className="text-white/50 leading-relaxed mb-10">
              {t('about.description')}
            </p>

            <div className="space-y-4">
              {features.map((feat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 4 }}
                  className="glass rounded-xl p-4 flex items-start gap-4 hover:border-gold/20 transition-all"
                >
                  <div className="text-gold flex-shrink-0 mt-0.5 glass-gold w-10 h-10 rounded-lg flex items-center justify-center">
                    {feat.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{t(feat.titleKey)}</h3>
                    <p className="text-white/40 text-sm">{t(feat.descKey)}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
