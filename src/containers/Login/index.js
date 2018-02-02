import React, { Component } from 'react';
import logo from '../../../static/img/logo.png';
import {Form, Tabs, Icon, Input,Button } from "antd";
import UserService from 'SERVICES/userService';
import { Link } from "react-router"
import "./index.less"
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
              this.handleOnLogin(values)
            }
          }
        );
      }
    handleOnLogin (values) {
        UserService.login({
            userName:values.userName,
            password:values.password,
        }).then((data)=>{
            console.log("登录成功res",data)
        })
    }
    render() { 
        const { getFieldDecorator } = this.props.form;
        return ( 
            <div className="login-container">
                <div className="login-content">
                    <div className="login-logo">
                        <img src={logo} title="跳转回首页" onClick={()=>this.context.router.push('/')}/> 
                        <span title="跳转回首页">Tiny(Evan's blog)</span>
                    </div>
                    <div className="login-form">
                        <Form onSubmit={this.handleSubmit}>
                            <Tabs className="tabs">
                                <TabPane tab="账号密码登录" key="1"></TabPane>
                            </Tabs>
                            <FormItem>
                                {getFieldDecorator('userName', {
                                rules: [{
                                    required: true, message: '请输入账户名！',
                                }],
                                })(
                                <Input
                                    size="large"
                                    prefix={<Icon type="user"  />}
                                    placeholder="admin"
                                />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('password', {
                                rules: [{
                                    required: true, message: '请输入密码！',
                                }],
                                })(
                                <Input
                                    size="large"
                                    prefix={<Icon type="lock"  />}
                                    type="password"
                                    placeholder="888888"
                                />
                                )}
                            </FormItem>
                            <a className="login-foget" style={{float:"right"}} href="">忘记密码</a>
                            <Button size="large"  className="login-button" type="primary" htmlType="submit">
                            登录
                            </Button>
                            <Link className="login-regist" to="/user/register" style={{float:"right"}}>注册账户</Link>
                        </Form>
                    </div>
                </div>
                
            </div>
         )
    }
}
Login.contextTypes = {
    router: React.PropTypes.object
}
export default Form.create()(Login);