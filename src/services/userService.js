import xhr from "UTILS/xhr";
import urls from "CONSTS/urls";

class UserService {
  constructor() {
      this.url = urls["url"];
    }
    // 请求demo1
  fetchSomeData(data) {
    return xhr({
      method: "post",
      url: "http://dev.teamedicine.linkingmed.com/rtcooperation/api/v2/users/get/users/uid",
      data: {
        ...data
      }
    });
  }
}

export default new UserService();