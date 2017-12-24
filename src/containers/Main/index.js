
import React, {Component} from 'react';
import  CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';
import  ReactMarkdown from 'react-markdown';
import CodeBlock from "COMPONENTS/CodeBlock"

class Main extends Component {
	constructor (props) {
		super(props)
		this.state = {
			value:`## 1.filter()  筛选器
			
			filter接受一个函数，数组中的每个元素依次执行该函数，然后根据返回值是true还是false来决定是否保留该元素。
			
			#### 用法技巧
			
			1.一个Array,返回数组中的奇数或者偶数
			
				const arr = [1,2,3,5,6,8,9]
				arr.filter((i) => {
					return i % 2 !== 0;      // 返回奇数 [1,3,5,9]
				})
			
			2.去除数组中的空元素 
				
				const arr = [1,,"",3,undefined,5,null,"    "]
				arr.filter((i) => {
					return i && i.trim()      // 返回[1,3,5]
				})
				
			##### filter回调函数可以接受3个参数（item,index,arr）,当前元素、当前元素index,当前数组。一般我们只用第一个参数。
			
			3.利用filter进行数组去重
				
				const arr = ["1","2","2","3","4","4"]
				arr.filter((item,index,arr) => {
					return arr.indexOf(item) === index // 返回["1","2","3","4"]
				})
			
			这里主要利用++indexOf只返回元素在数组中**第一次出现**的位置++
			
			## 2.some()
			some 为数组中的每一个元素执行一次 callback 函数，直到找到一个使得 callback 返回一个“真值”（即可转换为布尔值 true 的值）。如果找到了这样一个值，some 将会立即返回 true。否则，some 返回 false。
			
			> 通常用在判断表达式里
			
			**只要数组中有一项满足表达式，就返回true**
			
			## 3.every()
			every 方法为数组中的每个元素执行一次 callback 函数，直到它找到一个使 callback 返回 false（表示可转换为布尔值 false 的值）的元素。如果发现了一个这样的元素，every 方法将会立即返回 false。否则，callback 为每一个元素返回 true，every 就会返回 true。callback 只会为那些已经被赋值的索引调用。不会为那些被删除或从来没被赋值的索引调用。
			
			**数组中每一项都需要满足表达式，则返回true,否则返回false**
			
			## 4.find()
			find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
			   
				[12, 5, 8, 130, 44].find((i) => {
					return i > 129
				}); // 130`
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
				<div style={{"height":"100vh","width":"50%",float:"left"}}>
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