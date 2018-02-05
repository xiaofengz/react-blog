import React, { Component } from 'react';
import { Breadcrumb } from 'antd';
import "./index.less"

class ArticleManage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="userManage-container">
                <div className="manage-title">
                    <Breadcrumb>
                        <Breadcrumb.Item>个人中心</Breadcrumb.Item>
                        <Breadcrumb.Item>文章管理</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                
            </div>
         )
    }
}
 
export default ArticleManage;