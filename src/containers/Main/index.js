
import React, {Component} from 'react';
import  CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';
import  ReactMarkdown from 'react-markdown';
import CodeBlock from "COMPONENTS/CodeBlock"

class Main extends Component {
	constructor (props) {
		super(props)
		this.state = {
			value:``
		}
	}
	componentDidMount () {
	console.log(CodeMirror)
	console.log("highlight",window.hljs)
	}
	updateCode(newCode) {
		this.setState({
			value: newCode,
		});
	}

    render() {
        const options = {
			lineNumbers: true,
			mode: 'javascript',
		};
		return <div>
				<div style={{"height":"100px","width":"40%",float:"left"}}>
				<CodeMirror value={this.state.value} style={{height:"100%"}} onChange={this.updateCode.bind(this)} options={options} />
				</div>
				<ReactMarkdown className="result" 
							source={this.state.value}  
							renderers={{code: CodeBlock}}
				/>
	</div>
		
    }
}


export default Main;