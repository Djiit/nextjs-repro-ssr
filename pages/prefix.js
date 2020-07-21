export const getPrefixedPath = (path) =>
  process.env.ASSET_PREFIX !== "" ? `${process.env.ASSET_PREFIX}${path}` : path;