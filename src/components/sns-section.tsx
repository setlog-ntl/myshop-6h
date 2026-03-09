'use client';

import { useEffect, useRef } from 'react';
import type { SiteConfig } from '@/lib/config';

interface Props {
  config: SiteConfig;
}

const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="2"/>
    <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2"/>
    <circle cx="17.5" cy="6.5" r="1.2" fill="white"/>
  </svg>
);

const NaverIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 3h6.5l5.5 8V3H19v16h-6.5L7 11v8H3V3z" fill="white"/>
  </svg>
);

const KakaoIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3C7.03 3 3 6.36 3 10.5c0 2.65 1.6 4.97 4.01 6.33L6 21l4.5-2.5c.49.07.99.1 1.5.1 4.97 0 9-3.36 9-7.5S16.97 3 12 3z" fill="#3c1e1e"/>
  </svg>
);

export function SnsSection({ config }: Props) {
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
      { threshold: 0.12 }
    );
    revealEls?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const hasAnySns = config.instagramUrl || config.naverBlogUrl || config.kakaoChannelUrl;
  if (!hasAnySns) return null;

  const getHandle = (url: string): string => {
    try {
      const u = new URL(url);
      const parts = u.pathname.split('/').filter(Boolean);
      return parts[parts.length - 1] ? `@${parts[parts.length - 1]}` : u.hostname;
    } catch {
      return url;
    }
  };

  return (
    <section className="section sns-section" id="sns" ref={sectionRef}>
      <div className="section-inner">
        <p className="section-label reveal">소셜 미디어</p>
        <h2 className="section-title reveal">SNS &amp; 채널</h2>
        <p className="section-desc reveal">최신 소식과 이벤트를 팔로우하세요.</p>

        <div className="sns-grid reveal">
          {config.instagramUrl && (
            <a
              href={config.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sns-card sns-instagram"
            >
              <div className="sns-icon-wrap">
                <InstagramIcon />
              </div>
              <span className="sns-name">인스타그램</span>
              <span className="sns-handle">{getHandle(config.instagramUrl)}</span>
            </a>
          )}

          {config.naverBlogUrl && (
            <a
              href={config.naverBlogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sns-card sns-naver"
            >
              <div className="sns-icon-wrap">
                <NaverIcon />
              </div>
              <span className="sns-name">네이버 블로그</span>
              <span className="sns-handle">공식 블로그</span>
            </a>
          )}

          {config.kakaoChannelUrl && (
            <a
              href={config.kakaoChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sns-card sns-kakao"
            >
              <div className="sns-icon-wrap">
                <KakaoIcon />
              </div>
              <span className="sns-name">카카오톡 채널</span>
              <span className="sns-handle">채널 추가하기</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
