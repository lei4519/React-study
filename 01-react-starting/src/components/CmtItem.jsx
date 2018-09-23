import React from 'react'

export default function CmtItem(props) {
    return <div style={{ border: '1px dashed #ccc', padding: '10px', marginBottom: '10px' }}>
        <h2 style={{ fontSize: '16px', marginBottom: '10px' }}>评论人: {props.user}</h2>
        <p style={{ fontSize: '14px', margin: 0 }}>内容: {props.content}</p>
    </div>
}