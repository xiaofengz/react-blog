import xhr from "UTILS/xhr";
import urls from "CONSTS/urls";

class UserService {
  constructor() {
      this.url = urls["url"];
    }
    // 请求用户信息
    fetchUserInfo(data) {
    return xhr({
      method: "get",
      url: "http://127.0.0.1:9001/users/getUserInfo",
      params: {
        ...data
      }
    });
  }
  // 登陆
    login (data) {
      return xhr({
        method: "post",
        url: "http://127.0.0.1:9001/users/login",
        data: {
          ...data
        }
      });
    }
  // 修改用户信息
  updateUserInfo (data) {
    return xhr({
      method: "post",
      url: "http://127.0.0.1:9001/users/updateUserInfo",
      data: {
        ...data
      }
    });
  }
}

export default new UserService();