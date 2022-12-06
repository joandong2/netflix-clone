/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ["api.themoviedb.org", "image.tmdb.org"],
  },
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
};
