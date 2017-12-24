import React, {Component} from 'react';
import  CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';

class CodeMirrorTiny extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        const options = {
			lineNumbers: true,
			mode: 'javascript',
		};
        return (
            <div>
               	<CodeMirror value={this.props.value} style={{height:"100%"}} onChange={this.props.onChange} options={options} />
            </div>
            
        )
    }
}

export default CodeMirrorTiny;