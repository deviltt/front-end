/**
 * 对象的enumerable属性的设置
 * 这种设置方式时显示定义
 * @type {{}}
 */
var myObject={};

Object.defineProperty(
    myObject,
    "a",
    {
        enumerable:true, value:2
    });
Object.defineProperty(
    myObject,
    "b",
    {
        enumerable:false, value:3
    });
console.log(myObject.b);

for (var k in myObject){
    console.log(k, myObject[k]);
}