// Script to check all pages for errors
import http from 'http';

const pages = [
  '/',
  '/about',
  '/technology',
  '/tokenomics',
  '/roadmap',
  '/community',
  '/resources',
  '/contact'
];

const port = 3000;
const host = 'localhost';

console.log('Checking all pages for errors...');

async function checkPage(path) {
  return new Promise((resolve, reject) => {
    const options = {
      host,
      port,
      path,
      method: 'GET',
    };

    const req = http.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        const status = res.statusCode;
        const isSuccess = status >= 200 && status < 300;
        resolve({
          path,
          status,
          success: isSuccess,
          size: data.length
        });
      });
    });
    
    req.on('error', (error) => {
      reject({
        path,
        error: error.message
      });
    });
    
    req.end();
  });
}

async function checkAllPages() {
  const results = [];
  
  for (const page of pages) {
    try {
      const result = await checkPage(page);
      results.push(result);
      console.log(`✅ ${result.path} - Status: ${result.status} - Size: ${result.size} bytes`);
    } catch (error) {
      console.error(`❌ ${error.path} - Error: ${error.error}`);
      results.push(error);
    }
  }
  
  const allSuccess = results.every(result => result.success);
  
  if (allSuccess) {
    console.log('\n✅ All pages are working correctly!');
  } else {
    console.log('\n❌ Some pages have errors:');
    results
      .filter(result => !result.success)
      .forEach(result => {
        console.log(`  - ${result.path}: ${result.error || `Status ${result.status}`}`);
      });
  }
}

checkAllPages().catch(error => {
  console.error('Error checking pages:', error);
  process.exit(1);
}); 