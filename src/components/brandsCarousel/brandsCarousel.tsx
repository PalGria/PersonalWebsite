import React from 'react';
import './brandsCarousel.css';
import { Brand } from 'types/content';

interface BrandProps {
  brands: Brand[];
}

// Pure-CSS marquee: the list is rendered twice and the track slides by exactly
// one copy, so the loop is seamless and nothing depends on measuring the viewport.
const BrandsCarousel: React.FC<BrandProps> = ({ brands }) => {
  if (brands.length === 0) return null;

  const renderList = (copy: boolean) => (
    <ul className="brands-list" aria-hidden={copy || undefined}>
      {brands.map(brand => (
        <li key={brand.logo.url} className="brand-item">
          <img src={brand.logo.url} alt={copy ? '' : brand.title} loading="lazy" decoding="async" />
        </li>
      ))}
    </ul>
  );

  return (
    <div className="brands-marquee">
      <div className="brands-track" style={{ '--brand-count': brands.length } as React.CSSProperties}>
        {renderList(false)}
        {renderList(true)}
      </div>
    </div>
  );
};

export default BrandsCarousel;
