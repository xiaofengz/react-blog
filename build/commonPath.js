var path = require('path');

var rootPath = path.resolve(__dirname, '..'),             // 项目根目录
    dist = path.join(rootPath, 'dist'),                   // build后输出目录
    src = path.join(rootPath, 'src'),                     // 开发源码目录
    distDir = path.join(dist, ''),                        // build后JS文件输出目录
    indexHTML = path.join(src, 'index.html'),             // 入口基页
    staticDir = path.join(rootPath, 'lib'),               // 无需处理的静态资源目录
    entry = path.join(src, 'app.js'),                  // 主入口文件
    output = path.join(dist, ''),                         // 主入口文件输出目录
    publicPath = './',                                    // 输出html引用文件基准路径
    buildPath = path.join(rootPath, 'build'),             // build文件目录
    libPath = path.join(rootPath, 'lib'),                 // 第三方库文件目录
    lessPath = path.join(src, 'less'),                    // less文件目录
    cssPath = path.join(src, 'css'),                      // css文件目录
    fontPath = path.join(src, 'fonts'),                   // font文件目录
    imgPath = path.join(src, 'img'),                      // img文件目录
    daoPath = path.join(src, "dao"),                       // dao文件目录
    dataPath = path.join(src, "data"),                    // 测试数据文件目录
    utilsPath = path.join(src, "utils"),               // 工具类文件目录
    constsPath = path.join(src, "consts"),             // 常量类文件目录
    actionsPath = path.join(src, "redux/actions"),     // actions文件目录
    servicesPath = path.join(src, "services"),         // services文件目录
    componentsPath = path.join(src, "components");     // components文件目录
    containersPath = path.join(src, "containers");     // containers文件目录

module.exports = {
    src,
    dist,
    entry,
    output,
    distDir,
    daoPath,
    cssPath,
    imgPath,
    libPath,
    dataPath,
    fontPath,
    lessPath,
    rootPath,
    indexHTML,
    utilsPath,
    staticDir,
    buildPath,
    constsPath,
    publicPath,
    actionsPath,
    servicesPath,
    componentsPath,
    containersPath
};
