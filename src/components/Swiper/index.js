import React, { Component } from 'react';
import { Row, Col,Input } from 'antd';
import './index.less';

class Swiper extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        const arr = React.Children.toArray(this.props.children)
        
       arr.filter(child => {
            if (typeof child === 'string'){
              return !!(child.trim())
            }
            return !!child
          })
          console.log("arr",arr)
          const slide = []
        const node =  React.Children.forEach(this.props.children,(ele,i)=>{
            console.log()
            slide.push(React.cloneElement(ele,{
                  className:"haha"+i
              }))
          })
          console.log("node",slide)
        return (
            <div className="swiper" >
                {node}
            </div>
        )
    }
}

export default Swiper;