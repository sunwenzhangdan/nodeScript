// // //类型分为原始值和引用值 string  number boolean  null  underfined
// // var foo = 1
// // var tom = foo
// // console.log(tom)
// //     //fuction  array  object 符合类型

// // //创建对象
// // var object1 = new Object();
// // console.log(object1)
// // var object2 = {};

// // var superman = {
// //     klass: 'superhero',
// //     defaults: { clark: 'kent' },
// //     hidden: true
// // };

// // var item = new Array();
// // var item1 = [];

// // item1.push("3423");
// // console.log(item1);

// // (function a(x) {
// //     console.log(x);
// // })("直传")

// // function Foo() {
// //     this.value = 42;
// // }

// // Foo.prototype = {
// //     method: function() {
// //         console.log("我是继承方法");
// //     }
// // }

// // console.log(Foo);

// // //作用域问题
// // var x = 1;
// // console.log(x);
// // if (true) {
// //     var x = 2;
// // }
// // console.log(x);
// // //if 并不是作用于里面的东西跟上面在一个作用域里
// // function abc() {
// //     var c = 10;
// //     if (c === 10) {
// //         console.log(c);
// //         return (function(x) {
// //             var c = 12
// //             return c + 13
// //         })();
// //     } else {
// //         return 9;
// //     }

// // }

// // console.log(abc())
// //     //函数的两种声明方式  命令式  变量式 声明式自动在变量后赋值,变量式在变量赋值处在进行赋值
// // function test() {
// //     var foo = function(x) {
// //         console.log("hello world")
// //     }

// //     function foo1() {
// //         console.log("hello world1");
// //     }
// // }
// // //上面的代码跟下面的代码一样
// // //

// // function test() {
// //     var foo;
// //     var foo1;
// //     foo1 = function() {
// //         console.log("hello world1");
// //     }
// //     foo = function() {
// //         console.log("hello world")
// //     }
// //     foo();
// //     foo1();
// // }

// // //javascript 中undefined 与

// // //JavaScript的几个重点知识     this   apply   闭包    参数返回值为函数
// // console.log(this + "+++++++++")
// // console.log(this === global)

// // //理解this抓住这几点首先分析this所在的函数是当做哪个对象的方法调用的，则该对象就是this所引用的对象

// // function sayHello() {
// //     console.log(this + "全局变量中")
// //     console.log("say hello")
// // }

// // sayHello();

// // var m = { a: sayHello };

// // console.log(m.a());

// // var a = "😸";
// // console.log("马" + "是" + a);
// // console.log(a + a);
// // //es6 入门

// // //代码块的引入,不存在变量提升
// // {
// //     var a = 10;
// //     var b = 11;
// //     console.log(a);
// // }

// // //什么是字符编码

// // //暂缓性死区
// // if (true) {
// //     let tmr = "343";
// //     // tmp = 'abc'; // ReferenceError

// // }

// // if (true) {
// //  let tmeo="343";
// //  // tmp = 'abc'; // ReferenceError
// //  console.log(tmeo)
// // }

// // //字符串
// // for (let codePoint of 'foo') {
// //   console.log(codePoint)
// // }
// // //正则表达式

// //     var regex = new RegExp('xyz');
// //     console.log("xyz".match(regex));
// // console.log("😸😸😸😸😸😸😸😸😸😸😸😸😸😸😸😸😸😸😸😸😸😸😸😸😸😸😸😸😸😸");

// // const mcons={};
// // mcons.a=1;
// // console.log(mcons);
// // const  frmcons=Object.freeze({})
// // frmcons.b=2
// // console.log(frmcons);

// // let hel="sunshiwen"

// // class  Stringmethos{

// //   isind(sun){
// //       console.log( hel.indexOf(sun))
// //   }
// //     endw(sun){
// //       console.log( hel.startsWith(sun))
// //   }

// // }

// // let newo=new Stringmethos();
// // newo.isind("sun");
// // newo.endw("wen");
// // console.log("😸".repeat(20))
// // let  bv="match";
// // console.log(`Hello ${bv}`);

