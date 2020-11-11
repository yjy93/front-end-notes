[TOC]

# Js 字符串 常用方法总结

## 字符串查找相关方法

### includes() 方法

> **查找字符串中是否包含某个字符或字符串, 返回布尔值 `true` 或 `false` ** , 区分大小写
>
> **语法:**  `str.includes(searchString[, position])`
>
> **参数:** 
>
> 1. `searchString`  要在此字符串中查找的字符串
> 2. `position`  | 可选,  从当前字符串的哪个索引位置开始搜索字符串, 默认为0.
>
> **返回值:**  布尔值, `true` 或` false` 
>
> ```js
> const str = 'yangyang ni hao MA'
> console.log(str.includes('yang')); // true
> console.log(str.includes('Yang')); // false 区分大小写
> ```

---

### indexOf() 方法

> **返回索引**  

> `indexOf()` 方法**返回调**用它的 `String`对象中**第一次出现**的**指定值的索引**, 从 `fromIndex` 处进行搜索, 如果未找到该值, 则返回 `-1` , 该方法常用来判断一个字符串里是否包含某个子字符串, 如果返回`-1`则证明没有,  但是现在用 `includes()` 方法更简单.
>
> **语法:**  `str.indexOf(searchValue[,fromIndex])` 
>
> **参数:**
>
> 1.  `searchValue`  要被查找的值.
> 2. `fromIndex  | 可选` 开始查找的位置, 可以是任意整数, 默认为 `0`.
>
> **返回值:** 
>
> ​	查找的字符串 `searchValue` 的第一次出现的索引, 如果没有, 则返回 `-1`.
>
> ```js
> const str = 'good good study, day day up!';
> console.log(str.indexOf('day')); // 17 匹配的第一个位置索引
> console.log(str.indexOf('Gene')); // 没有该字符返回 -1
> ```

### lastIndexOf() 方法

> `lastIndexOf()` 方法区分大小写匹配.
>
> `lastIndexOf()` 方法返回调用 `String` 对象指定值最后一次出现的索引, 在一个字符串中的指定位置 `fromIndex` 处从后向前索引, 如果没找到这个特定值则返回 `-1` .
>
> 该方法将从尾到头的检索字符串 `str`, 看它是否含有子串, 如果有, 返回符合条件的子串的第一个位置
>
> **语法:** `str.lastIndexOf(searchValue[, fromIndex])`
>
> **参数:** 
>
> - `searchValue` 一个字符串, 表示被查找的结果. 如果`searchValue` 是空串, 则返回 `fromIndex` 
> - `fromIndex`  | 可选. 
>
> **返回值:** 
>
> ​		返回指定值最后一次出现的索引(即: 从右向左第一次查到的字符的索引)(索引仍是以从左至右0开始记数的), 如果没找到则返回`-1`.
>
> **代码案例:** 
>
> ```js
> # lastIndexOf() 该方法通常可以用来截取文件的后缀名比较常用
> const str = "员工工.作表.xls"
> console.log(str.lastIndexOf(',')); // 没有返回 -1
> console.log(str.lastIndexOf('.')); // 返回第一次查找到的字符 索引位置
> console.log(str.substring(str.lastIndexOf('.')+1)); // 可以用来截取文件后缀名 xls
> ```

### charAt() 方法

> **`charAt()` 方法从一个字符串中返回指定位置的字符. **
>
> 语法:`str.charAt(index)` 
>
> **参数:**  一个介于 0 和字符长度减 1 之间的整数, 如果没有提供索引,  `charAt() `将使用 `0`.
>
> ```js
> const str = '杨阳,你好啊'
> console.log(str.charAt(3)) // 你
> ```

---



## 获取或截取字符方法

### str[] 获取字符

> 可以通过 `str[index]` 的方式**获取字符串对应索引位置的字符**,一般获取第一位字符时, 这样比较便捷.
>
> ```js
> const str = '你好啊, 最近忙吗?'
> const result = str[0]
> console.log(result) // 你   -->> 可以方便的获取到第一个字符
> ```

### substring() 方法

> **描述:**  `substring` 提取从 `indexStart` 到 `indexEnd` (不包括结束位置)之间的字符
>
> **语法: ** `str.substring(indexStart[, indexEnd])`
>
> **参数:** 
>
> 1. `indexStart` 需要截取的第一个字符的索引
> 2. `indexEnd`  | 可选, 一个 0 到 字符串长度之间的整数
>
> **返回值:**  截取返回的新的子字符串.
>
> ```js
> const str = 'good good study, day day up!';
> console.log(str.substring(3, 8)); // d goo
> console.log(str); // 不改变原来的字符串
> ```

### slice() 方法

> `slice` 方法提取某个字符串的一部分, 并且返回新的字符串,且**不改变原字符串**
>
> **语法:**  `str.slice(beginIndex[, endIndex])`
>
> **参数:**
>
> 1. `beginIndex`  截取字符串的起始位置
> 2. `endIndex`    截取字符串的结束位置 
>
> **返回值:**  一个新的从原始字符串截取出来的字符串.
>
> ```js
> # 如果 beginIndex 的值为负数, 表示从字符串末尾开始截取倒数的字符
> const str = 'good good study, day day up!';
> console.log(str.slice(3,9)); // d good
> console.log(str.slice(-11)); // day day up!
> ```

---

## 去除首尾空字符串方法

### trim()方法

> **语法:**  `str.trim()` 
>
> **返回值:**  去除了开头和结尾空字符串的字符串.
>
> ```js
> const str = '     hello 你好!      '
> console.log(str.length); // 长度为20
> console.log(str.trim().length); // 去除首尾空格 长度为 9
> ```

