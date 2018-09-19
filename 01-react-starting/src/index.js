import React from 'react'
import ReactDOM from 'react-dom'

const myh1 = React.createElement('h1', {title: 'this is a h1', id: 'h1'}, '这是一个大大的h1')

ReactDOM.render(myh1, document.getElementById('app'))