// // function fex(x,y){
// //     return  {x,y};
// // }
// // var c=fex(3,4);
// // console.log(c);


// // function sayHello(name='sunshiwen'){
// //     console.log("hello"+name)
// // }
// // sayHello();


// // function bar(x = 2, y = x) {
// //     return [x, y];
// // }

// // console.log(bar());
// // //不允许重复声明
// // let n = 10;
// // //第一种场景，内层变量可能会覆盖外层变量。
// // //用来计数的循环变量泄露为全局变量}

// // //内层作用域可以访问外层作用欲的变量
// // //总是将代码包裹成一个 IIFE(Immediately-Invoked Function Expression)，用以创建独立隔绝的定义域。这一举措可防止全局命名空间被污染。
// // //ES5规定，函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域声明。
// // function f() { console.log('I am outside!'); }
// // f();
// // (function() {
// //     //  if (true) {
// //     //      // 重复声明一次函数f
// //     //     function f() { console.log('I am inside!'); }
// //     //  }
// //     console.log(f)

// //     f();
// // }());
// // //执行原理
// // let [k, g, h] = [1, 2, 3];
// // let [t, y] = [1, 2, 3];
// // console.log(t);
// // console.log(y);
// // //析够如果等号的右边不是数组（或者严格地说，不是可遍历的结构，参见《Iterator》一章），那么将会报错。
// // console.log("😸😸😸😸😸😸😸😸😸😸😸😸😸😸😸😸😸😸😸😸😸😸😸😸")


// // var str = new Object("String")
// // console.log(str.length)
// // console.log("str".length)
// // var str = "m";
// // console.log()
// // console.log(typeof("dfd"))
// // console.log([1, 3] instanceof(Array))
// // var b = { x: 2, b: 3 }
// // console.log(b.x);
// // console.log(Object.getOwnPropertyNames(Date))

// // function Cat(name, age) {
// //     this.name = name;
// //     this.age = age;

// // }
// // Cat.prototype.hello = function() {
// //     console.log("喵喵");
// // }

// // var xioahua = new Cat("xiaohong", 23);
// // console.log(xioahua.hello())

// // function Animal() {
// //     this.type = "熊猫";
// // }

// // function BigAnimal(name, age) {
// //     Animal.apply(this, arguments);
// //     this.name = name;
// //     this.age = age;
// // }

// // function little(name, age) {
// //     this.name = name;
// //     this.age = age;
// // }

// // var big1 = new BigAnimal("sundan", 12);
// // console.log(big1.type)
// //     //prototype 的原型是一个对象
// // var xion = new Animal();
// // var littl = new little();
// // littl.prototype = xion;
// // console.log(littl.type)
// // console.log(littl.prototype.constructor);

// // function add() {
// //     console.log("abab");

// //     function b() {
// //         console.log("a->b")
// //     }
// // }

// // console.log(add.prototype)
// // console.log("fdf");

// // var a = 23;
// // //function也是对象
// // var addhead = new Function('a, b', 'return a + b');
// // console.log(addhead(3, 3))
// // var m = "hello"
// // var d = 3;
// // var kl = 4;
// // switch (d + kl) {
// //     case 9:
// //         console.log("是9")
// //     case 7:
// //         console.log("是7");

// //     case 8:
// //         console.log("是8");

// //     default:
// //         console.log("什么也不是")
// // }

// // var foo = 0;
// // switch (foo) {
// //     case -1:
// //         console.log('negative 1');
// //         break;
// //     case 0: // foo is 0 so criteria met here so this block will run
// //         console.log(0);
// //         // NOTE: the forgotten break would have been here
// //     case 1: // no break statement in 'case 0:' so this case will run as well
// //         console.log(1);
// //         break; // it encounters this break so will not continue into 'case 2:'
// //     case 2:
// //         console.log(2);
// //         break;
// //     default:
// //         console.log('default');
// // }

// // var gh = 2 > 3 ? "2>3" : "3>2";
// // console.log(gh);
// // for (let i = 0; i < 10; i++) {
// //     console.log(i);
// // }
// // //console.log("3>2")

