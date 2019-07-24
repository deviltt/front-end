/*
    indexOf();方法
 */
function myIndexOf(arr, value) {
    for (var i=0; i<arr.length;i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}
