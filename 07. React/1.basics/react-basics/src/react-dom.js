/**
 * react-dom 实现
 */
/**
 * 1. 把 vdom 虚拟dom 变成真实dom
 * 2. 把虚拟DOM上的属性更新或者说同步到dom上
 * 3. 把此虚拟DOM的儿子们也都变成真实DOM挂载到自己的 dom上, dom.appendChild
 * 4. 把自己挂载到容器上
 * @param vdom vdom 要渲染的 DOM
 * @param container  要把 虚拟DOM转成真实DOM,并插入到每个容器中去
 */
function render(vdom, container) {
    const dom = createDOM(vdom);
    container.appendChild(dom)
}

/**
 * 把虚拟 DOM 编程 真实 DOM
 * @param vdom 虚拟 DOM
 */
function createDOM(vdom) {
    // TODO 处理 vom 是数字或者字符串的情况.
    // 如果 vdom 是数字或者字符串的话, 直接返回一个真实的文本节点
    if (typeof vdom === "string" || typeof vdom === "number") {
        return document.createTextNode(vdom)
    }
    // 否则 它就是一个虚拟 DOM 对象了, 也就是 React 元素了.
    let {type, props} = vdom
    console.log(99999999,vdom,props);
    let dom = document.createElement(type);
    // 使用 虚拟 DOM 的属性更新刚创建出来的真实 DOM 的属性
    console.log('123123,上上上--->',vdom,props);
    updateProps(dom, props)
    console.log('123123,--->',props);
    // 在这里处理 props.children 属性
    // 如果只有一个 儿子, 并且这个儿子是文本
    if (typeof props.children === "string" || typeof props.children === "number") {
        dom.textContent = props.children
        // 如果只有一个儿子, 并且这个儿子是一个虚拟 DOM 元素
    } else if (typeof props.children === "object" && props.children.type) {
        // 把儿子变成真实 DOM 插到自己身上
        render(props.children, dom)
        // 如果儿子是一个数组的话, 说明儿子不止一个
    } else if (Array.isArray(props.children)) {
        reconcileChildren(props.children, dom)
    } else {
        document.textContent = props.children ? props.children.toString() : ""
    }
    // 把真实 DOM 作为 一个 DOM属性放在虚拟 DOM上,为以后更新做准备
    // vdom.dom = dom
    return dom
}

/**
 * @param childrenVdom 儿子们的虚拟 DOM
 * @param parentDOM 父亲的真实 DOM
 */
function reconcileChildren(childrenVdom, parentDOM) {
    for (let i = 0; i < childrenVdom.length; i++) {
        let childVdom = childrenVdom[i]
        render(childVdom,parentDOM)
    }
}

/**
 * 使用虚拟 DOM 的属性,更新刚创建出来的真实 DOM属性
 * @param dom 真实 DOM
 * @param newProps 新属性对象
 */
function updateProps(dom, newProps) {
    for (let key in newProps) {
        if (key === "children") continue; // 单独处理, 不在此处处理
        if (key === "style") {
            let styleObj = newProps.style
            for (let attr in styleObj) {
                dom.style[attr] = styleObj[attr]
            }
        } else { // 在 JS中, 给真实元素赋类名就是 dom.className="title"
            dom[key] = newProps[key]
        }
    }
}

const ReactDOM = {render}
export default ReactDOM