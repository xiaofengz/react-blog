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
                {this.props.children}
            </div>
            
        )
    }
}

export default Main;