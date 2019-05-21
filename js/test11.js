function createFunctions() {
    var result=[];  //定义一个数组
    for (var i = 0; i < 10; i++) {
        result[i]=function () {
            return i;
        };
    }
    return result;
}
var test=createFunctions(); //返回的是一个函数数组
/**
 * 当执行数组中的函数时，匿名函数作用域中没有i，因此沿着作用域向上查找i，
 * 在createFunctions作用域中存在i，此时的i值为10，因此执行函数数组中的任意
 * 一个函数返回的都是10
 */
console.log(test[2]());

