import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to create a simple SVG with text
function createSVG(width, height, bgColor, text, textColor = '#ffffff') {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="${bgColor}"/>
    <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" font-weight="bold" 
      text-anchor="middle" dominant-baseline="middle" fill="${textColor}">${text}</text>
  </svg>`;
}

// Create directory if it doesn't exist
function ensureDirectoryExists(directory) {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }
}

// Community page images
const communityImages = [
  { name: 'ambassador.jpg', text: 'Ambassador Program', color: '#3B82F6' },
  { name: 'developer.jpg', text: 'Developer Grants', color: '#10B981' },
  { name: 'events.jpg', text: 'Community Events', color: '#8B5CF6' },
  { name: 'education.jpg', text: 'Education Program', color: '#F59E0B' },
];

// Create community images
const communityDir = path.join(__dirname, '../public/images/community');
ensureDirectoryExists(communityDir);

communityImages.forEach(img => {
  const svgContent = createSVG(800, 400, img.color, img.text);
  fs.writeFileSync(path.join(communityDir, img.name.replace('.jpg', '.svg')), svgContent);
  console.log(`Created ${img.name.replace('.jpg', '.svg')}`);
});

// Create OG image for community page
const ogDir = path.join(__dirname, '../public/images');
ensureDirectoryExists(ogDir);
const ogSvgContent = createSVG(1200, 630, '#4F46E5', 'AetherLink Community');
fs.writeFileSync(path.join(ogDir, 'og-community.svg'), ogSvgContent);
console.log('Created og-community.svg');

// Create OG image for roadmap page
const ogRoadmapContent = createSVG(1200, 630, '#6366F1', 'AetherLink Roadmap');
fs.writeFileSync(path.join(ogDir, 'og-roadmap.svg'), ogRoadmapContent);
console.log('Created og-roadmap.svg');

console.log('All placeholder SVGs created successfully!'); 