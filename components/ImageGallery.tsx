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
      document.body.style.overflow = 'hidden';
    }
  };

  const closeLightbox = () => {
    setIsOpen(false);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'unset';
    }
  };

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'ArrowRight') goToPrev();
      if (e.key === 'ArrowLeft') goToNext();
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
              <div className="image-wrapper">
                {/* שימוש ב-img רגיל כדי למנוע מתיחות של Next/Image */}
                <img
                  src={image}
                  alt={captions?.[index] || `תמונה ${index + 1}`}
                  className="forced-image"
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
            {/* גם כאן img רגיל עם contain כדי שלא יימתח */}
            <img
              src={images[currentIndex]}
              alt={captions?.[currentIndex] || `תמונה full view`}
              className="lightbox-forced-image"
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
          padding: 0 10px; /* הקטנתי שוליים למובייל */
          direction: rtl;
        }
        .gallery-grid {
          display: grid;
          /* במובייל זה יהיה טור אחד רחב, ובמסכים גדולים יותר טורים */
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
          align-items: start;
        }
        .gallery-item {
          cursor: pointer;
          border-radius: 12px;
          background: #f8fafc;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          border: 1px solid #e2e8f0;
        }
        .gallery-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }
        .image-wrapper {
          width: 100%;
          line-height: 0;
          background: #fff;
        }
        .forced-image {
          width: 100% !important;
          height: auto !important;
          display: block;
          object-fit: contain !important; /* קריטי - מונע מתיחה */
        }
        .gallery-caption {
          padding: 12px;
          background: white;
          color: #1e293b;
          font-weight: 600;
          text-align: center;
          border-top: 1px solid #f1f5f9;
          font-size: 14px;
        }

        /* Lightbox Styles */
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
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        
        .lightbox-content {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px 0; /* מקום לכותרות */
        }

        .lightbox-forced-image {
          max-width: 90vw;
          max-height: 80vh; /* משאיר מקום לכיתוב למטה */
          width: auto;
          height: auto;
          object-fit: contain !important; /* קריטי - שומר על פרופורציות במצב מלא! */
          border-radius: 4px;
        }

        .lightbox-caption {
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 10px 20px;
          margin-top: 15px;
          border-radius: 20px;
          font-size: 16px;
          text-align: center;
          max-width: 90%;
        }
        .lightbox-counter {
          color: rgba(255,255,255,0.7);
          margin-top: 10px;
          font-size: 14px;
        }

        /* כפתורים - עיצוב בסיס */
        .lightbox-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.15);
          color: white;
          border: none;
          font-size: 40px;
          padding: 15px;
          cursor: pointer;
          border-radius: 50%;
          transition: all 0.3s ease;
          z-index: 10000;
          display: flex; align-items: center; justify-content: center;
          width: 60px; height: 60px;
        }
        .lightbox-btn:hover { background: rgba(255, 255, 255, 0.3); }
        .lightbox-prev { right: 30px; }
        .lightbox-next { left: 30px; }

        .lightbox-close {
          position: absolute;
          top: 20px;
          left: 20px;
          background: rgba(255,255,255,0.15);
          color: white;
          border: none;
          font-size: 30px;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          cursor: pointer;
          z-index: 10001;
          display: flex; align-items: center; justify-content: center;
        }

        /* --- התאמות למובייל --- */
        @media (max-width: 768px) {
          .gallery-grid {
            gap: 15px; /* פחות רווח בין תמונות */
          }
          /* כפתורים קטנים יותר במובייל כדי לא להסתיר את התמונה */
          .lightbox-btn {
            font-size: 24px;
            width: 45px; height: 45px;
            padding: 10px;
            background: rgba(0, 0, 0, 0.5); /* רקע כהה יותר לניגודיות */
          }
          .lightbox-prev { right: 10px; }
          .lightbox-next { left: 10px; }
          
          .lightbox-close {
            top: 15px; left: 15px;
            width: 40px; height: 40px;
            font-size: 24px;
            background: rgba(0, 0, 0, 0.5);
          }
          
          .lightbox-caption {
            font-size: 14px;
            padding: 8px 15px;
          }
        }
      `}</style>
    </>
  );
}