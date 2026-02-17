import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Stats() {
  const { t } = useTranslation();

  const stats = [
    { value: t('stats.apartments'), label: t('stats.apartmentsLabel') },
    { value: t('stats.shops'), label: t('stats.shopsLabel') },
    { value: t('stats.parcels'), label: t('stats.parcelsLabel') },
    { value: t('stats.social'), label: t('stats.socialLabel') },
  ];

  return (
    <section className="relative py-16 sm:py-20 bg-[#0f1923] overflow-hidden">
      {/* Subtle gradient orbs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-6 sm:p-8 text-center hover:border-gold/20 transition-all"
            >
              <div className="text-gold font-serif text-4xl sm:text-5xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-white/40 text-sm sm:text-base font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
