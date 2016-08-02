class hello{

}

var isBool:boolean=false;
function tell():void{
    console.log(isBool);
}

tell();
var int_a:number=10;
var str:string="sunshiwen";
console.log(int_a+str);
var list1:number[]=[1,2,3]
console.log(list1[0]);
var list2:Array<string>=["1223","dfd"];

var is:number=10;
var notsure:any=10;
notsure="324";
//any类型可以是任何类型
function say():number{
  return 10;
}
class Person{

    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    print(){
        return this.name+"*****"+this.age;
    }
}

var p=new Person("sunshiwen",34);
p.print();
console.log(p.print());





