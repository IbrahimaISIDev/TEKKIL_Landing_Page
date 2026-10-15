'use client';

import React, { useSyncExternalStore } from 'react';
import { motion } from 'framer-motion';
import FolderFloat from '@/components/ui/FolderFloat';
import ScrollReveal from '@/components/ui/ScrollReveal';

// Sous 640 px, les 8 outils tiennent dans l'écran sur 3 rangées au lieu de 2.
const NARROW_QUERY = '(max-width: 639px)';
const subscribeNarrow = (onChange: () => void) => {
  const mq = window.matchMedia(NARROW_QUERY);
  mq.addEventListener('change', onChange);
  return () => mq.removeEventListener('change', onChange);
};

export function ExploreTekkil() {
  const isNarrow = useSyncExternalStore(
    subscribeNarrow,
    () => window.matchMedia(NARROW_QUERY).matches,
    () => false
  );

  const tekkilFeatures = [
    'Fiches de leçon',
    'Audios',
    'QCM',
    'Flashcards',
    'Entraînement',
    'Examens blancs',
    'Annales corrigées',
    'Exercices'
  ];

  return (
    <section className="bg-white pt-24 pb-12 md:pt-32 md:pb-16 w-full flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Decorative Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100" 
          style={{ backgroundImage: "url('/ecosystem-bg.webp')" }} 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center text-center">
        
        {/* Animated Title & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2b326f]/5 border border-[#2b326f]/10 text-[#2b326f] text-sm font-bold mb-8">
            <span className="w-2 h-2 rounded-full bg-[#25b09d] animate-pulse" />
            L'Écosystème
          </div>
          <ScrollReveal
            baseOpacity={0}
            baseRotation={3}
            blurStrength={10}
            containerClassName="mb-6"
            textClassName="text-4xl md:text-5xl lg:text-[4rem] font-extrabold text-[#2b326f] tracking-tight"
            rotationEnd="bottom bottom"
            wordAnimationEnd="bottom bottom"
          >
            Tout pour réussir.
          </ScrollReveal>
          <p className="text-gray-600 max-w-2xl mx-auto mb-20 md:mb-32 text-lg md:text-xl leading-relaxed">
            Passez votre souris (ou cliquez) sur le dossier pour explorer les outils que <span className="font-bold text-[#25b09d]">Tekkil</span> met à votre disposition pour décrocher vos concours.
          </p>
        </motion.div>

        {/* 
          Folder Component with shadow pedestal 
        */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative z-10 flex justify-center mt-24 sm:mt-12 md:mt-16 mb-8 md:mb-12 h-[200px]"
        >
          {/* Subtle pedestal / shadow for the folder to rest on */}
          <div className="absolute bottom-[-10px] w-[260px] h-[15px] bg-[#2b326f]/10 rounded-[100%] blur-[8px]" />
          <div className="absolute bottom-[-5px] w-[200px] h-[8px] bg-[#2b326f]/15 rounded-[100%] blur-[4px]" />
          
          <FolderFloat
            items={tekkilFeatures}
            label="Ressources TEKKIL"
            sublabel={`${tekkilFeatures.length} outils disponibles`}
            trigger="hover"
            closeOnSelect={true}
            physics={true}
            drift={0.5}
            folderColor="#2b326f" 
            frontColor="#25b09d"
            paperColor="#f5f5f5"
            itemColor="#2b326f"
            itemTextColor="#ffffff"
            labelColor="#ffffff"
            width={240}
            height={168}
            radius={16}
            spread={isNarrow ? 160 : 240}
            lift={30}
            tilt={10}
            flapAngle={38}
            restAngle={14}
            openDuration={350}
            stagger={25}
            bounce={0.25}
          />
        </motion.div>
      </div>
    </section>
  );
}
