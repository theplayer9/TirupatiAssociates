"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductGallery({ images, alt }: { images: string[]; alt: string }) {
  const [active, setActive] = useState(0);

  return (
    <div style={{ display: "flex", gap: "10px", marginBottom: "24px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px", flexShrink: 0 }}>
        {images.map((src, i) => (
          <button
            key={src + i}
            onClick={() => setActive(i)}
            aria-label={`Show image ${i + 1} of ${alt}`}
            aria-current={i === active}
            style={{
              position: "relative",
              width: "72px",
              height: "72px",
              padding: 0,
              borderRadius: "6px",
              overflow: "hidden",
              border: i === active ? "3px solid #e8a020" : "1px solid #e5e2db",
              boxShadow: i === active ? "0 0 0 2px rgba(232,160,32,0.25), 0 4px 10px rgba(232,160,32,0.3)" : "none",
              cursor: "pointer",
              background: "#f7f6f3",
              opacity: i === active ? 1 : 0.6,
              transition: "border 0.15s ease, box-shadow 0.15s ease, opacity 0.15s ease",
            }}
          >
            <Image src={src} alt={`${alt} thumbnail ${i + 1}`} fill sizes="72px" style={{ objectFit: "cover" }} />
          </button>
        ))}
      </div>
      <div style={{ position: "relative", flex: 1, borderRadius: "8px", overflow: "hidden", border: "1px solid #e5e2db", height: "260px" }}>
        <Image src={images[active]} alt={alt} fill sizes="(max-width: 1024px) 100vw, 50vw" style={{ objectFit: "cover", objectPosition: "center" }} />
      </div>
    </div>
  );
}
