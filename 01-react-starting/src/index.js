import React from 'react'
import ReactDOM from 'react-dom'

const app = document.querySelector('#app')

class Lifecycle extends React.Component {

}

react中的组件生命周期分为三部分:
//  组件创建阶段 ：特点：一辈子只执行一次
//   componentWillMount: 组件将要被挂载到页面上
//   render：渲染虚拟dom 并将虚拟dom挂载到页面上
//   componentDidMount: 组件已经挂载完毕

//  组件运行阶段 ：按需，根据 props 属性 或 state 状态的改变，有选择性的 执行 0 到多次
//   componentWillReceiveProps: 收到了新的props
//   shouldComponentUpdate: 是否需要更新组件
//   componentWillUpdate: 组件将要被更新
//   render: 渲染虚拟dom 并将虚拟dom挂载到页面上
//   componentDidUpdate: 组件已经挂载完毕

//  组件销毁阶段 ：一辈子只执行一次
//   componentWillUnmount: 组件将要被销毁


// 在组件创建之前，会先初始化默认的props属性，这是全局调用一次，严格地来说，这不是组件的生命周期的一部分。在组件被创建并加载候，首先调用 constructor 构造器中的 this.state = {}，来初始化组件的状态
// 组件生命周期的执行顺序：

// Mounting：
//   constructor()
//   componentWillMount()
//   render()
//   componentDidMount()
// Updating：
//   componentWillReceiveProps(nextProps)
//   shouldComponentUpdate(nextProps, nextState)
//   componentWillUpdate(nextProps, nextState)
//   render()
//   componentDidUpdate(prevProps, prevState)
// Unmounting：
//   componentWillUnmount()



ReactDOM.render(<div></div>, app)