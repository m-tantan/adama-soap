'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <Link 
      href={`/shop/${product.slug}`} 
      className="group block"
      onMouseEnter={() => setImageIndex(1)}
      onMouseLeave={() => setImageIndex(0)}
    >
      <div 
        className="relative bg-neutral-white overflow-hidden mb-3"
        style={{
          aspectRatio: '1',
          borderRadius: '5px',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
        }}
      >
        {product.ribbon && (
          <div 
            className="absolute z-10 font-button"
            style={{
              top: '12px',
              left: '12px',
              backgroundColor: product.ribbon === 'Sale' ? 'rgb(237, 28, 36)' : 
                               product.ribbon === 'New' ? 'rgb(128, 21, 232)' : 
                               'rgb(0, 0, 0)',
              color: 'rgb(255, 255, 255)',
              padding: '6px 12px',
              fontSize: '14px',
              lineHeight: '16px',
              borderRadius: '300px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}
          >
            {product.ribbon}
          </div>
        )}
        <Image
          src={product.images[imageIndex] || product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-all duration-400"
          style={{
            transform: imageIndex === 1 ? 'scale(1.05)' : 'scale(1)'
          }}
        />
      </div>
      
      <h3 
        className="font-heading mb-2"
        style={{
          fontSize: '17px',
          lineHeight: '1.5em',
          color: 'rgb(64, 63, 43)',
          fontWeight: '600'
        }}
      >
        {product.name}
      </h3>
      
      <div className="flex items-center" style={{ gap: '8px' }}>
        {product.salePrice ? (
          <>
            <span 
              className="line-through font-body"
              style={{
                fontSize: '15px',
                color: 'rgb(95, 95, 95)'
              }}
            >
              €{product.price.toFixed(2)}
            </span>
            <span 
              className="font-heading"
              style={{
                fontSize: '17px',
                color: 'rgb(237, 28, 36)',
                fontWeight: '700'
              }}
            >
              €{product.salePrice.toFixed(2)}
            </span>
          </>
        ) : (
          <span 
            className="font-heading"
            style={{
              fontSize: '17px',
              color: 'rgb(64, 63, 43)',
              fontWeight: '700'
            }}
          >
            €{product.price.toFixed(2)}
          </span>
        )}
      </div>
    </Link>
  );
}
