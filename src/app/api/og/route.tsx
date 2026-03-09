import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/config';

export const dynamic = 'force-static';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(160deg, #1a1a1a 0%, #2a2520 35%, #3a302a 70%, #c8a97e 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 400,
            color: '#ffffff',
            letterSpacing: '-0.01em',
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            fontSize: 24,
            color: 'rgba(255,255,255,0.75)',
            marginTop: 16,
            maxWidth: 640,
            textAlign: 'center',
            fontStyle: 'italic',
          }}
        >
          {siteConfig.description}
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
