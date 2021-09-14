const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://[::1]:9292",
      secure: false,
      logLevel: "debug",
    })
  );
};
