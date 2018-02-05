

import DefineModal from 'COMPONENTS/ModalAntd';

import React, {Component} from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';


class CroperPortrait extends Component {
    constructor(props){
        super(props);
        this.state = {
            croppedImg:null,
        }
    }

    cropped() {
        let croppedCanvas = this.refs.cropper.getCroppedCanvas();
        this.setState({croppedImg:croppedCanvas});
    }

    render(){
        const {croppedImg} = this.state;
        const {onCancel,onOk,input,cropperOption={}} = this.props;
        const {ref,src,style={height: 'auto', width: 'auto'},aspectRatio = 9/9,guides=false,...othersCropperOption} = cropperOption;

        return <DefineModal title={`请选择合适的区域作为头像`} onCancel={onCancel} onOk={()=>onOk(croppedImg)} maskClosable={false}>
            <div>
                <Cropper
                    ref='cropper'
                    src={input}
                    style={style}
                    guides={guides}
                    aspectRatio={aspectRatio}
                    crop={this.cropped.bind(this)} {...othersCropperOption}/>
            </div>

        </DefineModal>
    }
}

export default CroperPortrait;

