/**
 * @author: *********
 * @age: 永远18岁的美少年
 * @Email： Genejob@163.com
 * @date: 2021-01-08 14:08:56
 * @description: Component
 */

class Component {
    // 给当前类加一个 静态属性, 表示它是类属性, 用以判断它是 类组件还是函数组件
    static isReactComponent = true

    constructor(props) {
        this.props = props
    }
}

export default Component