/*
module.exports = function (app) {
const { createProxyMiddleware } = require('http-proxy-middleware')
app.use(
    '/api/',
    createProxyMiddleware({
        changeOrigin: true,
        secure: false,
        logLevel: "debug",
        target: "http://localhost:8080",
        onError: function onError(err, req, res) {
            res.statusMessage(404).json({ Error: '404 - Not Found - HPM Proxy' })
        }
    })
)

}
*/
const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api/',
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true,
      secure: false,
      logLevel: 'debug',
    })
  );
};