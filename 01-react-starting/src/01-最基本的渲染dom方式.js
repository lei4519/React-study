// 导入包
import React from 'react'
import ReactDOM from 'react-dom'
// 创建虚拟dom元素
const myh1 = React.createElement('h1', {title: 'this is a h1', id: 'h1'}, '这是一个大大的h1')
const mydiv = React.createElement('div', null, '这是一个大大的div', myh1)
// 渲染到页面上去
ReactDOM.render(mydiv, document.getElementById('app'))