[TOC]

# nunjucks模板引擎

> [nunjucks官网: ](https://nunjucks.bootcss.com/)    

## nunjucks模板注释

> 由于`nunjucks` 模板, 直接以写`html` 的方式写的模板文件, 因此他的注释可以直接使用`html ` 的注释即可.
>
> ```js
> #1. 可以编译到html文件中的注释, 直接使用html注释写法
> <!-- 我是nunjucks中的注释 -->
>     
> #2. nunjucks自己的注释, 只是写模板时的注释, 最后不会编译到html文件中
> 	{# 我是nunjucks 自己的注释 #}
> ```

## koa-nunjucks-2的使用

> `nunjucks` 模板引擎, 有更好的 `hmtl` 支持, 不需要像`pug` 那样缩进来写,  可以像写`html`文件那样写`nunjucks` 语法, 只不过在里面加入了很多`nunjucks` 的自有语法, 更加清晰易理解.

> 首先需要安装 `nunjucks-2` 引擎模块. `npm install nunjucks-2 -S`
>
> **服务器文件写法配置nunjucks ** 
>
> **./server.js 文件** 
>
> ```js
> const Koa = require('koa')
> const Router = require('koa-router')
> const nunjucks = require('koa-nunjucks-2')
> const app = new Koa()
> let router = new Router()
> 
> app.use(nunjucks({
>     ext:"html", // 或者后缀名也可以是 .njk
>     path:__dirname+"/views",
>     nunjucksConfig:{
>         trimBlocks:true, // 防止 Xss漏洞
>     }
> }))
> 
> router.get("/",async ctx=>{
>     // ctx.body="hello"
>     await ctx.render("./index",{
>         username:'Gene',
>         num:4,
>         usersArr:[
>             {id:1,name:'Gene',age:18},
>             {id:2,name:'杨阳',age:20},
>             {id:3,name:'旺旺',age:7},
>             {id:4,name:'豆豆',age:2},
>         ],
>         str:'hello world' 
>     }) 
> })
> 
> router.get('/son1',async ctx=>{
>     await ctx.render("./son1")
> })
> 
> router.get('/import',async ctx=>{ 
>     await ctx.render("./import")
> })
> 
> app.use(router.routes())
> app.listen(4000,()=>{
>     console.log("-Local http://localhost:4000/")
> })
> ```

### nunjucks 插值语法

> `nunjucks` 的插值语法和我们平常写 `VUE`  的语法一样, 只需要写双大括号`{{}}`  即可以完成插值引用.
>
> `html` 文件如下.
>
> ```html
> <!DOCTYPE html>
> <html lang="en">
> <head>
>     <meta charset="UTF-8">
>     <title>Document</title>
> </head>
> <body>
>     <h1>我是一级标题</h1>
>     <!-- 插值引用数据 -->
>     <p>用户名是:{{username}}</p>
> </body>
> </html>
> ```

### nunjucks 的判断语句

> `nunjucks` 模板中, 同样可以写判断语句来完成一些判断的基本操作, 只不过判断语句的写法要写在大括号中间的两个百分号里.`{% 这里可以写判断语句 %}` , 判断语句的结束时, 一定要写 判断结束语句标识. 即 `{% endif %}`
>
> **具体代码演示如下:**
>
> ```html
> <!DOCTYPE html>
> <html lang="en">
> <head>
>     <meta charset="UTF-8">
>     <title>Document</title>
> </head>
> <body>
>     {% if num > 3%}
>     <p>num的值大于 3</p>
>     {% elseif num < 3%}
>     <p>num的值小于 3</p>
>     {% else %}
>     <p>num的值等于三</p>
>     {% endif %} <!-- 注意最后一定要写 结束判断的标志 --> 
> </body>
> </html>
> ```

### nunjucks 的循环语句

1. `for in 循环` 

> `nunjucks` 模板引擎中, 同样存在循环语法用来做一些简单的循环, 但是同样注意要给一个结束循环的标志. `{% endfor %}`  
>
> **具体代码演示如下:** 
>
> ```js
> <!DOCTYPE html>
> <html lang="en">
> <head>
>     <meta charset="UTF-8">
>     <title>Document</title>
> </head>
> <body>
>     <h1>我是一级标题</h1>
>     <ul>
>         {% for item in usersArr%}
>         <li>
>             姓名是: {{item.name}}
>             年龄是: {{item.age}}
>         </li>
>         {% endfor %} <!-- 注意在循环结束时,给一个结束的标志--> 
>     </ul>
> </body>
> </html>
> ```

### nunjucks内置的过滤器

> `nunjucks` 模板引擎中, 存在很多内置过滤器,用来完成我们对数据的一些过滤,筛选和加工的相关操作.
>
> 过滤器的写法是需要在 要过滤的数据后通过 管道符号来把过滤器分割开. 并且过滤器还以连续操作, 即在过滤器 `1` 的后面再写过滤器, 具体代码演示如下:
>
> ```js
> <!DOCTYPE html>
> <html lang="en">
> <head>
>     <meta charset="UTF-8">
>     <title>Document</title>
> </head>
> <body>
>     <h1>我是一级标题</h1>
> <!-- 过滤器1: replace, 把"world"替换为 "你好" -->
>     <!-- 过滤器2: capitalize, 然后首字母大写 -->
>     {{str | replace("world","你好") | capitalize}}
> </body>
> </html>
> ```

### nunjucks 模板继承

> `nunjucks ` 模板引擎中, 同样添加了模板继承的写法. 我们可以通过 `block` 的方式来定义一个名称. 
>
> 这种写法类似于`vue` 中的 `slot` 写法, 暂时可以这么理解, 不一定描述精确.
>
> ==同样, 继承的时候, 也可以通过 表达式`super()` 来获取父级里面的内容.== 
>
> **:triangular_flag_on_post: 注意:**  `endblock` 标签中间一定不要有空格, 否则会报错.
>
> **./server.js 服务器代码如下:** 
>
> ```js
> const Koa = require('koa')
> const Router = require('koa-router')
> const nunjucks = require('koa-nunjucks-2')
> const app = new Koa()
> let router = new Router()
> 
> app.use(nunjucks({
>     ext:"html", // 或者后缀名也可以是 .njk
>     path:__dirname+"/views",
>     nunjucksConfig:{
>         trimBlocks:true, // 防止 Xss漏洞
>     }
> }))
> 
> router.get("/",async ctx=>{
>     // ctx.body="hello"
>     await ctx.render("./index",{
>         username:'Gene',
>         num:4,
>         usersArr:[
>             {id:1,name:'Gene',age:18},
>             {id:2,name:'杨阳',age:20},
>             {id:3,name:'旺旺',age:7},
>             {id:4,name:'豆豆',age:2},
>         ],
>         str:'hello world'
>     }) 
> })
> 
> router.get('/son1',async ctx=>{
>     await ctx.render("./son1")
> })
> 
> app.use(router.routes())
> app.listen(4000,()=>{
>     console.log("-Local http://localhost:4000/")
> })
> ```
>
> **views目录下 ./parent.html  通用文件如下:**
>
> ```html
> <!-- 这是一个parent.html 文件, 我们这里通过block来定义一个通用模板,用于给其他文件继承 -->
> 
> <div>
>     <h1>我是父级模板, 你们可以调用,也可以传入参数! </h1>
>     {% block header %}
>         我是 header 头部banner区域
>     {% endblock %}
> 
>     {% block left %}
>         我是 left 菜单栏
>     {% endblock %}
> 
>     {% block right %}
>         我是 content 内容区域
>     {% endblock %}
>     
>     {% block someValue %}
>         <h3 style="color: cyan;">我是父级里面的一些内容</h3>
>     {% endblock %}
> </div>
> 
> ```
>
> **views目录下, son1 文件代码如下:** 
>
> 可以有多个 `son`文件, 多次继承,给 `parent`传入不同的内容.
>
> ```js
> <!DOCTYPE html>
> <html lang="en">
> <head>
>     <meta charset="UTF-8">
>     <title>Document</title>
> </head>
> <body>
>     <!-- 继承父级模板 -->
>     {% extends './parent.html' %}
>     {% block header %}
>         <p>我是 son1 中头部banner内容</p> 
>     {% endblock %}
> 
>     {% block left %}
>         <p>我是 son1 中左边内容</p>
>     {% endblock %}
> 
>     {% block right %}
>         <p>我是 son1 中右边内容</p>
>     {% endblock %}
> 	
>     {% block someValue%}
>     	{{super()}} <!-- super() 表达式, 获取父级模板内容 --> 
>     {% endblock %}
> </body>
> </html>
> ```

### nunjucks 中的宏标签 macro

> 在`nunjucks` 模板引擎中,  也存在宏标签, 类似于 `pug`中的`mixin` 语法, 可以定义一个红标签, 多次调用, 具体代码演示如下,而且定义 `macro ` 的时候, 也可以像 `ES6` 那样, 给参数一个默认值.
>
> ```js
> <!DOCTYPE html>
> <html lang="en">
> <head>
>     <meta charset="UTF-8">
>     <title>Document</title>
> </head>
> <body>
>     <h1>我是一级标题</h1>
>     <!-- macro: 宏标签,类似于pug当中的 xixin -->
>     <!-- 定义macro  -->
>     {% macro pet(name="狗",sex=5) %}
>      <p>我是一只{{name}}, 我都性别是:{{sex}}</p>
>     {% endmacro %}
> 
>     <!-- 多次调用macro -->
>     {{pet("Dog","female")}}
>     {{pet("cat","male")}}
> </body>
> </html>
> ```
>
> **:triangular_flag_on_post:  注意**   ==`nunjucks `中的默认参数跟`ES6` 有所不同的是,  假如你定义的时候` pet(name="狗",age)`  只是给了第一个参数默认值, 当你调用的时候, `pet(15)` 只传了一个参数, 那么这个参数不会把第一个有默认值的参数替换掉(即:不会把`name` 替换掉), 而是自动把参数`15` 传递给了第二个没有默认值的那个参数`age`, 这一点儿跟`ES6` 有所不同, 使用 的时候要注意== .   

### nunjucks 中的include

> 同样的 `nunjucks` 模板中, 也可以使用 `include` 指令来引用公共的一些模板,具体代码演示如下.
>
> **views 下的 public.html代码如下:** 
>
> ```js
> <h3>我是公共的html, 可以被include 引用</h3>
> ```
>
> **渲染的 index.html 模板引用 public.html代码如下:** 
>
> ```js
> <!DOCTYPE html>
> <html lang="en">
> <head>
>     <meta charset="UTF-8">
>     <title>Document</title>
> </head>
> <body>
>     <h1>我是一级标题</h1>
>     {% include 'public.html' %}
>     {% include './public.html' %}
> </body>
> </html>
> ```

### nunjucks 中的 import

> `nunjucks` 模板中, 除了 `include` 之外, 还有一个 `import` ,  跟 `include` **不同的是, `import` 可以引入一些变量/函数.**   
>
> > `import` 会把引入文件中用 `macro`定义的宏方法, 放到一个对象里, 可以实现对 `macro` 定义方法的调用.
>
> **views 文件夹下的 index.html:**  
>
> ```js
> <!DOCTYPE html>
> <html lang="en">
> <head>
>     <meta charset="UTF-8">
>     <title>Document</title>
> </head>
> <body>
>     <h1>我是一级标题</h1>
>      <!-- 定义macro  -->
>     {% macro pet(name="狗",sex=5) %}
>       <p>我是一只{{name}}, 我都性别是:{{sex}}</p>
>      {% endmacro %}
> </body>
> </html>
> ```
>
> **views文件夹下 `import.html` 引入 `index.html` 文件:** 
>
> ```js
> <!DOCTYPE html>
> <html lang="en">
> <head>
>     <meta charset="UTF-8">
>     <title>Document</title>
> </head>
> <body>
>     <!-- 这种import引入,可以把引入文件中 macro定义的内容定义为一个对象 -->
>     {% import './index.html' as importObj %}
>     <!-- 调用macro定义的宏方法 -->
>     {{importObj.pet("小狗佩奇",15)}}
> </body>
> </html>
> ```
>
> 



