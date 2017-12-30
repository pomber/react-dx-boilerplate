const proxy = require("http-proxy-middleware");
const packageJson = require("../package.json");

module.exports = function expressMiddleware(router) {
  const proxyConfig = packageJson.proxy || {};

  if (typeof proxyConfig === "string") {
    router.use("/", proxy(proxyConfig));
  }

  for (let domain in proxyConfig) {
    if (typeof proxyConfig[domain] === "string") {
      console.log(domain);
      router.use(
        domain,
        proxy({
          target: proxyConfig[domain]
        })
      );
    } else {
      router.use(domain, proxy(proxyConfig[domain]));
    }
  }
};