// // do {
// //     console.log("i am  first");
// // } while (2 > 3);

// // //breake 语句

// // var hjk = {}
// // var jkl = {}
// // hjk.prototype = jkl;
// // var lkj = {}
// // console.log(hjk.prototype)



// // var   native={}
// // for (var key in native) {
// //    console.log("你好"+key);
// // }
// // console.log("哈哈");
// // function ghllo(){
// //     console.log("dfd");
// // }

// // console.log(ghllo.prototype);
// // var o = {};
// // function  abc(){
// //     console.log("dfd");
// // }
// // console.log(abc.constuctor);

// // console.log(o.constructor === Object); // true
// // console.log(o.__proto__);
// // (function add(x,y){
// //     console.log(x+y);
// // })(3,4);
// // var gh=454;

// // var bf={
// //     name:"1",
// //     age:1
// // }


// // function helloyun(bf){
// //     bf.age+=1;
// //   console.log(bf.age)
// // }
// // helloyun(bf);
// // console.log(bf.age)
// // console.log(bf)
// // console.log("+++++" + Object.__proto__)
// //     //eval是直接执行里面的字符串按语句来执行
// // eval('console.log("fdf");');

// // var gg = 23;

// // function getg() {
// //     var gt = 343;

// //     function getgt() {
// //         gt++;
// //         return gt;
// //     }

// //     return getgt();
// // }
// // var v = getg();
// // console.log(v)
// // console.log(v)
// // console.log(v)
// // console.log(v)
// // console.log(v)

// // function createIncrementor(start) {
// //     return function() {
// //         return start++;
// //     };
// // }

// // var inc = createIncrementor(5);

// // console.log(inc()) // 5
// // console.log(inc()) // 5
// // console.log(inc()) // 5


// // function greeting(name) {
// //     var text = 'Hello ' + name; // local variable
// //     // 每次调用时，产生闭包，并返回内部函数对象给调用者
// //     return function() { console.log(text); }
// // }
// // var sayHello1 = greeting("Closure");
// // sayHello1() // 通过闭包访问到了局部变量text
// // var s1 = Symbol('foo');
// // var s2 = Symbol('foo');
// // console.log(s1 === s2);
// // console.log(s1.toString())
// // console.log(s2.toString())


// // var a = [];
// // for (var i = 0; i < 10; i++) {
// //     a[i] = function() {
// //         console.log(i);
// //     };

// // }
// // console.log(a[i])
// // a[6]();


// // var a = {
// //     x: 10,
// //     calcuate: function(z) {
// //         return this.jj + this.y + this.z;
// //     }
// // }

// // var b = Object.create(a, { y: { value: 20 } })
// // console.log(b)

// // console.log(typeof(null))


// // var a = [];
// // for (var i = 0; i < 10; i++) {
// //   a[i] = function () {
// //     console.log(i);
// //   };
// // }
// // a[6](); // 10


// // var a = [];
// // for (let i = 0; i < 10; i++) {
// //   a[i] = function () {
// //     console.log(i);
// //   };
// // }
// // console.log(a[6].toString())
// // console.log(i)
// // a[6](); // 

// // var  nb={
// //      ad:"a",
// //     bn:function(){
// //         console.log(this.toString())
// //         function cal(){
// //             console.log(this.toString());
// //         }
// //         return cal();
// //     } 
// // }

// // var cb=nb.bn;
// // nb.bn()

// // var  gongchang={};
// // gongchang.chanyifu=function(){
// //         this.gongren=50;
// // }
// // gongchang.chanxie=function(){
// //      console.log("产鞋")
// // }

// // gongchang.yunshu=function(){
// //    console.log("运输")
// // }

// // gongchang.changzhang=function(para){
// //   return new gongchang[para]();
// // }


// // var me=gongchang.changzhang('chanyifu')
// // console.log(me.gongren)

// // var  makesound=function(animal){
// //     animal.sound();
// // }


