'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface BeholdPost {
  id: string;
  mediaUrl: string;
  permalink: string;
  caption?: string;
  mediaType: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
}

interface InstagramFeedProps {
  feedId?: string; // Behold Feed ID
  fallbackImages?: string[];
}

// Extract first sentence from caption
function getFirstSentence(caption: string | undefined): string {
  if (!caption) return '';
  
  // Split by common sentence endings
  const sentenceMatch = caption.match(/^[^.!?\n]+[.!?]?/);
  if (sentenceMatch) {
    const sentence = sentenceMatch[0].trim();
    // Limit length if too long
    if (sentence.length > 120) {
      return sentence.substring(0, 117) + '...';
    }
    return sentence;
  }
  
  // If no sentence ending found, return first 100 chars
  return caption.length > 100 ? caption.substring(0, 97) + '...' : caption;
}

export default function InstagramFeed({ feedId, fallbackImages }: InstagramFeedProps) {
  const [posts, setPosts] = useState<BeholdPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchInstagramPosts() {
      // Use environment variable if feedId prop not provided
      const id = feedId || process.env.NEXT_PUBLIC_BEHOLD_FEED_ID;
      
      if (!id) {
        setError('Instagram feed not configured');
        setLoading(false);
        return;
      }

      try {
        // Behold.so free API endpoint
        const response = await fetch(`https://feeds.behold.so/${id}`);

        if (!response.ok) {
          throw new Error('Failed to fetch Instagram posts');
        }

        const data = await response.json();
        
        // Filter to only images and carousel albums, take first 3
        const imagePosts = data.filter(
          (post: BeholdPost) => post.mediaType === 'IMAGE' || post.mediaType === 'CAROUSEL_ALBUM'
        ).slice(0, 3);

        setPosts(imagePosts);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching Instagram posts:', err);
        setError('Unable to load Instagram feed');
        setLoading(false);
      }
    }

    fetchInstagramPosts();
  }, [feedId]);

  // Loading state
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[900px] mx-auto">
        {[1, 2, 3].map((i) => (
          <div key={i} className="animate-pulse">
            <div className="aspect-square bg-white/10 rounded-lg mb-3"></div>
            <div className="h-4 bg-white/10 rounded w-3/4 mx-auto"></div>
          </div>
        ))}
      </div>
    );
  }

  // Error state - show fallback images if available
  if (error || posts.length === 0) {
    if (fallbackImages && fallbackImages.length > 0) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[900px] mx-auto">
          {fallbackImages.slice(0, 3).map((img, index) => (
            <a
              key={index}
              href="https://instagram.com/adamasoaps"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative aspect-square overflow-hidden rounded-lg mb-3">
                <Image
                  src={img}
                  alt="Instagram post"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
              <p
                className="font-body text-center"
                style={{
                  fontSize: '14px',
                  color: 'rgb(255, 255, 255)',
                  opacity: 0.8,
                }}
              >
                View on Instagram →
              </p>
            </a>
          ))}
        </div>
      );
    }

    // No fallback - show message
    return (
      <div className="text-center py-8">
        <p style={{ color: 'rgb(255, 255, 255)', opacity: 0.7 }}>
          Follow us on Instagram{' '}
          <a
            href="https://instagram.com/adamasoaps"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-80"
          >
            @adamasoaps
          </a>
        </p>
      </div>
    );
  }

  // Success - show posts
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[900px] mx-auto">
      {posts.map((post) => (
        <a
          key={post.id}
          href={post.permalink}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          <div className="relative aspect-square overflow-hidden rounded-lg mb-3 bg-white/5">
            <Image
              src={post.mediaUrl}
              alt={getFirstSentence(post.caption) || 'Instagram post'}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 300px"
              unoptimized // Required for external URLs
            />
          </div>
          <p
            className="font-body text-center"
            style={{
              fontSize: '14px',
              lineHeight: '1.5em',
              color: 'rgb(255, 255, 255)',
              opacity: 0.9,
            }}
          >
            {getFirstSentence(post.caption)}
          </p>
        </a>
      ))}
    </div>
  );
}
