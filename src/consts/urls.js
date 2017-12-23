// 不同环境后台接口url文件

const urls = (function () {
    //const ENV = "development";
    const ENV = process.env.NODE_ENV;

    const url = {
        "production": {
            url: "正式上线环境后台接口url",
        },
        "development": {
            url: "http://192.168.0.116:50007/linkingMed/saasAdmin/api/v1",
        },
        "test": {
            url: "http://test.b.passport.linkingmed.com/linkingMed/saasAdmin/api/v1",
        }
    };
    return url[ENV];
})();

export default urls;