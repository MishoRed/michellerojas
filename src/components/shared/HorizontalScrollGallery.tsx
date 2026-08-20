import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';

// Import gallery images
import gallery1 from '@/assets/gallery/gallery-1.jpg';
import gallery2 from '@/assets/gallery/gallery-2.jpg';
import gallery9 from '@/assets/gallery/gallery-9.jpg';
import gallery10 from '@/assets/gallery/gallery-10.jpg';
import gallery11 from '@/assets/gallery/gallery-11.jpg';
import eveHero from '@/assets/projects/eve-hero.png';
import paneraBreadHero from '@/assets/projects/panera-bread-hero.png';
import metaHero from '@/assets/projects/meta-hero.jpeg';
import soundcloudHero from '@/assets/projects/soundcloud-hero.png';
import kekePalmerHero from '@/assets/projects/keke-palmer-hero.jpg';
import paneraBreadCoffeeHero from '@/assets/projects/panera-bread-coffee-hero.webp';
import sproutedOrganicCoffeeHero from '@/assets/projects/sprouted-organic-coffee-hero.png';

type ImageSize = 'large' | 'medium' | 'small';
type ImageOrientation = 'portrait' | 'landscape';

interface GalleryImage {
  src: string;
  alt: string;
  size: ImageSize;
  orientation: ImageOrientation;
  verticalOffset: 'top' | 'center' | 'bottom';
  projectSlug: string;
  fit?: 'cover' | 'contain';
  objectPosition?: string;
}

const galleryImages: GalleryImage[] = [
  { src: gallery1, alt: 'Born x Raised mural portrait', size: 'large', orientation: 'landscape', verticalOffset: 'center', projectSlug: 'born-x-raised' },
  { src: gallery2, alt: 'PCC Community Markets Burien storefront', size: 'medium', orientation: 'landscape', verticalOffset: 'top', projectSlug: 'pcc-community-markets' },
  { src: eveHero, alt: 'Eve AI skincare app', size: 'small', orientation: 'portrait', verticalOffset: 'bottom', projectSlug: 'eve', objectPosition: 'left' },
  { src: paneraBreadHero, alt: 'Panera Bread multicultural marketing', size: 'large', orientation: 'landscape', verticalOffset: 'center', projectSlug: 'panera-bread' },
  { src: metaHero, alt: 'Meta inclusion and equity marketing', size: 'medium', orientation: 'landscape', verticalOffset: 'center', projectSlug: 'meta' },
  { src: soundcloudHero, alt: 'Soundcloud audio storytelling', size: 'small', orientation: 'landscape', verticalOffset: 'center', projectSlug: 'soundcloud' },
  { src: kekePalmerHero, alt: 'Baby, This is Keke Palmer influencer marketing', size: 'large', orientation: 'landscape', verticalOffset: 'bottom', projectSlug: 'baby-this-is-keke-palmer' },
  { src: paneraBreadCoffeeHero, alt: 'Panera Bread Coffee digital marketing', size: 'medium', orientation: 'landscape', verticalOffset: 'center', projectSlug: 'panera-bread-coffee' },
  { src: sproutedOrganicCoffeeHero, alt: 'Sprouted Organic Coffee digital marketing', size: 'large', orientation: 'landscape', verticalOffset: 'top', projectSlug: 'sprouted-organic-coffee', fit: 'contain' },
  { src: gallery9, alt: 'Northlight Studio color palette', size: 'small', orientation: 'portrait', verticalOffset: 'top', projectSlug: 'born-x-raised' },
  { src: gallery10, alt: 'Meridian Architects business cards', size: 'large', orientation: 'landscape', verticalOffset: 'center', projectSlug: 'pcc-community-markets' },
  { src: gallery11, alt: 'Stillwater Journal editorial layout', size: 'medium', orientation: 'portrait', verticalOffset: 'bottom', projectSlug: 'panera-bread' },
];

const getImageDimensions = (size: ImageSize, orientation: ImageOrientation): { width: number; height: number } => {
  const dimensions = {
    large: orientation === 'portrait' ? { width: 420, height: 560 } : { width: 560, height: 420 },
    medium: orientation === 'portrait' ? { width: 320, height: 400 } : { width: 400, height: 320 },
    small: orientation === 'portrait' ? { width: 240, height: 300 } : { width: 300, height: 240 },
  };
  return dimensions[size];
};

const getGap = (index: number): number => {
  const gaps = [40, 28, 56, 36, 80, 32, 48, 60];
  return gaps[index % gaps.length];
};

