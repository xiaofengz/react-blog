import React, {Component} from 'react';
import Header from 'CONTAINERS/Header';

class Main extends Component {
    constructor(props) {
        super(props)
    }
    
    render () {
        return (
            <div className="main-body" style={{minWidth:"1280px"}}>
                <Header />
                <iframe style={{border:"none",float:"right"}} src="https://ghbtns.com/github-btn.html?user=xiaofengz&repo=react-blog&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px">
                </iframe>
                {this.props.children}
            </div>
            
        )
    }
}

export default Main;