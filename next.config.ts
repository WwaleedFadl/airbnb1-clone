import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false
      }
    }
    return config
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      'avatars.githubusercontent.com'
      , 'lh3.googleusercontent.com'
      , "res.cloudinary.com"
    ]
  }
};

export default nextConfig;
