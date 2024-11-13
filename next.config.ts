import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // config options here

  // experimental: {
  //   ppr: "incremental",
  // },

  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

export default nextConfig;
