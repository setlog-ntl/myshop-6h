'use client';

import type { SiteConfig } from '@/lib/config';

interface Props {
  config: SiteConfig;
}

export function HeroSection({ config }: Props) {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg" />
      <div className="hero-circle hero-circle-1" />
      <div className="hero-circle hero-circle-2" />
      <div className="hero-circle hero-circle-3" />
      <div className="hero-noise" />

      <div className="hero-content">
        {config.description && (
          <p className="hero-category">
            소상공인
            <span className="hero-category-dot" />
            {config.name}
          </p>
        )}

        <h1 className="hero-name">{config.name}</h1>

        {config.nameEn && (
          <p className="hero-name-en">{config.nameEn}</p>
        )}

        <div className="hero-divider">
          <span className="hero-divider-line" />
          <span style={{ fontSize: '0.625rem' }}>✦</span>
          <span className="hero-divider-line" />
        </div>

        {config.description && (
          <p className="hero-slogan">"{config.description}"</p>
        )}

        <div className="hero-actions">
          {config.menuItems.length > 0 && (
            <a href="#menu" className="btn btn-primary">메뉴 보기</a>
          )}
          {config.address && (
            <a href="#location" className="btn btn-outline">오시는 길</a>
          )}
          {!config.menuItems.length && config.phone && (
            <a
              href={`tel:${config.phone.replace(/[^+\d]/g, '')}`}
              className="btn btn-primary"
            >
              📞 전화하기
            </a>
          )}
        </div>
      </div>

      <div className="hero-scroll-hint" aria-hidden="true">
        <div className="hero-scroll-arrow" />
      </div>
    </section>
  );
}
