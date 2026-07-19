// Shared product catalogue — consumed by /products (index grid) and /products/[slug] (detail pages).
const DEFAULT_GALLERY = ["/img/hinge-pile.jpg", "/img/hinge-finishes.jpg", "/img/door-lifestyle.jpg"];

const ButtHingeSVG = () => (
  <svg viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg" style={{ width:"100%", height:"100%" }}>
    <defs>
      <linearGradient id="bh-leaf" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#c0c8d0"/><stop offset="50%" stopColor="#e2e6ea"/><stop offset="100%" stopColor="#c8d0d8"/></linearGradient>
      <linearGradient id="bh-barrel" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#7a8088"/><stop offset="40%" stopColor="#c8cdd2"/><stop offset="100%" stopColor="#8a9098"/></linearGradient>
      <filter id="bh-shadow"><feDropShadow dx="3" dy="4" stdDeviation="4" floodOpacity="0.12"/></filter>
    </defs>
    <rect x="30" y="20" width="86" height="160" rx="3" fill="url(#bh-leaf)" stroke="#a8b0b8" strokeWidth="1.5" filter="url(#bh-shadow)"/>
    <rect x="113" y="22" width="22" height="156" rx="11" fill="url(#bh-barrel)" stroke="#7a8088" strokeWidth="1"/>
    {[30,50,70,90,110,130,150,170].map(y => (
      <ellipse key={y} cx="124" cy={y} rx="11" ry="5" fill="none" stroke="#6a7078" strokeWidth="0.8"/>
    ))}
    <rect x="133" y="20" width="86" height="160" rx="3" fill="url(#bh-leaf)" stroke="#a8b0b8" strokeWidth="1.5" filter="url(#bh-shadow)"/>
    {[45, 100, 155].map(y => (
      <g key={y}>
        <circle cx="72" cy={y} r="8" fill="#9aa0a8" stroke="#8a9098" strokeWidth="0.5"/>
        <circle cx="72" cy={y} r="4" fill="#6a7078"/>
        <line x1="68" y1={y} x2="76" y2={y} stroke="#555" strokeWidth="1"/>
        <line x1="72" y1={y-4} x2="72" y2={y+4} stroke="#555" strokeWidth="1"/>
      </g>
    ))}
    {[45, 100, 155].map(y => (
      <g key={y}>
        <circle cx="176" cy={y} r="8" fill="#9aa0a8" stroke="#8a9098" strokeWidth="0.5"/>
        <circle cx="176" cy={y} r="4" fill="#6a7078"/>
        <line x1="172" y1={y} x2="180" y2={y} stroke="#555" strokeWidth="1"/>
        <line x1="176" y1={y-4} x2="176" y2={y+4} stroke="#555" strokeWidth="1"/>
      </g>
    ))}
    <ellipse cx="124" cy="22" rx="11" ry="5" fill="#b0b8c0" stroke="#8a9098" strokeWidth="1"/>
    <ellipse cx="124" cy="178" rx="11" ry="5" fill="#b0b8c0" stroke="#8a9098" strokeWidth="1"/>
    <line x1="60" y1="20" x2="60" y2="180" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
    <line x1="155" y1="20" x2="155" y2="180" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
  </svg>
);

