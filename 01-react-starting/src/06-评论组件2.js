import React from 'react'

import obj from '@/css/ComList.scss'

function CommentItem(props) {
  return <div className={obj.border}>
    <h2 className={obj.h2}>评论人: {props.user}</h2>
    <p className={obj.p}>内容: {props.content}</p>
  </div>
}

export default class Comment extends React.Component {
  constructor() {
    super()
    this.state = {
      comList: [
        { id: 0, user: '张三', content: '哈哈' },
        { id: 1, user: '张三', content: '哈哈' },
        { id: 2, user: '张三', content: '哈哈' },
        { id: 3, user: '张三', content: '哈哈' }
      ],
      userVal: '',
      conVal: ''
    }
    // this.addComment = this.addComment.bind(this)
  }

  render() {
    return (
      <div>
        评论人:<br />
        <input className={obj.input} value={this.state.userVal} onChange={this.handleChange} id="user" type="text" />
        <br />
        评论内容:<br />
        <textarea className={obj.input} value={this.state.conVal} onChange={this.handleChange} id="content"></textarea>
        <br />
        <button className={obj.button} onClick={this.addComment}>提交</button>
        <h1 className={obj.h1}>评论列表</h1>
        {
          this.state.comList.map(item => <CommentItem key={item.id} {...item}></CommentItem>)
        }
      </div>
    )
  }

  handleChange = (e) => {
    if (e.target.id === 'user') {
      this.setState({ userVal: e.target.value })
    } else if (e.target.id === 'content') {
      this.setState({ conVal: e.target.value })
    }
  }

  addComment = () => {
    let comment = { id: this.state.comList.length, user: this.state.userVal, content: this.state.conVal }
    this.setState({ comList: [comment, ...this.state.comList] })
    this.setState({ userVal: '', conVal: '' })
  }

}