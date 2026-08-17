'use client'

import { motion } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'

export function Download() {
  return (
    <section id="download" className="relative bg-blue-900 py-20 md:py-28 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Central orb */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px]"
          style={{
            background:
              'radial-gradient(ellipse, rgba(43,82,238,0.2), transparent 70%)',
          }}
        />
        {/* Noise overlay */}
        <div className="noise-overlay" />

        {/* Decorative stars */}
        <div className="absolute top-20 left-[15%] w-2 h-2 rounded-full bg-white/60 animate-twinkle" />
        <div className="absolute top-32 right-[20%] w-1.5 h-1.5 rounded-full bg-blue-300/60 animate-twinkle-delay-1" />
        <div className="absolute bottom-24 left-[25%] w-2 h-2 rounded-full bg-gold-400/60 animate-twinkle-delay-2" />
        <div className="absolute bottom-40 right-[15%] w-1.5 h-1.5 rounded-full bg-white/40 animate-twinkle" />
      </div>

      <div className="relative max-w-4xl mx-auto px-5 md:px-8 text-center">
        <SectionLabel dark className="mb-4">
          Téléchargement
        </SectionLabel>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4"
          style={{ fontFamily: 'var(--font-roboto-condensed)', letterSpacing: '-0.03em' }}
        >
          Commence ta préparation aujourd&apos;hui
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-300 text-lg font-light mb-12"
        >
          Gratuit pour démarrer sur le web. Applications Android et iOS bientôt disponibles.
        </motion.p>

        {/* Store Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Google Play Button */}
          <motion.div
            whileHover={{ y: -3 }}
            className="relative w-full sm:w-auto flex items-center gap-4 px-6 py-4 rounded-2xl glass opacity-80 cursor-not-allowed"
          >
            {/* Android Icon */}
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              className="text-white"
            >
              <path
                d="M17.523 2.345a.5.5 0 0 0-.646.217l-1.9 3.469A8.953 8.953 0 0 0 12 5.5a8.953 8.953 0 0 0-2.977.531l-1.9-3.469a.5.5 0 1 0-.862.43l1.857 3.389A8.994 8.994 0 0 0 3 14v.5h18V14a8.994 8.994 0 0 0-5.118-8.119l1.857-3.39a.5.5 0 0 0-.216-.646ZM7.5 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm9 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                fill="currentColor"
              />
              <path
                d="M3 15.5h18V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.5Z"
                fill="currentColor"
              />
            </svg>
            <div className="text-left">
              <p className="text-gray-400 text-xs">Bientôt sur</p>
              <p className="text-white font-semibold text-lg">Google Play</p>
            </div>

            {/* Coming Soon Badge */}
            <span
              className="absolute -top-2 -right-2 px-2.5 py-1 rounded-full text-[0.65rem] font-semibold uppercase tracking-wider"
              style={{
                background: 'rgba(249,198,35,0.15)',
                border: '1px solid rgba(249,198,35,0.3)',
                color: '#F9C623',
              }}
            >
              Bientôt
            </span>
          </motion.div>

          {/* App Store Button */}
          <motion.div
            whileHover={{ y: -3 }}
            className="relative w-full sm:w-auto flex items-center gap-4 px-6 py-4 rounded-2xl glass opacity-80 cursor-not-allowed"
          >
            {/* Apple Icon */}
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              className="text-white"
            >
              <path
                d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"
                fill="currentColor"
              />
            </svg>
            <div className="text-left">
              <p className="text-gray-400 text-xs">Bientôt sur</p>
              <p className="text-white font-semibold text-lg">App Store</p>
            </div>

            {/* Coming Soon Badge */}
            <span
              className="absolute -top-2 -right-2 px-2.5 py-1 rounded-full text-[0.65rem] font-semibold uppercase tracking-wider"
              style={{
                background: 'rgba(249,198,35,0.15)',
                border: '1px solid rgba(249,198,35,0.3)',
                color: '#F9C623',
              }}
            >
              Bientôt
            </span>
          </motion.div>
        </motion.div>

        {/* Decorative horizontal line */}
        <div className="mt-16 h-px w-full max-w-md mx-auto bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
      </div>
    </section>
  )
}
