'use client'

import { motion } from 'framer-motion'
import { Mail, MessageCircle, Instagram, Facebook, Youtube, type LucideIcon } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { CONTACT_CHANNELS } from '@/lib/constants'

const iconMap: Record<string, LucideIcon> = {
  Mail,
  MessageCircle,
  Instagram,
  Facebook,
  Youtube,
}

export function Contact() {
  return (
    <section id="contact" className="bg-gray-50 py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <SectionLabel className="mb-4">Support</SectionLabel>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary mb-4"
            style={{ fontFamily: 'var(--font-roboto-condensed)', letterSpacing: '-0.03em' }}
          >
            On est là pour toi
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text-secondary text-lg font-light max-w-2xl mx-auto"
          >
            Une question, un bug, une suggestion ? Notre équipe te répond en moins de 24h.
          </motion.p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {CONTACT_CHANNELS.map((channel, index) => {
            const Icon = iconMap[channel.icon] || Mail

            return (
              <motion.a
                key={channel.title}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -6 }}
                className="group bg-white rounded-[20px] border border-gray-200 p-5 md:p-6 text-center hover:border-blue-200 transition-all cursor-pointer"
                style={{
                  transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                  <Icon size={24} className="text-blue-500" />
                </div>

                {/* Title */}
                <h3
                  className="text-lg font-semibold text-text-primary mb-2"
                  style={{ fontFamily: 'var(--font-roboto-condensed)' }}
                >
                  {channel.title}
                </h3>

                {/* Value */}
                <p className="text-blue-500 font-medium mb-2 group-hover:underline">
                  {channel.value}
                </p>

                {/* Description */}
                <p className="text-text-muted text-sm">{channel.description}</p>

                {/* Hover shadow effect */}
                <style jsx>{`
                  .group:hover {
                    box-shadow: 0 20px 50px rgba(8, 14, 46, 0.08);
                  }
                `}</style>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
