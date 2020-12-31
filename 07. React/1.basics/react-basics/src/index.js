import React from 'react'
import ReactDOM from 'react-dom'

const element1 = React.createElement("h1", {
    className: "title",
    style: {
        color: 'red'
    }
}, "hello");
console.log('element1 -->', element1);

ReactDOM.render(
    <h1>Hello</h1>,
    document.getElementById('root')
);