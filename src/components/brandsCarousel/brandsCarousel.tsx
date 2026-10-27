import React from 'react';
import Carousel from 'react-multi-carousel';
import './brandsCarousel.css';
import { Brand } from 'types/content';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

interface BrandProps {
  brands: Brand[];
}

const BrandsCarousel: React.FC<BrandProps> = ({ brands }) => {
  if (brands.length === 0) return null;

  return (
    <div className="brands-carousel">
      <Carousel
        responsive={responsive}
        ssr
        deviceType="desktop"
        infinite
        autoPlay
        autoPlaySpeed={2000}
        arrows={false}
        swipeable
        customTransition="transform 600ms ease"
      >
        {brands.map(brand => (
          <div key={brand.logo.url} className="brand-item">
            <img src={brand.logo.url} alt={brand.title} loading="lazy" decoding="async" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BrandsCarousel;
