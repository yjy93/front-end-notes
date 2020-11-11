[TOC]

# js数组常用方法总结

## 判断是否为数组: 

### Array.isArray()

> `Array.isArray()` 方法用来判断一个对象是否为数组对象. 即, 判断一个变量是不是数组的方法. 返回 布尔值 `true` 或 `false` 
>
> ```js
> const arr = [2, 5, 8, 5, 9, 1]
> console.log(Array.isArray(arr)); // true
> ```

## 1.0 数组新增or删除相关方法

**==添加元素的方法----------------------------------------------------------:==** 

### push() 方法 末尾添加

> `push(element1,...,elementN)` 方法将一个或多个元素添加到数组的末尾,  并**返回该数组的长度.**
>
> ```js
> const animals = ['pigs', 'goats', 'sheep'];
> console.log(animals.push('cows')); // 4
> console.log(animals); // 改变了原数组为:  [ 'pigs', 'goats', 'sheep', 'cows' ]
> ```

### unshift() 方法 开头添加

> `unshift() `方法将一个或多个元素添加到 数组的**开头**, 并**返回该数组的新长度.**  该方法修改原数组.
>
> ```js
> const arr = ['贝贝', '京京', '欢欢', '莹莹', '妮妮']
> const result = arr.unshift('晴晴')
> console.log(result); // 返回数组的长度 6
> console.log(arr); // 原数组改变为 -> [ '晴晴', '贝贝', '京京', '欢欢', '莹莹', '妮妮' ]
> ```
>
> **语法:** `arr.unshift(element1,element2,....elementN)`
>
> **返回值:**  返回数组新长度, 当一个对象调用该方法时, 返回其 `length` 属性.

**==删除元素的方法-------------------------------------------------:==** 

### shift() 方法 删除第一项

> `shift()` 方法从数组中删除 **第一个** 元素, **并返回该元素的值**. 此方法修改了 数组的长度.  如果数组为空, 返回`undefined` .
>
> ```js
> const arr = ['贝贝', '京京', '欢欢', '莹莹', '妮妮']
> const firstEle = arr.shift()
> console.log(firstEle); // 贝贝
> console.log(arr); // 原数组少了一位
> ```

### pop() 方法删除最后一项

> `pop() `方法从数组中删除最后一个元素, **并返回该元素的值.** 此方法改变数组的长度.
>
> ```js
> const arr = ['贝贝', '京京', '欢欢', '莹莹', '妮妮']
> const lastElement = arr.pop()
> console.log(lastElement); // 妮妮
> console.log(arr); // 原数组少了一项 妮妮
> ```

### splice() 方法删除或 替换数组某一项

> `splice() `方法通过删除或替换现有元素 或原地添加新的元素来修改数组 **并以数组的形式返回被修改的内容**. 此方法改变原数组.
>
> ```js
> const arr = ['贝贝', '京京', '欢欢', '莹莹', '妮妮']
> const result = arr.splice(3,1) // 返回被删除的元素
> console.log(result); // [ '莹莹' ]
> console.log('原数组 ->',arr); // 原数组->[ '贝贝', '京京', '欢欢', '妮妮' ]
> 
> #// 有第三个参数的时候, 表示把删除的元素, 替换成该元素
> const arr = ['贝贝', '京京', '欢欢', '莹莹', '妮妮']
> const result = arr.splice(2,1,'阳阳') // 把第二项替换成了 阳阳
> console.log(arr); // [ '贝贝', '京京', '阳阳', '莹莹', '妮妮' ]
> 
> #// 如果 start 为 负数, 表示从倒数 start 个元素开始删除
> 
> let arr4 = ['贝贝', '京京', '欢欢', '莹莹', '妮妮']
> const result = arr4.splice(-3, 2) // 从倒数第三个开始删除,删除两个元素, 返回被删除的数据
> console.log(result);
> console.log(arr4); // 原数组
> ```
>
> **参数:** 
>
> 1. `start` 指定修改的开始位置(从0计数). 如果超出了数组长度, 则从数组末尾开始添加内容; 如果只是负值, 则表示从数组末位开始的第几位. 
> 2. `deleteCount ` 可选, 表示要移除的数组元素的个数.  如果 `deleteCount` 被省略了, 那么从 `start`位置开始之后所有元素都会删除. 
> 3. `item1, item2,...` | 可选. 要替换原数组的内容, 如果不指定, 则只是删除数组元素.
>
> **返回值:** 
>
> 由被删除的元素组成的一个数组, 没有则返回空数组.

