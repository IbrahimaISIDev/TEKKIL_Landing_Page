import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'TEKKIL — Prépare ton concours national sénégalais'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
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
          background: '#080E2E',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background radial glow */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 800,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(43,82,238,0.25) 0%, transparent 70%)',
          }}
        />

        {/* Top accent line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: 'linear-gradient(90deg, transparent, #F9C623, #2B52EE, transparent)',
          }}
        />

        {/* Logo pill */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            background: 'rgba(255,255,255,0.95)',
            borderRadius: 16,
            padding: '12px 24px',
            marginBottom: 40,
          }}
        >
          {/* Stylized T icon */}
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 10,
              background: '#080E2E',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 12,
            }}
          >
            <div
              style={{
                width: 28,
                height: 4,
                background: '#F9C623',
                borderRadius: 2,
                position: 'absolute',
                top: 0,
              }}
            />
            <div
              style={{
                fontSize: 24,
                fontWeight: 900,
                color: '#2B52EE',
                lineHeight: 1,
              }}
            >
              T
            </div>
          </div>
          <span
            style={{
              fontSize: 32,
              fontWeight: 800,
              color: '#080E2E',
              letterSpacing: '-1px',
            }}
          >
            TEKKIL
          </span>
        </div>

        {/* Main headline */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            color: '#FFFFFF',
            textAlign: 'center',
            lineHeight: 1.1,
            maxWidth: 900,
            marginBottom: 20,
            letterSpacing: '-2px',
          }}
        >
          Prépare ton concours
          <br />
          <span style={{ color: '#F9C623' }}>national sénégalais</span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 22,
            color: '#94A3B8',
            textAlign: 'center',
            maxWidth: 700,
            marginBottom: 48,
            lineHeight: 1.5,
          }}
        >
          QCM adaptatifs · Flashcards · Assistant IA · Classement en direct
        </div>

        {/* Feature pills */}
        <div style={{ display: 'flex', gap: 12 }}>
          {['510+ Questions', '13 Sous-tests', 'Mode hors-ligne', 'Android'].map((item) => (
            <div
              key={item}
              style={{
                padding: '8px 18px',
                borderRadius: 100,
                background: 'rgba(43,82,238,0.2)',
                border: '1px solid rgba(43,82,238,0.4)',
                color: '#93C5FD',
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Flag + URL bottom right */}
        <div
          style={{
            position: 'absolute',
            bottom: 28,
            right: 40,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <span style={{ fontSize: 24 }}>🇸🇳</span>
          <span style={{ color: '#475569', fontSize: 16 }}>tekkil.sn</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
