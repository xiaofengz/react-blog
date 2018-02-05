import React, { Component } from 'react';
import { Menu, Icon, Button } from 'antd';
import {Link} from "react-router";
import { Layout  } from "antd";
import './index.less'
const { Header, Sider, Content } = Layout;
class PersonalSetting extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.menus = [
            {
                name:"用户管理",
                className:"userManage",
                path:"personalSetting/userManage",
                icon:"icon-yonghuguanli",
                key:1
            },
            {
                name:"文章管理",
                className:"articleManage",
                path:"personalSetting/articleManage",
                icon:"icon-wenzhang2",
                key:2
            },
        ]
    }
    handleClick(e) {
        this.setState({
            current: e.key,
        });
    }
    getMenuItem(menus) {
        return menus.map((item, index) => {
            return (
                <Menu.Item key={item.key} className={`tiny-menu-item ${item.className}`} data={item.path} name={item.name} style={{"height": "50px", paddingLeft: "0px"}}>
                    {/* <i className="iconfont" style={{"marginRight":"21px","fontSize":"23px","verticalAlign":"middle"}} dangerouslySetInnerHTML={{__html: tabItem.iconfont}} ></i> */}
                    <Link to={item.path} activeClassName="menus-active">
                        <i className={`iconfont ${item.icon}`} style={{fontSize: "27px", marginRight: "21px",color:"#ea6f5a"}}/>
                        <span className="tab-span">{item.name}</span>
                    </Link>
                </Menu.Item>
            )
        })
    }
    render() { 
        return ( 
            // <div className="personal-container">
                <Layout style={{marginTop:"-30px"}}>
                    <Sider style={{ overflow: 'auto', height: '100vh', background:"#ffff"}}>
                    <Menu
                        mode="inline"
                        selectedKeys={[this.state.current]}
                        onClick={this.handleClick.bind(this)}
                        style={{width: '100%',}}
                    >
                    { this.getMenuItem(this.menus) }
                    </Menu>
                    </Sider>
                    <Content style={{ }}>
                        {this.props.children}
                    </Content>
                </Layout>
            // </div>
         )
    }
}
 
export default PersonalSetting;