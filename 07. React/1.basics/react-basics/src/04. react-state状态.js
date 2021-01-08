import React from 'react'
import ReactDOM from 'react-dom'

/**
 * 状态 state
 *  可以在组件内部 初始化状态对象
 *  1. 不要直接修改 state, 要想修改状态state, 必须使用 setState
 *  2. 如果 state 更新可以是异步的.
 */

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {number: 0}
    }

    // 生命周期函数 组件挂载完成 组件创建实例, 实例 render 得到虚拟DOM, 把虚拟DOM编变成真实DOM, 挂载到 父容器上
    componentDidMount() {
        setInterval(() => {
            this.setState({number: this.state.number + 1})
        }, 1000)
    }

    render() {
        return (
            <div>
                <p>{this.state.number}</p>
            </div>
        )
    }
}

ReactDOM.render(<Counter></Counter>, document.getElementById('root'))
