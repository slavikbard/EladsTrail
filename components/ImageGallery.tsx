'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryImage {
  url: string;
  caption: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  title?: string;
}

export default function ImageGallery({ images, title }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  return (
    <>
      <div className="mb-12">
        {title && (
          <h3 className="text-2xl font-bold text-[#1B263B] mb-6">{title}</h3>
        )}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="relative h-48 md:h-64 rounded-xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.url}
                alt={image.caption}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-medium line-clamp-2">
                    {image.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 md:top-8 md:right-8 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
              aria-label="סגור"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 md:left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
              aria-label="תמונה קודמת"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 md:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
              aria-label="תמונה הבאה"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <motion.div
              key={selectedIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[80vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selectedIndex].url}
                alt={images[selectedIndex].caption}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 1200px"
                priority
              />
            </motion.div>

            <div className="absolute bottom-8 left-0 right-0 text-center">
              <p className="text-white text-lg font-medium mb-2" dir="rtl">
                {images[selectedIndex].caption}
              </p>
              <p className="text-white/60 text-sm">
                {selectedIndex + 1} / {images.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
