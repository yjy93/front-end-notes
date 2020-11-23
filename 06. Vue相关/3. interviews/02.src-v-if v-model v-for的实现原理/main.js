/**
 * 当文件 如何执行验证?
 *  在控制台进入当前目录, 通过  node main.js 运行当前文件,查看代码编译结果!
 * v-if, v-model, v-for 的实现原理!
 */

// v-if 的实现原理! 虽然写代码的时候是指令,但是最终都是会编译成 js 语法
/**
 *  v-if 指令, 在编译阶段, 会把其变成三元表达式, 根据其 布尔值结果来判断
 *  是否渲染当前标签.
 */
// ---------- v-if ---------------------------
let compiler = require("vue-template-compiler")
const ast1 = compiler.compile('<div v-if="false"></div>')
console.log('v-if编译结果--> ', ast1.render);


// ------------- v-for -----------------------------
// v-for 指令的原理!  虽然写代码的时候是指令,但是最终都是会编译成 js 语法
/**
 *  v-for 指令最终在编译的时候, 会把其编译成一个 _l() 的一个方法, 根据 v-for 中的长度
 *  执行多次, 每次执行的时候, 会有一个 _c 的方法来创建当前元素.
 */
const ast2 = compiler.compile('<div v-for="i in 3">i</div>')
console.log("v-for 编译结果 -->", ast2.render);


// ------- v-model ----------
//      v-model 放在普通标签上
/**
 *  与 v-if 和 v-for 不同的是, v-model 最终会被解析成一个指令.
 *  除了最终解析成一个指令之外, 在运行的时候, 还会对它做一些操作,
 *  最终会把 v-model 解析成 domProps 属性, 然后会给该属性 添加上一个 input 事件.
 */
const ast3 = compiler.compile('<input v-model="name" />')
console.log("\n v-model放在普通标签上 -->", ast3.render);


//   v-model 放在组件上
/**
 *  v-model 用在组件上的时候, 并没有把其解析成一个指令,
 *  而是给当前这个组件增加了一个 model 属性,
 *  属性上有一个 value 值 和 一个回调函数.
 *  所以说 v-model 实际上就是 input 和 value 的语法糖.
 */
const ast4 = compiler.compile('<component v-model="name"></component>')
console.log('\n v-model 放在组件上 ---->', ast4.render);

