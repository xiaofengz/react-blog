import xhr from "UTILS/xhr";
import urls from "CONSTS/urls";

class ArticleService {
  constructor() {
      this.url = urls["url"];
    }
    // 发布文章
    addArticle (data) {
      return xhr({
        method: "post",
        url: "http://127.0.0.1:9001/article/addArticle",
        data: {
          ...data
        }
      });
    }
    // 主页文章
    pullIndexArticle (data) {
      return xhr({
        method: "post",
        url: "http://127.0.0.1:9001/article/pullIndexArticle",
        data: {
          ...data
        }
      });
    }
    // 单篇文章
    pullArticle(data) {
      return xhr({
        method: "post",
        url: "http://127.0.0.1:9001/article/pullArticle",
        data: {
          ...data
        }
      });
    }
}

export default new ArticleService();