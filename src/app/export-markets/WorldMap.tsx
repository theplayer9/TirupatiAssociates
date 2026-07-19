"use client";

import { ComposableMap, Geographies, Geography, Marker, Line } from "react-simple-maps";

const GEO_URL = "/data/countries-110m.json";
const PANEL_BG = "#ffffff";

const ORIGIN = { name: "Aligarh, India — HQ", coordinates: [78.08, 27.88] as [number, number] };

const destinations: { id?: string; name: string; countryName: string; coordinates: [number, number]; flag: string; labelBelow?: boolean }[] = [
  { name: "Canada", countryName: "Canada", coordinates: [-106, 56], flag: "🇨🇦" },
  { name: "USA", countryName: "United States of America", coordinates: [-98, 39], flag: "🇺🇸" },
  { name: "Brazil", countryName: "Brazil", coordinates: [-51, -10], flag: "🇧🇷" },
  { name: "UK", countryName: "United Kingdom", coordinates: [-2, 54], flag: "🇬🇧" },
  { name: "Russia", countryName: "Russia", coordinates: [55, 61], flag: "🇷🇺" },
  { id: "uae", name: "Dubai, UAE", countryName: "United Arab Emirates", coordinates: [55.27, 25.2], flag: "🇦🇪" },
  { id: "sa", name: "South Africa", countryName: "South Africa", coordinates: [24, -29], flag: "🇿🇦" },
  { id: "kenya", name: "Kenya", countryName: "Kenya", coordinates: [37.9, -0.5], flag: "🇰🇪" },
  { id: "vietnam", name: "Vietnam", countryName: "Vietnam", coordinates: [106, 16], flag: "🇻🇳" },
  { name: "Japan", countryName: "Japan", coordinates: [138, 36], flag: "🇯🇵" },
  { name: "Australia", countryName: "Australia", coordinates: [133, -25], flag: "🇦🇺" },
];

const highlightedNames = new Set(destinations.map((d) => d.countryName));

export default function WorldMap() {
  return (
    <div style={{ position:"relative" }}>
      <ComposableMap
        projectionConfig={{ scale: 155, center: [10, 5] }}
        width={980}
        height={460}
        style={{ width: "100%", height: "auto", display: "block" }}
        role="img"
        aria-label="World map highlighting countries Tirupati Hinges & Hardware Exports ships to"
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const name = geo.properties.name as string;
              const isOrigin = name === "India";
              const isHighlighted = highlightedNames.has(name);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={isOrigin ? "#e8a020" : isHighlighted ? "rgba(232,160,32,0.5)" : "#e2ded4"}
                  stroke={PANEL_BG}
                  strokeWidth={0.75}
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none", fill: isOrigin ? "#e8a020" : isHighlighted ? "rgba(232,160,32,0.7)" : "#d8d2c4" },
                    pressed: { outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>

        {/* export routes */}
        {destinations.map((d) => (
          <Line
            key={`route-${d.name}`}
            from={ORIGIN.coordinates}
            to={d.coordinates}
            stroke="#c8880a"
            strokeWidth={1}
            strokeDasharray="3,3"
            strokeLinecap="round"
            opacity={0.55}
          />
        ))}

        {/* origin marker */}
        <Marker coordinates={ORIGIN.coordinates}>
          <circle r={5} fill="#e8a020" stroke="#1a1a1a" strokeWidth={1.5} />
          <circle r={11} fill="none" stroke="#e8a020" strokeWidth={1} opacity={0.6} />
          <text textAnchor="middle" y={-14} style={{ fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fill: "#c8880a" }}>
            {ORIGIN.name}
          </text>
        </Marker>

        {/* destination markers */}
        {destinations.map((d) => (
          <Marker key={d.name} coordinates={d.coordinates} id={d.id}>
            <circle r={4} fill="#1a1a1a" stroke="#e8a020" strokeWidth={1.3} />
            <text
              textAnchor="middle"
              y={d.labelBelow ? 18 : -10}
              style={{ fontFamily: "sans-serif", fontSize: 10.5, fontWeight: 600, fill: "#1a1a1a" }}
            >
              {d.flag} {d.name}
            </text>
          </Marker>
        ))}
      </ComposableMap>
      <div style={{ textAlign:"right", fontSize:"10px", color:"#999", marginTop:"4px" }}>
        Map data — Natural Earth · highlighted markers are approximate
      </div>
    </div>
  );
}
