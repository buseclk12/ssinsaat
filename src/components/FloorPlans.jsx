import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const plansData = {
  type1: {
    groundFloor: {
      image: '/images/page-11.jpg',
      units: [
        { name: '01', type: 'shop', net: '111.40', gross: '116.70' },
        { name: '02', type: 'shop', net: '146.40', gross: '154.60' },
        { name: '03', type: 'shop', net: '146.40', gross: '154.60' },
        { name: '04', type: 'shop', net: '146.40', gross: '154.60' },
      ],
    },
    typicalFloor: {
      image: '/images/page-12.jpg',
      units: [
        { name: '5', type: 'apartment', net: '135.50', gross: '151.95', open: '23.30', totalGross: '175.25' },
        { name: '6', type: 'apartment', net: '135.50', gross: '151.95', open: '23.30', totalGross: '175.25' },
        { name: '7', type: 'apartment', net: '135.50', gross: '151.95', open: '23.30', totalGross: '175.25' },
        { name: '8', type: 'apartment', net: '135.50', gross: '151.95', open: '23.30', totalGross: '175.25' },
      ],
    },
  },
  type2: {
    groundFloor: {
      image: '/images/page-13.jpg',
      units: [
        { name: '01', type: 'shop', net: '158.90', gross: '171.80' },
        { name: '02', type: 'shop', net: '149.00', gross: '160.60' },
      ],
    },
    typicalFloor: {
      image: '/images/page-14.jpg',
      units: [
        { name: '3', type: 'apartment', net: '150.30', gross: '172.40', open: '22.00', totalGross: '192.40' },
        { name: '4', type: 'apartment', net: '150.30', gross: '172.40', open: '22.00', totalGross: '192.40' },
      ],
    },
  },
};

export default function FloorPlans() {
  const { t } = useTranslation();
  const [activeType, setActiveType] = useState('type1');
  const [activeFloor, setActiveFloor] = useState('typicalFloor');

  const data = plansData[activeType][activeFloor];

  return (
    <section id="plans" className="relative py-20 sm:py-28 bg-[#0E1610] overflow-hidden">
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-gold/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-bold mb-4">
            {t('plans.title')}
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto">
            {t('plans.subtitle')}
          </p>
        </motion.div>

        {/* Type tabs */}
        <div className="flex justify-center gap-3 mb-6">
          {['type1', 'type2'].map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`px-6 py-3 text-sm font-semibold uppercase tracking-wider rounded-xl transition-all ${
                activeType === type
                  ? 'glass-gold text-gold shadow-lg shadow-gold/10'
                  : 'glass text-white/40 hover:text-white/60'
              }`}
            >
              {t(`plans.${type === 'type1' ? 'type1' : 'type2'}`)}
            </button>
          ))}
        </div>

        {/* Floor tabs */}
        <div className="flex justify-center gap-3 mb-12">
          {['groundFloor', 'typicalFloor'].map((floor) => (
            <button
              key={floor}
              onClick={() => setActiveFloor(floor)}
              className={`px-5 py-2 text-xs font-medium uppercase tracking-wider rounded-lg transition-all ${
                activeFloor === floor
                  ? 'bg-white/10 text-gold border border-gold/20'
                  : 'glass text-white/30 hover:text-white/50'
              }`}
            >
              {t(`plans.${floor}`)}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeType}-${activeFloor}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-2 gap-12 items-start"
          >
            {/* Plan image */}
            <div className="glass rounded-2xl p-3">
              <img
                src={data.image}
                alt={`${activeType} ${activeFloor}`}
                className="w-full rounded-xl"
              />
            </div>

            {/* Unit details */}
            <div className="space-y-4">
              {data.units.map((unit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="glass rounded-xl p-5 hover:border-gold/20 transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-serif text-lg font-bold text-white">
                      {unit.type === 'shop' ? t('plans.shop') : t('plans.apartment')} {unit.name}
                    </span>
                    <span className="glass-gold text-gold text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                      {unit.type === 'shop' ? t('plans.shop') : '4+1'}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="text-white/30 text-xs">{t('plans.netArea')}</span>
                      <span className="block font-semibold text-white/80">{unit.net} m²</span>
                    </div>
                    <div>
                      <span className="text-white/30 text-xs">{t('plans.grossArea')}</span>
                      <span className="block font-semibold text-white/80">{unit.gross} m²</span>
                    </div>
                    {unit.open && (
                      <>
                        <div>
                          <span className="text-white/30 text-xs">{t('plans.openArea')}</span>
                          <span className="block font-semibold text-white/80">{unit.open} m²</span>
                        </div>
                        <div>
                          <span className="text-white/30 text-xs">{t('plans.totalGross')}</span>
                          <span className="block font-semibold text-gold">{unit.totalGross} m²</span>
                        </div>
                      </>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
