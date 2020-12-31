[TOC]

## v-if 和 v-for 哪个优先级高?

> **==v-if 和 v-for 哪个优先级更高? 如果同时出现, 应该怎么优化得到更好的性能?==**  
>
> **==及性能优化==**  

> `vue`  源码中找到答案 `compiler/codegen/index.js`  **64 行**  
>
> 代码演示:
>
> ```vue
> <template>
>   <div id="app">
>     <h1 style="color: red">v-if 和 v-for 哪个优先级更高?</h1>
> 
>     <p v-for="good in goods" v-if="isShow">{{ good.title }}</p>
> 
>     <hr>
>     <!-- ==============   性能优化篇1 ============================================ -->
>     <!--
>       通常 我们 可以借助于 template 来实现, 在 template 外部 通过 v-if 判断, 在 template 内部再执行 v-for 循环
>     -->
> 
>     <h2 style="color: deeppink">性能优化篇1</h2>
>     <template v-if="isShow">
>       <p v-for="good in goods">{{ good.value }}</p>
>     </template>
> 
>     <hr>
>     <!-- ==================  性能优化篇2 =================================== -->
>     <!--
>       问题: 那么, 如果 我们的判断条件(isShow)在 列表的每一项内部的时候(比如 goods2), 我们必须 先遍历才能得到 这个 isShow的时候
>             我们该 如何操作?????
> 
>       解决方案:
>         我们可以定义一个计算属性(如下面: computGoods2), 先 筛选出 列表(goods2)内部 isShow 为true的选项, 再进行 vfor循环.
>         这样便 减少了 v-for 循环的性能消耗. 比如下面我们直接 渲染 computGoods2 性能优于 传统操作
>     -->
>     <h2 style="color: deeppink">性能优化篇2</h2>
>     <p v-for="good in computGoods2">{{ good.title }}</p>
> 
>   </div>
> </template>
> <script>
> 
> export default {
>   name: 'App',
>   data() {
>     return {
>       isShow: true,
>       goods: [
>         {
>           title: '冰箱',
>           value: '冰箱',
>         },
>         {
>           title: '洗衣机',
>           value: '洗衣机',
>         },
>         {
>           title: '电脑',
>           value: '电脑',
>         },
>       ],
>       goods2: [
>         {
>           title: '冰箱',
>           value: '冰箱',
>           isShow: true,
>         },
>         {
>           title: '洗衣机',
>           value: '洗衣机',
>           isShow: true,
>         },
>         {
>           title: '电脑',
>           value: '电脑',
>           isShow: false
>         },
>       ],
>     }
>   },
>   computed: {
>     computGoods2() {
>       return this.goods2.filter((item) => item.isShow)
>     },
>   },
>   mounted() {
>     console.log(this.$options.render);
>   }
> }
> </script>
> ```

## 总结:

> v-if 和 v-for 哪个优先级更高总结:
>
> ```js
> ## 总结:
>       我们通过 mounted 函数里 打印 render 看它的渲染结果, 可以得出结论:
> # 结论:
>         1. 显然, v-for 的优先级高于 v-if. (我们通过在同级下查看它的编译结果可以得知.)
>         2. 如果同时出现, 每次渲染 都会 先执行循环, 再判断 v-if 的条件, 无论 v-if 的值是true还是 false, 都不可避免循环, 浪费了性能
>         3. 优化: 通常,我们会在 外层嵌套一层 template, 在 template 层进行 v-if 判断, 然后再 在 template 内部执行 v-for 循环.
> 
> # 性能优化, 看上面代码实现及注释.
> 
> #性能优化1
>      通常 我们 可以借助于 template 来实现, 在 template 外部 通过 v-if 判断, 在 template 内部再执行 v-for 循环, 减少因为 v-for 引起的循环调用 render函数
>      
> #性能优化2 
> #那么, 如果 我们的判断条件(isShow)在 列表的每一项内部的时候(比如 goods2), 我们必须 先遍历才能得到 这个 isShow的时候我们该 如何操作??
> 	我们可以定义一个计算属性(如下面: computGoods2), 先 筛选出 列表(goods2)内部 isShow 为true的选项, 再进行 vfor循环.
>         这样便 减少了 v-for 循环的性能消耗. 比如下面我们直接 渲染 computGoods2 性能优于 传统操作
> ```
>
> 

