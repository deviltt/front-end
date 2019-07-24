(function () {
    x=11;
    (function () {
        b=12;
    })();
    console.log(b);
})();
// function f(){
//     x=11;
// }
console.log(x);
console.log(b);