## 2.0 数组查找遍历相关方法

### forEach() 方法

> **`forEach` 方法没有返回值, 或者说返回值是 `undefined`** 

> `forEach()` 方法对数组的每个元素都执行一次给定的函数.
>
> ```js
> const arr = ['贝贝', '京京', '欢欢', '莹莹', '妮妮']
> arr.forEach((item,index,array)=>{
>     console.log(item, index,array); // 遍历数组每一项
> },this)
> ```
>
> **参数:** 
>
> 1. `callback` 回调函数, 三个参数.
> 2. `thisArg` | 可选, 当执行回调函数 `callback` 时,用作 `this`  的值.
>
> **返回值:**  没有返回值, 或者返回值是 `undefined` 

### find() 方法

> `find(function(item,index,arr){}, thisArg)` 方法返回数组中满足条件的 **第一个** 元素的值. 否则返回 `undefined` 
>
> **参数:** 
>
> > - `callback回调函数` 回调函数可接受三个参数.
> > - `thisArg` 可选, 执行回调时用作 `this` 的对象.
>
> ```js
> const arr = ['旺旺','豆豆','贝贝','贝贝','欢欢','贝贝','妮妮']
> const result = arr.find((element)=> element == '贝贝')
> console.log(result); // 贝贝 返回第一个 贝贝
> const result2 = arr.find((element)=>element === '阳阳')
> console.log(result2); // 没有返回: undefined
> 
> const arr2 = [1,4,5,7,9,2,4,6,8]
> const result3 = arr2.find((item)=>item > 5)
> console.log(result3); // 7 返回第一个大于5 的值
> ```
>
> **返回值:**  返回数组中第一个满足条件的元素, 没有 返回 `undefined` 

### findIndex() 方法

> `findIndex()` 方法返回数组中满足条件的 **第一个元素的索引**,  否则返回 `-1`  
>
> ```js
> const arr = [1, 3, 5, 7, 9]
> const result = arr.findIndex((item) => item > 5)
> const result2 = arr.findIndex((item) => item > 100)
> console.log(result); // 3
> console.log(result2); // -1
> ```
>
> **参数:** 
>
> 1. `callback` 回调函数
> 2. `thisArg` 可选, 执行`callback`时作为 `this` 对象的值.

### indexOf() 方法

> `indexOf()` 方法返回在数组中可以找到一个给定元素的**第一个索引**, 如果不存在可以返回 `-1`. 现在我们从数组中判断一个元素是否存在, 大多都用  ES6新增的`includes()`方法, 很少再使用 `indexOf()`方法判断.
>
> ```js
> const arr = ['贝贝', '京京', '欢欢', '莹莹', '妮妮']
> const result = arr.indexOf('莹莹')
> console.log(result); // 3, 返回有索引的值,说明该元素存在
> 
> const result2 = arr.indexOf('阳阳')
> console.log(result2); // -1, 返回 -1, 说明该元素不存在
> ```
>
> 

### includes() 方法

> `includes()` 方法用来判断一个数组是否包含一个指定的值, 如果包含, 返回 `true` , 否则返回 `false`
>
> ```js
> const arr = ['贝贝','京京','欢欢','莹莹','妮妮']
> const result = arr.includes('贝贝')
> console.log(result); // true 有则返回 true
> const result2 = arr.includes('阳阳')
> console.log(result2); // false 没有返回 false
> ```
>
> **语法:**   `arr.includes(valueToFind[, fromIndex])`
>
> **参数:** 
>
> 1. `valueToFind` 需要查找的元素之.
> 2. `fromIndex` 可选. 从 `fromIndex` 索引处开始查找.

### map() 方法

