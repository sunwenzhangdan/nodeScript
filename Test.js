//类型分为原始值和引用值 string  number boolean  null  underfined
var foo = 1
var tom = foo
console.log(tom)
    //fuction  array  object 符合类型

//创建对象
var object1 = new Object();
console.log(object1)
var object2 = {};

var superman = {
    klass: 'superhero',
    defaults: { clark: 'kent' },
    hidden: true
};

var item = new Array();
var item1 = [];

item1.push("3423");
console.log(item1);

(function a(x) {
    console.log(x);
})("直传")

function Foo() {
    this.value = 42;
}

Foo.prototype = {
    method: function() {
        console.log("我是继承方法");
    }
}

console.log(Foo);

//作用域问题
var x = 1;
console.log(x);
if (true) {
    var x = 2;
}
console.log(x);
//if 并不是作用于里面的东西跟上面在一个作用域里
function abc() {
    var c = 10;
    if (c === 10) {
        console.log(c);
        return (function(x) {
            var c = 12
            return c + 13
        })();
    } else {
        return 9;
    }

}

console.log(abc())
    //函数的两种声明方式  命令式  变量式 声明式自动在变量后赋值,变量式在变量赋值处在进行赋值
function test() {
    var foo = function(x) {
        console.log("hello world")
    }

    function foo1() {
        console.log("hello world1");
    }
}
//上面的代码跟下面的代码一样
//                                                       

function test() {
    var foo;
    var foo1;
    foo1 = function() {
        console.log("hello world1");
    }
    foo = function() {
        console.log("hello world")
    }
    foo();
    foo1();
}

//javascript 中undefined 与  

//JavaScript的几个重点知识     this   apply   闭包    参数返回值为函数

console.log(this + "+++++++++")
console.log(this === global)

//理解this抓住这几点首先分析this所在的函数是当做哪个对象的方法调用的，则该对象就是this所引用的对象

function sayHello() {
    console.log(this + "全局变量中")
    console.log("say hello")
}

sayHello();

var m = { a: sayHello };

console.log(m.a());

var a = "😸";
console.log("马" + "是" + a);
console.log(a+a);
//es6 入门

//代码块的引入,不存在变量提升
{
    var a=10;
    var b=11;
console.log(a);
}

//什么是字符编码



if (true) {
 let tmeo="343";
 // tmp = 'abc'; // ReferenceError
 console.log(tmeo)
}

//字符串
for (let codePoint of 'foo') {
  console.log(codePoint)
}
//正则表达式

    var regex = new RegExp('xyz');
    console.log("xyz".match(regex));





