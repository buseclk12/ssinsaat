import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const parcelData = {
  id: '29968/6',
  area: '14.637 m²',
  blocks: [
    { name: 'A', floors: 24, apartments: 92, shops: 4 },
    { name: 'B', floors: 22, apartments: 84, shops: 4 },
    { name: 'C', floors: 20, apartments: 38, shops: 2 },
  ],
  totalApartments: 214,
  totalShops: 10,
};

export default function Parcels() {
  const { t } = useTranslation();

  return (
    <section id="parcels" className="relative py-20 sm:py-28 bg-[#0E1610] overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-bold mb-4">
            {t('parcels.title')}
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto">
            {t('parcels.subtitle')}
          </p>
        </motion.div>

        {/* Site plan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="glass rounded-2xl p-3 max-w-4xl mx-auto">
            <img
              src="/images/page-10.jpg"
              alt="Yerleşim Planı"
              className="w-full rounded-xl"
            />
          </div>
        </motion.div>

        {/* Parcel Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          {/* Header */}
          <div className="glass-gold p-6 rounded-t-2xl text-center">
            <h3 className="text-gold font-serif text-2xl font-bold">
              {parcelData.id}
            </h3>
            <p className="text-gold/40 text-sm mt-1">
              {t('parcels.parcelArea')}: {parcelData.area}
            </p>
          </div>

          {/* Blocks */}
          <div className="glass rounded-b-2xl overflow-hidden">
            <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/5">
              {parcelData.blocks.map((block, i) => (
                <motion.div
                  key={block.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="p-6 text-center"
                >
                  <div className="text-gold font-serif text-lg font-bold mb-3">
                    {block.name} {t('parcels.block')}
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-white/60">
                      <span>{t('parcels.floors')}</span>
                      <span className="text-white font-semibold">{block.floors}</span>
                    </div>
                    <div className="flex justify-between text-white/60">
                      <span>{t('parcels.apartments')}</span>
                      <span className="text-white font-semibold">{block.apartments}</span>
                    </div>
                    <div className="flex justify-between text-white/60">
                      <span>{t('parcels.shops')}</span>
                      <span className="text-white font-semibold">{block.shops}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-white/5 p-5 bg-white/[0.02] flex justify-center gap-8">
              <div className="text-center">
                <span className="text-gold font-serif text-2xl font-bold">{parcelData.totalApartments}</span>
                <p className="text-white/40 text-xs mt-1">{t('parcels.apartments')}</p>
              </div>
              <div className="text-center">
                <span className="text-gold font-serif text-2xl font-bold">{parcelData.totalShops}</span>
                <p className="text-white/40 text-xs mt-1">{t('parcels.shops')}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
