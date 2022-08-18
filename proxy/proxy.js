import httpProxy from "http-proxy";

const proxy = httpProxy
  .createProxyServer({
    secure: false,
    changeOrigin: true,
    target: "http://localhost:4200",
    // could be an IP address target: 'https://XX.XX.XXX.XXX/',
  })
  .listen(3500, () => console.log("Proxy running on port 3500"));

// Intercepts the request
proxy.on("proxyReq", function (proxyReq, req, res, options) {
  console.log(req);
  // Set the headers of the intercepted request
  proxyReq.setHeader("Origin", "http://localhost:5000");
  // remove any headers you want
  // proxyReq.removeHeader('authorization');
  res.oldWriteHead = res.writeHead;
  res.writeHead = function (statusCode, headers) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.oldWriteHead(statusCode, headers);
  };
});
