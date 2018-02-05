

import React from 'react';
import {Modal} from 'antd';
// import confirm from './Delete';

let ModalAntd = (props) => {
    const {title,visible=true,width='600px',
        footer,showConfirm=true,showCancel=true,
        okText,onOk,okStatus='default',cancelStatus='not-stress',cancelText,onCancel,cancelDisplay=true,
        children,...otherProps} = props;
    return  (
        <Modal visible = {visible} width = {width} onCancel = {onCancel} {...otherProps} footer = {null}>
            <div className="component-modal-antd">
                {title?<div className="title">{title}</div>:null}
                <div className="body">
                    {children}
                </div>
                {footer === undefined
                    ? <div className="footer">
                       {showConfirm ? <div className={`btn ${okStatus}`} onClick={onOk}>{okText?okText:'确定'}</div> : null}
                       {showCancel ? <div className={`btn ${cancelStatus}`} onClick={onCancel} style={{display:cancelDisplay ? "inline-block":"none"}}>{cancelText?cancelText:'取消'}</div>:null}
                    </div>
                    : footer === null ? null : footer}
            </div>
        </Modal>
    )
};

// ModalAntd.confirm = confirm;


export default ModalAntd;

/*
* @props okStatus,cancelStatus ,showConfirm ,showCancel// 给按钮添加的样式 ，比如 default ， disabled
* @props 其他api和antd一模一样
* @return new Modal
* */
