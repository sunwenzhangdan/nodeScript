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
console.log(a + a);
//es6 入门

//代码块的引入,不存在变量提升
{
    var a = 10;
    var b = 11;
    console.log(a);
}

//暂缓性死区
if (true) {
    let tmr = "343";
    // tmp = 'abc'; // ReferenceError

}

function bar(x = 2, y = x) {
    return [x, y];
}

console.log(bar());
//不允许重复声明
let n = 10;
//第一种场景，内层变量可能会覆盖外层变量。
//用来计数的循环变量泄露为全局变量}

//内层作用域可以访问外层作用欲的变量
//总是将代码包裹成一个 IIFE(Immediately-Invoked Function Expression)，用以创建独立隔绝的定义域。这一举措可防止全局命名空间被污染。
//ES5规定，函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域声明。
function f() { console.log('I am outside!'); }
f();
(function() {
    //  if (true) {
    //      // 重复声明一次函数f
    //     function f() { console.log('I am inside!'); }
    //  }
    console.log(f)

    f();
}());
//执行原理
let [k, g, h] = [1, 2, 3];
let [t, y] = [1, 2, 3];
console.log(t);
console.log(y);
//析够如果等号的右边不是数组（或者严格地说，不是可遍历的结构，参见《Iterator》一章），那么将会报错。
console.log("😸😸😸😸😸😸😸😸😸😸😸😸😸😸😸😸😸😸😸😸😸😸😸😸")


var str = new Object("String")
console.log(str.length)
console.log("str".length)
var str = "m";
console.log()
console.log(typeof("dfd"))
console.log([1, 3] instanceof(Array))
var b = { x: 2, b: 3 }
console.log(b.x);
console.log(Object.getOwnPropertyNames(Date))

function Cat(name, age) {
    this.name = name;
    this.age = age;

}
Cat.prototype.hello = function() {
    console.log("喵喵");
}

var xioahua = new Cat("xiaohong", 23);
console.log(xioahua.hello())

function Animal() {
    this.type = "熊猫";
}

function BigAnimal(name, age) {
    Animal.apply(this, arguments);
    this.name = name;
    this.age = age;
}

function little(name, age) {
    this.name = name;
    this.age = age;
}

var big1 = new BigAnimal("sundan", 12);
console.log(big1.type)
    //prototype 的原型是一个对象
var xion = new Animal();
var littl = new little();
littl.prototype = xion;
console.log(littl.type)
console.log(littl.prototype.constructor);

function add() {
    console.log("abab");

    function b() {
        console.log("a->b")
    }
}

console.log(add.prototype)
console.log("fdf");

var a = 23;
//function也是对象
var addhead = new Function('a, b', 'return a + b');
console.log(addhead(3, 3))
var m = "hello"
var d = 3;
var kl = 4;
switch (d + kl) {
    case 9:
        console.log("是9")
    case 7:
        console.log("是7");

    case 8:
        console.log("是8");

    default:
        console.log("什么也不是")
}

var foo = 0;
switch (foo) {
    case -1:
        console.log('negative 1');
        break;
    case 0: // foo is 0 so criteria met here so this block will run
        console.log(0);
        // NOTE: the forgotten break would have been here
    case 1: // no break statement in 'case 0:' so this case will run as well
        console.log(1);
        break; // it encounters this break so will not continue into 'case 2:'
    case 2:
        console.log(2);
        break;
    default:
        console.log('default');
}

var gh = 2 > 3 ? "2>3" : "3>2";
console.log(gh);
for (let i = 0; i < 10; i++) {
    console.log(i);
}
//console.log("3>2")

do {
    console.log("i am  first");
} while (2 > 3);

//breake 语句

var hjk = {}
var jkl = {}
hjk.prototype=jkl;
var lkj = {}
console.log(hjk.prototype)
