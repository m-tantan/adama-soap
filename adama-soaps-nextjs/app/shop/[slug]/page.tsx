'use client';

import Image from 'next/image';
import { notFound } from 'next/navigation';
import { products } from '@/data/products';
import { useState } from 'react';
import { use } from 'react';

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = products.find(p => p.slug === slug);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-[980px] mx-auto px-6 lg:px-8" style={{ paddingTop: '48px', paddingBottom: '64px' }}>
      <div className="grid md:grid-cols-2" style={{ gap: '64px' }}>
        {/* Images */}
        <div>
          <div 
            className="relative bg-neutral-white overflow-hidden mb-4"
            style={{
              aspectRatio: '1',
              borderRadius: '5px',
              boxShadow: '0 1px 4px rgba(0, 0, 0, 0.2)'
            }}
          >
            {product.ribbon && (
              <div 
                className="absolute z-10 font-button"
                style={{
                  top: '16px',
                  left: '16px',
                  backgroundColor: product.ribbon === 'Sale' ? 'rgb(237, 28, 36)' : 
                                   product.ribbon === 'New' ? 'rgb(128, 21, 232)' : 
                                   'rgb(0, 0, 0)',
                  color: 'rgb(255, 255, 255)',
                  padding: '8px 16px',
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
              src={product.images[selectedImage]}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Thumbnail images */}
          {product.images.length > 1 && (
            <div className="flex" style={{ gap: '12px' }}>
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className="relative overflow-hidden transition-opacity duration-300 hover:opacity-80"
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '5px',
                    border: selectedImage === idx ? '2px solid rgb(64, 63, 43)' : '2px solid transparent',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <Image
                    src={img}
                    alt={`${product.name} view ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div>
          <h1 
            className="font-title font-bold mb-6"
            style={{
              fontSize: '55px',
              lineHeight: '1.2em',
              color: 'rgb(64, 63, 43)',
              letterSpacing: '-0.02em'
            }}
          >
            {product.name}
          </h1>
          
          <div className="mb-8">
            {product.salePrice ? (
              <div className="flex items-center" style={{ gap: '12px' }}>
                <span 
                  className="line-through font-heading"
                  style={{
                    fontSize: '25px',
                    color: 'rgb(114, 114, 114)'
                  }}
                >
                  €{product.price.toFixed(2)}
                </span>
                <span 
                  className="font-title font-bold"
                  style={{
                    fontSize: '37px',
                    lineHeight: '1.2em',
                    color: 'rgb(237, 28, 36)'
                  }}
                >
                  €{product.salePrice.toFixed(2)}
                </span>
              </div>
            ) : (
              <span 
                className="font-title font-bold"
                style={{
                  fontSize: '37px',
                  lineHeight: '1.2em',
                  color: 'rgb(64, 63, 43)'
                }}
              >
                €{product.price.toFixed(2)}
              </span>
            )}
          </div>

          <p 
            className="font-body mb-8"
            style={{
              fontSize: '17px',
              lineHeight: '1.5em',
              color: 'rgb(64, 63, 43)'
            }}
          >
            {product.description}
          </p>

          {product.ingredients && (
            <div className="mb-8">
              <h3 
                className="font-heading mb-3"
                style={{
                  fontSize: '17px',
                  lineHeight: '1.5em',
                  color: 'rgb(64, 63, 43)',
                  fontWeight: '700'
                }}
              >
                Ingredients:
              </h3>
              <ul className="space-y-2">
                {product.ingredients.map((ingredient, i) => (
                  <li 
                    key={i}
                    className="font-body"
                    style={{
                      fontSize: '15px',
                      lineHeight: '24px',
                      color: 'rgb(64, 63, 43)',
                      paddingLeft: '20px',
                      position: 'relative'
                    }}
                  >
                    <span style={{ position: 'absolute', left: '0' }}>•</span>
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button 
            className="w-full font-button transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
            style={{
              backgroundColor: 'rgb(127, 168, 139)',
              color: 'rgb(255, 255, 255)',
              padding: '16px 32px',
              borderRadius: '300px',
              fontSize: '16px',
              lineHeight: '16px',
              fontWeight: '600',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 1px 4px rgba(0, 0, 0, 0.3)'
            }}
          >
            Add to Cart
          </button>

          <div 
            className="mt-6 p-6"
            style={{
              backgroundColor: 'rgb(254, 250, 241)',
              borderRadius: '5px'
            }}
          >
            <p 
              className="font-body mb-2"
              style={{
                fontSize: '15px',
                lineHeight: '24px',
                color: 'rgb(64, 63, 43)'
              }}
            >
              🌱 Made from recycled coffee grounds
            </p>
            <p 
              className="font-body mb-2"
              style={{
                fontSize: '15px',
                lineHeight: '24px',
                color: 'rgb(64, 63, 43)'
              }}
            >
              ♻️ Eco-friendly and sustainable
            </p>
            <p 
              className="font-body"
              style={{
                fontSize: '15px',
                lineHeight: '24px',
                color: 'rgb(64, 63, 43)'
              }}
            >
              🇩🇪 Handcrafted in Germany
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
