import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './brandsCarousel.css';
import accenture from 'assets/accenture.png'
import Bankia_logo from 'assets/bankia.png'
import Bankinter from 'assets/Bankinter.png'
import liberbank from 'assets/liberbank.png'
import mifinity from 'assets/mifinity.png'
import newe from 'assets/newe.png'
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

const BrandsCarousel: React.FC = () => {
  const brands = [
    { name: 'Brand 1', image: accenture },
    { name: 'Brand 2', image: Bankia_logo },
    { name: 'Brand 3', image: Bankinter },
    { name: 'Brand 4', image: liberbank },
    { name: 'Brand 5', image: mifinity },
    { name: 'Brand 5', image: newe },
  ];

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
            <img src={brand.image} alt={brand.name} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BrandsCarousel;