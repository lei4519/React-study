import React from 'react'
import CmtItem from '@/components/CmtItem'

export default class CmtList extends React.Component {
    constructor() {
        super()
        this.state = {
            comList: [
                { id: 0, user: '张三', content: '哈哈' },
                { id: 1, user: '李四', content: '哈哈' },
                { id: 2, user: '王五', content: '哈哈' },
                { id: 3, user: '小明', content: '哈哈' }
            ]
        }
    }

    render() {
        return (
            <div style={{ margin: 'auto', width: '300px', border: '1px solid #ccc', padding: '10px' }}>
                <h1 style={{ color: 'red', fontSize: '22px', textAlign: 'center' }}>这是评论列表</h1>
                {this.state.comList.map(item => <CmtItem key={item.id} {...item}></CmtItem>)}
            </div>
        )
    }

    addComment = () => {
        alert(1)
    }

}