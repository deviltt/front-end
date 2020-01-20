/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    var n = s.length, result = 0;
    var index = new Array(128).fill(0);
    for (let i = 0, j = 0; j < n; j++) {
        i = Math.max(i, index[s.charCodeAt(j)]);
        result = Math.max(result, j - i + 1);
        index[s.charCodeAt(j)] = j + 1;
    }
    return result;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
