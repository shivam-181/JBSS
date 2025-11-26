/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "ufs.sh",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "jbss.org.in", // <--- Added this new domain
        pathname: "/**"
      }
    ]
  },
  compress: true,
  poweredByHeader: false,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;