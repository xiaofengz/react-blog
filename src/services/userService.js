import xhr from "UTILS/xhr";
import urls from "CONSTS/urls";

class UserService {
  constructor() {
      this.url = urls["url"];
    }
    // 请求demo1
  fetchSomeData(data) {
    return xhr({
      method: "get",
      url: "http://127.0.0.1:9001/users/getUserInfo",
      params: {
        ...data
      }
    });
  }
}

export default new UserService();