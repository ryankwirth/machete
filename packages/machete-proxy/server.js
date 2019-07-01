// Listen on a specific host via the HOST environment variable
const host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable
const port = process.env.PORT || 9000;

const corsProxy = require('cors-anywhere');
corsProxy.createServer({
  originWhitelist: ['http://localhost:8080'],
  requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: ['origin'],
  setHeaders: {
    'referer': 'https://music.youtube.com',
    'user-agent': 'Machete/0.1',
  },
}).listen(port, host, function() {
  console.log('Running CORS Anywhere on ' + host + ':' + port);
});
