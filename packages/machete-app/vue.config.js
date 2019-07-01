module.exports = {
    chainWebpack: (config) => config.resolve.symlinks(false),
    productionSourceMap: false
};
