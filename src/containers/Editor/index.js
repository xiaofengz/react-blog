import React, { Component } from 'react';
import { Row, Col,Input,Button } from 'antd';
import Write from 'CONTAINERS/Write';
import Markdown from './EditorMarkdown'
class Editor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title:'',
            content:''
        }
    }
    //保存文章
    saveArticle () {
        const { title, content } = this.state
        let obj = {}
        obj.title = title
        obj.content = content
        obj.type = "react"        // 类型 暂时先写死
        obj.isPublish = false    //保存
        console.log(obj)
    }
    // 发布文章
    publishArticle () {
        const { title, content } = this.state
        let obj = {}
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
    render () {
        const { title } = this.state
        return (
            <div className="body" >
                <Row>
                    <Col span={6}>新建文章</Col>
                    <Col span={18}>
                    <Input type="text" placeholder="请输入文章标题..." style={{width:"50%"}} value={title} onChange={this.onChangeUserName}/>
                    <Button style={{float:"right",right:"20px"}} onClick={this.publishArticle.bind(this)}>发布</Button> 
                    <Button style={{float:"right",right:"20px"}} onClick={this.saveArticle.bind(this)}>保存</Button> 
                    <Markdown onChangeContent={this.onChangeContent.bind(this)}/>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Editor;