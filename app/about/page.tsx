import Image from 'next/image';
import { withBasePath } from '@/lib/utils';

export default function AboutPage() {
  return (
    <div className="max-w-[980px] mx-auto px-6 lg:px-8" style={{ paddingTop: '48px', paddingBottom: '64px', backgroundColor: '#29291F' }}>
      <h1 
        className="font-title font-bold text-center mb-12"
        style={{
          fontSize: '55px',
          lineHeight: '1.2em',
          color: '#FFFFFF',
          letterSpacing: '-0.02em'
        }}
      >
        Our Sudsy Story
      </h1>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
        <div 
          className="relative bg-neutral-white overflow-hidden"
          style={{
            aspectRatio: '4/3',
            borderRadius: '5px',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)'
          }}
        >
          <Image
            src={withBasePath('/images/about/yoav-denis.jpg')}
            alt="Making soap together"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <p 
            className="font-body mb-4"
            style={{
              fontSize: '17px',
              lineHeight: '1.6em',
              color: 'rgb(255, 255, 255)'
            }}
          >
            It all started when my boyfriend said, "Honey, we should make soap!" I thought he was being clean about our relationship, but no—he literally meant soap.
          </p>
          
          <p 
            className="font-body mb-4"
            style={{
              fontSize: '17px',
              lineHeight: '1.6em',
              color: 'rgb(255, 255, 255)'
            }}
          >
            Armed with nothing but recycled coffee grounds (because apparently throwing them away is a <em>grounds</em> for divorce) and an unreasonable amount of YouTube tutorials, we embarked on our lathery journey.
          </p>

          <p 
            className="font-body mb-4"
            style={{
              fontSize: '17px',
              lineHeight: '1.6em',
              color: 'rgb(255, 255, 255)'
            }}
          >
            The first batch? Let's just say it was a total wash. The second batch? A clean sweep of failures. But by the third batch, we finally got it right—and that's when things really started to <em>soap</em> up!
          </p>

          <p 
            className="font-body mb-4"
            style={{
              fontSize: '17px',
              lineHeight: '1.6em',
              color: 'rgb(255, 255, 255)'
            }}
          >
            Now we make all our soaps by hand in Germany, using only the finest natural ingredients and a healthy dose of questionable puns. Our motto? "We're lye-ing if we say it's easy, but we're not lye-ing about the quality!"
          </p>

          <p 
            className="font-body"
            style={{
              fontSize: '17px',
              lineHeight: '1.6em',
              color: 'rgb(255, 255, 255)',
              fontStyle: 'italic'
            }}
          >
            P.S. My boyfriend insists I mention that she does 90% of the actual work. I provide moral support and terrible jokes. It's a clean division of labor. 🧼
          </p>
        </div>
      </div>

      <div 
        className="p-8 text-center"
        style={{
          backgroundColor: 'rgb(254, 250, 241)',
          borderRadius: '5px'
        }}
      >
        <h2 
          className="font-heading font-bold mb-4"
          style={{
            fontSize: '28px',
            lineHeight: '1.3em',
            color: 'rgb(64, 63, 43)'
          }}
        >
          Why Coffee Grounds?
        </h2>
        <p 
          className="font-body"
          style={{
            fontSize: '17px',
            lineHeight: '1.6em',
            color: 'rgb(64, 63, 43)',
            maxWidth: '700px',
            margin: '0 auto'
          }}
        >
          Because we're recycling champions and because coffee grounds are nature's best exfoliant. Plus, it gives us an excuse to drink more coffee during the "research phase." Win-win! ☕
        </p>
      </div>
    </div>
  );
}
