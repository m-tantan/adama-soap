'use client';

import { useState, useEffect, useRef } from "react";
import Image from 'next/image';

interface BeholdPost {
  id: string;
  mediaUrl: string;
  permalink: string;
  caption?: string;
  mediaType: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
}

interface InstagramFeedProps {
  feedId?: string;
}

const DEFAULT_FEED_ID = "E4NKLuEs4wUnBsOc9pl1";
const VISIBLE_COUNT = 3;
const AUTO_ROTATE_MS = 3000;

function getFirstSentence(caption: string | undefined): string {
  if (!caption) return "";
  const match = caption.match(/^[^.!?\n]+[.!?]?/);
  if (match) {
    const s = match[0].trim();
    return s.length > 120 ? s.substring(0, 117) + "..." : s;
  }
  return caption.length > 120 ? caption.substring(0, 117) + "..." : caption;
}

export default function InstagramFeed({
  feedId = DEFAULT_FEED_ID,
}: InstagramFeedProps) {
  const [posts, setPosts] = useState<BeholdPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Fetch posts on mount
  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(`https://feeds.behold.so/${feedId}`);
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        const allPosts: BeholdPost[] = Array.isArray(data)
          ? data
          : (data.posts ?? []);
        const imagePosts = allPosts.filter(
          (p) => p.mediaType === "IMAGE" || p.mediaType === "CAROUSEL_ALBUM",
        );
        setPosts(imagePosts);
      } catch (err) {
        console.error("Error fetching Instagram posts:", err);
        setError("Unable to load Instagram feed");
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, [feedId]);

  // Auto-rotate carousel, pause when tab is hidden
  useEffect(() => {
    if (posts.length <= VISIBLE_COUNT) return;

    const stopInterval = () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    const startInterval = () => {
      stopInterval();
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % posts.length);
      }, AUTO_ROTATE_MS);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopInterval();
      } else {
        startInterval();
      }
    };

    startInterval();
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      stopInterval();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [posts.length]);

  const navigate = (dir: 1 | -1) => {
    setCurrentIndex((prev) => (prev + dir + posts.length) % posts.length);
  };

  const visiblePosts =
    posts.length > 0
      ? Array.from(
          { length: VISIBLE_COUNT },
          (_, i) => posts[(currentIndex + i) % posts.length],
        )
      : [];

  // Loading state
  if (loading) {
    return (
      <div className="grid grid-cols-3 gap-6 max-w-[900px] mx-auto">
        {[1, 2, 3].map((i) => (
          <div key={i} className="animate-pulse">
            <div className="aspect-square bg-white/10 rounded-lg mb-3" />
            <div className="h-4 bg-white/10 rounded w-3/4 mx-auto" />
          </div>
        ))}
      </div>
    );
  }

  // Error / empty state
  if (error || posts.length === 0) {
    return (
      <div className="text-center py-8">
        <p style={{ color: "rgb(255, 255, 255)", opacity: 0.7 }}>
          Follow us on Instagram{" "}
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

  return (
    <div
      className="max-w-[900px] mx-auto relative"
      style={{ paddingLeft: "48px", paddingRight: "48px" }}
    >
      {/* Left arrow */}
      <button
        onClick={() => navigate(-1)}
        aria-label="Previous posts"
        style={{
          position: "absolute",
          left: "0",
          top: "45%",
          transform: "translateY(-50%)",
          zIndex: 10,
          color: "#FFFFFF",
          background: "rgba(255,255,255,0.12)",
          border: "none",
          borderRadius: "50%",
          width: "36px",
          height: "36px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "22px",
          lineHeight: "1",
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background = "rgba(255,255,255,0.28)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.background = "rgba(255,255,255,0.12)")
        }
      >
        &#8249;
      </button>

      {/* 3-column grid of visible posts */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
        }}
      >
        {visiblePosts.map((post, idx) => (
          <a
            key={`${post.id}-${idx}`}
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="relative aspect-square overflow-hidden rounded-lg bg-white/5">
              <Image
                src={post.mediaUrl}
                alt={getFirstSentence(post.caption) || "Instagram post"}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 300px"
                unoptimized
              />
            </div>
          </a>
        ))}
      </div>

      {/* Right arrow */}
      <button
        onClick={() => navigate(1)}
        aria-label="Next posts"
        style={{
          position: "absolute",
          right: "0",
          top: "45%",
          transform: "translateY(-50%)",
          zIndex: 10,
          color: "#FFFFFF",
          background: "rgba(255,255,255,0.12)",
          border: "none",
          borderRadius: "50%",
          width: "36px",
          height: "36px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "22px",
          lineHeight: "1",
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background = "rgba(255,255,255,0.28)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.background = "rgba(255,255,255,0.12)")
        }
      >
        &#8250;
      </button>
    </div>
  );
}
