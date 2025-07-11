const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Path to the public/images directory
const imagesDir = path.join(__dirname, '../public/images');

// Function to create a placeholder OpenGraph image
async function createOgImage(name, color, text) {
  try {
    const outputPath = path.join(imagesDir, `${name}.jpg`);
    
    console.log(`Creating ${outputPath}`);
    
    // Create a 1200x630 image with the specified color
    const width = 1200;
    const height = 630;
    
    // Create a buffer with the specified color
    const svgImage = `
      <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${width}" height="${height}" fill="${color}"/>
        <text x="${width/2}" y="${height/2}" font-family="Arial" font-size="60" text-anchor="middle" fill="white">${text}</text>
      </svg>
    `;
    
    // Convert SVG buffer to JPG
    await sharp(Buffer.from(svgImage))
      .jpeg({
        quality: 90
      })
      .toFile(outputPath);
    
    console.log(`Successfully created ${name}.jpg`);
    return outputPath;
  } catch (error) {
    console.error(`Error creating ${name}.jpg:`, error);
    return null;
  }
}

// Create all OpenGraph images
async function createAllOgImages() {
  try {
    // Create the images directory if it doesn't exist
    if (!fs.existsSync(imagesDir)) {
      fs.mkdirSync(imagesDir, { recursive: true });
    }
    
    // Define the images to create
    const images = [
      { name: 'og-home', color: '#3B82F6', text: 'AetherLink - Home' },
      { name: 'og-about', color: '#10B981', text: 'AetherLink - About' },
      { name: 'og-technology', color: '#6366F1', text: 'AetherLink - Technology' },
      { name: 'og-resources', color: '#EC4899', text: 'AetherLink - Resources' },
      { name: 'og-contact', color: '#F59E0B', text: 'AetherLink - Contact' },
    ];
    
    console.log(`Creating ${images.length} OpenGraph images...`);
    
    // Create each image
    const results = await Promise.all(
      images.map(img => createOgImage(img.name, img.color, img.text))
    );
    
    const successCount = results.filter(Boolean).length;
    console.log(`Successfully created ${successCount} out of ${images.length} images.`);
  } catch (error) {
    console.error('Error creating images:', error);
  }
}

// Run the function
createAllOgImages(); 