> `map(function(){})` 方法创建一个新数组, 其结果是 该数组中每个元素都调用一次提供函数后返回的值
>
> `map` 不修改调用它的原数组本身.
>
> ```js
> const arr = ['贝你好', '京京', '欢欢', '莹莹', '妮妮']
> const result = arr.map((item)=> `\<${item}\>`)
> console.log(result);
> 
> const arr2 = [1,3,5,7,9] // [ '<贝你好>', '<京京>', '<欢欢>', '<莹莹>', '<妮妮>' ]
> const result2 = arr2.map((item)=>item * 2)
> console.log(result2); // [ 2, 6, 10, 14, 18 ]
> ```
>
> **参数:** 
>
> 1.  `callback` 回调函数, 生成新数组元素的函数
>    - `currentValue` , `index可选` , `array可选` 
> 2.  `thisArg可选` 执行`callback` 函数时值被用作 `this`
>
> **返回值: ** 回调函数处理后的新数组.

### filter() 方法

> `filter(function(element,index,array){})` 方法**创建一个新数组**, 其中包含满足条件的所有元素, 即 `filter` 方法返回的是满足条件的所有元素的新数组.
>
> ```js
> const arr = ['旺旺旺啊','豆豆','贝贝','贝贝你好啊','欢欢在不在呢','贝贝','妮妮']
> const result = arr.filter((item)=>item.length > 3)
> console.log(result); // 返回满足条件的新数组 [ '旺旺旺啊', '贝贝你好啊', '欢欢在不在呢' ]
> ```
>
> **参数:** 
>
> > `callback回调函数` 
> >
> > - `element` , `index` `array`
> >
> > `thisArg` 可选, 执行 `callback`时, 用于 `this` 的值.
>
> **返回值:**  返回满足条件的所有元素组成的新数组,  如果没有任何元素, 则返回 空数组.
>
> 





## 3.0 其他方法

### toString() 方法

> 把数组转换成字符串, 并且使用 逗号 `,` 分隔每一项.
>
> ```js
> const arr = [2, 5, 8, 5, 9, 1]
> console.log(arr.toString()); // 2,5,8,5,9,1
> ```

### join() 方法 将数组拼接成字符串

> `join()` 方法将一个数组(`或一个类数组对象`)的所有元素 连接成一个字符串, 并返回这个字符串. 如果该数组只有一个元素, 那么将返回这个元素, 而不使用分隔符.  默认用 逗号 `,` 分隔
>
> ```js
> const arr = ['贝贝','京京','欢欢','莹莹','妮妮']
> console.log(arr); // [ '贝贝', '京京', '欢欢', '莹莹', '妮妮' ]
> const result = arr.join() // 默认用逗号分隔
> console.log(result, 123, typeof result); // 贝贝,京京,欢欢,莹莹,妮妮 123 string
> console.log(arr.join("/")); // 传入分隔符: 贝贝/京京/欢欢/莹莹/妮妮
> ```
>
> **参数:** 
>
> `separator` 可选, 指定一个字符串来分隔数组的每个元素, 如果`separator`是空字符串(`""`)，则所有元素之间都没有任何字符。
>
> **返回值:**   返回数组所有元素**连接成的字符串.**

### every() 方法

> `every(function(){},thisArg)` 方法用来**判断**数组中所有元素是否都能满足某个条件的测试, **返回布尔值.**
>
> **注意:** 如果收到一个空数组, 此方法一切情况下都是返回 `true`
>
> ```js
> const arr = ['贝贝','京京','欢欢','莹莹','妮妮']
> const result = arr.every((item)=>item.length < 3)
> console.log(result); // true
> 
> const result2 = arr.every((item)=>item.length < 2)
> console.log(result2); // false
> ```
>
> **语法:**  `arr.every(callback[, thisArg])`
>
> **参数:** 
>
> 1. `callback` 回调函数, 用来测试每个元素的函数, 接收三个参数
>
>    `element`, `index 可选`, `array可选`.
>
> 2.  `thisArg` 执行 `callback` 时使用的 `this` 值.

### some() 方法

> `some()` 方法用来**判断**数组中是不是至少有 `1` 个元素满足条件, 返回布尔值.
>
> **注意：**如果用一个空数组进行测试，在任何情况下它返回的都是`false`。
>
> ```js
> const arr = ['贝贝','京京','欢欢','莹莹','妮妮']
> const result = arr.some((item)=>item == '贝贝')
> console.log(result); // true 即: 有一项满足就返回 true
> ```
>
> **参数:** 
>
> 1. `callback` 用来测试每个元素的回调函数, 接收三个参数.
> 2. `thisArg` | 可选.  执行 `callback` 时使用的 `this` 值.
>
> **返回值:**  数组中有至少一个元素通过回调函数的测试就会返回**true**；所有元素都没有通过回调函数的测试返回值才会为false。

