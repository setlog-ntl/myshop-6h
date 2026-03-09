'use client';

import { useEffect, useRef } from 'react';

interface Props {
  images: string[];
}

export function GallerySection({ images }: Props) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const revealEls = sectionRef.current?.querySelectorAll<HTMLElement>('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    revealEls?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  if (images.length === 0) return null;

  return (
    <section className="section gallery-section" id="gallery" ref={sectionRef}>
      <div className="section-inner">
        <p className="section-label reveal">갤러리</p>
        <h2 className="section-title reveal">매장 &amp; 메뉴 사진</h2>
      </div>
      <div style={{ padding: '0 2rem' }}>
        <div className="gallery-scroll reveal">
          {images.map((src, i) => (
            <div key={i} className="gallery-item">
              <img src={src} alt={`갤러리 이미지 ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
        <p className="gallery-caption reveal">좌우로 스크롤하여 더 많은 사진을 확인하세요</p>
      </div>
    </section>
  );
}
