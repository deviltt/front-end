//可迭代对象具有Symbol.iterator属性，返回一个iterator对象
let values=[1,2,3];

//返回的是一个函数
console.log(values[Symbol.iterator]);

let iterator=values[Symbol.iterator]();

console.log(iterator.next());