export const HorizontalScrollGallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [trackWidth, setTrackWidth] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Calculate track width on mount and resize
  useEffect(() => {
    const calculateTrackWidth = () => {
      if (trackRef.current) {
        setTrackWidth(trackRef.current.scrollWidth);
      }
    };

    calculateTrackWidth();
    window.addEventListener('resize', calculateTrackWidth);
    return () => window.removeEventListener('resize', calculateTrackWidth);
  }, []);

  // Handle scroll to translate vertical scroll into horizontal position
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !stickyRef.current || !trackRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far into the section we've scrolled
      const scrollableDistance = container.offsetHeight - windowHeight;
      const scrolled = -rect.top;
      
      // Clamp progress between 0 and 1
      const progress = Math.max(0, Math.min(1, scrolled / scrollableDistance));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate how much we need to scroll the track
  const horizontalScrollAmount = trackWidth - window.innerWidth;
  const translateX = -scrollProgress * Math.max(0, horizontalScrollAmount);

  return (
    <section
      ref={containerRef}
      className="relative w-screen -ml-[calc((100vw-100%)/2)]"
      style={{ 
        // Height determines how long the scroll-hijack lasts
        // More height = slower horizontal scroll
        height: `${Math.max(300, horizontalScrollAmount * 0.6 + window.innerHeight)}px`
      }}
      aria-label="Image gallery, 12 items"
      role="region"
    >
      {/* Skip link */}
      <a
        href="#after-gallery"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-background focus:text-foreground focus:px-4 focus:py-2"
      >
        Skip gallery
      </a>

      {/* Sticky container that stays fixed while scrolling */}
      <div
        ref={stickyRef}
        className="sticky top-0 h-dvh w-full overflow-hidden bg-secondary"
      >
        {/* Section header - fixed to left */}
        <div className="absolute left-8 md:left-12 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
          <div className="-rotate-90 origin-center whitespace-nowrap">
            <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium">
              Selected Work
            </span>
          </div>
        </div>

        {/* Mobile header */}
        <div className="absolute left-6 top-8 z-10 lg:hidden">
          <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium">
            Selected Work
          </span>
        </div>

        {/* Scroll track that translates horizontally */}
        <div
          ref={trackRef}
          className="h-full flex items-center pl-20 md:pl-28 lg:pl-36 pr-20"
          style={{ 
            transform: `translateX(${translateX}px)`,
            transition: prefersReducedMotion ? 'none' : 'transform 0.1s ease-out',
            willChange: 'transform',
            paddingTop: '80px',
            paddingBottom: '80px',
          }}
        >
          {galleryImages.map((image, index) => {
            const { width, height } = getImageDimensions(image.size, image.orientation);
            const gap = getGap(index);
            const project = projects.find(p => p.slug === image.projectSlug);
            
            let alignSelf = 'center';
            if (image.verticalOffset === 'top') alignSelf = 'flex-start';
            if (image.verticalOffset === 'bottom') alignSelf = 'flex-end';

            return (
              <Link
                key={index}
                to={`/work/${image.projectSlug}`}
                className="flex-shrink-0 relative group cursor-pointer block"
                style={{ 
                  marginRight: `${gap}px`,
                  alignSelf,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className="relative overflow-hidden"
                  style={{
                    width: `${width}px`,
                    height: `${height}px`,
                    transform: hoveredIndex === index ? 'scale(1.02)' : 'scale(1)',
                    boxShadow: hoveredIndex === index 
                      ? '0 25px 80px rgba(0,0,0,0.12)' 
                      : '0 8px 30px rgba(0,0,0,0.06)',
                    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading={index < 8 ? 'eager' : 'lazy'}
                    className={`w-full h-full ${image.fit === 'contain' ? 'object-contain bg-cream-darker' : 'object-cover'}`}
                    style={image.objectPosition ? { objectPosition: image.objectPosition } : undefined}
                    draggable={false}
                  />
                </div>
                
                {/* Hover title - shows project name */}
                <div
                  className="absolute -bottom-8 left-0 transition-all duration-300"
                  style={{ 
                    opacity: hoveredIndex === index ? 1 : 0,
                    transform: hoveredIndex === index ? 'translateY(0)' : 'translateY(-4px)'
                  }}
                >
                  <span className="text-sm text-muted-foreground font-sans">
                    {project?.title}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Progress indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground/5">
          <div
            className="h-full bg-foreground/20"
            style={{ 
              width: `${scrollProgress * 100}%`,
              transition: prefersReducedMotion ? 'none' : 'width 0.1s ease-out'
            }}
          />
        </div>

        {/* Scroll hint */}
        <div 
          className="absolute bottom-8 right-8 flex items-center gap-2 text-muted-foreground transition-opacity duration-500"
          style={{ opacity: scrollProgress < 0.1 ? 1 : 0 }}
        >
          <span className="text-xs tracking-wide">Scroll to explore</span>
          <svg width="20" height="12" viewBox="0 0 20 12" fill="none" className="animate-pulse">
            <path d="M1 6H19M19 6L14 1M19 6L14 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Anchor for skip link */}
      <div id="after-gallery" className="absolute bottom-0" />
    </section>
  );
};

export default HorizontalScrollGallery;
