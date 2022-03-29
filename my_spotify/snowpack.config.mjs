/** @type {import("snowpack").SnowpackUserConfig } */
import proxy from 'http2-proxy';
export default {
  mount: {
    /* ... */
  },
  plugins: [
    /* ... */
  ],
  routes: [
    {
      match : "all",
      src: '/api/.*',
      dest: (req, res) => {
        // remove /api prefix (optional)
        req.url = req.url.replace('/api/', '/')

        return proxy.web(req, res, {
          hostname: 'localhost',
          port: 80,
        });
      },
    },
    {
      match: "routes",
      src: ".*",
      dest: '/index.html'
    },
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};


