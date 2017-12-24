import React, {Component} from 'react';
import Header from 'CONTAINERS/Header';
// import {Editor, EditorState} from 'draft-js';
import CodeMirror from 'COMPONENTS/CodeMirror';

class Write extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value:''
        }
    }

    // onChange (editorState) {
    //     this.setState({
    //         editorState:editorState
    //     })
    // }
    updateCode(newCode) {
		this.setState({
			value: newCode,
		});
    }
    handleToMarkDown () {
        this.context.router.push({pathname:`/markdown`,state:{value:this.state.value}})
    }
    render () {
        return (
            <div>
				<div style={{"height":"100vh","width":"50%",float:"left"}}>
				<CodeMirror value={this.state.value}  onChange={this.updateCode.bind(this)}/>
				</div>
				
            </div>
        )
    }
}
Write.contextTypes = {
    router: React.PropTypes.object
} 
export default Write;