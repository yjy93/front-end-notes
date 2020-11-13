<template>
  <div id="app">
    <h1 style="color: red">v-if 和 v-for 哪个优先级更高?</h1>

    <p v-for="item in lists" v-if="isShow">{{ item.value }}</p>

    <!-- 通常我们需要优化的解决方案是 借助于 template 来实现-->
<!--    <template v-if="isShow">-->
<!--      <p v-for="item in lists">{{ item.value }}</p>-->
<!--    </template>-->

    <!--
      我们通过 mounted 函数里 打印 render 看它的渲染结果, 可以得出结论:
      # 结论:
        1. 显然, v-for 的优先级高于 v-if. (我们通过在同级下查看它的编译结果可以得知.)
        2. 如果同时出现, 每次渲染 都会 先执行循环, 再判断 v-if 的条件, 无论 v-if 的值是true还是 false, 都不可避免循环, 浪费了性能
        3. 优化: 通常,我们会在 外层嵌套一层 template, 在 template 层进行 v-if 判断, 然后再 在 template 内部执行 v-for 循环.
    -->

  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      isShow: true,
      lists: [
        {
          title: 'A',
          value: 'A',
        },
        {
          title: 'B',
          value: 'B',
        },
        {
          title: 'B',
          value: 'B',
        },
      ]
    }
  },
  mounted() {
    console.log(this.$options.render);
  }
}

</script>

<style>
</style>
