import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'rgb(88, 88, 67)', color: '#FFFFFF', marginTop: '0' }}>
      <div className="max-w-[980px] mx-auto px-6 lg:px-8" style={{ paddingTop: '48px', paddingBottom: '48px' }}>
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '48px' }}>
          {/* Brand & Social */}
          <div>
            <h3 
              className="font-title font-bold mb-6"
              style={{
                fontSize: '37px',
                lineHeight: '1.2em',
                color: 'rgb(255, 255, 255)'
              }}
            >
              Adama Soaps
            </h3>
            <div className="flex" style={{ gap: '16px', marginTop: '24px' }}>
              <a 
                href="https://facebook.com/your_facebook_page" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-opacity duration-300 hover:opacity-70"
                style={{
                  fontSize: '24px',
                  color: 'rgb(255, 255, 255)'
                }}
                aria-label="Facebook"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com/your_instagram_handle" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-opacity duration-300 hover:opacity-70"
                style={{
                  fontSize: '24px',
                  color: 'rgb(255, 255, 255)'
                }}
                aria-label="Instagram"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
                </svg>
              </a>
              <a 
                href="https://twitter.com/wix" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-opacity duration-300 hover:opacity-70"
                style={{
                  fontSize: '24px',
                  color: 'rgb(255, 255, 255)'
                }}
                aria-label="X (Twitter)"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://tiktok.com/@wix" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-opacity duration-300 hover:opacity-70"
                style={{
                  fontSize: '24px',
                  color: 'rgb(255, 255, 255)'
                }}
                aria-label="TikTok"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 
              className="font-heading font-normal mb-4"
              style={{
                fontSize: '17px',
                lineHeight: '1.5em',
                color: 'rgb(255, 255, 255)',
                fontWeight: '600'
              }}
            >
              Contact
            </h4>
            <div 
              className="space-y-2 font-body"
              style={{
                fontSize: '15px',
                lineHeight: '24px',
                color: 'rgb(207, 203, 192)'
              }}
            >
              <p>015730104878</p>
              <p>info@mysite.com</p>
              <p>Holzstr.11 2/a,</p>
              <p>80469 Munich</p>
              <p>Germany</p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 
              className="font-heading font-normal mb-4"
              style={{
                fontSize: '17px',
                lineHeight: '1.5em',
                color: 'rgb(255, 255, 255)',
                fontWeight: '600'
              }}
            >
              Policies
            </h4>
            <div className="space-y-2">
              <Link 
                href="/policies/privacy" 
                className="block font-body transition-opacity duration-300 hover:opacity-70"
                style={{
                  fontSize: '15px',
                  lineHeight: '24px',
                  color: 'rgb(207, 203, 192)'
                }}
              >
                Privacy Policy
              </Link>
              <Link 
                href="/policies/accessibility" 
                className="block font-body transition-opacity duration-300 hover:opacity-70"
                style={{
                  fontSize: '15px',
                  lineHeight: '24px',
                  color: 'rgb(207, 203, 192)'
                }}
              >
                Accessibility Statement
              </Link>
              <Link 
                href="/policies/shipping" 
                className="block font-body transition-opacity duration-300 hover:opacity-70"
                style={{
                  fontSize: '15px',
                  lineHeight: '24px',
                  color: 'rgb(207, 203, 192)'
                }}
              >
                Shipping Policy
              </Link>
              <Link 
                href="/policies/terms" 
                className="block font-body transition-opacity duration-300 hover:opacity-70"
                style={{
                  fontSize: '15px',
                  lineHeight: '24px',
                  color: 'rgb(207, 203, 192)'
                }}
              >
                Terms & Conditions
              </Link>
              <Link 
                href="/policies/returns" 
                className="block font-body transition-opacity duration-300 hover:opacity-70"
                style={{
                  fontSize: '15px',
                  lineHeight: '24px',
                  color: 'rgb(207, 203, 192)'
                }}
              >
                Refund Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid rgba(207, 203, 192, 0.2)' }}>
          <h4 
            className="font-heading mb-4"
            style={{
              fontSize: '19px',
              lineHeight: '1.4em',
              color: 'rgb(255, 255, 255)',
              fontWeight: '600'
            }}
          >
            Stay in Touch
          </h4>
          <form className="flex flex-col gap-3 max-w-md">
            <input
              type="email"
              placeholder="Enter your email here"
              className="flex-1 px-4 py-3 bg-neutral-white text-neutral-dark font-body"
              style={{
                fontSize: '15px',
                borderRadius: '5px',
                border: 'none',
                outline: 'none'
              }}
            />
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="newsletter-consent"
                className="mt-1"
                style={{
                  width: '18px',
                  height: '18px',
                  cursor: 'pointer'
                }}
              />
              <label
                htmlFor="newsletter-consent"
                className="font-body"
                style={{
                  fontSize: '14px',
                  color: 'rgb(207, 203, 192)',
                  cursor: 'pointer'
                }}
              >
                Yes, subscribe me to your newsletter.*
              </label>
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-neutral-white text-neutral-dark font-button transition-opacity duration-300 hover:opacity-80"
              style={{
                fontSize: '16px',
                lineHeight: '16px',
                borderRadius: '5px',
                fontWeight: '600',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Subscribe
            </button>
          </form>
        </div>

        <div 
          className="text-center font-body"
          style={{
            marginTop: '48px',
            paddingTop: '32px',
            borderTop: '1px solid rgba(207, 203, 192, 0.2)',
            fontSize: '15px',
            color: 'rgb(159, 157, 142)'
          }}
        >
          © 2035 by Adama Soaps. Powered and secured by Wix
        </div>
      </div>
    </footer>
  );
}
