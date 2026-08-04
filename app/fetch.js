const https = require('https');

https.get('https://azmortgagebrothers.com/faq/', {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
  }
}, (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    if(res.statusCode !== 200) {
      console.log('Failed with status: ' + res.statusCode);
    } else {
      console.log('Success, length: ' + data.length);
      const fs = require('fs');
      fs.writeFileSync('faq.html', data);
    }
  });
}).on('error', (e) => {
  console.error(e);
});
