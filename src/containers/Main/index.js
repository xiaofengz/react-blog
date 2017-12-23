
import React, {Component} from 'react';
import  CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';

class Main extends Component {
	constructor (props) {
		super(props)
		this.state = {
			value:"# Headingqwe\n\nSome **bold** and _italic_ text\nBy [Jed Watson](https://github.com/JedWatson)\n\tqwe \n    ae a"
		}
	}
	componentDidMount () {
	console.log(CodeMirror)
	}
	updateCode(newCode) {
		this.setState({
			code: newCode,
		});
	}

    render() {
        const options = {
			lineNumbers: true,
			mode: 'javascript',
		};
		return <div style={{"height":"100px","width":"40%"}}>
			<CodeMirror value={this.state.code} onChange={this.updateCode.bind(this)} options={options} />
		</div>
		
    }
}


export default Main;