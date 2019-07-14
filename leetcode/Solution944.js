/**
 * 一个二维数组，计算非递增列的个数
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
    var count=0;
    for (let i=0;i<A[0].length;i++){
        for (let j = 0; j < A.length-1; j++) {
            if (A[j][i]>A[j+1][i]){
                ++count;
                break;
            }
        }
    }
    return count;
};