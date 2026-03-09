import type { SiteConfig } from '@/lib/config';

interface Props {
  config: SiteConfig;
}

export function Footer({ config }: Props) {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <p className="footer-name">
        {config.name}{config.nameEn ? ` ${config.nameEn}` : ''}
      </p>
      {(config.address || config.phone) && (
        <p className="footer-info">
          {config.address && <>{config.address}<br /></>}
          {config.phone && <>📞 {config.phone}</>}
        </p>
      )}
      <div className="footer-divider" />
      <p className="footer-copy">© {year} {config.name}. All rights reserved.</p>
      <a
        href="https://www.linkmap.biz/sites?utm_source=badge&utm_medium=referral&utm_campaign=small-biz"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-badge"
        aria-label="Made with Linkmap"
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
        </svg>
        Powered by Linkmap
      </a>
    </footer>
  );
}
