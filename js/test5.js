var colors=["red", "green", "blue"];
//var removed=colors.splice(0,2); //从第0个位置开始，删除1项，并返回删除的元素
//var removed=colors.splice(1,0,"apple", "purple");   //从第一个位置开始，删除0个元素，在该位置插入两个元素
var removed=colors.splice(1,2,"apple", "purple");   //从第一个位置开始，删除1个元素，并在该位置插入两个元素，返回删除的元素
console.log(removed);
console.log(colors);