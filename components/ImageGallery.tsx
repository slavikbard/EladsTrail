'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface ImageGalleryProps {
  images: string[];
  captions?: string[];
}

export default function ImageGallery({ images, captions }: ImageGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden'; // נועל גלילה כשהגלריה פתוחה
    }
  };

  const closeLightbox = () => {
    setIsOpen(false);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'unset'; // מחזיר גלילה
    }
  };

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // טיפול במקלדת - מונע כפילויות ובעיות זיכרון
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'ArrowRight') goToPrev(); // RTL - חץ ימין = הקודם
      if (e.key === 'ArrowLeft') goToNext(); // RTL - חץ שמאל = הבא
      if (e.key === 'Escape') closeLightbox();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, goToNext, goToPrev]);

  return (
    <>
      <div className="image-gallery">
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image}
                alt={captions?.[index] || `תמונה ${index + 1}`}
                width={400}
                height={300}
                className="gallery-image"
                style={{ objectFit: 'cover' }} // תיקון למתיחה!
              />
              {captions && captions[index] && (
                <div className="gallery-caption">{captions[index]}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>✕</button>

          <button
            className="lightbox-btn lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              goToPrev();
            }}
          >
            ❮
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[currentIndex]}
              alt={captions?.[currentIndex] || `תמונה ${currentIndex + 1}`}
              width={1200}
              height={800}
              className="lightbox-image"
              style={{ objectFit: 'contain' }}
              priority
            />
            {captions && captions[currentIndex] && (
              <div className="lightbox-caption">{captions[currentIndex]}</div>
            )}
            <div className="lightbox-counter">
              {currentIndex + 1} / {images.length}
            </div>
          </div>

          <button
            className="lightbox-btn lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
          >
            ❯
          </button>
        </div>
      )}

      <style jsx>{`
        .image-gallery {
          width: 100%;
          max-width: 1200px;
          margin: 40px auto;
          padding: 0 20px;
          direction: rtl;
        }
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }
        .gallery-item {
          position: relative;
          cursor: pointer;
          overflow: hidden;
          border-radius: 12px;
          background: #1e293b;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .gallery-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        }
        .gallery-image {
          width: 100%;
          height: 250px;
          transition: transform 0.3s ease;
          object-fit: cover !important; /* קריטי לתיקון המתיחה */
        }
        .gallery-item:hover .gallery-image {
          transform: scale(1.05);
        }
        .gallery-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
          color: white;
          padding: 15px;
          font-size: 14px;
          font-weight: 500;
          text-align: center;
        }
        .lightbox {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.95);
          z-index: 9999;
          display: flex;
          justify-content: center;
          align-items: center;
          animation: fadeIn 0.3s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .lightbox-content {
          position: relative;
          max-width: 90%;
          max-height: 90%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .lightbox-image {
          max-width: 100%;
          max-height: 80vh;
          width: auto;
          height: auto;
          border-radius: 8px;
          object-fit: contain !important;
        }
        .lightbox-caption {
          background: rgba(0, 0, 0, 0.8);