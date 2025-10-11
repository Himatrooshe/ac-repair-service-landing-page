'use client';

import React, { useState } from 'react';

interface LogoItem {
  node?: React.ReactNode;
  src?: string;
  alt?: string;
  href?: string;
  title?: string;
}

interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number;
  direction?: 'left' | 'right';
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  scaleOnHover?: boolean;
  fadeOut?: boolean;
  fadeOutColor?: string;
  ariaLabel?: string;
  className?: string;
}

const LogoLoop: React.FC<LogoLoopProps> = ({
  logos,
  speed = 80,
  direction = 'left',
  logoHeight = 64,
  gap = 20,
  pauseOnHover = false,
  scaleOnHover = false,
  fadeOut = true,
  fadeOutColor = '#ffffff',
  ariaLabel = 'Logo carousel',
  className = ''
}) => {
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsPaused(false);
    }
  };

  const LogoItem: React.FC<{ logo: LogoItem; index: number }> = ({ logo, index }) => {
    const content = (
      <div
        className={`flex items-center justify-center transition-transform duration-300 ${
          scaleOnHover ? 'hover:scale-110' : ''
        }`}
        style={{ height: logoHeight, width: logoHeight * 2 }}
      >
        {logo.node ? (
          <div className="text-gray-600 hover:text-primary transition-colors duration-300" style={{ fontSize: logoHeight * 0.8 }}>
            {logo.node}
          </div>
        ) : logo.src ? (
          <img
            src={logo.src}
            alt={logo.alt || `Logo ${index + 1}`}
            className="max-h-full max-w-full object-contain transition-all duration-300 opacity-90 hover:opacity-100"
            style={{ height: logoHeight }}
          />
        ) : null}
      </div>
    );

    if (logo.href) {
      return (
        <a
          href={logo.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
          title={logo.title || logo.alt}
        >
          {content}
        </a>
      );
    }

    return content;
  };

  // Calculate slide width based on logo height and gap
  const slideWidth = logoHeight * 2 + gap;
  const totalSlides = logos.length;
  const animationDuration = totalSlides * 2; // 2 seconds per logo for smooth movement

  return (
    <div
      className={`slider ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label={ariaLabel}
      style={{ height: logoHeight + 20 }}
    >
      <div
        className="slide-track"
        style={{
          width: `calc(${slideWidth}px * ${totalSlides * 3})`,
          animation: `scroll ${animationDuration}s linear infinite`,
          animationPlayState: isPaused ? 'paused' : 'running',
          gap: gap
        }}
      >
        {/* First set of logos */}
        {logos.map((logo, index) => (
          <div key={`first-${index}`} className="slide">
            <LogoItem logo={logo} index={index} />
          </div>
        ))}
        
        {/* Second set of logos (duplicate) */}
        {logos.map((logo, index) => (
          <div key={`second-${index}`} className="slide">
            <LogoItem logo={logo} index={index} />
          </div>
        ))}
        
        {/* Third set of logos (duplicate) */}
        {logos.map((logo, index) => (
          <div key={`third-${index}`} className="slide">
            <LogoItem logo={logo} index={index} />
          </div>
        ))}
      </div>

      <style jsx>{`
        .slider {
          position: relative;
          width: 100%;
          display: grid;
          place-items: center;
          overflow: hidden;
        }
        
        .slider::before,
        .slider::after {
          position: absolute;
          background-image: linear-gradient(to right, ${fadeOutColor} 0%, transparent 100%);
          content: '';
          height: 100%;
          width: 25%;
          z-index: 2;
          pointer-events: none;
        }
        
        .slider::before {
          left: 0;
          top: 0;
        }
        
        .slider::after {
          right: 0;
          top: 0;
          transform: rotateZ(180deg);
        }

        .slide-track {
          display: flex;
          justify-content: space-between;
        }

        .slide {
          display: grid;
          place-items: center;
          transition: 0.5s;
          cursor: pointer;
        }

        .slide:hover {
          transform: scale(0.95);
        }

        @keyframes scroll {
          0% {
            transform: translateX(0px);
          }
          100% {
            transform: translateX(calc(-${slideWidth}px * ${totalSlides}));
          }
        }
      `}</style>
    </div>
  );
};

export default LogoLoop;
