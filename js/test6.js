var numbers=[1,2,3,4,5,4,3,2,1];
/**
 * every迭代函数：数组里面的每一项满足自定义函数的条件才返回true，只要有一项不满足则返回false
 * 区别于some方法
 * @type {boolean}
 */
var everyResult=numbers.every(function (value, index, array) {
   return value>2;
});
console.log(everyResult);

/**
 * some迭代函数：与every方法类似，唯一区别只要有一项满足自定义函数的要求就返回true
 * @type {boolean}
 */
var someResult=numbers.some(function (value, index, array) {
    return value>2;
});
console.log(someResult);

/**
 * filter迭代函数：返回满足自定义函数的项所组成的数组
 * @type {number[]}
 */
var filterResult=numbers.filter(function (value, index, array) {
   return value>2;
});
console.log(filterResult);

/**
 * map迭代函数：返回自定义函数对每一项进行操作后的结果组成的数组
 * @type {number[]}
 */
var mapResult=numbers.map(function (value, index, array) {
    return value*2;
});
console.log(mapResult);

/**
 * 功能类似于for循环迭代数组一样，没有返回值
 */
numbers.forEach(function (value, index, array) {
    //对每一项具体的操作
});

