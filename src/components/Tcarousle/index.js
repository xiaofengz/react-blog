import React, { PureComponent } from 'react';
import { Carousel  } from 'antd';
class Tcarousle extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { content } = this.props
        return ( 
            <Carousel autoplay>
                {
                    content && content.map((item, i) => {
                        return <img src={item} key={"img" + i} />
                    })
                }
            </Carousel>
         )
    }
}

export default Tcarousle;