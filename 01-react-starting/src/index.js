import React from 'react'
import ReactDOM from 'react-dom'

const app = document.querySelector('#app')

import './03-class基本使用'

// 使用类创建组件
class Hello extends React.Component {
  constructor() {
    super()
  }
  render() {
    return <h1>hello class --- {this.props.name}</h1>
  }
}

ReactDOM.render(<Hello name='class' />, app)
