/**
 *  React 源码实现
 */

/**
 * @param type 元素的类型
 * @param config 配置对象
 * @param children 儿子节点
 */
import Component from './Component'

function createElement(type, config, children) {
    if (config) {
        delete config.__source;
        delete config.__self
    }
    let props = {...config}
    if (arguments.length > 3) {
        children = Array.prototype.slice().call(arguments, 2)
    }
    props.children = children

    return {
        type,
        props
    }
}

const React = {createElement, Component}
export default React