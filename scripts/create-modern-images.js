import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 确保目录存在
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// 生成现代化SVG图标
function generateSVG(name, content, size = '400x300') {
  const [width, height] = size.split('x').map(Number);
  
  return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1d4ed8;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#10b981;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#059669;stop-opacity:1" />
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
      <feMerge> 
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  <rect width="100%" height="100%" fill="#f8fafc"/>
  ${content}
</svg>`;
}

// 各种图标内容
const iconContents = {
  'network-topology': `
    <!-- Network nodes -->
    <circle cx="100" cy="100" r="15" fill="url(#gradient1)" filter="url(#glow)"/>
    <circle cx="300" cy="100" r="15" fill="url(#gradient1)" filter="url(#glow)"/>
    <circle cx="200" cy="200" r="15" fill="url(#gradient2)" filter="url(#glow)"/>
    <circle cx="50" cy="200" r="12" fill="url(#gradient1)" opacity="0.8"/>
    <circle cx="350" cy="200" r="12" fill="url(#gradient1)" opacity="0.8"/>
    
    <!-- Network connections -->
    <line x1="100" y1="100" x2="300" y2="100" stroke="#3b82f6" stroke-width="2" opacity="0.6"/>
    <line x1="100" y1="100" x2="200" y2="200" stroke="#3b82f6" stroke-width="2" opacity="0.6"/>
    <line x1="300" y1="100" x2="200" y2="200" stroke="#3b82f6" stroke-width="2" opacity="0.6"/>
    <line x1="50" y1="200" x2="200" y2="200" stroke="#10b981" stroke-width="2" opacity="0.6"/>
    <line x1="350" y1="200" x2="200" y2="200" stroke="#10b981" stroke-width="2" opacity="0.6"/>
    
    <!-- Data flow animation paths -->
    <path d="M100,100 Q200,50 300,100" stroke="#60a5fa" stroke-width="1" fill="none" opacity="0.4"/>
    <path d="M50,200 Q125,150 200,200" stroke="#34d399" stroke-width="1" fill="none" opacity="0.4"/>
    
    <!-- Text labels -->
    <text x="200" y="250" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#1f2937">Network Topology</text>
  `,
  
  'protocol-diagram': `
    <!-- Protocol layers -->
    <rect x="50" y="50" width="300" height="40" rx="5" fill="url(#gradient1)" opacity="0.8"/>
    <text x="200" y="75" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="white">Application Layer</text>
    
    <rect x="50" y="100" width="300" height="40" rx="5" fill="url(#gradient1)" opacity="0.6"/>
    <text x="200" y="125" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="white">Protocol Layer</text>
    
    <rect x="50" y="150" width="300" height="40" rx="5" fill="url(#gradient2)" opacity="0.8"/>
    <text x="200" y="175" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="white">Blockchain Layer</text>
    
    <rect x="50" y="200" width="300" height="40" rx="5" fill="url(#gradient2)" opacity="0.6"/>
    <text x="200" y="225" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="white">Network Layer</text>
    
    <!-- Arrows -->
    <path d="M370,70 L390,70 L385,60 M390,70 L385,80" stroke="#1f2937" stroke-width="2" fill="none"/>
    <path d="M370,120 L390,120 L385,110 M390,120 L385,130" stroke="#1f2937" stroke-width="2" fill="none"/>
    <path d="M370,170 L390,170 L385,160 M390,170 L385,180" stroke="#1f2937" stroke-width="2" fill="none"/>
  `,
  
  'roadmap-timeline': `
    <!-- Timeline line -->
    <line x1="50" y1="150" x2="350" y2="150" stroke="#3b82f6" stroke-width="3"/>
    
    <!-- Timeline milestones -->
    <circle cx="100" cy="150" r="8" fill="url(#gradient2)"/>
    <circle cx="175" cy="150" r="8" fill="url(#gradient1)"/>
    <circle cx="250" cy="150" r="8" fill="url(#gradient1)" opacity="0.6"/>
    <circle cx="325" cy="150" r="8" fill="url(#gradient1)" opacity="0.4"/>
    
    <!-- Milestone labels -->
    <text x="100" y="130" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#1f2937">Q2 2025</text>
    <text x="100" y="180" text-anchor="middle" font-family="Arial, sans-serif" font-size="9" fill="#6b7280">Foundation</text>
    
    <text x="175" y="130" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#1f2937">Q3 2025</text>
    <text x="175" y="180" text-anchor="middle" font-family="Arial, sans-serif" font-size="9" fill="#6b7280">Launch</text>
    
    <text x="250" y="130" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#1f2937">2026</text>
    <text x="250" y="180" text-anchor="middle" font-family="Arial, sans-serif" font-size="9" fill="#6b7280">Growth</text>
    
    <text x="325" y="130" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#1f2937">2027+</text>
    <text x="325" y="180" text-anchor="middle" font-family="Arial, sans-serif" font-size="9" fill="#6b7280">Maturity</text>
    
    <!-- Progress indicator -->
    <rect x="50" y="200" width="300" height="10" rx="5" fill="#e5e7eb"/>
    <rect x="50" y="200" width="75" height="10" rx="5" fill="url(#gradient2)"/>
  `,
  
  'token-economics': `
    <!-- Token pie chart -->
    <circle cx="200" cy="150" r="80" fill="none" stroke="#e5e7eb" stroke-width="2"/>
    
    <!-- Data Provider Incentives (35%) -->
    <path d="M 200 70 A 80 80 0 0 1 283.13 196.66 L 200 150 Z" fill="url(#gradient1)" opacity="0.8"/>
    
    <!-- User Interaction (20%) -->
    <path d="M 283.13 196.66 A 80 80 0 0 1 230.39 228.77 L 200 150 Z" fill="url(#gradient2)" opacity="0.8"/>
    
    <!-- DAO Treasury (20%) -->
    <path d="M 230.39 228.77 A 80 80 0 0 1 169.61 228.77 L 200 150 Z" fill="#f59e0b" opacity="0.8"/>
    
    <!-- Core Dev Team (15%) -->
    <path d="M 169.61 228.77 A 80 80 0 0 1 116.87 196.66 L 200 150 Z" fill="#ef4444" opacity="0.8"/>
    
    <!-- Strategic Partners (10%) -->
    <path d="M 116.87 196.66 A 80 80 0 0 1 200 70 L 200 150 Z" fill="#8b5cf6" opacity="0.8"/>
    
    <!-- Legend -->
    <rect x="320" y="70" width="12" height="12" fill="url(#gradient1)" opacity="0.8"/>
    <text x="340" y="81" font-family="Arial, sans-serif" font-size="10" fill="#1f2937">Data Providers (35%)</text>
    
    <rect x="320" y="90" width="12" height="12" fill="url(#gradient2)" opacity="0.8"/>
    <text x="340" y="101" font-family="Arial, sans-serif" font-size="10" fill="#1f2937">User Incentives (20%)</text>
    
    <rect x="320" y="110" width="12" height="12" fill="#f59e0b" opacity="0.8"/>
    <text x="340" y="121" font-family="Arial, sans-serif" font-size="10" fill="#1f2937">DAO Treasury (20%)</text>
    
    <rect x="320" y="130" width="12" height="12" fill="#ef4444" opacity="0.8"/>
    <text x="340" y="141" font-family="Arial, sans-serif" font-size="10" fill="#1f2937">Dev Team (15%)</text>
    
    <rect x="320" y="150" width="12" height="12" fill="#8b5cf6" opacity="0.8"/>
    <text x="340" y="161" font-family="Arial, sans-serif" font-size="10" fill="#1f2937">Partners (10%)</text>
  `,
  
  'network-illustration': `
    <!-- Central hub -->
    <circle cx="200" cy="150" r="25" fill="url(#gradient2)" filter="url(#glow)"/>
    <text x="200" y="155" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="white">Hub</text>
    
    <!-- Satellite nodes -->
    <circle cx="100" cy="80" r="15" fill="url(#gradient1)" opacity="0.8"/>
    <circle cx="300" cy="80" r="15" fill="url(#gradient1)" opacity="0.8"/>
    <circle cx="80" cy="220" r="15" fill="url(#gradient1)" opacity="0.8"/>
    <circle cx="320" cy="220" r="15" fill="url(#gradient1)" opacity="0.8"/>
    <circle cx="50" cy="150" r="12" fill="url(#gradient1)" opacity="0.6"/>
    <circle cx="350" cy="150" r="12" fill="url(#gradient1)" opacity="0.6"/>
    
    <!-- Connections -->
    <line x1="200" y1="150" x2="100" y2="80" stroke="#3b82f6" stroke-width="2" opacity="0.6"/>
    <line x1="200" y1="150" x2="300" y2="80" stroke="#3b82f6" stroke-width="2" opacity="0.6"/>
    <line x1="200" y1="150" x2="80" y2="220" stroke="#3b82f6" stroke-width="2" opacity="0.6"/>
    <line x1="200" y1="150" x2="320" y2="220" stroke="#3b82f6" stroke-width="2" opacity="0.6"/>
    <line x1="200" y1="150" x2="50" y2="150" stroke="#10b981" stroke-width="2" opacity="0.6"/>
    <line x1="200" y1="150" x2="350" y2="150" stroke="#10b981" stroke-width="2" opacity="0.6"/>
    
    <!-- Data flow indicators -->
    <circle cx="150" cy="115" r="3" fill="#60a5fa" opacity="0.8">
      <animate attributeName="r" values="3;6;3" dur="2s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="250" cy="115" r="3" fill="#34d399" opacity="0.8">
      <animate attributeName="r" values="3;6;3" dur="2s" begin="0.5s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" begin="0.5s" repeatCount="indefinite"/>
    </circle>
  `
};

// Technology specific icons
const technologyIcons = {
  'blockchain': `
    <!-- Blockchain blocks -->
    <rect x="50" y="120" width="60" height="60" rx="5" fill="url(#gradient1)" opacity="0.8"/>
    <rect x="120" y="120" width="60" height="60" rx="5" fill="url(#gradient1)" opacity="0.8"/>
    <rect x="190" y="120" width="60" height="60" rx="5" fill="url(#gradient1)" opacity="0.8"/>
    <rect x="260" y="120" width="60" height="60" rx="5" fill="url(#gradient1)" opacity="0.8"/>
    
    <!-- Chain links -->
    <line x1="110" y1="150" x2="120" y2="150" stroke="#1d4ed8" stroke-width="4"/>
    <line x1="180" y1="150" x2="190" y2="150" stroke="#1d4ed8" stroke-width="4"/>
    <line x1="250" y1="150" x2="260" y2="150" stroke="#1d4ed8" stroke-width="4"/>
    
    <!-- Hash symbols -->
    <text x="80" y="155" text-anchor="middle" font-family="monospace" font-size="12" fill="white">#</text>
    <text x="150" y="155" text-anchor="middle" font-family="monospace" font-size="12" fill="white">#</text>
    <text x="220" y="155" text-anchor="middle" font-family="monospace" font-size="12" fill="white">#</text>
    <text x="290" y="155" text-anchor="middle" font-family="monospace" font-size="12" fill="white">#</text>
    
    <text x="200" y="220" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#1f2937">Blockchain Technology</text>
  `,
  
  'hardware': `
    <!-- Server rack -->
    <rect x="100" y="60" width="200" height="180" rx="10" fill="#374151" stroke="#1f2937" stroke-width="2"/>
    
    <!-- Server units -->
    <rect x="110" y="80" width="180" height="25" rx="3" fill="url(#gradient1)" opacity="0.8"/>
    <rect x="110" y="115" width="180" height="25" rx="3" fill="url(#gradient2)" opacity="0.8"/>
    <rect x="110" y="150" width="180" height="25" rx="3" fill="url(#gradient1)" opacity="0.6"/>
    <rect x="110" y="185" width="180" height="25" rx="3" fill="url(#gradient2)" opacity="0.6"/>
    
    <!-- LED indicators -->
    <circle cx="270" cy="92" r="3" fill="#10b981"/>
    <circle cx="270" cy="127" r="3" fill="#10b981"/>
    <circle cx="270" cy="162" r="3" fill="#f59e0b"/>
    <circle cx="270" cy="197" r="3" fill="#ef4444"/>
    
    <!-- Ventilation -->
    <rect x="115" y="220" width="170" height="8" rx="4" fill="#1f2937"/>
    
    <text x="200" y="260" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#1f2937">Hardware Infrastructure</text>
  `,
  
  'network': `
    <!-- Global network representation -->
    <circle cx="200" cy="150" r="100" fill="none" stroke="#e5e7eb" stroke-width="2"/>
    
    <!-- Continents representation -->
    <path d="M150,100 Q180,80 210,100 Q240,120 270,100" fill="none" stroke="url(#gradient1)" stroke-width="3"/>
    <path d="M130,140 Q160,120 190,140 Q220,160 250,140" fill="none" stroke="url(#gradient2)" stroke-width="3"/>
    <path d="M140,180 Q170,160 200,180 Q230,200 260,180" fill="none" stroke="url(#gradient1)" stroke-width="3"/>
    
    <!-- Network nodes -->
    <circle cx="160" cy="95" r="6" fill="url(#gradient1)" filter="url(#glow)"/>
    <circle cx="200" cy="90" r="6" fill="url(#gradient2)" filter="url(#glow)"/>
    <circle cx="240" cy="95" r="6" fill="url(#gradient1)" filter="url(#glow)"/>
    
    <circle cx="150" cy="135" r="6" fill="url(#gradient2)" filter="url(#glow)"/>
    <circle cx="190" cy="135" r="6" fill="url(#gradient1)" filter="url(#glow)"/>
    <circle cx="230" cy="135" r="6" fill="url(#gradient2)" filter="url(#glow)"/>
    
    <!-- Signal waves -->
    <circle cx="200" cy="150" r="30" fill="none" stroke="#3b82f6" stroke-width="1" opacity="0.4">
      <animate attributeName="r" values="30;50;30" dur="3s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.4;0.1;0.4" dur="3s" repeatCount="indefinite"/>
    </circle>
    
    <text x="200" y="280" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#1f2937">Global Network</text>
  `,
  
  'security': `
    <!-- Shield -->
    <path d="M200,50 L160,80 L160,160 Q160,200 200,220 Q240,200 240,160 L240,80 Z" fill="url(#gradient1)" filter="url(#glow)"/>
    
    <!-- Lock icon -->
    <rect x="180" y="130" width="40" height="30" rx="5" fill="#1f2937"/>
    <circle cx="200" cy="120" r="12" fill="none" stroke="#1f2937" stroke-width="4"/>
    <circle cx="200" cy="145" r="3" fill="#60a5fa"/>
    
    <!-- Security layers -->
    <circle cx="200" cy="135" r="60" fill="none" stroke="#3b82f6" stroke-width="1" opacity="0.3"/>
    <circle cx="200" cy="135" r="80" fill="none" stroke="#10b981" stroke-width="1" opacity="0.2"/>
    <circle cx="200" cy="135" r="100" fill="none" stroke="#f59e0b" stroke-width="1" opacity="0.1"/>
    
    <text x="200" y="260" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#1f2937">Security Protocol</text>
  `,
  
  'token': `
    <!-- Token coin -->
    <circle cx="200" cy="150" r="70" fill="url(#gradient2)" filter="url(#glow)" stroke="#059669" stroke-width="3"/>
    
    <!-- AetherLink symbol -->
    <text x="200" y="140" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="white">AL</text>
    <text x="200" y="170" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="white">TOKEN</text>
    
    <!-- Orbiting elements -->
    <circle cx="120" cy="100" r="8" fill="#34d399" opacity="0.8">
      <animateTransform attributeName="transform" type="rotate" values="0 200 150;360 200 150" dur="5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="280" cy="200" r="6" fill="#60a5fa" opacity="0.8">
      <animateTransform attributeName="transform" type="rotate" values="0 200 150;360 200 150" dur="7s" repeatCount="indefinite"/>
    </circle>
    
    <!-- Value representation -->
    <path d="M140,100 Q200,80 260,100" fill="none" stroke="#34d399" stroke-width="2" opacity="0.6"/>
    <path d="M140,200 Q200,220 260,200" fill="none" stroke="#60a5fa" stroke-width="2" opacity="0.6"/>
    
    <text x="200" y="260" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#1f2937">AetherLink Token</text>
  `
};

// Protocol specific icons
const protocolIcons = {
  'protocol-consensus': `
    <!-- Consensus nodes -->
    <circle cx="200" cy="100" r="20" fill="url(#gradient2)" filter="url(#glow)"/>
    <circle cx="120" cy="180" r="18" fill="url(#gradient1)" opacity="0.8"/>
    <circle cx="280" cy="180" r="18" fill="url(#gradient1)" opacity="0.8"/>
    <circle cx="200" cy="220" r="16" fill="url(#gradient1)" opacity="0.6"/>
    
    <!-- Consensus arrows -->
    <path d="M180,110 L140,170" stroke="#10b981" stroke-width="3" marker-end="url(#arrowhead)"/>
    <path d="M220,110 L260,170" stroke="#10b981" stroke-width="3" marker-end="url(#arrowhead)"/>
    <path d="M140,190 L180,210" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrowhead)"/>
    <path d="M260,190 L220,210" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrowhead)"/>
    
    <!-- Arrow marker definition -->
    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="#10b981"/>
      </marker>
    </defs>
    
    <!-- Checkmark for consensus -->
    <path d="M190,95 L195,105 L210,85" stroke="white" stroke-width="3" fill="none"/>
    
    <text x="200" y="260" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#1f2937">Consensus Protocol</text>
  `,
  
  'protocol-coverage': `
    <!-- Global coverage map -->
    <rect x="50" y="100" width="300" height="150" rx="10" fill="#f1f5f9" stroke="#e2e8f0" stroke-width="2"/>
    
    <!-- Coverage areas -->
    <circle cx="120" cy="150" r="25" fill="url(#gradient2)" opacity="0.3"/>
    <circle cx="200" cy="130" r="30" fill="url(#gradient1)" opacity="0.3"/>
    <circle cx="280" cy="160" r="20" fill="url(#gradient2)" opacity="0.3"/>
    <circle cx="160" cy="200" r="22" fill="url(#gradient1)" opacity="0.3"/>
    <circle cx="240" cy="190" r="18" fill="url(#gradient2)" opacity="0.3"/>
    
    <!-- Signal towers -->
    <rect x="118" y="140" width="4" height="20" fill="#1f2937"/>
    <rect x="198" y="120" width="4" height="20" fill="#1f2937"/>
    <rect x="278" y="150" width="4" height="20" fill="#1f2937"/>
    
    <!-- Signal waves -->
    <circle cx="120" cy="140" r="15" fill="none" stroke="#10b981" stroke-width="1" opacity="0.5"/>
    <circle cx="200" cy="120" r="18" fill="none" stroke="#3b82f6" stroke-width="1" opacity="0.5"/>
    <circle cx="280" cy="150" r="12" fill="none" stroke="#10b981" stroke-width="1" opacity="0.5"/>
    
    <text x="200" y="280" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#1f2937">Network Coverage</text>
  `,
  
  'protocol-mesh': `
    <!-- Mesh network nodes -->
    <circle cx="100" cy="100" r="12" fill="url(#gradient1)" filter="url(#glow)"/>
    <circle cx="200" cy="80" r="12" fill="url(#gradient2)" filter="url(#glow)"/>
    <circle cx="300" cy="100" r="12" fill="url(#gradient1)" filter="url(#glow)"/>
    <circle cx="80" cy="180" r="12" fill="url(#gradient1)" filter="url(#glow)"/>
    <circle cx="200" cy="150" r="15" fill="url(#gradient2)" filter="url(#glow)"/>
    <circle cx="320" cy="180" r="12" fill="url(#gradient1)" filter="url(#glow)"/>
    <circle cx="120" cy="240" r="12" fill="url(#gradient1)" filter="url(#glow)"/>
    <circle cx="280" cy="240" r="12" fill="url(#gradient1)" filter="url(#glow)"/>
    
    <!-- Mesh connections -->
    <line x1="100" y1="100" x2="200" y2="80" stroke="#3b82f6" stroke-width="2" opacity="0.6"/>
    <line x1="200" y1="80" x2="300" y2="100" stroke="#3b82f6" stroke-width="2" opacity="0.6"/>
    <line x1="100" y1="100" x2="80" y2="180" stroke="#10b981" stroke-width="2" opacity="0.6"/>
    <line x1="100" y1="100" x2="200" y2="150" stroke="#10b981" stroke-width="2" opacity="0.6"/>
    <line x1="200" y1="80" x2="200" y2="150" stroke="#3b82f6" stroke-width="2" opacity="0.6"/>
    <line x1="300" y1="100" x2="320" y2="180" stroke="#10b981" stroke-width="2" opacity="0.6"/>
    <line x1="300" y1="100" x2="200" y2="150" stroke="#3b82f6" stroke-width="2" opacity="0.6"/>
    <line x1="80" y1="180" x2="200" y2="150" stroke="#10b981" stroke-width="2" opacity="0.6"/>
    <line x1="320" y1="180" x2="200" y2="150" stroke="#10b981" stroke-width="2" opacity="0.6"/>
    <line x1="80" y1="180" x2="120" y2="240" stroke="#3b82f6" stroke-width="2" opacity="0.6"/>
    <line x1="320" y1="180" x2="280" y2="240" stroke="#3b82f6" stroke-width="2" opacity="0.6"/>
    <line x1="200" y1="150" x2="120" y2="240" stroke="#10b981" stroke-width="2" opacity="0.6"/>
    <line x1="200" y1="150" x2="280" y2="240" stroke="#10b981" stroke-width="2" opacity="0.6"/>
    
    <text x="200" y="280" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#1f2937">Mesh Protocol</text>
  `
};

// Generate all images
function generateAllImages() {
  const imagesDir = path.join(__dirname, '..', 'public', 'images');
  const technologyDir = path.join(imagesDir, 'technology');
  
  ensureDir(imagesDir);
  ensureDir(technologyDir);
  
  // Generate main images
  Object.entries(iconContents).forEach(([name, content]) => {
    const svg = generateSVG(name, content);
    fs.writeFileSync(path.join(imagesDir, `${name}.svg`), svg);
    console.log(`Generated ${name}.svg`);
  });
  
  // Generate technology images
  Object.entries(technologyIcons).forEach(([name, content]) => {
    const svg = generateSVG(name, content);
    fs.writeFileSync(path.join(technologyDir, `${name}.svg`), svg);
    console.log(`Generated technology/${name}.svg`);
  });
  
  // Generate protocol images
  Object.entries(protocolIcons).forEach(([name, content]) => {
    const svg = generateSVG(name, content);
    fs.writeFileSync(path.join(technologyDir, `${name}.svg`), svg);
    console.log(`Generated technology/${name}.svg`);
  });
  
  // Generate comparison chart
  const comparisonChart = generateSVG('comparison-chart', `
    <!-- Comparison table -->
    <rect x="50" y="50" width="300" height="200" fill="white" stroke="#e5e7eb" stroke-width="1"/>
    
    <!-- Header -->
    <rect x="50" y="50" width="300" height="30" fill="url(#gradient1)" opacity="0.8"/>
    <text x="200" y="70" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="white" font-weight="bold">Feature Comparison</text>
    
    <!-- Rows -->
    <line x1="50" y1="100" x2="350" y2="100" stroke="#e5e7eb"/>
    <line x1="50" y1="130" x2="350" y2="130" stroke="#e5e7eb"/>
    <line x1="50" y1="160" x2="350" y2="160" stroke="#e5e7eb"/>
    <line x1="50" y1="190" x2="350" y2="190" stroke="#e5e7eb"/>
    <line x1="50" y1="220" x2="350" y2="220" stroke="#e5e7eb"/>
    
    <!-- Columns -->
    <line x1="150" y1="50" x2="150" y2="250" stroke="#e5e7eb"/>
    <line x1="250" y1="50" x2="250" y2="250" stroke="#e5e7eb"/>
    
    <!-- Content -->
    <text x="100" y="95" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#1f2937">Decentralization</text>
    <text x="200" y="95" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#059669">✓ High</text>
    <text x="300" y="95" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#dc2626">✗ Low</text>
    
    <text x="100" y="125" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#1f2937">Cost</text>
    <text x="200" y="125" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#059669">✓ Low</text>
    <text x="300" y="125" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#dc2626">✗ High</text>
    
    <text x="100" y="155" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#1f2937">Coverage</text>
    <text x="200" y="155" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#059669">✓ Global</text>
    <text x="300" y="155" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#f59e0b">~ Limited</text>
    
    <text x="100" y="185" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#1f2937">Scalability</text>
    <text x="200" y="185" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#059669">✓ High</text>
    <text x="300" y="185" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#f59e0b">~ Medium</text>
  `, '400x300');
  
  fs.writeFileSync(path.join(imagesDir, 'comparison-chart.svg'), comparisonChart);
  console.log('Generated comparison-chart.svg');
  
  console.log('All images generated successfully!');
}

// Run the generation
generateAllImages(); 