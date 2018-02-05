import React, { Component } from 'react';
import { Breadcrumb, Card, Radio } from 'antd';
import head from '../../../../static/img/head.jpg';
import Croppper from "COMPONENTS/UploadImg"
import "./index.less"

const RadioGroup = Radio.Group;
class UserManage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            img:head,
            name:"Evan",
            phone:"15682071389",
            website:"xiaofengz.com",
            sexValue:1
         }
    }
    uploadHeadPortrait(canvas) {
        console.log("canvas",canvas)
        const {fetchBaseInfo} = this.props;
        let blob = this.dataURLtoBlob(canvas.toDataURL());

        let formData = new FormData();
        formData.append("files", blob);
        // 暂时本地写死。
        this.setState({
            img:canvas.toDataURL()
        })
        // server.uploadHeadImg(formData).then((data) => {
        //     fetchBaseInfo();
        //     notification.success({message: "修改成功"});
        // },({message})=>notification.error({message}))
    }
    dataURLtoBlob(dataurl) {
        let arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1], bstr = atob(arr[1]), n = bstr.length,
            u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], {type: mime});
    }
    handleOnSaveBasic = () => {
        const { name, phone } = this.state
        // 保存基本信息接口

    }
    onSexChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
            sexValue: e.target.value,
        });
    }
    render() { 
        const { name, phone,website } = this.state
        return ( 
            <div className="userManage-container">
                <div className="manage-title">
                    <Breadcrumb>
                        <Breadcrumb.Item>个人中心</Breadcrumb.Item>
                        <Breadcrumb.Item>用户管理</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <Card title="基础设置" style={{ marginBottom: 24 }} bordered={false}>
                    <div className="userManage-basic-item" >
                        <Croppper isUploading={false} onCroppedOver={this.uploadHeadPortrait.bind(this)}  imgUrl={this.state.img}/>
                    </div>
                    <div className="userManage-basic-item">
                        <div className="item">
                            <label>昵称</label>
                            <input type="text" placeholder="请输入昵称"value={name}onChange={(e)=>{this.setState({name:e.target.value})}}  />
                        </div>
                        <div className="item">
                            <label>手机</label>
                            <input type="text" placeholder="请输入手机号" value={phone} onChange={(e)=>{this.setState({phone:e.target.value})}} />
                        </div>
                    </div>
                    <div className="userManage-basic-item">
                        <button className="default" onClick={this.handleOnSaveBasic}>保存</button>
                    </div>
                </Card>
                <Card title="个人资料" style={{ marginBottom: 24 }} bordered={false}>
                    <div className="userManage-basic-item" style={{marginLeft:"400px"}}>
                    <div className="item">
                            <label>性别</label>
                            <RadioGroup onChange={this.onSexChange} value={this.state.sexValue}>
                                <Radio value={1}>男</Radio>
                                <Radio value={2}>女</Radio>
                                <Radio value={3}>保密</Radio>
                            </RadioGroup>
                        </div>
                        <div className="item" style={{height:"165px"}}>
                            <label>个人简介</label>
                            <textarea className="personal-info" placeholder="填写你的个人简介" ></textarea>
                        </div>
                        <div className="item" >
                            <label>个人网站</label>
                            <input type="text" placeholder="请输入个人网站" value={website} onChange={(e)=>{this.setState({website:e.target.value})}} />
                        </div>
                        <div className="item" style={{height:"150px"}}>
                            <label>社交账号</label>
                            <div className="bind">
                                <i className="iconfont icon-weibo"></i>
                                <span>绑定微博&gt;</span>
                            </div>
                            <div className="bind">
                                <i className="iconfont icon-wechat"></i>
                                <span>绑定微信&gt;</span>
                            </div>
                            <div className="bind">
                                <i className="iconfont icon-social-instagram"></i>
                                <span>绑定ins&gt;</span>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
         )
    }
}
 
export default UserManage;