const HeavyDutyHingeSVG = () => (
  <svg viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg" style={{ width:"100%", height:"100%" }}>
    <defs>
      <linearGradient id="hd-metal" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#b0b8c0"/><stop offset="50%" stopColor="#d8dce0"/><stop offset="100%" stopColor="#9aa0a8"/></linearGradient>
      <linearGradient id="hd-barrel2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#8a9098"/><stop offset="50%" stopColor="#c8cdd2"/><stop offset="100%" stopColor="#7a8088"/></linearGradient>
      <filter id="hd-shadow"><feDropShadow dx="3" dy="5" stdDeviation="5" floodOpacity="0.15"/></filter>
    </defs>
    <rect x="15" y="80" width="90" height="40" rx="4" fill="url(#hd-metal)" stroke="#8a9098" strokeWidth="2" filter="url(#hd-shadow)"/>
    <rect x="175" y="80" width="90" height="40" rx="4" fill="url(#hd-metal)" stroke="#8a9098" strokeWidth="2" filter="url(#hd-shadow)"/>
    <rect x="100" y="55" width="80" height="90" rx="14" fill="url(#hd-barrel2)" stroke="#6a7078" strokeWidth="2"/>
    {[65, 85, 105, 125].map(y => (
      <ellipse key={y} cx="140" cy={y} rx="40" ry="6" fill="none" stroke="#6a7078" strokeWidth="1.2"/>
    ))}
    <ellipse cx="140" cy="55" rx="40" ry="10" fill="#a0a8b0" stroke="#7a8088" strokeWidth="1.5"/>
    <ellipse cx="140" cy="145" rx="40" ry="10" fill="#a0a8b0" stroke="#7a8088" strokeWidth="1.5"/>
    {[35, 75].map(x => (
      <g key={x}>
        <circle cx={x} cy="100" r="8" fill="#6a7078" stroke="#555" strokeWidth="1"/>
        <circle cx={x} cy="100" r="4" fill="#3a4048"/>
        <circle cx={x} cy="100" r="2" fill="#222830"/>
      </g>
    ))}
    {[205, 245].map(x => (
      <g key={x}>
        <circle cx={x} cy="100" r="8" fill="#6a7078" stroke="#555" strokeWidth="1"/>
        <circle cx={x} cy="100" r="4" fill="#3a4048"/>
        <circle cx={x} cy="100" r="2" fill="#222830"/>
      </g>
    ))}
    <line x1="105" y1="82" x2="105" y2="118" stroke="#9aa0a8" strokeWidth="2.5" strokeDasharray="4,3"/>
    <line x1="175" y1="82" x2="175" y2="118" stroke="#9aa0a8" strokeWidth="2.5" strokeDasharray="4,3"/>
    <text x="140" y="195" fontSize="11" fill="#888" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">RATED: 100–500 KG PER PAIR</text>
  </svg>
);

