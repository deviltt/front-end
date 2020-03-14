// var arr = [
//     {name: "小明", age: [{num: 12}]},
//     {name: "小红", age: [{num: 11}]},
//     {name: "小刚", age: [{num: 15}]},
//     {name: "小华", age: [{num: 13}]}
// ];
let arr = [
    {name: "小明", age:  12},
    {name: "小红", age:  11},
    {name: "小刚", age:  15},
    {name: "小华", age:  13}
];

function createComparisonFunction(propertyName){
    return function (obj1, obj2) {
        let value1=obj1[propertyName];
        let value2=obj2[propertyName];
        return value2-value1;
    }
}

console.log(arr.sort(createComparisonFunction("age")));

// arr.sort(function (a, b) {
//     return a.age[0].num - b.age[0].num;
// });
// console.log(arr);
//
// let start = new Date('2020-03-11 12:05');
// let end = new Date('2020-03-11 13:21');
// let diffTime = (end.getTime() - start.getTime()) / (1000 * 60);
// console.log(diffTime);
// console.log(Math.ceil(diffTime / 15) * 15);

// let arr=['a', 'b', 'c'];

// let obj={"name":"tt","age":19};
// console.log(obj.name);
// for(var i in obj){
//     console.log(i);
//     console.log(obj.i);
// }

// let num=0;
//
// outermost:
// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {
//         if (i==5&&j==5){
//             continue outermost;
//         }
//         num++;
//     }
// }
//
// console.log(num);

// function sayHi() {
//     console.log(arguments);
//     console.log("hello "+arguments[0]);
//     console.log(arguments[1]);
// }
//
// sayHi("tt");

// for (let i = 0; i < 10; i++) {
//
// }
// console.log(i);

// let arr=[1,2,3,4];
// console.log(arr.splice(1,1));
// console.log(arr);

// let arr1=[1,2,3,4,5];
// let arr2=arr1.slice(3);
// console.log(arr1);
// console.log(arr2);

// console.log(arr1.map(function (item,index ,arr) {
//     if (index===3){
//         return;
//     } else{
//         return index;
//     }
// }));
//
// arr1.forEach(function (value, index, array) {
//     console.log(array);
// });

// var sum=arr1.reduce(function (prev, next, index, arr) {
//     console.log(index);
//     return prev+next;
// });
// console.log(sum);
//
// console.log(Date.parse("2012-10-12 20:00"));
//
//
// var newDate=new Date(Date.parse("2012-10-12 20:00"));
//
// console.log(newDate);
