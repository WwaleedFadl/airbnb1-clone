import type { NextConfig } from "next";


const nextConfig: NextConfig = {
 experimental: {
        appDir: true
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
