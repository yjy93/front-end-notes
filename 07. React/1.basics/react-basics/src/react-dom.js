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
    let dom;
    if (typeof type === "function") { // 自定义函数组件
        if (type.isReactComponent) { // 说明这是一个类组件
            return mountClassComponent(vdom)
        } else {
            return mountFunctionComponent(vdom)
        }
    } else {
        // 原生组件
        dom = document.createElement(type);
    }
    // 使用 虚拟 DOM 的属性更新刚创建出来的真实 DOM 的属性
    updateProps(dom, props)
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
 * 把一个类型为 自定义函数组件的 虚拟DOM转换为 真实 DOM 并返回.
 * @param vdom
 */
function mountFunctionComponent(vdom) {
    let {type: FunctionComponent, props} = vdom
    let renderVdom = FunctionComponent(props)
    return createDOM(renderVdom)
}

/**
 * 挂载类组件
 * @param vdom 类型为 类组件的虚拟 DOM
 * 1. 创建类组件的实例
 * 2. 调用类组价实例的 render 方法,获得返回的虚拟 DOM (React 元素)
 * 3. 把返回的虚拟 DOM 转成真实 DOM 进行挂载.
 */
function mountClassComponent(vdom) {
    // 解构类的定义 和 类 的属性对象
    let {type, props} = vdom
    // 1. 创建类组件的实例
    let classInstance = new type(props)
    // 2. 调用类组件实例的 render 方法
    let renderVdom = classInstance.render()
    // 3. 把返回的虚拟 DOM 转成真实 DOM 进行挂载
    let dom = createDOM(renderVdom)
    // 为以后类组件的更新, 把 真实 DOM 挂载到了类的实例上
    classInstance.dom = dom
    return dom
}

/**
 * @param childrenVdom 儿子们的虚拟 DOM
 * @param parentDOM 父亲的真实 DOM
 */
function reconcileChildren(childrenVdom, parentDOM) {
    for (let i = 0; i < childrenVdom.length; i++) {
        let childVdom = childrenVdom[i]
        render(childVdom, parentDOM)
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