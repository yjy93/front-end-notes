[TOC]

# Js中的继承

## 构造函数继承

### 构造函数继承代码演示

> ```js
> function Animal() {
>     console.log('父类里的 this ------',this);
>     this.name = 'Animal'
> }
> Animal.prototype.speak = function () { // 父类原型上的方法
>     console.log('speak -->');
> };
> function Dog() {
>     console.log('子类里的 this --->>>',this);
>     Animal.call(this); // 这时父类里的this是 Dog{}
>     this.type = 'dog'
> }
> var dog = new Dog(); // new 的时候执行 Dog 构造函数, 调用父类
> console.log(dog.name); // Animal
> console.log(dog.speak); // undefined
> 
> function Cat() {
>     Animal.call(this) // 这时父类里的this是 Cat{}
> }
> var cat = new Cat(); // new 的时候执行 Obj2 构造函数, 调用父类
> ```

### 构造函数继承的原理

> 通过`call`实现的继承, 本质是改变了 `this`的指向, ==改变父类里面的 `this` 为当前子类的上下文==, 这样在父类里面通过 `this` 设置的属性或者方法会被写到子类上面.  

### 构造函数继承的缺点

> :triangular_flag_on_post:  由上面代码我们可以看出, 构造函数继承, 只能继承父类**构造函数上**  的属性和方法, **不能继承父类原型上**的属性和方法.   

## 通过原型链继承

### 原型继承代码演示

> ```js
> function Animal() { // 父类
>     this.name = '父类name -> Animal';
>     this.arr = [1,2,3]
> }
> Animal.prototype.speak = function () { // 父类原型上的方法
>     return '父类原型的方法 speak --->'
> };
> function Dog(type) {
>     this.type = type
> }
> console.log('---->>', Dog.prototype); // 未改变指向之前的原型 指向子类函数本身: Dog{}
> 
> Dog.prototype = new Animal(); #// 子类原型指向父类实例
> 
> let dog1 = new Dog('dog1');
> let dog2 = new Dog('dog2');
> console.log(dog1.name); // 父类name -> Animal
> dog1.arr.push('又push了一个元素');
> console.log(dog1.speak()); // 父类原型的方法 speak --->
> console.log(dog2.name); // 父类name -> Animal
> console.log(dog2.arr); // [ 1, 2, 3, '又push了一个元素' ]
> ```

### 原型继承的原理

> 原型继承利用的是原型链向上查找的机制来实现继承,  子类的 `prototype` 本来是指向 子类构造函数本身的(`本例中Dog{}`), 而我们通过改变 子类原型的指向, 把 ==子类的原型指向父类实例== , 这样就可以在`Dog` 子类的实例 `dog1` 和 `dog2` 上, 既能继承父类上的属性和方法, **也能继承父类原型上的属性和方法**  

### 原型继承的缺点

> ```js
> # 缺点
> 	因为 dog1.__proto__ === dog2.__proto__, 所以当改变父类构造函数上的属性时, 对 dog1 和 dog2 两个实例都会有影响.
> 	比如: 我们在本例中, 在子类实例 dog1 上, 向数组中 push 了一个元素,  子类实例 dog2 中也会跟着改变就是这个原因.
> # 而我们通常并不希望两个子类实例 dog1 和dog2 相互影响, 而是希望其独立维护的.
> ```

## 组合继承

**:triangular_flag_on_post:  组合继承:**  ==构造函数 + 原型链 的方式实现组合继承== 

### 组合继承代码演示

> ```js
> function Parent() {
>     this.name = 'I am Parent';
>     this.arr = [1,2,3]
> }
> 
> Parent.prototype.speak = function () {
>     console.log('我是父类原型上的方法 speak --> ');
> };
> function Child() {
>     Parent.call(this); // 构造函数继承的 call 方法
>     this.type = 'child'
> }
> Child.prototype = new Parent(); // 子类的原型指向父类的实例
> 
> let child1 = new Child();
> let child2 = new Child();
> child1.arr.push('child1 push一个元素');
> console.log(child1.arr); // [ 1, 2, 3, 'child1 push一个元素' ]
> console.log(child2.arr); // [ 1, 2, 3 ]
> console.log(child1.speak); // [Function] 可以访问父类原型的熟悉和方法
> ```

### **组合继承原理:** 

