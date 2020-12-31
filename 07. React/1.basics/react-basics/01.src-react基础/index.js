import React from 'react'
import ReactDOM from 'react-dom'

/** --------------------- react 初识 ------------------------------ */
// const element1 = React.createElement("h1", {
//     className: "title",
//     style: {
//         color: 'red'
//     }
// }, "hello");
// console.log('element1 -->', element1);
//
// ReactDOM.render(
//     <h1>Hello</h1>,
//     document.getElementById('root')
// );

/** ==========  react 中 jsx 表达式 =============================== */
// let title = 'hello';
// let root = document.getElementById('root');
// ReactDOM.render(
//     /* react 中的 JSX 表达式 */
//     <h1>{title}</h1>,
//     root
// );

/** ======== JSX 属性注意点 ============== */
/**
 * 1. 在react 中 JSX 并不是 HTML, 更像 javascript
 * 2. 在JSX中,属性不能包含关键字, 像  class 需要写成 className, for 需要写成 htmlFor
 *    并且属性名需要采用 驼峰命名法.
 */

// ReactDOM.render(
//     <h1 className={"title"} style={{color: "red"}}> hello react</h1>,
//     document.getElementById('root')
// )

/** ------ JSX 也是对象 --------------- */
/**
 *  1. 可以在 if 或者 for 语句里使用 JSX
 *  2. 将它赋值给变量, 当做参数传入, 作为返回值都可以
 */

// let root = document.getElementById('root')
//
// function greeting(name) {
//     if (name) {
//         return (
//             <h1>hello, {name}</h1>
//         )
//     }
//     return <h1>hello, 不知名的生物!!</h1>
// }
//
// const element = greeting('Gene123')
// ReactDOM.render(element, root)
//
// // 在 for 中使用. 会自动遍历出这个元素数组.
// let names = ["张三", "李四", "王老五"]
// let elements = []
// for (let i = 0; i < names.length; i++) {
//     elements.push(<li key={i}>{names[i]}</li>)
// }
//
// console.log(elements);
// ReactDOM.render(<ul>
//     {elements}
// </ul>, root)


/** ------------ 更新元素渲染 ------------------ */
/**
 * 1. React 元素都是 immutable 不可变的. 当元素被创建之后, 你是无法改变其内容或属性的. 一个元素就好像是动画里的一帧. 它代表应用界面在某一个时间点的样子
 * 2. 更新界面唯一的办法是创建一个新的元素, 然后将它传给 ReactDOM.reander() 方法
 */
let root = document.getElementById('root')

function tick() {
    const element = (
        <div>
           <h3> 修改 create-react-app 默认webpack配置</h3>
            {new Date().toLocaleTimeString()}
        </div>
    )
    ReactDOM.render(element, root)
}

setInterval(tick, 1000)

/** ------ React 只会更新必要的部分 -------------- */
/**
 * ReactDOM 首先会比较元素内容先后的不同, 而在渲染过程中只会更新改变了的部分
 *
 * 即便我们每秒都创建了一个描述整个UI树的新元素,  React DOMy也只会更新渲染文本节点中发生变化的内容
 */