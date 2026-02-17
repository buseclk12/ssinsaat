---
date: 2026-02-17
topic: dodurga-landing-page
---

# Ankara Dodurga Parseller - Landing Page

## What We're Building
Görekli Mimarlık'ın Ankara Dodurga konut projesi için lüks, modern, iki dilli (TR/EN) bir statik landing page. Vite + React + Tailwind CSS + Framer Motion ile geliştirilecek, Vercel'e deploy edilecek.

## Why This Approach
- **Vite + React**: Hızlı geliştirme, modern tooling, Vercel uyumu
- **Tailwind CSS**: Utility-first, hızlı styling, responsive tasarım
- **Framer Motion**: Scroll animasyonları, premium his
- **react-i18next**: Türkçe/İngilizce dil desteği

## Key Decisions
- **Renk paleti**: Antrasit (#2C3E50) + Altın (#D4AF37) + Beyaz
- **Fontlar**: Playfair Display (başlıklar) + Inter (metin)
- **İki dilli**: react-i18next ile TR/EN
- **Görseller**: PDF'den çıkarılacak
- **WhatsApp butonu**: Sabit (fixed), her zaman görünür

## Sayfa Bölümleri
1. Navbar - Logo, dil değiştirme, telefon
2. Hero - Tam ekran render + başlık
3. İstatistikler - 862 Daire, 42 Dükkan, 4 Parsel, Sosyal Alanlar
4. Parsel Kartları - 4 parsel detayı
5. Daire Planları - Tab (Tip 1 / Tip 2 Blok)
6. İletişim/CTA - Form + WhatsApp
7. Footer

## Data
- Parseller: 29872/2, 29968/6, 29970/4, 29973/5
- 862 Adet 4+1 Daire
- 42 Adet Dükkan
- 4 Farklı Parsel
