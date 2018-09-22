import React from 'react'
import ReactDOM from 'react-dom'

const app = document.querySelector('#app')

/*
* 注意:
*     使用函数创建的组件 只有props 没有自己的私有数据和生命周期函数 称之为"无状态组件"
*     使用class 创建的组件 有自己的私有数据和生命周期函数 称之为"有状态组件"
*     有状态和无状态的区别就是 是否有state属性 和 生命周期函数
* */

/*// 使用类创建组件
class Hello extends React.Component {
  constructor() {
    super()
  }

  render() {
    return <h1>hello class --- {this.props.name}</h1>
  }
}*/
import Hello from './components/Hello-class'

let dog = {
  name: '大黄',
  age: 3,
  gender: '雄'
}

ReactDOM.render(<Hello {...dog} />, app)
