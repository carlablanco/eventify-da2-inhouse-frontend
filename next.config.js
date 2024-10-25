/** @type {import('next').NextConfig} */
const nextConfig = {
  // Esto es para el export estático para el deploy, no borrar. C.
  output: 'export',
  trailingSlash: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  }
};

module.exports = nextConfig;
