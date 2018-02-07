const a = `写react也快半年了，讲一下自己对于生命周期的理解及各个生命周期的作用

 ### 首先，看一下一个组件的构造

    import React,{ Component } from 'react';

    class Demo extends Component {
      constructor(props,context) {
          super(props,context)
          this.state = {
              //定义state
          }
      }
    componentWillMount () {
    }
    componentDidMount () {
    }
    componentWillReceiveProps (nextProps) {
    }
    shouldComponentUpdate (nextProps,nextState) {
    }
    componentWillUpdate (nextProps,nextState) {
    }
    componentDidUpdate (prevProps,prevState) {
    }
    render () {
        return (
            <div></div>
        )
    }
    componentWillUnmount () {
    }
    }
    export default Demo;
当然前段时间react16发布还新加了**处理错误信息的生命周期 componentDidCatch**（打个标记 还未使用过，下次深入研究）

### 下面我从constructor构造函数开始，从参数，作用，用法各方面总结
### 1、constructor
constructor参数接受两个参数props,context
可以获取到父组件传下来的的props,context,如果你想在constructor**构造函数内部(注意是内部哦，在组件其他地方是可以直接接收的)**使用props或context,则需要传入，并传入super对象。

     constructor(props,context) {
      super(props,context)
      console.log(this.props,this.context) // 在内部可以使用props和context
    }
当然如果你只需要在构造函数内使用props或者context，那么只传入一个参数即可，如果都不可以，就都不传。

#### 关于ES6的class constructor和super
只要组件存在constructor,就必要要写super,否则this指向会错误

     constructor() {
      console.log(this) // 报错，this指向错误
    }

### 2、componentWillMount 组件将要挂载
> 1、组件刚经历constructor,初始完数据
>2、组件还未进入render，组件还未渲染完成，dom还未渲染

componentWillMount 一般用的比较少，更多的是用在服务端渲染，（我还未使用过react服务端渲染哈，所以也写不了很多）
**但是这里有一个问题**
> ajax请求能写在willmount里吗？
：答案是不推荐，别这么写

1.虽然有些情况下并不会出错，但是如果ajax请求过来的数据是空，那么会影响页面的渲染，可能看到的就是空白。
2.不利于服务端渲染，在同构的情况下，生命周期会到componentwillmount，这样使用ajax就会出错

### 3、componentDidMount 组件渲染完成
组件第一次渲染完成，此时dom节点已经生成，可以在这里调用ajax请求，返回数据setState后组件会重新渲染

### 4.componentWillReceiveProps (nextProps)
componentWillReceiveProps在接受父组件改变后的props需要重新渲染组件时用到的比较多
它接受一个参数
>1.nextProps  
通过对比nextProps和this.props，将nextProps setState为当前组件的state，从而重新渲染组件

    componentWillReceiveProps (nextProps) {
        nextProps.openNotice !== this.props.openNotice && this.setState({
            openNotice:nextProps.openNotice
        }，() => {
          console.log(this.state.openNotice:nextProps) //将state更新为nextProps,在setState的第二个参数（回调）可以打印出新的state
      })
    }

###### *关于setState的用法及深入了解 后面会专门整理一篇文章*



### 5.shouldComponentUpdate(nextProps,nextState)
唯一用于控制组件重新渲染的生命周期，由于在react中，setState以后，state发生变化，组件会进入重新渲染的流程，（暂时这么理解，其实setState以后有些情况并不会重新渲染，比如**数组引用不变**）在这里return false可以阻止组件的更新<br>
**因为react父组件的重新渲染会导致其所有子组件的重新渲染，这个时候其实我们是不需要所有子组件都跟着重新渲染的，因此需要在子组件的该生命周期中做判断**
> 对于react初学者，可能涉及这个生命周期的机会比较少，但是如果你的项目开始注重性能优化，随着你对react的喜爱和深入，你就会用到这个生命周期


### 6.componentWillUpdate (nextProps,nextState) 
shouldComponentUpdate返回true以后，组件进入重新渲染的流程，进入componentWillUpdate,这里同样可以拿到nextProps和nextState

### 7.render函数
render函数会插入jsx生成的dom结构，react会生成一份虚拟dom树，在每一次组件更新时，在此react会通过其diff算法比较更新前后的新旧DOM树，比较以后，找到**最小的有差异的DOM节点**，并重新渲染
> react16中 render函数允许返回一个数组，单个字符串等，不在只限制为一个顶级DOM节点，可以减少很多不必要的div(当然注意升级你的react版本，将现有项目升到react16并不会出现什么bug，唯一注意的是proTypes类型检测换了名字~)

意思你现在可以这样：

    render () {
      return " "
  }
或者这样： 

    render () {
      return  <div></div>
                 <div></div>
  }


### 8、componentDidUpdate(prevProps,prevState)
组件更新完毕后，react只会在第一次初始化成功会进入componentDidmount,之后每次重新渲染后都会进入这个生命周期，这里可以拿到prevProps和prevState，即更新前的props和state。
如果你理解了组件一次重新渲染的过程，那么你应该理解下面5处打印出来的state应该是相同的。（关于setState异步是同步的理解，后面也会整理一篇文章~）

    componentWillReceiveProps (nextProps,nextState) {
        this.setState({
            fengfeng:nextProps.fengfeng
        },()=>{
            console.log(this.state.fengfeng) //1
        })
        
    }
    shouldComponentUpdate (nextProps,nextState) {
        console.log(nextState.fengfeng)  //2
    }
    componentWillUpdate (nextProps,nextState) {
        console.log(nextState.fengfeng)  //3
    }
    componentDidUpdate (prevProps,prevState) {
        console.log(this.state.fengfeng) //5
    }
    render () {
        console.log(this.state.fengfeng) //4
        return (
            <div></div>
        )
    }
### 9、componentWillUnmount () 
componentWillUnmount也是会经常用到的一个生命周期，初学者可能用到的比较少，但是用好这个确实很重要的哦

> 1.clear你在组建中所有的setTimeout,setInterval
>2.移除所有组建中的监听 removeEventListener
>3.也许你会经常遇到这个warning:

    Can only update a mounted or mounting component. This usually means you called setState() on an       
     unmounted component. This is a no-op. Please check the code for the undefined component.

是因为你在组建中的ajax请求返回中setState,而你组件销毁的时候，请求还未完成，因此会报warning
解决办法为

    componentDidMount() {
        this.isMount === true
        axios.post().then((res) => {
         this.isMount && this.setState({   // 增加条件ismount为true时
          aaa:res
        })
    })
    }
    componentWillUnmount() {
        this.isMount === false
    }


## 拓展：
1.react生命周期父子组件渲染顺序
父子组件， componentWillMount生命周期是先进入父组件还是子组件？
componentDidMount呢？
答案参考我的另一篇文章https://www.jianshu.com/p/ee122bb5b14b
`

export default a;