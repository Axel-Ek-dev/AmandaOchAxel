/** @type {import('next').NextConfig} */
const repoBasePath =
  process.env.NEXT_PUBLIC_BASE_PATH ||
  (process.env.GITHUB_PAGES ? '/AmandaOchAxel' : undefined)

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Each page exported as its own directory (e.g. /rsvp/index.html)
  trailingSlash: true,
  // When deploying to GitHub Pages (or any sub-path host) set NEXT_PUBLIC_BASE_PATH.
  // `output: 'export'` tells `next build` to emit the static `out/` folder
  // instead of requiring a Node.js server – no longer need `next export`.
  ...(repoBasePath && {
    output: 'export',
    basePath: repoBasePath,
    assetPrefix: repoBasePath,
  }),
}

module.exports = nextConfig
