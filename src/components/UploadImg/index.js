/**
 * Created by Roger on 2018/01/02.
 */


import React, {Component} from 'react';
import {notification} from 'antd';
import "./index.less"
import CropperPortrait from './Cropper';

// import server from '../../services/personalCenterServer';

import localDefault from '../../../static/img/default_head.png'

class Demo extends Component {
    constructor(props) {
        super(props);
        const {defaultPortrait} = this.props;
        this.state = {
            showCropper: false,
            defaultHeadPortrait:defaultPortrait||localDefault,  //默认图片
            protoPortrait: null,          //图片格式
            croppedPortrait: null,   //裁剪后的
        }
    }

    toReadUpload() {
        let domInputFile = document.createElement('input');
        document.body.appendChild(domInputFile);
        domInputFile.style.display = 'none';
        domInputFile.type = 'file';
        domInputFile.click();
        domInputFile.onchange = (e) => {
            let imgFile = e.target.files[0];

            if (!this.checkFormat(imgFile.type)) {
                notification.error({message: '不支持的格式！'});
                return;
            }
          if (imgFile.size > 5 * 1024 * 1024) {
            notification.error({message: '不能选择超过 5M 的图片！'});
            return;
          }
            this.bolb2url(imgFile).then((urlBlob) => {
                this.setState({
                    protoPortrait: urlBlob,
                    showCropper: true,
                })
            }, (message) => {   //返回的是 str
                notification.error({message});
            });
        }
    }

    onCroppedOver(croppedPortrait) {
        const {onCroppedOver} = this.props;
        this.setState({croppedPortrait, showCropper: false},()=>{
            onCroppedOver(this.state.croppedPortrait);
        });
    }

    checkFormat(type) {
        let supportFomat = ['image/jpeg', 'image/png', 'image/bmp'];
        type = (typeof type === 'string') ? type : String(type);
        return supportFomat.indexOf(type) !== -1
    }

    //tools
    bolb2url(blob) {
        return new Promise((resolve, reject) => {
            if (blob instanceof Blob) {
                let reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onload = function () {
                    resolve(reader.result)
                };
                reader.onerror = function () {
                    reject('FileReader 文件读取错误')
                };
            } else {
                reject('不是标准的文件')
            }
        })
    }

    render() {
        const {showCropper, defaultHeadPortrait,protoPortrait} = this.state;
        const {isUploading,imgUrl,cropperOption={}} = this.props;
        return (
            <div className="component-cropper-head-portrait">
                <div className="body">
                    <div className="top-img">
                        <img src={!!imgUrl?imgUrl:defaultHeadPortrait} title="点击上传图片" alt="头像"/>
                        {isUploading ?
                            <div className="loading">上传中...</div>
                            : <div className="modal-img" onClick={this.toReadUpload.bind(this)}>
                                上传头像
                            </div>
                        }
                    </div>
                    {/* <div className="desc">(请上传 png/jpg/bmp 格式)</div> */}
                    <div id="info-img-error" className="error"> </div>
                </div>
                {
                    showCropper ? <CropperPortrait input={protoPortrait}
                                                   onOk={this.onCroppedOver.bind(this) }
                                                   cropperOption = {cropperOption}
                                                   onCancel={() => this.setState({showCropper: false})}/>
                        : null
                }
            </div>

        );
    }
}

export default Demo;

const testProps = {
    isUploading:'',
    onCroppedOver:(cavas)=>{cavas.toDataUrl()},
    imgUrl:'DataURL',
    cropperOption:{aspectRatio:16/9},
};
