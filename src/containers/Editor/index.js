import React, { Component } from 'react';
import { Row, Col,Input,Button,Notification } from 'antd';
import Write from 'CONTAINERS/Write';
import Markdown from './EditorMarkdown';
import ArticleService from 'SERVICES/ArticleService';
import './index.less';

class Editor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title:'',
            content:'',
            userArticle:[],     //当前用户文章列表，用于左侧显示
            article:[],          // 当前选择的文章
        }
    }
    componentDidMount () {
        // 获取左侧当前用户文章列表
        ArticleService.pullUserArticle({
        }).then((data)=>{
            this.setState({
                userArticle:data.data
            })
            console.log("文章res",data)
            // Notification.success({message:data.message})
            // this.context.router.push('/')
        }).catch((err)=>{
            console.log("文章res",err)
            // Notification.error({message:err.message})
        })

        // 文章管理 编辑--跳转 默认显示当前编辑文章
        ArticleService.pullArticle({
            id:this.props.location.state.id
        }).then((data)=>{
            this.setState({
                // currentArticle:data.data[0],
                article:data.data[0],
                title:data.data[0].title,
                content:data.data[0].content,
            })
        }).catch((err)=>{
            Notification.error({message:err.message})
        })
    }
    //保存文章
    saveArticle () {
        const { title,article, content } = this.state
        if (title === '') {
            this.titleInput.focus();
            Notification.error({message:"请填写文章标题"})
            return;
        }
        let obj = {}
        obj.id = article.id
        obj.title = title
        obj.content = content
        obj.type = "react"        // 类型 暂时先写死
        obj.isPublish = false    //保存
        ArticleService.addArticle({
            obj
        }).then((data)=>{
            console.log("登录成功res",data)
            Notification.success({message:data.message})
            this.context.router.push('/')
        }).catch((err)=>{
            console.log("登录失败res",err)
            Notification.error({message:err.message})
        })
        console.log(obj)
    }
    // 发布文章
    publishArticle () {
        const { title,article, content } = this.state
        let obj = {}
        obj.id = article.id
        obj.title = title
        obj.content = content
        obj.type = "react"        // 类型 暂时先写死
        obj.isPublish = true

        console.log(obj)
    }
    onChangeContent (content) {
        this.setState({
            content:content
        })
    }
    onChangeUserName = (e) => {
        this.setState({ title: e.target.value });
    }
    // 选择单篇文章
    handleOnSelectArticle (item) {
        this.setState({
            currentArticle:item.id,
            title:item.title,
            content:item.content
        })
        // 获取当前文章
        const articleId = this.props.params.id
        ArticleService.pullArticle({
            id:item.id
        }).then((data)=>{
            this.setState({
                article:data.data[0],
            })
        }).catch((err)=>{
            Notification.error({message:err.message})
        })
    }
    // 新建文章
    addNewArticle () {
        this.setState({
            article:[],
            title:""
        })
    }
    render () {
        const { title, userArticle,currentArticle } = this.state
        return (
            <div className="body" >
                <Row>
                    <Col span={6}>
                    <div className="editArticle-title-div">
                        <div className="editArticle-title-add" onClick={ this.addNewArticle.bind(this) }>
                            <i className="iconfont icon-tianjia"></i>
                            <span >
                                新建文章
                            </span>
                        </div>
                        <ul className="editArticle-title-ul">
                                {  
                                    userArticle && userArticle.map((item, i) => {
                                        return (
                                            <li key={item.id} className={currentArticle === item.id ? "article-li-select":"article-li"}
                                            onClick={this.handleOnSelectArticle.bind(this,item)}>
                                                <span>{item.title}</span>
                                            </li>
                                            
                                        )
                                    })
                                }
                        </ul>
                    </div>
                    </Col>
                    <Col span={18} className="editArticle-18">
                    <Input type="text" placeholder="请输入文章标题..." style={{width:"50%"}} ref={(input) => this.titleInput = input} value={title} onChange={this.onChangeUserName}/>
                    {/* <Button style={{float:"right",right:"20px"}} onClick={this.publishArticle.bind(this)}>发布</Button>  */}
                    <Button style={{float:"right",right:"20px"}} onClick={this.saveArticle.bind(this)}>发布</Button> 
                    <Markdown onChangeContent={this.onChangeContent.bind(this)} {...this.state}/>
                    </Col>
                </Row>
            </div>
        )
    }
}
Editor.contextTypes = {
    router: React.PropTypes.object
}
export default Editor;