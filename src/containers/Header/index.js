import React, {Component} from 'react';
import { Input } from 'antd';
import logo from '../../../static/img/logo.png';
import './index.less';

const Search = Input.Search;

class Header extends Component {
    constructor(props) {
        super(props)
        this.tabs = [
            {
                name:"文章",
                icon:"iconfont icon-wenzhang",
                children:[
                    {
                        name:"原创",
                        icon:"iconfont icon-yuan-github",
                        children:[]
                    },
                    {
                        name:"from知乎",
                        icon:"iconfont icon-yuan-github",
                        children:[]
                    },
                    {
                        name:"from简书",
                        icon:"iconfont icon-yuan-github",
                        href:"https://www.jianshu.com/u/c61d3264146f",
                        children:[]
                    },
                    {
                        name:"from others",
                        icon:"iconfont icon-yuan-github",
                        children:[]
                    },
                ]
            },
            {
                name:"有趣的js",
                icon:"iconfont icon-JS-",
                children:[]
            },
            {
                name:"react专题",
                icon:"iconfont icon-react",
                children:[
                    {
                        name:"react相关技术文章",
                        icon:"iconfont icon-yuan-github",
                    },
                    {
                        name:"react小插件",
                        icon:"iconfont icon-yuan-github",
                    },
                    {
                        name:"dva",
                        icon:"iconfont icon-yuan-github",
                        children:[]
                    },
                    {
                        name:"ant design",
                        icon:"iconfont icon-yuan-github",
                    },
                ]
            },
            {
                name:"我的github",
                icon:"iconfont icon-yuan-github",
                children:[
                    {
                        name:"我的简书",
                        icon:"iconfont icon-jianbao",
                        href:"https://www.jianshu.com/u/c61d3264146f",
                    },
                    {
                        name:"我的知乎",
                        icon:"iconfont icon-zhihu",
                        href:"https://www.zhihu.com/people/zhan-xiao-feng-30-92/activities",
                    },
                ]
            },
        ]
        this.state = {
            currentNav:0
        }
    }
    // choose nav title
    handleOnClickNav (index) {
        this.setState({
            currentNav:index
        })
        if (index === 3) {
            window.open('http://github.com/xiaofengz')
        }
    }
    handleClickNavItem (item) {
        item.href && window.open(item.href)
    }
    // to write article route
    handleOnToWrite () {
        this.context.router.push(`/writeArticle`)
    }
    render () {
        return (
            <nav className="nav">
            <img src={logo} title="回到首页" onClick={()=> this.context.router.push(`/`)}/>
            <ul className="nav-ul">
                {
                    this.tabs && this.tabs.map((item, index) => {
                        const choose = this.state.currentNav === index ? "nav-li choosed" : "nav-li"
                        return (
                            <li key={index} className={choose} onClick={ this.handleOnClickNav.bind(this, index) }>
                            <i className={item.icon}></i>
                            <span className="nav-li-name">{ item.name }</span>
                            <ul className="nav-ul-child">
                                {
                                    item.children.map((item, i) => {
                                       return <li className="nav-child-li" key={"child" + i} onClick={ this.handleClickNavItem.bind(this, item) }>{ item.name }</li>
                                    })
                                }
                            </ul>
                            </li>
                        )
                    }) 
                }
            </ul>
            <button className="default" style={{float:"right"}} onClick={this.handleOnToWrite.bind(this)}>
            <i className="iconfont icon--quill" style={{marginRight:"5px"}}></i>
            写文章
            </button>
            <Search placeholder="搜索..."
                    onSearch={value => console.log(value)}
                    size="large"
                    style={{ width: 260,height:40,marginTop:10,marginRight:25,float:"right" }}/>
            
            </nav>
        )
    }
}
Header.contextTypes = {
    router: React.PropTypes.object
} 
export default Header;