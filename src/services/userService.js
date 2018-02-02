import xhr from "UTILS/xhr";
import urls from "CONSTS/urls";

class UserService {
  constructor() {
      this.url = urls["url"];
    }
    // 请求用户信息demo
    fetchUserInfo(data) {
    return xhr({
      method: "get",
      url: "http://127.0.0.1:9001/users/getUserInfo",
      params: {
        ...data
      }
    });
  }
    login (data) {
      return xhr({
        method: "post",
        url: "http://127.0.0.1:9001/users/login",
        data: {
          ...data
        }
      });
    }
}

export default new UserService();