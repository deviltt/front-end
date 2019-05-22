/**
 * 更简单的原型语法
 */
function Person() {

}

/**
 * 使用这种简单的原型语法等同于new Object();重写了默认的prototype原型对象
 * constructor属性指向了Object的构造函数，因此需要将其重定向到Person构造函数
 * @type {{sayName: Person.sayName, name: string, job: string, age: number}}
 */
Person.prototype={
    // constructor:Person, //使用这种方式，constructor的Enumerable属性变为true，显然不符合要求
    name:"Nicholas",
    age:18,
    job:"Doctor",
    sayName:function () {
        console.log(this.name);
    }
};

Object.defineProperties(Person.prototype, "constructor", {
    enumerable:false,
    value:Person
});

