import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const parcelsData = [
  {
    id: '29872/2',
    area: '18.197 m²',
    blocks: [
      { name: 'A', floors: 18, apartments: 80, shops: 4 },
      { name: 'B', floors: 19, apartments: 72, shops: 4 },
      { name: 'C', floors: 21, apartments: 60, shops: 4 },
    ],
    totalApartments: 212,
    totalShops: 12,
  },
  {
    id: '29968/6',
    area: '14.637 m²',
    blocks: [
      { name: 'A', floors: 24, apartments: 92, shops: 4 },
      { name: 'B', floors: 22, apartments: 84, shops: 4 },
      { name: 'C', floors: 20, apartments: 38, shops: 2 },
    ],
    totalApartments: 214,
    totalShops: 10,
  },
  {
    id: '29970/4',
    area: '21.540 m²',
    blocks: [
      { name: 'A', floors: 24, apartments: 92, shops: 4 },
      { name: 'B', floors: 22, apartments: 84, shops: 4 },
      { name: 'C', floors: 20, apartments: 76, shops: 4 },
    ],
    totalApartments: 252,
    totalShops: 12,
  },
  {
    id: '29973/5',
    area: '19.862 m²',
    blocks: [
      { name: 'A', floors: 24, apartments: 92, shops: 4 },
      { name: 'B', floors: 24, apartments: 92, shops: 4 },
    ],
    totalApartments: 184,
    totalShops: 8,
  },
];

export default function Parcels() {
  const { t } = useTranslation();

  return (
    <section id="parcels" className="relative py-20 sm:py-28 bg-[#0f1923] overflow-hidden">
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

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {parcelsData.map((parcel, i) => (
            <motion.div
              key={parcel.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl overflow-hidden hover:border-gold/20 transition-all group"
            >
              {/* Header */}
              <div className="glass-gold p-5 rounded-t-xl">
                <h3 className="text-gold font-serif text-xl font-bold">
                  {parcel.id}
                </h3>
                <p className="text-gold/40 text-xs mt-1">
                  {t('parcels.parcelArea')}: {parcel.area}
                </p>
              </div>

              {/* Blocks */}
              <div className="p-5 space-y-3">
                {parcel.blocks.map((block) => (
                  <div key={block.name} className="flex items-center justify-between text-sm">
                    <span className="font-semibold text-white/80">
                      {block.name} {t('parcels.block')}
                    </span>
                    <span className="text-white/40 text-xs">
                      {block.floors} {t('parcels.floors')} · {block.apartments} {t('parcels.apartments')}
                    </span>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-white/5 p-5 bg-white/[0.02]">
                <div className="flex justify-between text-sm">
                  <span className="font-semibold text-white/60">{t('parcels.total')}</span>
                  <span className="text-gold font-bold">
                    {parcel.totalApartments} {t('parcels.apartments')}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
