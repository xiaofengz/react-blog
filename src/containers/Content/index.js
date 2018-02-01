import React, { Component } from 'react';
import { Row, Col,Input } from 'antd';
import Swiper from 'COMPONENTS/Swiper';
import './index.less'
class Content extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div style={{height:"100vh"}}>
                <div className="content-swiper">
                    <Swiper >
                        <div>
                            1
                        </div>
                        <div>
                            2
                        </div>
                        <div>
                            3
                        </div>
                        <div>
                            4
                        </div>
                    </Swiper>
                </div>
            </div>
            
        )
    }
}

export default Content;