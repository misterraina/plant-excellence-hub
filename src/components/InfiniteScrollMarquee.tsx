import React, { useRef, useEffect, useState } from 'react';

// Reusable Infinite Scroll Marquee Base Component
const InfiniteScrollMarquee = ({ 
  children, 
  speed = 95, // pixels per second
  direction = 'left', 
  pauseOnHover = true,
  className = '',
  containerClassName = '',
  gap = 32
}) => {
  const contentRef = useRef(null);
  const [contentWidth, setContentWidth] = useState(0);
  const [animationDuration, setAnimationDuration] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      const width = contentRef.current.scrollWidth;
      setContentWidth(width);
      // Calculate duration based on speed (pixels per second)
      setAnimationDuration(width / speed);
    }
  }, [children, speed]);
  
  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {/* Fade gradients */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
      
      <div 
        className={`flex items-center ${pauseOnHover ? 'hover:[animation-play-state:paused]' : ''} ${className}`}
        style={{
          gap: `${gap}px`,
          animation: contentWidth > 0 ? `scroll-premium ${animationDuration}s linear infinite ${direction === 'right' ? 'reverse' : 'normal'}` : 'none'
        }}
      >
        {/* Original content */}
        <div 
          ref={contentRef}
          className="flex items-center shrink-0"
          style={{ gap: `${gap}px` }}
        >
          {children}
        </div>
        
        {/* Seamless duplicate */}
        <div 
          className="flex items-center shrink-0"
          style={{ gap: `${gap}px` }}
        >
          {children}
        </div>
      </div>

      <style>{`
        @keyframes scroll-premium {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${contentWidth + gap}px);
          }
        }
      `}</style>
    </div>
  );
};

// Partner Logos Marquee Component
const InfiniteMarquee = ({ 
  title = "Our Trusted Partners", 
  subtitle = "Building strong relationships with industry leaders",
  showTitle = true,
  speed = 95,
  pauseOnHover = true,
  direction = 'left',
  containerClassName = "bg-white/90 backdrop-blur-sm rounded-xl shadow-sm py-8"
}) => {
  // Auto-generate logo list from assets/logos directory
  const logoFiles = [
    'Amayra-Group-Logo-1.png',
    'btm-logo.png',
    'visionindia_1653033826_282.png',
    'Taj_Hotels_logo.svg.png',
    'images (1).png',
    'images (2).png',
    'images (3).png',
    'images (4).png',
    'logo.png',
    'm1128u93.jpg',
    'images.png',
    'Screenshot 2025-08-17 122457.png'
  ];

  const partnerLogos = logoFiles.map((filename, index) => ({
    name: filename.split('.')[0].replace(/[_\-()0-9]/g, ' ').trim(),
    logo: `/logos/${filename}`,
    alt: `${filename.split('.')[0]} Logo`
  }));

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      {/* Title Section */}
      {showTitle && (
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-3">{title}</h3>
          <p className="text-gray-600 text-lg">{subtitle}</p>
        </div>
      )}

      {/* Partner Logos Marquee */}
      <InfiniteScrollMarquee
        speed={speed}
        direction={direction}
        pauseOnHover={pauseOnHover}
        containerClassName={containerClassName}
        className="py-4"
        gap={48}
      >
        {partnerLogos.map((partner, index) => (
          <div 
            key={index} 
            className="flex items-center justify-center flex-shrink-0 px-8 py-4"
            style={{ minWidth: '200px', maxWidth: '240px' }}
          >
            <img
              src={partner.logo}
              alt={partner.alt}
              className="h-16 w-auto object-contain"
              style={{ maxWidth: '180px', minWidth: '80px' }}
              onError={(e) => {
                // Fallback to placeholder if image fails to load
                const target = e.target as HTMLImageElement;
                target.src = `https://via.placeholder.com/160x80/6B7280/white?text=${encodeURIComponent(partner.name)}`;
              }}
            />
          </div>
        ))}
      </InfiniteScrollMarquee>
      

    </div>
  );
};

export default InfiniteMarquee;