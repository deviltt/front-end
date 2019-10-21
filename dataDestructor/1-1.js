//递归
function f(number) {
    if (number == 1) {
        return number;
    } else {
        return number * f(number - 1);
    }
}

console.log(f(5));

var nums = [1, 2, 3, 7, 8, 9];
var newElements = [4, 5, 6];
nums.splice(3, 0, newElements);

console.log(nums);

for (var i = 0; i < nums.length; i++) {
    console.log(Array.isArray(nums[i]));
}

console.log(nums.reverse());

nums = [3, 1, 2, 100, 4, 200];
console.log(nums);

//相当于匿名函数
nums.sort(function (a, b) {
    return a - b;
});
console.log(nums);