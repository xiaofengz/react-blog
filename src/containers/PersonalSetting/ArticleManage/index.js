import React, { Component } from 'react';
import { Breadcrumb, Card, Table } from 'antd';
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
                <Card title="文章列表" style={{ marginBottom: 24 }} bordered={false}>
                    <Table dataSource={dataSource} columns={columns} />
                </Card>
            </div>
         )
    }
}
 
export default ArticleManage;

const dataSource = [{
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号'
  }, {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
  }];
  
  const columns = [{
    title: '文章',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: '上次修改时间',
    dataIndex: 'age',
    key: 'age',
  }, {
    title: '作者',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '操作',
    dataIndex: 'action',
    fixed: 'right',
    width: '110px',
    className: 'table-operation',
    render: (values) => (
        <div >
            <span style={{width: "54px"}} >查看</span>
            <span style={{width: "54px"}} >编辑</span>
            <span style={{width: "54px"}} >删除</span>
        </div>)
  }
];