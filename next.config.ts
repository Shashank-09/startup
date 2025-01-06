import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    dangerouslyAllowSVG : true,
    remotePatterns : [
      {
        protocol : 'https',
        hostname : '*',
      }
    ]
  },
  experimental : {
    ppr: true,
    },
  devIndicators : {
    appIsrStatus : true,
    buildActivity : true,
    buildActivityPosition : "bottom-right"
  }
};

export default nextConfig;
