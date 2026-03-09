import { siteConfig } from '@/lib/config';
import { NavHeader } from '@/components/nav-header';
import { HeroSection } from '@/components/hero-section';
import { QuickActions } from '@/components/quick-actions';
import { MenuSection } from '@/components/menu-section';
import { InfoSection } from '@/components/info-section';
import { GallerySection } from '@/components/gallery-section';
import { SnsSection } from '@/components/sns-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <>
      <NavHeader config={siteConfig} />
      <main id="main">
        <HeroSection config={siteConfig} />
        <QuickActions config={siteConfig} />
        {siteConfig.menuItems.length > 0 && (
          <MenuSection items={siteConfig.menuItems} />
        )}
        <InfoSection config={siteConfig} />
        {siteConfig.galleryImages.length > 0 && (
          <GallerySection images={siteConfig.galleryImages} />
        )}
        <SnsSection config={siteConfig} />
      </main>
      <Footer config={siteConfig} />
    </>
  );
}
