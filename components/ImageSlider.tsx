'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageSliderProps {
  images: string[];
  alt: string;
}

export default function ImageSlider({ images, alt }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg group">
      {/* תמונה ראשית */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="relative w-full h-full"
        >
          <Image
            src={images[currentIndex]}
            alt={`${alt} - תמונה ${currentIndex + 1}`}
            fill
            className="object-cover"
            priority={currentIndex === 0}
            sizes="(max-width: 768px) 100vw, 896px"
          />
        </motion.div>
      </AnimatePresence>

      {/* כפתורי ניווט */}
      {images.length > 1 && (
        <>
          {/* כפתור קודם */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#5D4E37] p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
            aria-label="תמונה קודמת"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* כפתור הבא */}
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#5D4E37] p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
            aria-label="תמונה הבאה"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* נקודות ניווט */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-white w-8'
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`עבור לתמונה ${index + 1}`}
              />
            ))}
          </div>

          {/* מונה תמונות */}
          <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1.5 rounded-full text-sm font-light backdrop-blur-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </>
      )}

      {/* גרדיאנט תחתון */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
    </div>
  );
}
