/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    {
      source: "/",
      destination: "/room",
      permanent: true,
    },
  ],
};

export default nextConfig;
