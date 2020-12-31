import React from 'react'
import ReactDOM from 'react-dom'

/** ---------- 函数式组件 ------------ */

// function FunctionalComponent(props) {
//     return (
//         <div>
//             <h1>{props.name}</h1>
//         </div>)
// }
//
// ReactDOM.render(<FunctionalComponent name={"Gene"}/>, document.getElementById('root'))

/** ======== 类组件 =============== */
class ClassComponent extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
            </div>
        )
    }
}

ReactDOM.render(<ClassComponent name={"杨阳阳"} />,document.getElementById('root'))