const ConcealedHingeSVG = () => (
  <svg viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg" style={{ width:"100%", height:"100%" }}>
    <defs>
      <linearGradient id="ch-cup" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#d0d5da"/><stop offset="100%" stopColor="#9aa0a8"/></linearGradient>
      <linearGradient id="ch-arm" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#a8b0b8"/><stop offset="100%" stopColor="#d0d5da"/></linearGradient>
      <linearGradient id="ch-plate" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#c0c8d0"/><stop offset="100%" stopColor="#dde2e6"/></linearGradient>
      <filter id="ch-shadow"><feDropShadow dx="2" dy="3" stdDeviation="4" floodOpacity="0.12"/></filter>
    </defs>
    <rect x="160" y="60" width="100" height="80" rx="5" fill="url(#ch-plate)" stroke="#a0a8b0" strokeWidth="1.5" filter="url(#ch-shadow)"/>
    <circle cx="185" cy="100" r="8" fill="#9aa0a8" stroke="#7a8088" strokeWidth="1"/>
    <circle cx="185" cy="100" r="4" fill="#6a7078"/>
    <line x1="181" y1="100" x2="189" y2="100" stroke="#444" strokeWidth="1.5"/>
    <line x1="185" y1="96" x2="185" y2="104" stroke="#444" strokeWidth="1.5"/>
    <circle cx="235" cy="100" r="8" fill="#9aa0a8" stroke="#7a8088" strokeWidth="1"/>
    <circle cx="235" cy="100" r="4" fill="#6a7078"/>
    <line x1="231" y1="100" x2="239" y2="100" stroke="#444" strokeWidth="1.5"/>
    <line x1="235" y1="96" x2="235" y2="104" stroke="#444" strokeWidth="1.5"/>
    <path d="M110 80 L162 80 L162 120 L110 120" fill="none" stroke="#a0a8b0" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M110 80 L162 80 L162 120 L110 120" fill="none" stroke="url(#ch-arm)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="162" cy="100" r="8" fill="#b0b8c0" stroke="#8a9098" strokeWidth="1.5"/>
    <circle cx="162" cy="100" r="4" fill="#7a8088"/>
    <circle cx="72" cy="100" r="46" fill="url(#ch-cup)" stroke="#8a9098" strokeWidth="2" filter="url(#ch-shadow)"/>
    <circle cx="72" cy="100" r="32" fill="#c0c5ca" stroke="#9aa0a8" strokeWidth="1.5"/>
    <circle cx="72" cy="100" r="18" fill="#a8b0b8" stroke="#8a9098" strokeWidth="1.5"/>
    <circle cx="72" cy="100" r="7" fill="#7a8088" stroke="#6a7078" strokeWidth="1"/>
    <circle cx="72" cy="100" r="3" fill="#4a5058"/>
    {[0,45,90,135,180,225,270,315].map(deg => {
      const rad = deg * Math.PI / 180;
      const x = 72 + 38 * Math.cos(rad);
      const y = 100 + 38 * Math.sin(rad);
      return <circle key={deg} cx={x} cy={y} r="2" fill="#9aa0a8"/>;
    })}
    <text x="72" y="165" fontSize="10" fill="#888" fontFamily="sans-serif" textAnchor="middle">35mm Cup · Soft-Close</text>
    <text x="72" y="178" fontSize="9" fill="#aaa" fontFamily="sans-serif" textAnchor="middle">EN 15443 Certified</text>
  </svg>
);

const PianoHingeSVG = () => (
  <svg viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg" style={{ width:"100%", height:"100%" }}>
    <defs>
      <linearGradient id="ph-leaf" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#b8c0c8"/><stop offset="50%" stopColor="#d8dce0"/><stop offset="100%" stopColor="#c0c8d0"/></linearGradient>
      <linearGradient id="ph-barrel" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#8a9098"/><stop offset="50%" stopColor="#c8cdd2"/><stop offset="100%" stopColor="#9aa0a8"/></linearGradient>
    </defs>
    <rect x="25" y="15" width="70" height="170" rx="3" fill="url(#ph-leaf)" stroke="#a0a8b0" strokeWidth="1.5"/>
    <rect x="93" y="15" width="18" height="170" rx="9" fill="url(#ph-barrel)" stroke="#7a8088" strokeWidth="1"/>
    <rect x="109" y="15" width="70" height="170" rx="3" fill="url(#ph-leaf)" stroke="#a0a8b0" strokeWidth="1.5"/>
    {[25,42,59,76,93,110,127,144,161,178].map(y => (
      <line key={y} x1="93" y1={y} x2="111" y2={y} stroke="#6a7078" strokeWidth="1.2"/>
    ))}
    <ellipse cx="102" cy="15" rx="9" ry="5" fill="#b0b8c0" stroke="#8a9098" strokeWidth="1"/>
    <ellipse cx="102" cy="185" rx="9" ry="5" fill="#b0b8c0" stroke="#8a9098" strokeWidth="1"/>
    {[30, 55, 80, 105, 130, 155, 170].map(y => (
      <g key={y}>
        <circle cx="58" cy={y} r="5" fill="#9aa0a8"/><circle cx="58" cy={y} r="2.5" fill="#6a7078"/>
        <line x1="55.5" y1={y} x2="60.5" y2={y} stroke="#444" strokeWidth="0.8"/>
        <line x1="58" y1={y-2.5} x2="58" y2={y+2.5} stroke="#444" strokeWidth="0.8"/>
      </g>
    ))}
    {[30, 55, 80, 105, 130, 155, 170].map(y => (
      <g key={y}>
        <circle cx="146" cy={y} r="5" fill="#9aa0a8"/><circle cx="146" cy={y} r="2.5" fill="#6a7078"/>
        <line x1="143.5" y1={y} x2="148.5" y2={y} stroke="#444" strokeWidth="0.8"/>
        <line x1="146" y1={y-2.5} x2="146" y2={y+2.5} stroke="#444" strokeWidth="0.8"/>
      </g>
    ))}
    <line x1="205" y1="15" x2="205" y2="185" stroke="#e8a020" strokeWidth="1.5" strokeDasharray="5,3"/>
    <line x1="198" y1="15" x2="212" y2="15" stroke="#e8a020" strokeWidth="1.5"/>
    <line x1="198" y1="185" x2="212" y2="185" stroke="#e8a020" strokeWidth="1.5"/>
    <text x="225" y="90" fontSize="11" fill="#e8a020" fontFamily="sans-serif" fontWeight="700">1800</text>
    <text x="225" y="105" fontSize="11" fill="#e8a020" fontFamily="sans-serif" fontWeight="700">mm</text>
    <line x1="45" y1="15" x2="45" y2="185" stroke="rgba(255,255,255,0.5)" strokeWidth="2"/>
    <line x1="130" y1="15" x2="130" y2="185" stroke="rgba(255,255,255,0.5)" strokeWidth="2"/>
  </svg>
);

const SpringHingeSVG = () => (
  <svg viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg" style={{ width:"100%", height:"100%" }}>
    <defs>
      <linearGradient id="sp-leaf" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#c0c8d0"/><stop offset="100%" stopColor="#dde2e6"/></linearGradient>
      <linearGradient id="sp-barrel" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#8a9098"/><stop offset="50%" stopColor="#c0c8d0"/><stop offset="100%" stopColor="#7a8088"/></linearGradient>
    </defs>
    <rect x="20" y="25" width="74" height="150" rx="3" fill="url(#sp-leaf)" stroke="#a8b0b8" strokeWidth="1.5"/>
    <rect x="186" y="25" width="74" height="150" rx="3" fill="url(#sp-leaf)" stroke="#a8b0b8" strokeWidth="1.5"/>
    <rect x="90" y="18" width="100" height="164" rx="12" fill="url(#sp-barrel)" stroke="#7a8088" strokeWidth="1.5"/>
    {[35, 52, 69, 86, 103, 120, 137, 154, 171].map((y, i) => (
      <path key={y} d={`M92 ${y} Q140 ${y + (i%2===0 ? 12 : -12)} 188 ${y}`}
        fill="none" stroke="#5a6068" strokeWidth="2.5" strokeLinecap="round"/>
    ))}
    <ellipse cx="140" cy="18" rx="50" ry="10" fill="#a0a8b0" stroke="#7a8088" strokeWidth="1.5"/>
    <ellipse cx="140" cy="182" rx="50" ry="10" fill="#a0a8b0" stroke="#7a8088" strokeWidth="1.5"/>
    <rect x="128" y="88" width="24" height="24" rx="3" fill="#8a9098" stroke="#6a7078" strokeWidth="1"/>
    <line x1="128" y1="100" x2="152" y2="100" stroke="#5a6068" strokeWidth="2"/>
    <text x="140" y="125" fontSize="8" fill="#aaa" fontFamily="sans-serif" textAnchor="middle">ADJ.</text>
    {[50, 100, 148].map(y => (
      <g key={y}>
        <circle cx="56" cy={y} r="6" fill="#9aa0a8"/><circle cx="56" cy={y} r="3" fill="#6a7078"/>
        <circle cx="222" cy={y} r="6" fill="#9aa0a8"/><circle cx="222" cy={y} r="3" fill="#6a7078"/>
      </g>
    ))}
    <path d="M205 165 Q230 160 235 145 Q238 130 225 125" fill="none" stroke="#e8a020" strokeWidth="2"/>
    <text x="240" y="148" fontSize="9" fill="#e8a020" fontFamily="sans-serif">Self-Close</text>
  </svg>
);

const TubularLatchSVG = () => (
  <svg viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg" style={{ width:"100%", height:"100%" }}>
    <defs>
      <linearGradient id="tl-body" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#b8c0c8"/><stop offset="50%" stopColor="#e0e4e8"/><stop offset="100%" stopColor="#c0c8d0"/></linearGradient>
      <linearGradient id="tl-bolt" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#c8b070"/><stop offset="100%" stopColor="#e8d090"/></linearGradient>
      <filter id="tl-shadow"><feDropShadow dx="3" dy="4" stdDeviation="4" floodOpacity="0.12"/></filter>
    </defs>
    <rect x="30" y="60" width="20" height="80" rx="3" fill="#c0c8d0" stroke="#9aa0a8" strokeWidth="1.5"/>
    <polygon points="50,80 80,100 50,120" fill="url(#tl-bolt)" stroke="#a09050" strokeWidth="1"/>
    <rect x="80" y="68" width="160" height="64" rx="8" fill="url(#tl-body)" stroke="#9aa0a8" strokeWidth="1.5" filter="url(#tl-shadow)"/>
    <ellipse cx="240" cy="100" rx="8" ry="32" fill="#b0b8c0" stroke="#8a9098" strokeWidth="1"/>
    <ellipse cx="80" cy="100" rx="8" ry="32" fill="#c8d0d8" stroke="#9aa0a8" strokeWidth="1"/>
    {[95, 110, 125, 140, 155, 170, 185, 200].map((x, i) => (
      <line key={x} x1={x} y1={i%2===0?76:84} x2={x+8} y2={i%2===0?84:76} stroke="#9aa0a8" strokeWidth="1"/>
    ))}
    <circle cx="40" cy="75" r="4" fill="#8a9098"/><circle cx="40" cy="75" r="2" fill="#555"/>
    <circle cx="40" cy="125" r="4" fill="#8a9098"/><circle cx="40" cy="125" r="2" fill="#555"/>
    <text x="140" y="155" fontSize="10" fill="#888" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">TUBULAR LATCH</text>
    <text x="140" y="170" fontSize="9" fill="#aaa" fontFamily="sans-serif" textAnchor="middle">60mm / 76mm Backset</text>
    <line x1="50" y1="100" x2="78" y2="100" stroke="#e8a020" strokeWidth="1.5" strokeDasharray="3,2"/>
    <polygon points="75,96 80,100 75,104" fill="#e8a020"/>
  </svg>
);

const BallBearingSVG = () => (
  <svg viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg" style={{ width:"100%", height:"100%" }}>
    <defs>
      <linearGradient id="bb-outer" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#d0d5da"/><stop offset="100%" stopColor="#9aa0a8"/></linearGradient>
      <linearGradient id="bb-inner" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#c0c8d0"/><stop offset="100%" stopColor="#8a9098"/></linearGradient>
      <linearGradient id="bb-ball" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#e8ecf0"/><stop offset="60%" stopColor="#c0c8d0"/><stop offset="100%" stopColor="#8a9098"/></linearGradient>
      <filter id="bb-shadow"><feDropShadow dx="4" dy="6" stdDeviation="6" floodOpacity="0.15"/></filter>
    </defs>
    <circle cx="140" cy="100" r="88" fill="url(#bb-outer)" stroke="#8a9098" strokeWidth="2" filter="url(#bb-shadow)"/>
    <circle cx="140" cy="100" r="74" fill="#f7f6f3"/>
    <circle cx="140" cy="100" r="62" fill="none" stroke="#c0c8d0" strokeWidth="16"/>
    <circle cx="140" cy="100" r="48" fill="url(#bb-inner)" stroke="#8a9098" strokeWidth="1.5"/>
    <circle cx="140" cy="100" r="36" fill="#f0ede7"/>
    <circle cx="140" cy="100" r="28" fill="#e5e2db" stroke="#c0c8d0" strokeWidth="1"/>
    <circle cx="140" cy="100" r="18" fill="#d8d4cc" stroke="#b8b0a8" strokeWidth="1"/>
    {[0, 40, 80, 120, 160, 200, 240, 280, 320].map(deg => {
      const rad = deg * Math.PI / 180;
      const cx = 140 + 62 * Math.cos(rad);
      const cy = 100 + 62 * Math.sin(rad);
      return (
        <g key={deg}>
          <circle cx={cx} cy={cy} r="10" fill="url(#bb-ball)" stroke="#9aa0a8" strokeWidth="0.8"/>
          <circle cx={cx-3} cy={cy-3} r="3" fill="rgba(255,255,255,0.6)"/>
        </g>
      );
    })}
    <text x="140" y="97" fontSize="10" fill="#888" fontFamily="sans-serif" textAnchor="middle">BALL</text>
    <text x="140" y="110" fontSize="10" fill="#888" fontFamily="sans-serif" textAnchor="middle">BEARING</text>
    <text x="140" y="185" fontSize="9" fill="#aaa" fontFamily="sans-serif" textAnchor="middle">ABEC-5 Precision · Stainless Steel</text>
  </svg>
);

const CupboardHingeSVG = () => (
  <svg viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg" style={{ width:"100%", height:"100%" }}>
    <defs>
      <linearGradient id="cph-body" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#d0d5da"/><stop offset="100%" stopColor="#9aa0a8"/></linearGradient>
      <linearGradient id="cph-plate" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#c8d0d8"/><stop offset="100%" stopColor="#a8b0b8"/></linearGradient>
      <filter id="cph-shadow"><feDropShadow dx="2" dy="3" stdDeviation="3" floodOpacity="0.12"/></filter>
    </defs>
    <rect x="140" y="40" width="120" height="120" rx="6" fill="url(#cph-plate)" stroke="#9aa0a8" strokeWidth="1.5" filter="url(#cph-shadow)"/>
    <rect x="158" y="70" width="16" height="30" rx="8" fill="#8a9098" stroke="#6a7078" strokeWidth="0.8"/>
    <rect x="215" y="70" width="16" height="30" rx="8" fill="#8a9098" stroke="#6a7078" strokeWidth="0.8"/>
    <rect x="158" y="110" width="16" height="20" rx="4" fill="#8a9098" stroke="#6a7078" strokeWidth="0.8"/>
    <rect x="215" y="110" width="16" height="20" rx="4" fill="#8a9098" stroke="#6a7078" strokeWidth="0.8"/>
    <rect x="102" y="68" width="44" height="12" rx="4" fill="url(#cph-body)" stroke="#8a9098" strokeWidth="1"/>
    <rect x="102" y="120" width="44" height="12" rx="4" fill="url(#cph-body)" stroke="#8a9098" strokeWidth="1"/>
    <rect x="106" y="80" width="8" height="40" rx="3" fill="#b0b8c0" stroke="#9aa0a8" strokeWidth="1"/>
    <rect x="132" y="80" width="8" height="40" rx="3" fill="#b0b8c0" stroke="#9aa0a8" strokeWidth="1"/>
    <circle cx="74" cy="100" r="50" fill="url(#cph-body)" stroke="#8a9098" strokeWidth="2" filter="url(#cph-shadow)"/>
    <circle cx="74" cy="100" r="36" fill="#c0c5ca"/>
    <circle cx="74" cy="100" r="22" fill="#a8b0b8"/>
    <circle cx="74" cy="100" r="10" fill="#8a9098"/>
    <circle cx="74" cy="100" r="5" fill="#6a7078"/>
    {[0,60,120,180,240,300].map(deg => {
      const rad = deg * Math.PI / 180;
      return <circle key={deg} cx={74 + 44*Math.cos(rad)} cy={100 + 44*Math.sin(rad)} r="3" fill="#a0a8b0"/>;
    })}
    <text x="140" y="185" fontSize="10" fill="#888" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">CUPBOARD / OVERLAY HINGE</text>
    <text x="140" y="198" fontSize="9" fill="#aaa" fontFamily="sans-serif" textAnchor="middle">3-Way Adjustment · Soft-Close</text>
  </svg>
);

const OemSVG = () => (
  <svg viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg" style={{ width:"100%", height:"100%" }}>
    <defs>
      <linearGradient id="oem-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#d8dce0"/><stop offset="100%" stopColor="#a0a8b0"/></linearGradient>
    </defs>
    {[35,70,105,140,175,210,245].map(x => (<line key={x} x1={x} y1="15" x2={x} y2="185" stroke="#e8e4dc" strokeWidth="1"/>))}
    {[30,60,90,120,150,180].map(y => (<line key={y} x1="15" y1={y} x2="265" y2={y} stroke="#e8e4dc" strokeWidth="1"/>))}
    <rect x="50" y="40" width="70" height="120" rx="4" fill="url(#oem-g)" stroke="#8a9098" strokeWidth="2"/>
    <rect x="158" y="40" width="70" height="120" rx="4" fill="url(#oem-g)" stroke="#8a9098" strokeWidth="2"/>
    <rect x="118" y="34" width="24" height="132" rx="12" fill="#b0b8c0" stroke="#8a9098" strokeWidth="1.5"/>
    <line x1="50" y1="22" x2="228" y2="22" stroke="#e8a020" strokeWidth="1.5"/>
    <line x1="50" y1="18" x2="50" y2="26" stroke="#e8a020" strokeWidth="1.5"/>
    <line x1="228" y1="18" x2="228" y2="26" stroke="#e8a020" strokeWidth="1.5"/>
    <text x="139" y="19" fontSize="9" fill="#e8a020" fontFamily="sans-serif" textAnchor="middle" fontWeight="700">Custom Width</text>
    <line x1="240" y1="40" x2="240" y2="160" stroke="#e8a020" strokeWidth="1.5"/>
    <text x="258" y="104" fontSize="9" fill="#e8a020" fontFamily="sans-serif" textAnchor="middle" fontWeight="700" transform="rotate(90,258,104)">Custom Height</text>
    <rect x="65" y="175" width="152" height="20" rx="3" fill="#e8a020" opacity="0.12" stroke="#e8a020" strokeWidth="1"/>
    <text x="141" y="189" fontSize="10" fill="#e8a020" fontFamily="sans-serif" textAnchor="middle" fontWeight="700">OEM · PRIVATE LABEL</text>
  </svg>
);

export type Product = {
  id: string;
  num: string;
  name: string;
  tagline: string;
  desc: string;
  specs: { label: string; value: string }[];
  variants: string[];
  images: string[];
  svg: React.ReactNode;
};

export const products: Product[] = [
  {
    id: "butt-hinges",
    num: "01",
    name: "Butt Hinges",
    tagline: "The universal standard for door hanging",
    desc: "Our butt hinges are manufactured from premium grade stainless steel, brass, and zinc alloy. Used in residential doors, commercial buildings, hotels, and offices worldwide. Available in a wide range of sizes and finishes to meet any specification.",
    specs: [
      { label: "Materials", value: "SS 304, SS 316, Brass, Zinc Alloy, MS" },
      { label: "Sizes", value: "2\" – 6\" (50mm – 150mm)" },
      { label: "Finish", value: "SSS, Antique Brass, CP, PVD Gold, Black" },
      { label: "Thickness", value: "1.5mm – 3mm" },
      { label: "Load Capacity", value: "Up to 80kg per pair" },
      { label: "Standard", value: "BS EN 1935 Grade 11" },
    ],
    variants: ["Plain Bearing", "Ball Bearing", "Spring Loaded", "Anti-Lift", "Concealed Bearing"],
    images: ["/img/hinge-installed.jpg", "/img/hinge-finishes.jpg", "/img/hinge-pile.jpg"],
    svg: <ButtHingeSVG />,
  },
  {
    id: "heavy-duty-hinges",
    num: "02",
    name: "Heavy Duty Hinges",
    tagline: "Built for industrial & commercial applications",
    desc: "Engineered for gates, warehouse doors, industrial machinery, and heavy commercial applications. Our heavy-duty hinges withstand repeated high-load cycling and harsh environmental conditions.",
    specs: [
      { label: "Materials", value: "Mild Steel, SS 316, Cast Iron" },
      { label: "Sizes", value: "4\" – 12\" (100mm – 300mm)" },
      { label: "Load Capacity", value: "100kg – 500kg per pair" },
      { label: "Finish", value: "Hot-Dip Galvanized, Powder Coat, Raw" },
      { label: "Type", value: "Weld-On, Bolt-On, Strap" },
      { label: "Standard", value: "IS 1341, DIN 18273" },
    ],
    variants: ["Weld-On Strap Hinge", "T-Hinge", "Parliament Hinge", "Band & Hook", "Pin Hinge"],
    images: DEFAULT_GALLERY,
    svg: <HeavyDutyHingeSVG />,
  },
  {
    id: "concealed-cabinet-hinges",
    num: "03",
    name: "Concealed / Cabinet Hinges",
    tagline: "Invisible hinge, visible quality",
    desc: "Concealed cup hinges for modern kitchen and furniture cabinets. Fully adjustable in three axes with integrated or separate soft-close damper options.",
    specs: [
      { label: "Cup Diameter", value: "26mm, 35mm" },
      { label: "Opening Angle", value: "95°, 110°, 165°, 175°" },
      { label: "Overlay", value: "Full, Half, Inset" },
      { label: "Closing", value: "Standard, Soft-Close, Push-to-Open" },
      { label: "Material", value: "Cold Rolled Steel, Zinc Die-Cast" },
      { label: "Standard", value: "EN 15443" },
    ],
    variants: ["Standard Clip-On", "Soft-Close", "Push-to-Open", "Thick Door", "Glass Door"],
    images: DEFAULT_GALLERY,
    svg: <ConcealedHingeSVG />,
  },
  {
    id: "piano-continuous-hinges",
    num: "04",
    name: "Piano / Continuous Hinges",
    tagline: "Full-length support for long or heavy doors",
    desc: "Continuous piano hinges distribute weight and stress evenly across the full door length. Ideal for chest lids, piano keys, tool boxes, and access panels.",
    specs: [
      { label: "Materials", value: "Aluminum, SS 304, MS Zinc Plated" },
      { label: "Length", value: "900mm – 1800mm (custom lengths)" },
      { label: "Width (open)", value: "25mm – 75mm" },
      { label: "Pin Diameter", value: "3mm – 5mm" },
      { label: "Finish", value: "Satin Aluminum, SS Brushed, Zinc Plated" },
      { label: "Gauge", value: "14GA – 11GA" },
    ],
    variants: ["Standard Piano", "Heavy Piano", "Stainless Piano", "Aluminum Piano", "Custom Cut"],
    images: DEFAULT_GALLERY,
    svg: <PianoHingeSVG />,
  },
  {
    id: "spring-hinges",
    num: "05",
    name: "Spring Hinges",
    tagline: "Self-closing for safety & security",
    desc: "Spring-loaded hinges for fire-rated doors, toilet cubicles, and security gates. Adjustable closing tension to meet door weight requirements.",
    specs: [
      { label: "Material", value: "SS 304, Zinc Die-Cast" },
      { label: "Action", value: "Single & Double Action" },
      { label: "Tension", value: "Adjustable (1–3 settings)" },
      { label: "Fire Rating", value: "Suitable for 30/60/90-min fire doors" },
      { label: "Sizes", value: "3\" – 5\"" },
      { label: "Standard", value: "BS EN 1154" },
    ],
    variants: ["Single Action", "Double Action", "Heavy Duty Spring", "Adjustable Spring", "Gravity Pivot"],
    images: DEFAULT_GALLERY,
    svg: <SpringHingeSVG />,
  },
  {
    id: "tubular-latches",
    num: "06",
    name: "Tubular Latches",
    tagline: "Smooth bolt action for every door application",
    desc: "Precision-engineered tubular latches for residential and commercial doors. Stainless steel spring bolt mechanism with smooth retraction — compatible with all standard lever handle sets.",
    specs: [
      { label: "Material", value: "SS 304, Zinc Die-Cast" },
      { label: "Backset", value: "60mm, 76mm (standard)" },
      { label: "Bolt Throw", value: "10mm – 14mm" },
      { label: "Faceplate", value: "Radiused & Square" },
      { label: "Finish", value: "SSS, CP, AB, PVD Gold, Black" },
      { label: "Standard", value: "BS EN 12459" },
    ],
    variants: ["60mm Backset", "76mm Backset", "Bathroom Latch", "Privacy Latch", "Deadlatch"],
    images: DEFAULT_GALLERY,
    svg: <TubularLatchSVG />,
  },
  {
    id: "ball-bearing-hinges",
    num: "07",
    name: "Ball Bearing Hinges",
    tagline: "Precision bearings for effortless door swing",
    desc: "Ball bearing hinges with ABEC-5 stainless steel bearings eliminate friction and ensure whisper-quiet, maintenance-free operation for high-traffic commercial doors and heavy-duty applications.",
    specs: [
      { label: "Bearing Type", value: "ABEC-5 Stainless Steel" },
      { label: "Materials", value: "SS 304, SS 316" },
      { label: "Sizes", value: "3\" – 5\" (75mm – 125mm)" },
      { label: "Load Capacity", value: "Up to 120kg per pair" },
      { label: "Cycles", value: "200,000+ without lubrication" },
      { label: "Standard", value: "ANSI/BHMA A156.1" },
    ],
    variants: ["2BB Standard", "4BB Heavy Duty", "NRP (Non-Removable Pin)", "Hospital Tip", "Stainless Sealed"],
    images: DEFAULT_GALLERY,
    svg: <BallBearingSVG />,
  },
  {
    id: "cupboard-hinges",
    num: "08",
    name: "Cupboard Hinges",
    tagline: "Perfect fit for every cabinet configuration",
    desc: "High-quality overlay, half-overlay, and inset cupboard hinges for kitchen cabinets, wardrobes, and furniture. Engineered for 3-way adjustment with optional soft-close and push-to-open mechanisms.",
    specs: [
      { label: "Cup Diameter", value: "35mm" },
      { label: "Overlay Options", value: "Full (13mm), Half (6mm), Inset" },
      { label: "Opening Angle", value: "95°, 110°, 120°, 165°" },
      { label: "Material", value: "Cold Rolled Steel, Zinc Die-Cast" },
      { label: "Finish", value: "Nickel, Matte Black, Chrome" },
      { label: "Standard", value: "EN 15443 Grade 1" },
    ],
    variants: ["Standard Overlay", "Half Overlay", "Inset", "Soft-Close", "Push-to-Open", "Glass Door"],
    images: DEFAULT_GALLERY,
    svg: <CupboardHingeSVG />,
  },
  {
    id: "custom-oem-hinges",
    num: "09",
    name: "Custom / OEM Hinges",
    tagline: "Your specifications, our precision",
    desc: "We manufacture fully custom hinges to your drawings or samples. Ideal for OEM buyers, importers, and private-label distributors. MOQ starts from 500 pieces per variant.",
    specs: [
      { label: "MOQ", value: "500 pcs per SKU" },
      { label: "Lead Time", value: "15–25 days (new tooling)" },
      { label: "Materials", value: "Any — SS, Brass, Aluminum, MS, Zinc" },
      { label: "Finish", value: "Any plating, powder coat, PVD" },
      { label: "Packaging", value: "Custom branded boxes available" },
      { label: "Certifications", value: "Test reports provided" },
    ],
    variants: ["Drawn to Sample", "Drawn to Spec", "Private Label", "White Label", "Tooling Owned by Buyer"],
    images: DEFAULT_GALLERY,
    svg: <OemSVG />,
  },
];
