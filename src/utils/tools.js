// 存放公共方法

/*
 * 移除cookie
 *
 * @param string 需要移除cookie名称
 * @param string 需要移除的域
 * @param string 需要移除的路径
 * @return 没有
 * */
export const removeCookie = (name, domain = location.host, path = '/') => {    //name,domain,path
    document.cookie = name + '=' + '' + ';expires=' + new Date(0) + ';path=' + path + ';domain=' + domain;
};

/*
 * 移除cookie
 * @param string 需要移除空格的字符串
 * @return 没有前后空格的字符串
 * */
export const removeSpace = (str) => {
    return str.replace(/(^\s+)|(\s+$)/ig, '')
};

/*
 * 生成 * 号
 * @param number , 输入*号的个数
 * @return string
 * */
export const asterisk = (num) => {
    let asteriskStr = '';
    for (let i = 0; i < num; i++) {
        asteriskStr += "*";
    }
    return asteriskStr;
};

/*
 * 将字符串通过某种变换成另一种字符串
 *
 * @param string 需要变换的字符串
 * @param callBack 自定义的变换函数，参数代入一个charCode返回变换后的字符
 * @return string 变换后的字符串
 * */
export const transformStrByUnicode = (str, callBack) => {
    let arr = str.split('').map((single) => {
        let code = single.charCodeAt(0);
        if (callBack && callBack instanceof Function) {
            code = callBack(code)
        } else {
            code = (code * 3 + 3) % 26 + 97;
        }
        return String.fromCharCode(code);
    });
    return arr.join('');
};

/*
 * 将所有table接口返回的数据，数组的每一项加key，值与id相等，用于展示
 *
 * @param data reponse的datalist
 * */
export const transformResponseList = (data) => {
    for (let i = 0; i < data.length; i++) {
         data[i].key = data[i].id;
        if ('children' in data[i]) {
            transformResponseList(data[i].children)
        }
    }
    return data
}