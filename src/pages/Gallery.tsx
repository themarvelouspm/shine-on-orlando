
import { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryItems = [
    {
      id: 1,
      category: 'exterior',
      title: 'BMW Ceramic Coating - 3-Year Protection',
      image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=600&h=400&fit=crop',
      before: 'https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=300&h=200&fit=crop',
      after: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=300&h=200&fit=crop'
    },
    {
      id: 2,
      category: 'interior',
      title: 'Tesla Model Y Interior Detail - Smoke Odor Removal',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop',
      before: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?w=300&h=200&fit=crop',
      after: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=300&h=200&fit=crop'
    },
    {
      id: 3,
      category: 'ceramic',
      title: 'Mercedes Paint Correction + Ceramic Coating',
      image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=600&h=400&fit=crop',
      before: 'https://images.unsplash.com/photo-1571607388263-1044f9ea01dd?w=300&h=200&fit=crop',
      after: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=300&h=200&fit=crop'
    },
    {
      id: 4,
      category: 'exterior',
      title: 'Audi Full Exterior Detail',
      image: 'https://images.unsplash.com/photo-1571607388263-1044f9ea01dd?w=600&h=400&fit=crop',
      before: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=300&h=200&fit=crop',
      after: 'https://images.unsplash.com/photo-1571607388263-1044f9ea01dd?w=300&h=200&fit=crop'
    },
    {
      id: 5,
      category: 'interior',
      title: 'Luxury SUV Interior Restoration',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop',
      before: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?w=300&h=200&fit=crop',
      after: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=300&h=200&fit=crop'
    },
    {
      id: 6,
      category: 'ceramic',
      title: 'Porsche 5-Year Ceramic Coating',
      image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=600&h=400&fit=crop',
      before: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=300&h=200&fit=crop',
      after: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=300&h=200&fit=crop'
    }
  ];

  const filters = [
    { key: 'all', label: 'All Work' },
    { key: 'interior', label: 'Interior' },
    { key: 'exterior', label: 'Exterior' },
    { key: 'ceramic', label: 'Ceramic Coating' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="gallery-hero-bg text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
            Our Work Gallery
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto font-roboto">
            See the incredible transformations we've achieved for our Orlando customers. 
            Every vehicle tells a story of restoration and care.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter.key}
                variant={activeFilter === filter.key ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.key)}
                className={`font-roboto ${activeFilter === filter.key ? "btn-primary" : ""}`}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="group">
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-lg font-semibold mb-2 font-montserrat">{item.title}</h3>
                      <Badge className="bg-white/20 text-white capitalize font-roboto">
                        {item.category}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Before/After Preview */}
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div className="relative">
                    <img
                      src={item.before}
                      alt="Before"
                      className="w-full h-20 object-cover rounded"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded">
                      <span className="text-white text-xs font-semibold font-roboto">BEFORE</span>
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src={item.after}
                      alt="After"
                      className="w-full h-20 object-cover rounded"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded">
                      <span className="text-white text-xs font-semibold font-roboto">AFTER</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="automotive-gradient text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat">
            Ready to Transform Your Vehicle?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto font-roboto">
            Join hundreds of satisfied customers who trust EV's Detail & Buff 
            for their automotive care needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="btn-primary-inverse px-8 py-3 font-roboto"
            >
              Book Your Detail
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 font-roboto"
            >
              <a href="tel:+14072196915">Call (407) 219-6915</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
