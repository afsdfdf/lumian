import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Check if Sharp is installed
function checkSharpInstallation() {
  try {
    execSync('npm list sharp');
    console.log('Sharp is already installed.');
    return true;
  } catch {
    console.log('Sharp is not installed. Installing now...');
    try {
      execSync('npm install sharp --save-dev', { stdio: 'inherit' });
      console.log('Sharp installed successfully.');
      return true;
    } catch (installError) {
      console.error('Failed to install Sharp:', installError.message);
      return false;
    }
  }
}

async function convertSvgToJpg() {
  if (!checkSharpInstallation()) {
    console.error('Cannot proceed without Sharp. Please install it manually: npm install sharp --save-dev');
    return;
  }

  // Dynamically import Sharp after ensuring it's installed
  const sharp = (await import('sharp')).default;

  // Community page images
  const communityDir = path.join(__dirname, '../public/images/community');
  const svgFiles = fs.readdirSync(communityDir).filter(file => file.endsWith('.svg'));

  for (const svgFile of svgFiles) {
    const svgPath = path.join(communityDir, svgFile);
    const jpgPath = path.join(communityDir, svgFile.replace('.svg', '.jpg'));
    
    try {
      await sharp(svgPath)
        .jpeg({ quality: 90 })
        .toFile(jpgPath);
      console.log(`Converted ${svgFile} to ${svgFile.replace('.svg', '.jpg')}`);
    } catch (error) {
      console.error(`Error converting ${svgFile}:`, error.message);
    }
  }

  // OG images
  const ogDir = path.join(__dirname, '../public/images');
  const ogSvgFiles = fs.readdirSync(ogDir).filter(file => file.startsWith('og-') && file.endsWith('.svg'));

  for (const svgFile of ogSvgFiles) {
    const svgPath = path.join(ogDir, svgFile);
    const jpgPath = path.join(ogDir, svgFile.replace('.svg', '.jpg'));
    
    try {
      await sharp(svgPath)
        .jpeg({ quality: 90 })
        .toFile(jpgPath);
      console.log(`Converted ${svgFile} to ${svgFile.replace('.svg', '.jpg')}`);
    } catch (error) {
      console.error(`Error converting ${svgFile}:`, error.message);
    }
  }

  console.log('All conversions completed!');
}

convertSvgToJpg().catch(error => {
  console.error('Conversion process failed:', error.message);
}); 