// // var  bu={
// //     a:1,
// //     gy:function(){
// //         console.log(this.toString());
// //     }
// // }
// // //确定一点函数运行时


// // bu.gy()
// // var gt=bu.gy.bind(bu)
// // gt();

// // function Foo () {  
// //       console.log(this instanceof Foo); // => true
// //       this.property = 'Default Value';
// //     }
// //     // 构造函数调用
// //     var fooInstance = new Foo();  
// //     fooInstance.property; // => 'Default Value'  


// // function Vehicle(type, wheelsCount) {  
// //       this.type = type;
// //       this.wheelsCount = wheelsCount;
// //       return this;
// //     }
// //     // 函数调用
// //     var car = Vehicle('Car', 4);  
// //     car.type;              // => 'Car'  
// //     car.wheelsCount // => 4  
// //     car === global  // => true 

// //  function increment(number,number1) {  
// //       console.log(number+number1)
// //       return number1+number;  
// //     }
// //     increment.call(Vehicle, 10,11);    // => 11  
// //     increment.apply(Vehicle, [10,11]); // => 11 

// //     console.log(global)


// // var fs = require("fs");

// // fs.readFile('./package.json', (err, data) => {
// //   if (err) throw err;
// //   console.log(data.toString());
// // });



// // function hello (file) {
// //   return new Promise(function(resolve, reject){
// //     fs.readFile(file, (err, data) => {
// //         if (err) {
// //             reject(err);
// //         } else {
// //             resolve(data.toString())
// //         }
// //     });
// //   });
// // }

// // hello('./package.json').then(function(data){
// //   console.log('promise result = ' + data)
// // })

// // function hello (file) {
// //   return new Promise(function(resolve, reject){
// //     fs.readFile(file, (err, data) => {
// //         if (err) {
// //             reject(err);
// //         } else {
// //             resolve(data.toString())
// //         }
// //     });
// //   });
// // }

// function world (file) {
//   return new Promise(function(resolve, reject){
//     fs.readFile(file, (err, data) => {
//         if (err) {
//             reject(err);
//         } else {
//             resolve(data.toString())
//         }
//     });
//   });
// }

// function log(data){
//   return new Promise(function(resolve, reject){
//     console.log('promise result = ' + data)
//     resolve(data)
//   });
// }

// // hello('./package.json').then(log).then(function(){
// //   return hello('./each.js').then(log)
// // }).catch(function(err) {
// //   console.log(err)
// // })


// class Polygon{
//   constructor(height, width){
//       this.height = height;
//       this.width = width;
//   }
// }

// var b=new Polygon("34","56");
// console.log(b.height);

// class Animal{
//     constructor(name){
//         this.name = name;
//     }

//     say(){
//         console.log(this.name + " try to say something...");
//     }
// }
// class Dog extends Animal{
//     say(){
//         //可以通过super关键字来调用父类的方法
//         super.say();
//         console.log(this.name + " barking...");
//     }
// }



// //console.log(Point.distance(22,45));

// function Person(name){
//     this.name=name
// }

// Person.prototype.getName=function(callback){
//     var self=this;
//     setImmediate(function(){
//         callback(null,self.name);
//     })
// }

// var person=new Person('nswbmw');

// person.getName(function(err,name){
//     console.log(name)
// });

// var async = require('async');
// console.time('series');
// async.series({
//     one: function(callback) {
//         callback(null, 'one');//callback('i am err','one');异常处理
//     },
//     two: function(callback) {
//         callback(null, 'two');

//     },
// }, function(error, result) {
//     //最后结果
//     console.log('error: ' + error);
//     console.log('result: ' + result);
//     console.timeEnd('series');
// });


// {
//     let  m=45;
//     console.log(m)

// }

// {
//     const a=23
//     {
//         const a=46;
//     }

//     console.log(a)
// }

// let [h,g]=[2,4,45]
// console.log(g)

// let yu;
// let {sunshiwe,zhangdan}={sunshiwe:23,zhangdan:34}
// var [ty,tu,yi]=[45,78]
// console.log("+++++++++++++++++++++++++++")




