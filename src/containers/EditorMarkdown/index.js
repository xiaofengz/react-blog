
import React, {Component} from 'react';
import CodeMirror from 'COMPONENTS/CodeMirror';
import  ReactMarkdown from 'react-markdown';
import CodeBlock from "COMPONENTS/CodeBlock"

class EditorMarkdown extends Component {
	constructor (props) {
		super(props)
		this.state = {
			value:``
		}
	}
	componentDidMount () {
	}
	updateCode(newCode) {
		this.setState({
			value: newCode,
		});
	}

    render() {

		return <div>
				<div style={{"height":"100vh","width":"50%",float:"left"}}>
				<CodeMirror value={this.state.value}  onChange={this.updateCode.bind(this)}/>
				</div>
				<ReactMarkdown className="result" 
							source={this.state.value}  
							renderers={{code: CodeBlock}}
				/>
	</div>
		
    }
}


export default EditorMarkdown;