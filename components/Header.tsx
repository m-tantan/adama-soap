'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { withBasePath } from "@/lib/utils";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations("navigation");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/";
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

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
              href={`/${locale}`}
              className="font-menu transition-opacity duration-300 hover:opacity-70"
              style={{
                fontSize: "16px",
                lineHeight: "1.4em",
                color: "#FFFFFF",
                fontWeight: "400",
              }}
            >
              {t("home")}
            </Link>
            {/* Shop link commented out - not needed with only 2 soaps both displayed on homepage */}
            {/* <Link
              href={`/${locale}/shop`}
              className="font-menu transition-opacity duration-300 hover:opacity-70"
              style={{
                fontSize: "16px",
                lineHeight: "1.4em",
                color: "#FFFFFF",
                fontWeight: "400",
              }}
            >
              {t("shop")}
            </Link> */}
            <Link
              href={`/${locale}/about`}
              className="font-menu transition-opacity duration-300 hover:opacity-70"
              style={{
                fontSize: "16px",
                lineHeight: "1.4em",
                color: "#FFFFFF",
                fontWeight: "400",
              }}
            >
              {t("about")}
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
              {t("instagram")}
            </a>
          </div>

          {/* Logo (Center) */}
          <Link
            href={`/${locale}`}
            className="transition-opacity duration-300 hover:opacity-80"
            style={{ flex: "0 0 auto", margin: "0 60px" }}
          >
            <Image
              src={withBasePath("/images/logo.png")}
              alt="Adama - Handmade Vegan Coffee Soap from Munich"
              width={130}
              height={75}
              className="h-[75px] w-auto"
              priority
            />
          </Link>

          {/* Right Nav - Language Switcher */}
          <div
            className="flex items-center justify-end"
            style={{ gap: "32px", flex: "1" }}
          >
            <select
              value={locale}
              onChange={(e) => switchLocale(e.target.value)}
              className="font-menu transition-opacity duration-300 hover:opacity-70"
              style={{
                fontSize: "14px",
                color: "#FFFFFF",
                fontWeight: "400",
                background: "transparent",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                padding: "6px 12px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              <option value="en" style={{ color: "#000" }}>
                English
              </option>
              <option value="de" style={{ color: "#000" }}>
                Deutsch
              </option>
            </select>
          </div>
        </div>

        {/* Mobile View */}
        <div
          className="mobile-nav flex justify-between items-center"
          style={{ height: "120px" }}
        >
          {/* Logo Mobile */}
          <Link
            href={`/${locale}`}
            className="transition-opacity duration-300 hover:opacity-80"
          >
            <Image
              src={withBasePath("/images/logo.png")}
              alt="Adama - Handmade Vegan Coffee Soap from Munich"
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
              href={`/${locale}`}
              className="block font-menu"
              style={{
                fontSize: "16px",
                color: "#FFFFFF",
              }}
            >
              {t("home")}
            </Link>
            {/* Shop link commented out - not needed with only 2 soaps both displayed on homepage */}
            {/* <Link
              href={`/${locale}/shop`}
              className="block font-menu"
              style={{
                fontSize: "16px",
                color: "#FFFFFF",
              }}
            >
              {t("shop")}
            </Link> */}
            <Link
              href={`/${locale}/about`}
              className="block font-menu"
              style={{
                fontSize: "16px",
                color: "#FFFFFF",
              }}
            >
              {t("about")}
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
              {t("instagram")}
            </a>
            <select
              value={locale}
              onChange={(e) => switchLocale(e.target.value)}
              className="font-menu mt-4"
              style={{
                fontSize: "14px",
                color: "#FFFFFF",
                background: "transparent",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                padding: "6px 12px",
                borderRadius: "4px",
              }}
            >
              <option value="en" style={{ color: "#000" }}>
                English
              </option>
              <option value="de" style={{ color: "#000" }}>
                Deutsch
              </option>
            </select>
          </div>
        )}
      </nav>
    </header>
  );
}