### reverse() 方法

> reverse() 方法将数组中元素的位置颠倒, 并返回该数组. 该方法改变了原数组.
>
> ```js
> const arr = ['贝你好', '京京', '欢欢', '莹莹', '妮妮']
> arr.reverse();
> console.log(arr); // [ '妮妮', '莹莹', '欢欢', '京京', '贝你好' ]
> ```

### slice() 方法获取数组片段

> `slice()`方法返回一个**新的数组对象**, 这一对象是一个由`begin` 和`end` 决定的原数组的浅拷贝. **原数组不会改变.** 
>
> ```js
> const arr = ['贝贝', '京京', '欢欢', '莹莹', '妮妮']
> const result = arr.slice(1,3)
> console.log(result); // [ '京京', '欢欢' ]
> console.log('原数组->',arr); //原数组->[ '贝贝','京京','欢欢','莹莹','妮妮' ] 可以看到原数组未改变.
> 
> #// 如果begin为负数, 表示从原数组的倒数第 begin 个元素开始截取, 截取到 指定索引位置
> let arr = ['贝贝', '京京', '欢欢', '莹莹', '妮妮']
> const result2 = arr.slice(-4,4)
> // 上述表示 从 倒数第 4 个开始截取, 截取到数组索引为 4 的位置, 不包括索引为 4 的选项.
> // 如果结束的 索引 end, 在 begin 之前, 则返回空数组
> ```
>
> **参数:** 
>
> 1.  `begin` | 可选. 开始提取的索引位置.  如果该参数为负数, 则表示从原数组中的倒数第几个元素开始提取. `slice(-2)` 表示提取原数组中的倒数第二个元素到最后一个元素(包含最后一个元素). 
>
> 如果省略 `begin(),` 则 `slice()` 从索引 `0` 开始
>
> 如果 `begin` 大于原数组的长度, 则会返回空数组.
>
> 2.  `end` | 可选.  提取结束位置, 不包含 结束位置的元素.
>
> **描述:** 
>
> `slice()` 不会修改原数组.

### sort() 方法排序

> `sort()` 方法用来对数组进行排序,  **并返回数组**. 默认排序顺序是在 将元素转换为字符串, 然后比较它们的 UTF-16 代码单元值序列时构建的.
>
> ```js
> const arr = ['贝贝', '京京', '欢欢', '莹莹', '妮妮']
> const result = arr.sort()
> console.log(result);
> 
> const arr2 = [1,3,5,100,1000,97,53]
> arr2.sort()
> console.log(arr2);
> 
> ```
>
> **语法:**  `arr.sort([compareFunction])`
>
> **参数:** 
>
> `compareFunction` | 可选. 
>
> - 用来指定按某种顺序进行排列的函数. 如果省略, 元素按照转换为的字符串的各个字符的Unicode位点进行排序。
> - `firstEl` 第一个用于比较的元素.
> - `secondEl` 第二个用于比较的元素.
>
> **如果指明了 `compareFunction`** ，那么数组会按照调用该函数的返回值排序。即 a 和 b 是两个将要被比较的元素：
>
> - **如果 `compareFunction(a, b)` 返回值 小于 0** ，那么 a 会被排列到 b 之前；
>
> - **如果 `compareFunction(a, b)` 等于 0 ， a 和 b 的相对位置不变**。备注： ECMAScript 标准并不保证这一行为，而且也不是所有浏览器都会遵守（例如 Mozilla 在 2003 年之前的版本）；
>
> - **如果 `compareFunction(a, b)` 大于 0** ， b 会被排列到 a 之前。
> - `compareFunction(a, b)` 必须总是对相同的输入返回相同的比较结果，否则排序的结果将是不确定的。
>
> 所以，比较函数格式如下
>
> ```js
> const arr2 = [1, 3, 5, 100, 1000, 97, 53]
> arr2.sort(function (a, b) {
>     console.log(a, b);
>     if (a < b) {
>         return -1;
>     }
>     if (a > b) {
>         return 1;
>     }
>     // a must be equal to b
>     return 0;
> })
> console.log(arr2);
> ```
>
> **返回值:**  排序后的数组.  请注意，数组已原地排序，并且不进行复制
>
> ==如果要比较数字而非字符串==，比较函数可以简单的以 a 减 b 形势就会升序排列.
>
> ```js
> const arr = [1,100,1000,22,4,5,7]
> arr.sort(compareNumbers) // 比较数字,比较函数返回 a-b就是升序排列
> function compareNumbers(a, b) {
>   return a - b;
> }
> ```

