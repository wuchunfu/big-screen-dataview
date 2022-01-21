
// https://cli.vuejs.org/zh/config/

module.exports = {
    publicPath: './',
    assetsDir: './dist/',
    outputDir: "docs",
    lintOnSave: false,
    productionSourceMap: false,
    devServer: {
        port: 20000
    },
    chainWebpack: config => {
        config.module
            .rule('c')
            .test(/\.c$/)
            .use('@etcpack/plain-loader')
            .loader('@etcpack/plain-loader')
            .end()
    }
}