// console.log(sunshiwe)
// let tyd=343
// let yui=343
// console.log(`sdfsdfsdf${tyd+yui}`)

// var cat = {
//    name: "Gus",
//    color: "gray",
//    age: 15,
 
//    printInfo: function() {
//     //  var that = this;
//       console.log("Name:", this.name, "Color:", this.color, "Age:", this.age); //prints correctly
 
//       nestedFunction = function() {
//          console.log("Name:", this.name, "Color:", this.color, "Age:", this.age); //prints correctly
//       }
//    nestedFunction();
//    }
// }
// cat.printInfo();

// function heui(){
//     console.log("dfdfd"+this);
// }

// var hert={
// heui:function(){
//   console.log("hhhhhhhhhhhhhhhhhhh"+this);
// }

// };
// var hert1={};
// heui();
// console.log(hert1.heui+"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");

// hert1.heui;
// console.log("dfdfdfdfdfdfdfdf")

// console.log()




// (function(){
//     console.log(typeof foo); // function pointer
//     console.log(typeof bar); // undefined
//     var foo = 'hello',
//         bar = function() {
//             return 'world';
//         };
//     function foo() {
//         return 'hello';
//     }
// }());

function log(it){
    console.log(it);
}
var nums=[12,4,76,56546,]
nums.push(45)
nums.unshift(67)
log(nums)

function ab(b){
    return b>10;
}

log(nums.slice(1,1).every(ab))
function jian(b,a){
    return a-b;
}
log(nums.reduce(jian))

var num1=[]
var rows=3;
for(var i=0;i<rows;i++){
    num1[i]=[];
}

log(num1)

function List(){
    this.append=append;
    this.dataStore=[];
}

function append(element){
      this.dataStore[this.listSize++]=element
}


list1=new List();
list1.append(34);

console.log(typeof(list1))

function test(resolve ,reject){
     var timeOut=Math.random()*2;
     log("timeOut"+timeOut);
     setTimeout(
       function(){
           if(timeOut<1){
                   log("call  resove()")
                  resolve("200 ok");
           }else{
            log("call  reject()")
            reject("400 error")
           }
       },timeOut*3000);
}

var p1=new Promise(test);
var p2=p1.then(function(result){
    console.log("成功"+result)
})

console.log(p2 instanceof Promise)
function test(){  
    return 'b';  
} 
function* func(){  
    var a = yield 'a';  
    console.log('gen:',a);// gen:1  
    var b = yield test();  
    console.log('gen:',b);// gen:2  
}  
var func2 = func();  
var a = func2.next(); 
var b=func2.next();
console.log(a)
console.log(b)


console.log("{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}")

var co = require('co')
var  fs = require('fs')
   // Promise = ('es6-promise').Promise;  
function readFile(path, encoding){  
    return function(cb){  
        fs.readFile(path, encoding, cb);  
    };  
}  

var gen=function* (){
    var r1=yield readFile('./a.txt')
    console.log("eeeeeeeeeee"+r1)
    var r2=yield readFile('./b.txt')
    console.log("rrrrrrrrrrr"+r2)

}



var g=gen();
var r1=g.next();
var r2=g.next();
console.log("rrrrrrrrrrrrrrrrrrrr"+r1.value)
console.log("rrrrrrrrrrrrrrrrrrrr"+r2.value)

function showCase(value){

switch(value){
    case 'A':
        console.info('Case A');
        break;
    case 'B':
        console.info('Case B');
        break;
    case undefined :
        console.info('undefined');
        break;
    default:
        console.info('Do not know!');
    }
}




  
  
// co(function* (){// 外面不可见，但在co内部其实已经转化成了promise.then().then()..链式调用的形式  
//     var a = yield readFile('a.txt', {encoding: 'utf8'});  
//     console.log("a"+a); // a  
//     var b = yield readFile('b.txt', {encoding: 'utf8'});  
//     console.log(b); // b  
//     var c = yield readFile('c.txt', {encoding: 'utf8'});  
//     console.log(c); // c  
//     return yield Promise.resolve(a+b+c);  
// }).then(function(val){  
//     console.log(val); // abc  
// }).catch(function(error){  
//     console.log(error);  
// });  

