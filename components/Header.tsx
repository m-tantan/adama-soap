'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { withBasePath } from '@/lib/utils';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0"
      style={{
        backgroundColor: "#403F2B",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        zIndex: 9999,
        isolation: "isolate",
      }}
    >
      <nav className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Desktop Nav - using inline media query style due to Tailwind v4 !important issue */}
        <style>{`
          @media (max-width: 767px) { .desktop-nav { display: none !important; } }
          @media (min-width: 768px) { .mobile-nav { display: none !important; } }
        `}</style>
        <div
          className="desktop-nav flex justify-between items-center"
          style={{ height: "80px" }}
        >
          {/* Left Nav */}
          <div className="flex" style={{ gap: "32px", flex: "1" }}>
            <Link
              href="/"
              className="font-menu transition-opacity duration-300 hover:opacity-70"
              style={{
                fontSize: "16px",
                lineHeight: "1.4em",
                color: "#FFFFFF",
                fontWeight: "400",
              }}
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="font-menu transition-opacity duration-300 hover:opacity-70"
              style={{
                fontSize: "16px",
                lineHeight: "1.4em",
                color: "#FFFFFF",
                fontWeight: "400",
              }}
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="font-menu transition-opacity duration-300 hover:opacity-70"
              style={{
                fontSize: "16px",
                lineHeight: "1.4em",
                color: "#FFFFFF",
                fontWeight: "400",
              }}
            >
              About
            </Link>
            <a
              href="https://instagram.com/adamasoaps"
              target="_blank"
              rel="noopener noreferrer"
              className="font-menu transition-opacity duration-300 hover:opacity-70"
              style={{
                fontSize: "16px",
                lineHeight: "1.4em",
                color: "#FFFFFF",
                fontWeight: "400",
              }}
            >
              Instagram
            </a>
          </div>

          {/* Logo (Center) */}
          <Link
            href="/"
            className="transition-opacity duration-300 hover:opacity-80"
            style={{ flex: "0 0 auto", margin: "0 60px" }}
          >
            <Image
              src={withBasePath("/images/logo.png")}
              alt="Adama Soaps"
              width={130}
              height={75}
              className="h-[75px] w-auto"
              priority
            />
          </Link>

          {/* Right Nav */}
          <div
            className="flex items-center justify-end"
            style={{ gap: "32px", flex: "1" }}
          >
            <button
              className="font-menu transition-opacity duration-300 hover:opacity-70 flex items-center"
              style={{
                fontSize: "14px",
                color: "#FFFFFF",
                fontWeight: "400",
                background: "none",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                padding: "6px 12px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              <span>English</span>
              <span style={{ marginLeft: "4px", fontSize: "10px" }}>▼</span>
            </button>
          </div>
        </div>

        {/* Mobile View */}
        <div
          className="mobile-nav flex justify-between items-center"
          style={{ height: "120px" }}
        >
          {/* Logo Mobile */}
          <Link
            href="/"
            className="transition-opacity duration-300 hover:opacity-80"
          >
            <Image
              src={withBasePath("/images/logo.png")}
              alt="Adama Soaps"
              width={155}
              height={95}
              className="h-[95px] w-auto"
              priority
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ color: "#FFFFFF" }}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mobile-nav pb-4 space-y-3">
            <Link
              href="/"
              className="block font-menu"
              style={{
                fontSize: "16px",
                color: "#FFFFFF",
              }}
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="block font-menu"
              style={{
                fontSize: "16px",
                color: "#FFFFFF",
              }}
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="block font-menu"
              style={{
                fontSize: "16px",
                color: "#FFFFFF",
              }}
            >
              About
            </Link>
            <a
              href="https://instagram.com/adamasoaps"
              target="_blank"
              rel="noopener noreferrer"
              className="block font-menu"
              style={{
                fontSize: "16px",
                color: "#FFFFFF",
              }}
            >
              Instagram
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