### trimStart()/trimLeft() 方法

> `trimStart/trimLeft`方法删除字符串开头的空格.

> **语法:**  `str.trimStart() / str.trimLeft()` 
>
> **返回值:**   一个新的删除了开头空格的字符串, 不改变原来字符串的值.
>
> ```js
> const str = ' hello,你好哇!       '
> console.log(str.length); // 18
> console.log(str.trimStart().length); // 17 去除了开头 1个空格
> ```

### trimEnd() /trimRight() 方法

> 去除字符串末尾的空格, 多数用 `trimEnd() `方法.

> **语法:** `str.trimEnd() 或 str.trimRight()` 
>
> **返回值:**  新字符串, 去除了末尾空格
>
> ```js
> const str = ' hello,你好哇!       '
> console.log(str.length); // 18
> console.log(str.trimEnd().length); // 11 去除了7个空格
> ```

---

## 其他相关方法

### split() 把字符串分割成字符数组方法

> `split()` 方法用来把字符串分割成 **字符数组**, 用一个指定的分隔符来分割字符串.

> **语法:**  `str.split([separator[, limit]])` 
>
> **参数:** 
>
> 1. `separator`  指定按照什么进行拆分字符串, `separator` 可以是一个字符串, 也可以是一个 **正则表达式**,  如果纯文本分隔符包含多个字符,  **则必须找到整个字符串来作为分割点**. 如果在 `str`中省略, 或者不出现分隔符, 则返回的数组包含一个由整个字符串组成的元素,  **如果分隔字符串为空字符串, 则返回每一个字符以数组形式返回** 
> 2. `limit` 一个整数, 限定返回的分割片段数量. 当提供此参数时，split 方法会在指定分隔符的每次出现时分割该字符串，但在限制条目已放入数组时停止。如果在达到指定限制之前达到字符串的末尾，它可能仍然包含少于限制的条目。新数组中不返回剩下的文本。
>
> **返回值:**  返回按照指定分隔符分割形成的字符数组
>
> ```js
> const str = 'good good study, day day up!';
> console.log(str.split()); // ["good good study, day day up!"] 不separator
> console.log(str.split('')); // 空字符串
> console.log(str.split(',')); // ["good good study", " day day up!"] 逗号分隔
> ```

### replace() 方法

> `replace()` 方法返回一个替换之后的**新字符串, 原字符串不会改变.** 

> **语法:**  `str.replace(regexp|substr, newSubStr|function)`

> **参数:** 
>
> 1. `regexp(pattern)` 一个`RegExp` 正则对象, 或者正则字面量. 该正则所匹配的内容会被第二个参数的返回值替换掉.
> 2. `subStr(pattern)` 一个将被`newSubStr` 替换的字符串. 其被视为一整个字符串, 而不是正则表达式, **仅第一个匹配项会被替换.** 
> 3. `newSubString(replacement)` 用于替换掉第一个参数在原字符串中匹配部分的 `字符串` , 该字符串可以内查一些特殊的变量名.
> 4. `function(replacement)` 一个用来创建新字符串的函数, 该函数的返回值将替换掉第一个参数匹配到的结果.
>
> **返回值:**  一个部分或全部匹配由替代模式所取代的新的字符串。原字符串不会改变. 
>
> ```js
> const str = 'good good study, day day up!';
> #1. // 正则匹配方式
> console.log(str.replace(/good/, 'GOOD')); // 默认值匹配第一个 GOOD good study, day day up!
> console.log(str.replace(/good/g, 'GOOD')); // 正则添加 g 全局匹配替换 GOOD GOOD study, day day up!
> 
> #2. // 字符串匹配方式
> console.log(str.replace('day', 'DAY')); // 还是只能匹配第一个 good good study, DAY day up!
> 
> #3. // 函数替换
> /*
> *  match 匹配的子字符串
> *  $1,$2...如果replace()方法第一个参数是正则对象,有分组的话,则代表分组内匹配的字符串
> *  offset 匹配的字符串的索引偏移量
> *  string 被匹配的原始字符串
> * */
> const result = str.replace(/\b([a-zA-Z])[a-zA-Z]*\b/g, (match, $1, offset, string) => {
>  console.log(match, $1, offset, string);
>  $1 = $1.toUpperCase()
>  return $1 + match.substring(1) // 实现首字母转换成大写字母
> })
> console.log(result);
> ```

### startsWith() 方法

> 判断一个字符串是否以某个字符串开始, 返回布尔值 `true` 或 `false` , **该方法区分大小写** 

> **语法:** `str.startsWit(searchString[,position])` 
>
> **参数:** 
>
> 1. `searchString` 要搜索的字符串
> 2. `position`  | 可选  在 `str` 中搜索 `searchString` 的开始位置,默认值是0.
>
> ```js
> const str = 'good good study, day day up!';
> console.log(str.startsWith('good')); // true
> console.log(str.startsWith('Good')); // false
> ```

### endsWith() 方法

> `endsWith()` 方法用来判断当前字符串是否以某个字符串结束, 返回 `true` 或 `false`

> **语法:**  `str.endsWith(searchString[, length])`
>
> **参数:** 
>
> 1. `searchString`  要搜索的字符串
> 2. `length  | 可选`: 作为 `str` 的长度, 默认值为 `str.length` 
>
> **返回值:**   如果是以指定字符串结尾, 返回 `true`, 如果不是 返回`false`.
>
> ```js
>  # endsWith() 方法区分大小写
> const str = 'hello world'
> console.log(str.endsWith('world')); // true
> console.log(str.endsWith('World')); // false
> ```
>
> 

