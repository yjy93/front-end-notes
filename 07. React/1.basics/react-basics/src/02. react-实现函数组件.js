import React from './react'
import ReactDOM from 'react-dom'

/**
 * 函数式组件
 */
function FunctionComponent(props) {
    return (
        <h1 className={"title"} style={{backgroundColor: "green", color: "red"}}>
            hello, {props.name}
            {props.children}
        </h1>
    )
}


ReactDOM.render(<FunctionComponent name={"Gene"}>
    <span> Yang Yang</span>
</FunctionComponent>, document.getElementById('root'))
