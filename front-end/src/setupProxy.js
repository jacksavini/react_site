const { createProxyMiddleware } = require('http-proxy-middleware');

const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5001';

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: backendUrl,
      changeOrigin: true
    })
  );
};