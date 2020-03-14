function Person(name, age, job) {
    var func="play";
    this.name=name;
    this.age=age;
    this.job=job;
    this.sayName=function () {
        console.log(this.name);
    }
}

var person1=new Person("tt", 27, 'soft');               //每创建一个实例对象都会有各自的name、age等属性
var person2=new Person("lyh", 26, 'teacher');

console.log(person1.name);

console.log(person1.func);

console.log(person1.__proto__.constructor===Person);    //true

console.log(Person.prototype===person1);                //false

console.log(Person.prototype===person1.__proto__);      //true

console.log(person1.__proto__.constructor.func);

