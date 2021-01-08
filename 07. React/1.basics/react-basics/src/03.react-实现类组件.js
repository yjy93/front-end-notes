import React from './react'
import ReactDOM from './react-dom'

/**
 * 类组件
 * 1. 创建类组件的实例
 * 2. 调用类组价实例的 render 方法,获得返回的虚拟 DOM (React 元素)
 * 3. 把返回的虚拟 DOM 转成真实 DOM 进行挂载.
 */

class ClassComponent extends React.Component {
    render() {
        return (
            <div>hello <span>{this.props.name}</span></div>
        )
    }
}

let element = <ClassComponent name={"Gene"}/>
console.log(element);
ReactDOM.render(element, document.getElementById('root'))
