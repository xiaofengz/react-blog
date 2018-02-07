import React, { Component } from 'react';
import { Avatar,Affix, Button, Tooltip } from 'antd';
import CodeBlock from "COMPONENTS/CodeBlock";
import  ReactMarkdown from 'react-markdown';
import head from '../../../static/img/head.jpg';
import a from './test.js'
import './index.less'
class ArticleDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount () {
        var btn = document.getElementById('btn');
        var timer = null;
        var isTop = true;
        //获取页面可视区高度
        var clientHeight = document.documentElement.clientHeight;
       
         
        //滚动条滚动时触发
        window.onscroll = function() {
        //显示回到顶部按钮
          var osTop = document.documentElement.scrollTop || document.body.scrollTop;
          if (osTop >= clientHeight/2) {
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
        return ( 
            <div className="articleDetail-container">
                <div className="post">
                    <div className="article">
                        <h1 className="title">react生命周期的基本用法</h1>
                        <div className="author">
                            <Avatar size={'large'} src={head}/>
                            <div className="info">
                                <span className="name">
                                Evan_zhan
                                </span>
                                <div className="meta">
                                "2018.02.06 18:08*
最后编辑于 2018.02.06 18:10
 字数 15 阅读 2评论 0喜欢 1"
                                </div>
                            </div>
                        </div>
                        <div className="show-content">
                            <ReactMarkdown className="result" 
                                source={a}  
                                renderers={{code: CodeBlock}}
                            />
                        </div>
                    </div>
                </div>
                <Tooltip placement="left" title={"回到顶部"}>
                    <button id="btn" className="returnTop" style={{position:"fixed",right:"50px",bottom:"50px"}} onClick={this.backToTop.bind(this)}>
                        <i className="iconfont icon-xiangshang"></i>
                    </button>
                </Tooltip>
            </div>
         )
    }
}
 
export default ArticleDetail;