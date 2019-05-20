/**
 * 使用sort方法对数组进行排序，如果没有参数，则默认对每项的toString()值进行排序
 * 如果使用compare定义的比较方式作为参数，则按照自定义的方式进行排序
 * @param value1
 * @param value2
 * @returns {number}
 */
function compare(value1, value2) {
    return value2-value1;
}
var arr=[15,5,1,0,10];
console.log(arr.sort(compare));
console.log(arr.reverse());