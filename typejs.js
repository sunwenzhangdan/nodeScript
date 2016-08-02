var hello = (function () {
    function hello() {
    }
    return hello;
}());
var isBool = false;
function tell() {
    console.log(isBool);
}
tell();
var int_a = 10;
var str = "sunshiwen";
console.log(int_a + str);
var list1 = [1, 2, 3];
console.log(list1[0]);
var list2 = ["1223", "dfd"];
var is = 10;
var notsure = 10;
notsure = "324";
//any类型可以是任何类型
function say() {
    return 10;
}
var Person = (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.print = function () {
        return this.name + "*****" + this.age;
    };
    return Person;
}());
var p = new Person("sunshiwen", 34);
p.print();
console.log(p.print());
