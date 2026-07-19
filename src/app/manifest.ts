import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tirupati Hinges & Hardware Exports",
    short_name: "Tirupati Hinges",
    description: "Door hinge manufacturer and exporter based in Aligarh, India, serving 40+ countries.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#e8a020",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
  };
}
