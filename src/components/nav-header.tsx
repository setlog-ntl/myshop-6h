'use client';

import { useState, useEffect } from 'react';
import type { SiteConfig } from '@/lib/config';

interface Props {
  config: SiteConfig;
}

export function NavHeader({ config }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMobileOpen(false); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const navLinks = [
    { href: '#menu', label: '메뉴' },
    { href: '#info', label: '영업시간' },
    { href: '#location', label: '위치' },
    { href: '#gallery', label: '갤러리' },
  ].filter((link) => {
    if (link.href === '#menu' && config.menuItems.length === 0) return false;
    if (link.href === '#gallery' && config.galleryImages.length === 0) return false;
    return true;
  });

  return (
    <nav className="nav" role="navigation" aria-label="주 메뉴">
      <a href="#hero" className="nav-logo">{config.name}</a>
      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
      {config.phone && (
        <a href={`tel:${config.phone.replace(/[^+\d]/g, '')}`} className="nav-cta">
          전화하기
        </a>
      )}
    </nav>
  );
}
