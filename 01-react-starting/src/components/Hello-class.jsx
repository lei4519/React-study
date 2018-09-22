import React from 'react'

export default class Hello extends React.Component {
  constructor() {
    super()
    this.state = { // 这个state就相当于 vue 组件中的data函数 可以拥有自己的属性
      msg: '我是Hello的私有属性 --- state'
    }
  }

  render() {
    return <div>
      <h1>hello class --- {this.props.name} --- {this.props.age}</h1>
      <h2>{this.state.msg}</h2>
    </div>
  }
}