> 组合继承 通过构造函数的 `call ` 方法, 在子类中执行 `Parent.call(this)` 来改变当前子类 `Child` 的父类中 `this` 的上下文指向, 等于将父类构造函数在子类中调用执行了一遍,, **将父类==构造函数本身== 的属性和方法设置到了子类上, ==让子类单独维护一套从父类构造函数继承来的属性和方法, 避免其沿着原型链向上查找共同的父类中的属性和方法== , 这样就保持了相互独立, 避免相互影响**
>
> **:triangular_flag_on_post:  然后:**  再次通过改变 ==子类的原型指向父类的实例== 这种方法, 再来实现继承父类原型中的属性和方法.

### 组合继承的缺点

> **缺点1:**  这种方式实现的继承, **父类构造函数会被执行两遍**,  分别在 `Parent.call(this)` 的时候执行一遍 和 `Child.prototype=new Parent()` 的时候执行一遍.
>
> **缺点2:**  并且 父类构造函数上的属性 在 子类自身和子类原型上都会存在, 这就导致了, 如果删除 `delete child1.arr` 的时候, 只是删除了 `child1` 上的 `arr` 属性, 其原型上的 `arr` 属性依然存在, 根据原型链向上查找, 依然可以访问到 该`arr`属性. 
>
> **演示代码如下:** 
>
> ```js
> function Parent() {
>     this.name = 'I am Parent';
>     this.arr = [1,2,3]
> }
> 
> Parent.prototype.speak = function () {
>     console.log('我是父类原型上的方法 speak --> ');
> };
> function Child() {
>     Parent.call(this); // 构造函数继承的 call 方法
>     this.type = 'child'
> }
> Child.prototype = new Parent(); // 子类的原型指向父类的实例
> 
> let child1 = new Child();
> child1.arr.push('child1 push')
> console.log(child1.arr); // 删除 arr前: [ 1, 2, 3, 'child1 push' ]
> 
> delete child1.arr; // 删除 arr
> console.log(child1.arr); // 删除 arr后: [ 1, 2, 3 ]
> ```

### 组合继承的优化

> 针对组合继承中的缺点, 我们的优化实际上就是:  ==把之前 子类的原型指向父类的实例, 改为了 **子类的原型指向父类的原型来只继承父类原型上的属性和方法**, 这样避免了重复继承父类本身的属性和方法的问题== 
>
> **:triangular_flag_on_post:  但是同样有缺点:** 
>
> 因为 `Child.prototype == Parent.prototype`, 容易导致 父类和子类的实例无法做出区分.

## Object.create实现继承

### Object.create继承代码演示

> ```js
> function Parent() {
>     this.name = 'I am Parent';
>     this.arr = [1,2,3]
> }
> 
> Parent.prototype.speak = function () {
>     console.log('我是父类原型上的方法 speak --> ');
> };
> function Child() {
>     Parent.call(this); // 构造函数继承的 call 方法
>     this.type = 'child'
> }
> 
> // 子类原型指向一个新创建的对象,这个对象依据父类原型创建
> Child.prototype = Object.create(Parent.prototype);
> Child.prototype.constructor = Child; // 让子类原型的构造函数 重新指回 子类本身构造函数
> 
> let child1 = new Parent();
> let child2 = new Child();
> 
> console.log(child1 instanceof Parent); // true
> console.log(child1 instanceof Child); // false 区分出其不是子类的实例,而是父类的实例
> console.log(child2 instanceof Child); // true
> ```

### Object.create继承原理

> 这种继承方式通过 `create` 函数创建了一个中间对象, 把这两个对象区分开来, 因为 通过 `Object.create` 创建的对象, 原型就是 `create` 函数的参数. [详见MDN文档解释](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create)  
>
> ==通过这种原理和思想, 我们还可以使用`Object.assign方法`  实现同时继承多个对象, 如演示:  `Object.assign(对象1, 对象2, ...对象N)` 的方式实现同时继承多个对象.==  

### Object.create继承优点

> 实现了继承, 也实现了父子类的区分隔离.

## class 类继承

> `class` 类继承比较简单, 我们这里不再细做解释.
>
> ```js
> extends 关键字用来继承一个父类, 子类拥有父类的属性和方法.
> super 指向父类的构造函数, 所以 super()用来调用父类的构造函数.
> ```

### class类继承代码演示

> ```js
> class Animal {
>     constructor(name){ // 类的构造函数
>         this.name = name;// 显示声明到 this 实例上的属性
>     }
>     speak(){ // 原型上的方法
>         console.log('我是 Animal 哦 -->>',this.name);
>     }
> }
> 
> class Dog extends Animal{ // 继承了父类的属性和方法以及父类原型上的属性和方法
>     constructor(name){
>         super(name) // super指向父类的构造函数, 传递给父类 name
>     }
> }
> const dog1 = new Dog('旺旺');
> dog1.speak(); // 继承了父类原型上的方法
> ```

