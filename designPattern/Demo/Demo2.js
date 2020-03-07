var num=new Number();

console.log(num.__proto__);                 //Number构造函数的原型对象
console.log(num.__proto__.constructor);     //Number构造函数

var arr=new Array();
console.log(arr.__proto__);                 //Array构造函数的原型对象
console.log(arr.__proto__.constructor);     //Array构造函数
console.log(arr.__proto__.constructor.__proto__);   //Function构造函数的原型对象
console.log(arr.__proto__.constructor.__proto__.__proto__);   //{}

var obj={};
console.log(obj.__proto__===arr.__proto__.constructor.__proto__.__proto__);
