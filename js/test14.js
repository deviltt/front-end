/**
 * 使用Object.defineProperty();来定义对象的单个属性
 * Configuration 能否通过delete删除属性
 * Enumerable 能否通过for-in循环返回属性
 * Writable 能否修改属性的值
 * Value 包含这个属性的数据值
 * @type {{}}
 */
var person={};
Object.defineProperty(person, "name", {
   writable:false,
   value:"Niko"
});
console.log(person.name);
person.name="TT";
person.age=15;
console.log(person.name);
console.log(person.age);
