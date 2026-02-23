import axios from 'axios';

const maliciousConfig = JSON.parse('{"__proto__": {"x": 1}}');

axios.get('https://httpbin.org/get', maliciousConfig)
  .then(res => {
    console.log('Request succeeded, status:', res.status);
  })
  .catch(err => {
    console.error('Request failed:');
    console.error(err && err.stack || err);
    process.exit(1);
  });
