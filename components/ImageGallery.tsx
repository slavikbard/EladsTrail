'use client';

import { useState } from 'react';
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
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // טיפול במקשי המקלדת
  const handleKeyDown = (e: KeyboardEvent) => {
    if (!isOpen) return;
    if (e.key === 'ArrowRight') goToPrev(); // RTL - חץ ימין = הקודם
    if (e.key === 'ArrowLeft') goToNext(); // RTL - חץ שמאל = הבא
    if (e.key === 'Escape') closeLightbox();
  };

  // האזנה למקשי המקלדת
  if (typeof window !== 'undefined') {
    window.addEventListener('keydown', handleKeyDown as any);
  }

  return (
    <>
      {/* גלריה רגילה */}
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
                style={{ objectFit: 'cover' }}
              />
              {captions && captions[index] && (
                <div className="gallery-caption">{captions[index]}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox - תצוגה בגודל מלא */}
      {isOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            ✕
          </button>

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
        /* גלריה */
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

        /* Lightbox - תצוגה בגודל מלא */
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
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
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
        }

        .lightbox-caption {
          background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 15px 30px;
          margin-top: 15px;
          border-radius: 8px;
          font-size: 18px;
          text-align: center;
        }

        .lightbox-counter {
          background: rgba(56, 189, 248, 0.9);
          color: white;
          padding: 8px 16px;
          margin-top: 10px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
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

        .lightbox-prev {
          right: 20px;
        }

        .lightbox-next {
          left: 20px;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
          }

          .gallery-image {
            height: 200px;
          }

          .lightbox-btn {
            font-size: 28px;
            padding: 15px 20px;
          }

          .lightbox-close {
            font-size: 28px;
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </>
  );
}
