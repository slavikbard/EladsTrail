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
              <div className="image-container">
                 <Image
                  src={image}
                  alt={captions?.[index] || `תמונה ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="gallery-image"
                />
              </div>
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
            <div className="lightbox-image-wrapper">
                <Image
                  src={images[currentIndex]}
                  alt={captions?.[currentIndex] || `תמונה ${currentIndex + 1}`}
                  fill
                  className="lightbox-image"
                  priority
                />
            </div>
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
          align-items: start; /* חשוב: מונע מתיחה אנכית של האלמנטים */
        }
        .gallery-item {
          position: relative;
          cursor: pointer;
          overflow: hidden;
          border-radius: 12px;
          background: #1e293b;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        .gallery-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        }
        /* מיכל לתמונה כדי לשמור על גובה אחיד */
        .image-container {
            position: relative;
            width: 100%;
            height: 250px; /* הגובה הקבוע של הריבועים בגלריה */
            background: #0f172a; /* רקע כהה לשטחים המתים */
        }
        .gallery-image {
          /* השינוי הקריטי: contain במקום cover */
          object-fit: contain !important;
          transition: transform 0.3s ease;
        }
        .gallery-item:hover .gallery-image {
          transform: scale(1.05);
        }
        .gallery-caption {
          /* שינוי: הכיתוב מופיע מתחת לתמונה ולא עליה */
          background: #1e293b;
          color: white;
          padding: 15px;
          font-size: 14px;
          font-weight: 500;
          text-align: center;
          border-top: 1px solid #334155;
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
          /* מגביל את גודל התוכן במסך מלא */
          width: 90vw;
          height: 85vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .lightbox-image-wrapper {
            position: relative;
            width: 100%;
            height: 100%;
            flex-grow: 1; /* לוקח את רוב המקום */
        }
        .lightbox-image {
          object-fit: contain !important; /* שומר על פרופורציות גם במסך מלא */
        }
        .lightbox-caption {
          background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 15px 30px;
          margin-top: 15px;
          border-radius: 8px;
          font-size: 18px;
          text-align: center;
          flex-shrink: 0; /* שלא יתכווץ */
        }
        .lightbox-counter {
          background: rgba(56, 189, 248, 0.9);
          color: white;
          padding: 8px 16px;
          margin-top: 10px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
          flex-shrink: 0;
        }
        .lightbox-close {
          position: absolute;
          top: 20px;
          left: 20px;
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border: none;
          font-size: 36px;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .lightbox-close:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: rotate(90deg);
        }
        .lightbox-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(56, 189, 248, 0.8);
          color: white;
          border: none;
          font-size: 36px;
          padding: 20px 25px;
          cursor: pointer;
          border-radius: 8px;
          transition: all 0.3s ease;
          z-index: 10000;
        }
        .lightbox-btn:hover {
          background: rgba(56, 189, 248, 1);
          transform: translateY(-50%) scale(1.1);
        }
        .lightbox-prev { right: 20px; }
        .lightbox-next { left: 20px; }
        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
          }
          /* בגריד - אין צורך לשנות גובה כי הוא מוגדר ב-image-container */
          .lightbox-btn { font-size: 28px; padding: 15px 20px; }
          .lightbox-close { font-size: 28px; width: 40px; height: 40px; }
        }
      `}</style>
    </>
  );
}