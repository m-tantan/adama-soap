import Link from 'next/link';
import Image from 'next/image';
import ProductCard from '@/components/ProductCard';
import BestSellersCarousel from '@/components/BestSellersCarousel';
import { products } from '@/data/products';

export default function Home() {
  // Get only Calm and Forest for Best Sellers carousel
  const bestSellers = products.filter(p => p.slug === 'calm' || p.slug === 'forest-soap');

  return (
    <>
      {/* Hero */}
      <section 
        className="text-neutral-white relative overflow-hidden"
        style={{
          backgroundColor: '#4D4B36',
          paddingTop: '100px',
          paddingBottom: '100px'
        }}
      >
        {/* Hero Background Images */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <div className="relative w-full h-full flex items-center justify-around max-w-[1200px] px-8">
            <div className="relative" style={{ width: '280px', height: '280px' }}>
              <Image
                src="/images/hero-1.png"
                alt="Handcrafted Soap"
                fill
                className="object-contain"
                priority
                sizes="280px"
              />
            </div>
            <div className="relative" style={{ width: '380px', height: '380px' }}>
              <Image
                src="/images/hero-soap-product.png"
                alt="Coffee Ground Soap"
                fill
                className="object-contain"
                priority
                sizes="380px"
              />
            </div>
          </div>
        </div>
        
        <div className="max-w-[980px] mx-auto px-6 lg:px-8 text-center relative z-10">
          <h1 
            className="font-title font-bold mb-6"
            style={{
              fontSize: '55px',
              lineHeight: '1.2em',
              letterSpacing: '-0.02em',
              color: '#FFFFFF'
            }}
          >
            Crafted from Used Coffee Grounds
          </h1>
          <p 
            className="font-heading mb-8 max-w-[700px] mx-auto"
            style={{
              fontSize: '20px',
              lineHeight: '1.5em',
              fontWeight: '400',
              color: '#F5F5DC'
            }}
          >
            Explore our range of eco-friendly soaps crafted with care using natural ingredients, designed to rejuvenate your skin while honoring the planet.
          </p>
          <Link 
            href="/shop" 
            className="inline-block bg-neutral-white font-button transition-all duration-300 hover:opacity-90 hover:scale-105"
            style={{
              color: 'rgb(64, 63, 43)',
              padding: '16px 32px',
              borderRadius: '300px',
              fontSize: '16px',
              lineHeight: '16px',
              fontWeight: '600',
              boxShadow: '0 1px 4px rgba(0, 0, 0, 0.3)'
            }}
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Best Sellers */}
      <section style={{ paddingTop: '64px', paddingBottom: '64px', backgroundColor: '#4D4B36' }}>
        <div className="max-w-[980px] mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 
              className="font-title font-bold"
              style={{
                fontSize: '55px',
                lineHeight: '1.2em',
                color: '#FFFFFF',
                letterSpacing: '-0.02em'
              }}
            >
              Best Sellers
            </h2>
            <Link 
              href="/shop" 
              className="font-heading transition-opacity duration-300 hover:opacity-70"
              style={{
                fontSize: '17px',
                color: '#FFFFFF',
                fontWeight: '600',
                textDecoration: 'underline'
              }}
            >
              Discover
            </Link>
          </div>
          <BestSellersCarousel products={bestSellers} />
        </div>
      </section>

      {/* Our Story */}
      <section 
        style={{
          backgroundColor: '#29291F',
          paddingTop: '64px',
          paddingBottom: '64px'
        }}
      >
        <div className="max-w-[980px] mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 items-center" style={{ gap: '48px' }}>
            <div className="relative" style={{ aspectRatio: '3/4' }}>
              <Image
                src="/images/about/yoav-denis.png"
                alt="Denise and Yoav - Adama Soaps Founders"
                fill
                className="object-cover"
                style={{ borderRadius: '5px', boxShadow: '0 1px 4px rgba(0, 0, 0, 0.2)' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 
                className="font-title font-bold mb-8"
                style={{
                  fontSize: '55px',
                  lineHeight: '1.2em',
                  color: '#FFFFFF',
                  letterSpacing: '-0.02em'
                }}
              >
                Our Story
              </h2>
              <h3 
                className="font-heading font-normal mb-4"
                style={{
                  fontSize: '25px',
                  lineHeight: '1.4em',
                  color: '#F5F5DC',
                  fontWeight: '600'
                }}
              >
                Who We Are
              </h3>
              <p 
                className="font-body mb-6"
                style={{
                  fontSize: '17px',
                  lineHeight: '1.5em',
                  color: '#F5F5DC'
                }}
              >
                At Adama Soaps, we pride ourselves on creating natural, eco-friendly soaps from used coffee grounds. Our focus is on simplicity, honesty, and sustainability, aiming to reduce waste while delivering high-quality products that nurture your skin.
              </p>
              <h3 
                className="font-heading font-normal mb-4"
                style={{
                  fontSize: '25px',
                  lineHeight: '1.4em',
                  color: '#F5F5DC',
                  fontWeight: '600'
                }}
              >
                Our Mission
              </h3>
              <p 
                className="font-body mb-6"
                style={{
                  fontSize: '17px',
                  lineHeight: '1.5em',
                  color: '#F5F5DC'
                }}
              >
                We strive to promote sustainability through our handcrafted soaps and engage consumers about the benefits of coffee grounds as an ingredient.
              </p>
              <h3 
                className="font-heading font-normal mb-4"
                style={{
                  fontSize: '25px',
                  lineHeight: '1.4em',
                  color: '#F5F5DC',
                  fontWeight: '600'
                }}
              >
                Why
              </h3>
              <p 
                className="font-body"
                style={{
                  fontSize: '17px',
                  lineHeight: '1.5em',
                  color: '#F5F5DC'
                }}
              >
                Our commitment to the environment guides every step of our process, from sourcing materials to packaging, ensuring that your choice of soap is one that supports a healthy planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cafe Partners Section */}
      <section style={{ paddingTop: '64px', paddingBottom: '64px', backgroundColor: '#29291F' }}>
        <div className="max-w-[980px] mx-auto px-6 lg:px-8">
          <h2 
            className="font-title font-bold text-center mb-12"
            style={{
              fontSize: '40px',
              lineHeight: '1.3em',
              color: '#FFFFFF',
              letterSpacing: '-0.01em'
            }}
          >
            We turn their coffee waste into soaps — you'll find Adama available in these cafés.
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Online Shop */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 
                className="font-heading mb-4"
                style={{
                  fontSize: '22px',
                  color: '#FFFFFF',
                  fontWeight: '600'
                }}
              >
                Online Shop
              </h3>
              <p className="mb-2" style={{ fontSize: '15px', color: '#F5F5DC' }}>
                📍 Holzstraße 11, 80469 München, Germany
              </p>
              <p className="mb-2" style={{ fontSize: '15px', color: '#F5F5DC' }}>
                📞 +4915730104878
              </p>
              <p style={{ fontSize: '15px', color: '#F5F5DC' }}>
                🌐 <a href="http://Adama-soaps.com" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70">Adama-soaps.com</a>
              </p>
            </div>

            {/* Wagners Juicery */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 
                className="font-heading mb-4"
                style={{
                  fontSize: '22px',
                  color: '#FFFFFF',
                  fontWeight: '600'
                }}
              >
                Wagners Juicery
              </h3>
              <p className="mb-3" style={{ fontSize: '14px', color: '#F5F5DC', fontStyle: 'italic' }}>
                Cooperation with a local cafe, turning thier Coffee waste into soaps
              </p>
              <p className="mb-2" style={{ fontSize: '15px', color: '#F5F5DC' }}>
                📍 Fraunhoferstraße 43, 80469 München, Germany
              </p>
              <p style={{ fontSize: '15px', color: '#F5F5DC' }}>
                🌐 <a href="http://wagnersjuicery.com" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70">wagnersjuicery.com</a>
              </p>
            </div>

            {/* Marita Cafe */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 
                className="font-heading mb-4"
                style={{
                  fontSize: '22px',
                  color: '#FFFFFF',
                  fontWeight: '600'
                }}
              >
                Marita Cafe
              </h3>
              <p className="mb-3" style={{ fontSize: '14px', color: '#F5F5DC', fontStyle: 'italic' }}>
                Cooperation with a local cafe, turning thier Coffee waste into soaps
              </p>
              <p className="mb-2" style={{ fontSize: '15px', color: '#F5F5DC' }}>
                📍 Schulstraße 34, 80634 München, Germany
              </p>
              <p className="mb-2" style={{ fontSize: '15px', color: '#F5F5DC' }}>
                📞 089 13 011 652
              </p>
              <p style={{ fontSize: '15px', color: '#F5F5DC' }}>
                🌐 <a href="https://www.marita-cafe.de" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70">marita-cafe.de</a>
              </p>
            </div>
          </div>
          
          {/* Map Placeholder */}
          <div className="bg-white/5 border border-white/20 rounded-lg p-8 text-center">
            <p style={{ fontSize: '16px', color: '#F5F5DC' }}>
              📍 Interactive Map - Munich, Germany
            </p>
            <p style={{ fontSize: '14px', color: '#F5F5DC', opacity: 0.7, marginTop: '8px' }}>
              (Map integration available on full site)
            </p>
          </div>
        </div>
      </section>

      {/* Follow Us Section */}
      <section style={{ paddingTop: '64px', paddingBottom: '64px', backgroundColor: '#29291F' }}>
        <div className="max-w-[980px] mx-auto px-6 lg:px-8 text-center">
          <h2 
            className="font-title font-bold mb-12"
            style={{
              fontSize: '55px',
              lineHeight: '1.2em',
              color: '#FFFFFF',
              letterSpacing: '-0.02em'
            }}
          >
            Follow Us
          </h2>
          {/* Instagram Gallery */}
          <div className="grid grid-cols-2 gap-4 max-w-[600px] mx-auto mb-8">
            <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/EXAMPLE_POST_1/" data-instgrm-version="14" style={{ maxWidth: '300px', width: '100%' }}></blockquote>
            <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/EXAMPLE_POST_2/" data-instgrm-version="14" style={{ maxWidth: '300px', width: '100%' }}></blockquote>
            <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/EXAMPLE_POST_3/" data-instgrm-version="14" style={{ maxWidth: '300px', width: '100%' }}></blockquote>
            <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/EXAMPLE_POST_4/" data-instgrm-version="14" style={{ maxWidth: '300px', width: '100%' }}></blockquote>
          </div>
          <a 
            href="https://instagram.com/your_instagram_handle" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block font-heading transition-opacity duration-300 hover:opacity-70"
            style={{
              fontSize: '17px',
              color: '#FFFFFF',
              fontWeight: '600',
              textDecoration: 'underline'
            }}
          >
            @wix
          </a>
        </div>
      </section>
    </>
  );
}
