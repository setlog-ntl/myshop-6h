'use client';

import { useEffect, useRef } from 'react';
import type { MenuItem } from '@/lib/config';

interface Props {
  items: MenuItem[];
}

export function MenuSection({ items }: Props) {
  const sectionRef = useRef<HTMLElement>(null);

  const categories = [...new Set(items.map((item) => item.category))];
  const grouped = categories.reduce<Record<string, MenuItem[]>>((acc, cat) => {
    acc[cat] = items.filter((item) => item.category === cat);
    return acc;
  }, {});

  useEffect(() => {
    const revealEls = sectionRef.current?.querySelectorAll<HTMLElement>('.reveal');
    const menuItems = sectionRef.current?.querySelectorAll<HTMLElement>('.menu-item');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    revealEls?.forEach((el) => observer.observe(el));

    const menuObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const siblings = entry.target.parentElement?.querySelectorAll<HTMLElement>('.menu-item');
            siblings?.forEach((item, i) => {
              setTimeout(() => item.classList.add('visible'), i * 80);
            });
            menuObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );

    sectionRef.current?.querySelectorAll<HTMLElement>('.menu-category').forEach((cat) => {
      const first = cat.querySelector<HTMLElement>('.menu-item');
      if (first) menuObserver.observe(first);
    });

    return () => { observer.disconnect(); menuObserver.disconnect(); };
  }, []);

  return (
    <section className="section menu-section" id="menu" ref={sectionRef}>
      <div className="section-inner">
        <p className="section-label reveal">메뉴</p>
        <h2 className="section-title reveal">오늘의 메뉴</h2>

        {categories.map((cat) => {
          const catItems = grouped[cat] || [];
          const catEmoji = catItems[0]?.emoji || '🍽️';
          return (
            <div key={cat} className="menu-category reveal">
              <div className="menu-category-header">
                <span className="menu-category-emoji">{catEmoji}</span>
                <span className="menu-category-name">{cat}</span>
              </div>
              <div className="menu-divider" />

              {catItems.map((item, i) => (
                <div key={i} className="menu-item">
                  {item.imageUrl ? (
                    <img className="menu-thumb" src={item.imageUrl} alt={item.name} loading="lazy" />
                  ) : (
                    <span className="menu-thumb-emoji">{item.emoji}</span>
                  )}
                  <div className="menu-item-info">
                    <div className="menu-item-name-row">
                      <span className="menu-item-name">{item.name}</span>
                      {item.nameEn && (
                        <span className="menu-item-name-en">{item.nameEn}</span>
                      )}
                      {item.isNew && <span className="badge badge-new">NEW</span>}
                      {item.isPopular && <span className="badge badge-popular">인기</span>}
                    </div>
                    {item.desc && <div className="menu-item-desc">{item.desc}</div>}
                  </div>
                  <span className="menu-item-price">{item.price}</span>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
}
