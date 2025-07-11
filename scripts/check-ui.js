// 检查UI是否正常的脚本
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

console.log('检查所有页面是否正常加载...');

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
        
        // 检查页面内容是否包含常见的错误标记
        const hasError = data.includes('Error:') || 
                        data.includes('ReferenceError:') ||
                        data.includes('TypeError:') ||
                        data.includes('SyntaxError:');
        
        resolve({
          path,
          status,
          success: isSuccess && !hasError,
          hasError,
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
      if (result.success) {
        console.log(`✅ ${result.path} - 状态: ${result.status} - 大小: ${result.size} 字节`);
      } else {
        console.log(`❌ ${result.path} - 状态: ${result.status} - 错误: ${result.hasError ? '页面包含错误' : '未知问题'}`);
      }
    } catch (error) {
      console.error(`❌ ${error.path} - 错误: ${error.error}`);
      results.push(error);
    }
  }
  
  const allSuccess = results.every(result => result.success);
  
  if (allSuccess) {
    console.log('\n✅ 所有页面都正常加载！');
  } else {
    console.log('\n❌ 部分页面存在问题:');
    results
      .filter(result => !result.success)
      .forEach(result => {
        console.log(`  - ${result.path}: ${result.error || `状态 ${result.status}`}`);
      });
  }
}

checkAllPages().catch(error => {
  console.error('检查页面时出错:', error);
  process.exit(1);
}); 