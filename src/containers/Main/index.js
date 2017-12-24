import React, {Component} from 'react';
import Header from 'CONTAINERS/Header';

class Main extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div>
                <Header />
                {this.props.children}
            </div>
            
        )
    }
}

export default Main;