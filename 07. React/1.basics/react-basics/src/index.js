import React from 'react'
import ReactDOM from 'react-dom'

/**
 * 状态 state
 *  可以在组件内部 初始化状态对象
 *  1. 不要直接修改 state, 要想修改状态state, 必须使用 setState
 *  2. 如果 state 更新可以是异步的.
 *     在事件处理函数中, setState 方法会进入 批量更新模式
 *     调用 setState之后, 并不会直接更新 this.state
 */

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {number: 0}
    }

    handleClick = (event) => {
        this.setState({number: this.state.number + 1})
        this.setState({number: this.state.number + 1})
    }

    render() {
        return (
            <div>
                <p>{this.state.number}</p>
                <button onClick={
                    this.handleClick
                }> +
                </button>
            </div>
        )
    }
}

ReactDOM.render(<Counter></Counter>, document.getElementById('root'))

// 该看视频 4 了.