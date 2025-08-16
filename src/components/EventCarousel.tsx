import { useState, useEffect } from 'react';

const EventCarousel = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      try {
        // Import all images in the folder
        const images = import.meta.glob("/src/assets/event-carousel/*.{png,jpg,jpeg,webp}");
        
        // Resolve all image promises
        const imagePromises = Object.entries(images).map(async ([path, importFn]) => {
          const module = await importFn();
          return (module as { default: string }).default; // Get the actual image URL
        });
        
        const urls = await Promise.all(imagePromises);
        setImageUrls(urls);
        setLoading(false);
      } catch (error) {
        console.error('Error loading images:', error);
        setLoading(false);
      }
    };

    loadImages();
  }, []);

  if (loading) {
    return (
      <section className="bg-secondary/30 py-4 overflow-hidden border-b border-border">
        <div className="flex justify-center items-center h-32">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
        <div className="text-center mt-2">
          <p className="text-sm text-muted-foreground">Loading Events...</p>
        </div>
      </section>
    );
  }

  if (imageUrls.length === 0) {
    return (
      <section className="bg-secondary/30 py-4 overflow-hidden border-b border-border">
        <div className="flex justify-center items-center h-32">
          <p className="text-muted-foreground">No event images found</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-secondary/30 py-4 overflow-hidden border-b border-border">
      <style>{`
        @keyframes scroll-infinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-infinite {
          animation: scroll-infinite 30s linear infinite;
        }
        .animate-scroll-infinite:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="flex space-x-6 animate-scroll-infinite">
        {/* First set of images */}
        {imageUrls.map((imageUrl, index) => (
          <div
            key={`first-${index}`}
            className="flex-shrink-0 w-48 h-32 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={imageUrl}
              alt={`Company Event ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        ))}
        
        {/* Duplicate set for seamless loop */}
        {imageUrls.map((imageUrl, index) => (
          <div
            key={`second-${index}`}
            className="flex-shrink-0 w-48 h-32 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={imageUrl}
              alt={`Company Event ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      
      <div className="text-center mt-2">
        <p className="text-sm text-muted-foreground">Latest Events & Celebrations</p>
      </div>
    </section>
  );
};

export default EventCarousel;