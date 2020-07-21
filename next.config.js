const assetPrefix = process.env.VERCEL_URL ? "/app" : "";

module.exports = {
  assetPrefix,
  env: {
    ASSET_PREFIX: assetPrefix,
  },
};
