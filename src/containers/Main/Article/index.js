import React, { Component } from 'react';
import { Avatar  } from "antd";
import Tcarousle from "COMPONENTS/Tcarousle";
import { Link } from "react-router"
import img1 from "../../../../static/img/article-1.jpg"
import img2 from "../../../../static/img/article-2.jpg"
import img3 from "../../../../static/img/article-3.jpg"
import img4 from "../../../../static/img/article-4.jpg"

import testArticle from "./test.js"
import "./index.less";
class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const imgArr = [img1,img2,img3,img4];
        return ( 
            <div className="article-container">
                <div className="article-caroucel">
                    <Tcarousle content={imgArr}/>
                </div>
                <div className="article-content">
                    <ul className="article-content-ul">
                    {
                        testArticle && testArticle.map((item,i) => {
                           return <li key={item.id} className="article-content-li">
                                <div className="note-content">
                                    <div className="author">
                                        <Avatar  src={item.user.img} />
                                        <div className="author-info">
                                            <a href="">{item.user.name}</a>
                                            <span>{ item.user.time }</span>
                                        </div>
                                    </div>
                                    <Link to={`/articleDetail/${item.id}`} className="note-title"> { item.title } </Link>
                                    <p className="note-abstract"> { item.content } </p>
                                    <div className="note-footer">
                                        <a href="" className="footer-type">{ item.type }</a>
                                        <i className="iconfont icon-yanjing-tianchong"></i>
                                        <a href="" className="footer-readNum"> { item.readNum } </a>
                                        <i className="iconfont icon-xiaoxi"></i>
                                        <a href="" className="footer-commentNum"> { item.commentNum } </a>
                                        <i className="iconfont icon-aixin"></i>
                                        <a href="" className="footer-agree"> { item.agree } </a>
                                    </div>
                                </div>
                            </li>
                        })
                    }
                    </ul>
                    
                </div>
            </div>
         )
    }
}
 
export default Article;