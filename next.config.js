/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        hostname: "media.graphassets.com",
      },
    ],
  },
};
