// module.exports = {};
module.exports = {
    css: {
        requireModuleExtension: false
    },
    devServer: {
        compress: true,
        disableHostCheck: true // That solved it
    }
};