### reduce() 方法

> `reduce()` 方法对数组中的每个元素执行一次 `reducer` 函数, 将其结果汇总为单个 返回值.
>
> ```js
> const arr = [1, 3, 5, 7, 9]
> const result = arr.reduce(function (accumulator, currentValue) {
>     console.log(accumulator, currentValue);
>     return accumulator + currentValue
> })
> console.log(result);
> ```
>
> `reducer ` 函数(即: `reduce` 方法的回调函数) 共接收 4 个参数:
>
> 1. Accumulator (acc) (累计器)
> 2. Current Value (cur) (当前值)
> 3. Current Index (idx) (当前索引)
> 4. Source Array (src) (源数组)
>
>  **reducer** 函数的返回值分配给累计器`Accumulator `，该返回值在数组的每个迭代中被记住，并最后成为最终的单个结果值。
>
> **语法:** 
>
> ```js
> arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
> ```
>
> **参数:** 
>
> 1.  `callback` 回调函数. 执行数组中每个值的函数, 包含四个参数.
>    - `accumulator` 累计器累计回调的返回值; 它是上一次调用回调时返回的累计值, 或 `initialValue` 
>    - `currentValue` 数组中正在处理的元素
>    - `index` | 可选. 数组中正在处理的当前元素的索引. 如果提供了 `initialValue`, 则起始索引号为 `0`, 否则从索引 `2` 开始.
>    - `array` | 可选. 调用 `reduce()` 的数组.
> 2. `initialValue` | 可选
>    - 作为第一次调用 `callback` 函数时的第一个参数的值, 如果没有提供初始值, 则会使用数组中的第一个元素. 在没有初始值的空数组上调用 `reduce` 将会报错.
>
> **返回值:**  函数累计处理的结果.

### concat() 方法

> `concat(arr1,arr2,...,arrN)` 方法用于合并两个或多个数组. 此方法不会更改现有数组, 而是**返回一个新数组.**
>
> ```js
> const arr = ['贝贝','京京']
> const arr2 = ['欢欢','莹莹','妮妮']
> const result = arr.concat(arr2)
> console.log(result); // [ '贝贝', '京京', '欢欢', '莹莹', '妮妮' ]
> ```
>
> **语法:**  `var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])` 
>
> **参数:** 
>
> 1. `valueN` | 可选
>    - 将数组he/或值连接成新数组,  如果省略了 `valueN` 参数, 则 `concat` 会返回一个它所调用的已存在的数组的浅拷贝.
>
> **返回值:**   新的`Array`实例.

## ES6 新增的一些方法

### flat() 方法

> `flat()`方法用来处理嵌套数组的扁平化,  会按照一个指定的深度递归遍历数组, 返回一个新数组. [详见: ES6数组扩展, Array.from()方法等](https://blog.csdn.net/yangyang_A/article/details/106100489) 
>
> **语法:**  `var newArray = arr.flat([depth])` 
>
> **参数:** 
>
> ​	`depth` | 可选, 指定要提取嵌套数组的结构深度, 默认值为 `1`.
>
> **返回值:**  扁平化处理后的新数组.

###  Array.from() 方法

> `Array.from()` 方法, 用于将 `类数组` 对象 和 `可遍历` 对象(包括ES6的set 和 map), **转换成 真正的数组**   
>
> ```js
> let arrayLike = {
>     '0': 'a',
>     '1': 'b',
>     '2': 'c',
>     length: 3
> };
> 
> // ES5的写法
> var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']
> 
> // ES6的写法
> let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
> ```
>
> 

# 总结:

> **ES6新增相关方法见:**   [ES6数组扩展Array.from()方法,数组实例的flat()方法](https://blog.csdn.net/yangyang_A/article/details/106100489)  

> 交流学习添加微信(备注技术交流学习): `Gene199302` 