import React from 'react'
import ReactDOM from 'react-dom'

const app = document.querySelector('#app')

// 使用构造函数创建组件 函数内返回一个合法的 JSX 虚拟DOM
// function Hello(props) {
//   return <h1>hello component ---{props.name} --- {props.age} --- {props.gender}</h1>
// }
// 将组件抽离为单个jsx文件 导入使用
import Hello from '@/components/Hello-constructor';

let dog = {
  name: '大黄',
  age: 3,
  gender: '雄'
}

// ReactDOM.render(<Hello name={dog.name} age={dog.age} gender={dog.gender} />, app)

ReactDOM.render(<Hello {...dog} />, app)
