/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || "https://citegraph.org",
    changefreq: "daily",
    generateRobotsTxt: true, // (optional)
  };
  