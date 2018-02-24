import React, { Component } from 'react';
import { Avatar,Affix, Button, Tooltip } from 'antd';
import Tcarousle from "COMPONENTS/Tcarousle";
import { Link } from "react-router"
import img1 from "../../../../static/img/article-1.jpg"
import img2 from "../../../../static/img/article-2.jpg"
import img3 from "../../../../static/img/article-3.jpg"
import img4 from "../../../../static/img/article-4.jpg"
import ArticleService from 'SERVICES/ArticleService';
import testArticle from "./test.js";
import moment from 'moment';
import "./index.less";
class Article extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            article:[]     // 首页文章
         }
    }
    componentDidMount () {
        moment.locale('zh-cn');
        ArticleService.pullIndexArticle({
        }).then((data)=>{
            this.setState({
                article:data.data
            })
            console.log("文章res",data)
            // Notification.success({message:data.message})
            // this.context.router.push('/')
        }).catch((err)=>{
            console.log("文章res",err)
            // Notification.error({message:err.message})
        })
        var btn = document.getElementById('btn1');
        var timer = null;
        var isTop = true;
        //获取页面可视区高度
        var clientHeight = document.documentElement.clientHeight;
       
         
        //滚动条滚动时触发
        window.onscroll = function() {
        //显示回到顶部按钮
          var osTop = document.documentElement.scrollTop || document.body.scrollTop;
          if (osTop >= clientHeight/4) {
            btn.style.display = "block";
          } else {
            btn.style.display = "none";
          };
        //回到顶部过程中用户滚动滚动条，停止定时器
          if (!isTop) {
            clearInterval(this.interval);
          };
          isTop = false;
        };
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    backToTop () {
       this.interval =  setInterval(() => {
            console.log("定时循环回到顶部")
            var top = document.body.scrollTop || document.documentElement.scrollTop;
            var speed = top / 10;
            if (document.body.scrollTop!=0) {
                document.body.scrollTop -= speed;
            }else {
                document.documentElement.scrollTop -= speed;
            }
            if (top == 0) {
                clearInterval(this.interval);
            }
        }, 30); 
        // document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
    render() { 
        const { article } = this.state
        const imgArr = [img1,img2,img3,img4];
        return ( 
            <div className="article-container">
                <div className="article-caroucel">
                    <Tcarousle content={imgArr}/>
                </div>
                <div className="article-content">
                    <ul className="article-content-ul">
                    {
                        article && article.map((item,i) => {
                           return <li key={item.id} className="article-content-li">
                                <div className="note-content">
                                    <div className="author">
                                        <Avatar  src={item.author ? item.author.img : img1} />
                                        <div className="author-info">
                                            <a href="">{item.author ? item.author.name : ""}</a>
                                            <span>{ item.author ? moment(item.author.time).fromNow() :""}</span>
                                        </div>
                                    </div>
                                    <Link to={{pathname:`/articleDetail/${item.id}`,params:{id:item.id}}} className="note-title"> { item.title } </Link>
                                    <p className="note-abstract"> { item.content } </p>
                                    <div className="note-footer">
                                        <a href="" className="footer-type">{ item.type }</a>
                                        <i className="iconfont icon-yanjing-tianchong"></i>
                                        <a href="" className="footer-readNum"> { item.readNum || 0} </a>
                                        <i className="iconfont icon-xiaoxi"></i>
                                        <a href="" className="footer-commentNum"> { item.commentNum || 0} </a>
                                        <i className="iconfont icon-aixin"></i>
                                        <a href="" className="footer-agree"> { item.agree || 0} </a>
                                    </div>
                                </div>
                            </li>
                        })
                    }
                    </ul>
                </div>
                <Tooltip placement="left" title={"回到顶部"}>
                    <button id="btn1" className="returnTop" type="primary" style={{position:"fixed",right:"50px",bottom:"50px",display:"none"}} onClick={this.backToTop.bind(this)}>
                        <i className="iconfont icon-xiangshang"></i>
                    </button>
                </Tooltip>
                    
            </div>
         )
    }
}
 
export default Article;