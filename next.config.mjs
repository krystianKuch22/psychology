/** @type {import('next').NextConfig} */
const nextConfig = {
  //
  async rewrites() {
    return [
      {
        source: "/api/:path*", // Ścieżka lokalna
        destination: "http://api.limbaapp.usermd.net/:path*", // Docelowe API
      },
    ];
  },
  //
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
