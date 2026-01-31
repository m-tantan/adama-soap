"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // Client-side redirect for static export (GitHub Pages)
    router.replace("/en/");
  }, [router]);

  // Fallback: meta refresh for cases where JS doesn't run immediately
  return (
    <>
      <meta httpEquiv="refresh" content="0;url=/en/" />
      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        height: "100vh",
        backgroundColor: "#29291F",
        color: "#F5F5DC"
      }}>
        <p>Redirecting...</p>
      </div>
    </>
  );
}
