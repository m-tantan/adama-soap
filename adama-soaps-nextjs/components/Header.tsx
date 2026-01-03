'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-neutral-white sticky top-0 z-50" style={{ boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)' }}>
      <nav className="max-w-[980px] mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center" style={{ height: '80px' }}>
          {/* Logo */}
          <Link 
            href="/" 
            className="transition-opacity duration-300 hover:opacity-80"
          >
            <Image
              src="/images/logo.png"
              alt="Adama Soaps"
              width={150}
              height={37}
              className="h-[37px] w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex" style={{ gap: '32px' }}>
            <Link 
              href="/" 
              className="font-menu transition-colors duration-300"
              style={{
                fontSize: '16px',
                lineHeight: '1.4em',
                color: 'rgb(64, 63, 43)',
                fontWeight: '400'
              }}
            >
              Home
            </Link>
            <Link 
              href="/" 
              className="font-menu transition-colors duration-300 hover:opacity-70"
              style={{
                fontSize: '16px',
                lineHeight: '1.4em',
                color: 'rgb(64, 63, 43)',
                fontWeight: '400'
              }}
            >
              Welcome
            </Link>
            <Link 
              href="/shop" 
              className="font-menu transition-colors duration-300 hover:opacity-70"
              style={{
                fontSize: '16px',
                lineHeight: '1.4em',
                color: 'rgb(64, 63, 43)',
                fontWeight: '400'
              }}
            >
              Best Sellers
            </Link>
            <Link 
              href="/about" 
              className="font-menu transition-colors duration-300 hover:opacity-70"
              style={{
                fontSize: '16px',
                lineHeight: '1.4em',
                color: 'rgb(64, 63, 43)',
                fontWeight: '400'
              }}
            >
              About
            </Link>
            <a 
              href="https://instagram.com/wix" 
              target="_blank"
              rel="noopener noreferrer"
              className="font-menu transition-colors duration-300 hover:opacity-70"
              style={{
                fontSize: '16px',
                lineHeight: '1.4em',
                color: 'rgb(64, 63, 43)',
                fontWeight: '400'
              }}
            >
              Instagram
            </a>
            <div className="relative group">
              <button
                className="font-menu transition-colors duration-300 hover:opacity-70"
                style={{
                  fontSize: '16px',
                  lineHeight: '1.4em',
                  color: 'rgb(64, 63, 43)',
                  fontWeight: '400',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                More
              </button>
            </div>
          </div>

          {/* Language & Cart */}
          <div className="hidden md:flex items-center" style={{ gap: '16px' }}>
            <button
              className="font-menu transition-colors duration-300 hover:opacity-70 flex items-center"
              style={{
                fontSize: '14px',
                color: 'rgb(64, 63, 43)',
                fontWeight: '400',
                background: 'none',
                border: '1px solid rgba(64, 63, 43, 0.2)',
                padding: '6px 12px',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              <span>English</span>
              <span style={{ marginLeft: '4px', fontSize: '10px' }}>▼</span>
            </button>
            <Link 
              href="/cart" 
              className="font-menu transition-colors duration-300 hover:opacity-70"
              style={{
                fontSize: '16px',
                color: 'rgb(64, 63, 43)',
                fontWeight: '400'
              }}
            >
              🛒 <span style={{ fontSize: '20px', fontWeight: '600' }}>0</span>
            </Link>
          </div>

          {/* Cart Icon Mobile */}
          <Link 
            href="/cart" 
            className="md:hidden font-menu transition-colors duration-300 hover:opacity-70"
            style={{
              fontSize: '16px',
              color: 'rgb(64, 63, 43)',
              fontWeight: '400'
            }}
          >
            🛒 Cart (0)
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ color: 'rgb(64, 63, 43)' }}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <Link 
              href="/" 
              className="block font-menu"
              style={{
                fontSize: '16px',
                color: 'rgb(64, 63, 43)'
              }}
            >
              Home
            </Link>
            <Link 
              href="/shop" 
              className="block font-menu"
              style={{
                fontSize: '16px',
                color: 'rgb(64, 63, 43)'
              }}
            >
              Shop
            </Link>
            <Link 
              href="/about" 
              className="block font-menu"
              style={{
                fontSize: '16px',
                color: 'rgb(64, 63, 43)'
              }}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="block font-menu"
              style={{
                fontSize: '16px',
                color: 'rgb(64, 63, 43)'
              }}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
