import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './brandsCarousel.css';
import { BrandItem } from 'types/contentful';
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
  brands: BrandItem[];
}

const BrandsCarousel: React.FC<BrandProps> = ({brands}) => {
console.log(brands)
  if (!brands) {
    return null;
  }
  return (
    <div className="brands-carousel">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        arrows={false}
        swipeable={true}
        customTransition='transform 600ms ease'
      >
        {brands.map((brand, index) => (
          <div key={index} className="brand-item">
            <img src={brand.fields.file.url} alt={brand.fields.title} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BrandsCarousel;