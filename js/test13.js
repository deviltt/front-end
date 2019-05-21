function outputNumbers(count) {
    for (var i = 0; i < count; i++) {
        console.log(i);
    }
    // var i;  //js没有块级作用域，因此无论重复声明多少次都会忽略掉
    console.log(i);
}
outputNumbers(5);
