module.exports = {
    appDir: '.',
    baseUrl: 'js',
    dir: '../assets',
    skipDirOptimize: true,
    mainConfigFile: ['./require-config.js'],
    modules: [
        {
            name: 'indexpage',
            exclude: ['normalize'],
            insertRequire: ["indexpage"]
        }
    ],
    paths: {
        jquery: "empty:"
    },
    optimizeCss: "standard",
    removeCombined: true,
    fileExclusionRegExp: /^(r.js|buildconfig.js|node_modules|package.json|gulpfile.js)$/,
    writeBuildTxt: false
};
