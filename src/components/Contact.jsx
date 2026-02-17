import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

// Google Apps Script Web App URL - bunu kendi URL'iniz ile değiştirin
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyUBPGVLjxY4ZrjqQrJw9JlwMQHdmX_0BJmeSeHzfz11VRA1GM8nX_VEWOBizMqhQRCeA/exec';

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          date: new Date().toLocaleString('tr-TR'),
        }),
      });
      setStatus('success');
      setFormData({ name: '', phone: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-[#0E1610] overflow-hidden">
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-bold mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-white/40 max-w-lg mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass rounded-2xl p-8 space-y-5"
        >
          <input
            type="text"
            placeholder={t('contact.name')}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-white/5 border border-white/10 text-white placeholder-white/20 px-5 py-4 rounded-xl text-sm focus:outline-none focus:border-gold/40 focus:bg-white/[0.07] transition-all"
            required
          />
          <input
            type="tel"
            placeholder={t('contact.phone')}
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full bg-white/5 border border-white/10 text-white placeholder-white/20 px-5 py-4 rounded-xl text-sm focus:outline-none focus:border-gold/40 focus:bg-white/[0.07] transition-all"
            required
          />
          <textarea
            placeholder={t('contact.message')}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={4}
            className="w-full bg-white/5 border border-white/10 text-white placeholder-white/20 px-5 py-4 rounded-xl text-sm focus:outline-none focus:border-gold/40 focus:bg-white/[0.07] transition-all resize-none"
          />

          <motion.button
            type="submit"
            disabled={status === 'sending'}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full font-semibold py-4 rounded-xl text-sm uppercase tracking-wider transition-all shadow-lg ${status === 'success'
                ? 'bg-green-500/80 text-white shadow-green-500/20'
                : status === 'error'
                  ? 'bg-red-500/80 text-white shadow-red-500/20'
                  : 'bg-gold/90 hover:bg-gold text-anthracite-dark shadow-gold/20'
              }`}
          >
            {status === 'sending' && (
              <span className="inline-flex items-center gap-2">
                <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                {t('contact.sending')}
              </span>
            )}
            {status === 'success' && t('contact.success')}
            {status === 'error' && t('contact.error')}
            {status === 'idle' && t('contact.send')}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
