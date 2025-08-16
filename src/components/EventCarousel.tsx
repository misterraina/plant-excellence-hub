const EventCarousel = () => {
  // Placeholder for event images - you can replace these with actual event photos
  const eventImages = [
    "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80",
    "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=800&q=80",
    "https://images.unsplash.com/photo-1521791055366-0d553872125f?w=800&q=80",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
  ];

  return (
    <section className="bg-secondary/30 py-4 overflow-hidden border-b border-border">
      <div className="flex space-x-6 animate-scroll-infinite">
        {/* First set of images */}
        {eventImages.map((image, index) => (
          <div
            key={`first-${index}`}
            className="flex-shrink-0 w-48 h-32 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={image}
              alt={`Company Event ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
        
        {/* Duplicate set for seamless loop */}
        {eventImages.map((image, index) => (
          <div
            key={`second-${index}`}
            className="flex-shrink-0 w-48 h-32 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={image}
              alt={`Company Event ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
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