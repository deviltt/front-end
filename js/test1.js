var input;
var arr=[];
while(input!=-1){
    input = prompt("请输入任意你想输的字符");
    if (input!=-1)
        arr.push(input);
}
arr.splice(0, 2, "hello", "hello");
document.write(arr);