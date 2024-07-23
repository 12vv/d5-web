/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["static-1318552943.cos.ap-singapore.myqcloud.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static-1318552943.cos.ap-singapore.myqcloud.com",
        port: "",
        pathname: "/macro/**",
      },
    ],
  },
};

module.exports = nextConfig;
