import React from 'react'
import ReactDOM from 'react-dom'

const app = document.querySelector('#app')

class Comment extends React.Component {
  constructor() {
    super()
    this.state = {
      comList: [
        {id: 0, user: '张三', content: '哈哈'},
        {id: 1, user: '张三', content: '哈哈'},
        {id: 2, user: '张三', content: '哈哈'},
        {id: 3, user: '张三', content: '哈哈'}
      ]
    }
    this.addComment = this.addComment.bind(this)
  }

  render() {
    return (
      <div>
        评论人: <input id="user" type="text"/>
        <br/>
        评论内容: <textarea id="content"></textarea>
        <br/>
        <button onClick={this.addComment}>提交</button>
        {
          this.state.comList.map(item => {
            return (
              <div key={item.id}>
                <h2>评论人: {item.user}</h2>
                <h4>内容: {item.content}</h4>
              </div>
            )
          })
        }
      </div>
    )
  }

  addComment() {
    let user = document.querySelector('#user').value
    let content = document.querySelector('#content').value
    console.log({id: 9, user, content})
    this.setState((state) => {
      return {comList: state.comList.push({id: 9, user, content})}
    })
  }

}


ReactDOM.render(<Comment></Comment>, app)