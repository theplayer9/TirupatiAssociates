"use client";

import dynamic from "next/dynamic";

const WorldMap = dynamic(() => import("./WorldMap"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        height: "460px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#999",
        fontSize: "13px",
        letterSpacing: "0.05em",
      }}
    >
      Loading map…
    </div>
  ),
});

export default function WorldMapClient() {
  return <WorldMap />;
}
