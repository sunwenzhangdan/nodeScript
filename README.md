#  javascript  之路
### 变量的定义及赋值  
- 创建变量的两种方法 
  var a=1 代表全局局部变量
  a = 1;  代表全局变量
  "abc"
- 如果变量声明两次，按第二次声明的值来算
- 变量提升
JavaScript引擎的工作方式是，先解析代码，获取所有被声明的变量，然后再一行一行地运行。这造成的结果，就是所有的变量的声明语句，都会被提升到代码的头部，这就叫做变量提升（hoisting）。
### 作用域
- var num = 1；
  是在当前域中声明变量. 如果在方法中声明，则为局部变量（local variable）；如果是在全局域中声明，则为全局变量。 
  声明时加var  与  不加  var的区别

  ```
// If you're in the global scope then there's no difference.
// If you're in a function then var will create a local variable, "no var" will look up the scope chain until it finds the variable or hits the global scope (at which point it will create it):

var foo = 1;
 bar = 2;
 function()
 {
    var foo = 1; // Local
    bar = 2;     // Global

    // Execute an anonymous function
    (function()
    {
        var wibble = 1; // Local
        foo = 2; // Inherits from scope above (creating a closure)
        moo = 3; // Global
    }())
}
  ```

###  javascript 奇葩的代码块
 - 与大多数编程语言不一样，JavaScript的区块不构成单独的作用域（scope）。
   也就是说，区块中的变量与区块外的变量，属于同一个作用域。所以如果想在javascript 中有自己的作用域要在函数里面定义

### 比较运算符和流程控制语句
 - 在大部分情况下javascript 的运算符和流程控制语句与java的相同，但是注意一下情况
 - 在比较运行结果时，采用的是严格相等运算符（===），而不是相等运算符（==），这意味着比较时不会发生类型转换
 - 三目运算符 
   (contidion) ? expression1 : expression2  在前面判断boolea类型的值，根据执行结果，执行表达式
### 数据结构
 - 数值 （NaN代表非数据类型）
 - 字符串
 - 对象(函数也处于对象）
 - boolean
 - null
 - undefined 
   我们继续划分，对象可分为狭义的对象,函数，数组。avaScript的所有数据，都可以视为广义的对象。
   不仅数组和函数属于对象，就连原始类型的数据（数值、字符串、布尔值）也可以用对象方式调用
###  es6学习笔记









