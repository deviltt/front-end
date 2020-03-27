//判断一个对象是否为可迭代对象
// function f(obj) {
//     return typeof obj[Symbol.iterator] === "function";
// }
//
// console.log(f(new Map()));
// console.log(f(new WeakMap()));
//
// console.log(f({}));
//
// let obj = {
//     a: 1,
//     b: 2
// };

//会报错，因为开发者定义的对象都是不可迭代的
// for (let x of obj) {
//     console.log(x);
// }

let collection={
    items:[],
    items2:[],
    *[Symbol.iterator](){
        for (let item of this.items){
            yield item;
        }
    }
};

collection.items.push(1);
collection.items.push(2);
collection.items.push(3);

for(let temp of collection){
    console.log(temp);
}
