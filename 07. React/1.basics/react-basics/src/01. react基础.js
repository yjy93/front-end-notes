import React from './react'
import ReactDOM from './react-dom'

let element1 = (
    <div className={"title"} style={{color: "red",backgroundColor:"green"}}><span>hello</span> world</div>
)
let element2 = React.createElement('div',
    {className: "title", style: {color: "red"}},
    React.createElement('span', null, "hello"),
)

console.log(JSON.stringify(element1, null, 2));
ReactDOM.render(element1, document.getElementById('root'))