// function* ma(){// 外面不可见，但在co内部其实已经转化成了promise.then().then()..链式调用的形式  
//     var a = yield readFile('a.txt', {encoding: 'utf8'});  
//     console.log("a"+a); // a  
//     var b = yield readFile('b.txt', {encoding: 'utf8'});  
//     console.log(b); // b  
//     var c = yield readFile('c.txt', {encoding: 'utf8'});  
//     console.log(c); // c  
//     return yield Promise.resolve(a+b+c);  
// }




class Point{

    constructor (x,y){
        this.x=x;
        this.y=y;
    }

    toString(){
        return '('+this.x+','+this.y+')';
    }
}


var point=new Point(3,4);
console.log(point.toString())

var s=new Set();
[2,45,676,75,676].map(x=>s.add(x))

console.log(s)

var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

log(getFood(false)); // undefined

let text = `This string contains "double quotes ${3+8} which don't need to be escaped anymore.`;
console.log(text)

var t=`
dfdfdd
dfasdfsdfasdf
dsfadfasdf
sadfasdf

`

console.log(t)

let luke = { occupation: 'jedi', father: 'anakin' };
let {occupation, father} = luke;

console.log(occupation); // 'jedi'
console.log(father); // 'anakin'2


console.log(require('./a.js'));
console.log(require('./b.js'));

var http=require('http')

var cheerio=require('cheerio');
function filter(html){
    var $=cheerio.load(html)
    var chapters=$('.learnchapter')
    var coursedata=[];
    chapters.each(function(item){
        var chapter=$(this);
        var chapterTitle=chapter.find('strong').text();
        var videos=chapter.find('.video').children('li')
        var chaperDate={
            chapterTitle:chapterTitle,
            videos:[]
        }

        videos.each(function(item){
           var video=$(this).find('.studyvideo')
           var videoTitle=vedio.text(
               
           )
        })
    })
}

var url='http://www.imooc.com/learn/348' 
http.get(url,function(res){
    var html=''
    res.on('data',function(data){
        html+=data
    })

    res.on('end',function(){
        filter(html)
      
    })
}).on('error',function(){
    console.log("error")
})

var p = new Promise(function(resolve, reject){    
    //做一些异步操作
    setTimeout(function(){
        console.log('执行完成');
        resolve('随便什么数据');
    }, 2000);
});

function  runAysnc1(){
    var p=new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("300000000000")
            resolve('随便什么数据1');
        },3000)
    })

    return p
}

function  runAysnc2(){
    var p=new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("300000000000")
            resolve('随便什么数据2');
        },3000)
    })

    return p
}


function  runAysnc3(){
    var p=new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("300000000000")
            resolve('随便什么数据3');
        },3000)
    })

    return p
}

function a1(callback){
    setTimeout(function(){
        console.log("我是a1")
        callback();
    },2000)
}

function a2(callback){
    setTimeout(function(){
        console.log("我是a2")
        callback();
    },4000)
}

function a3(){
    setTimeout(function(){
        console.log("我是a3")
        callback();
    },2000)
}




runAysnc1()
.then(function(data){
    console.log(data);    return runAysnc2();
})
.then(function(data){
    console.log(data);    return '直接返回数据'; }) //这里直接返回数据
.then(function(data){
    console.log(data);
});

var nm=["4","2","3"].map(parseInt)
console.log(nm+"dfffffffffffff")

function JSONToObject(jsonStr) {
    return JSON.parse(jsonStr);
}

console.log("gggggggggggggggggggggggggggggggggggggggB")
// a2();
// a3();
// a1()

var sleep = function (time) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        }, time);
    })
};

var async = require("async");
console.log(async)
var a=["1","2","3"].map(parseInt)
//var b=[3.toString(),3..toString(),3...toString()]
console.log(2 === [[[2]]])

console.log(3..toString())
//console.log(3...toString())
//console.log(3.toString())

