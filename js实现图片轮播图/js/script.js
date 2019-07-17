/* 声明全局变量 */
var index = 0,                //当前显示图片的默认值为0
    prev = byId("prev"),  //上一张
    next = byId("next"),  //下一张
    pics = byId("banner").getElementsByTagName("div"),
    dots = byId("dots").getElementsByTagName("span"),
    size = pics.length;

//点击下一张按钮显示下一张图片
// next.onclick=function () {
//     alert("你好")
// };
//
// next.onclick=function () {  //dom0级会把上一次同一事件的绑定覆盖掉
//     alert("你好a ")
// };

// next.addEventListener("click", function () {
//     alert(1);
// });    //dom2级添加事件时，如果时非IE浏览器，这个事件前面不能加on


// next.addEventListener("click", function () {
//     alert(2);
// });     //可以在dom2级添加同一事件的多个处理函数，当一次触发时，会按顺序依次执行

addHandler(next, "click", function () {
    index++;
    if (index == size) {
        index = 0;
    }
    traverse(pics, dots);
});

addHandler(prev, "click", function () {
    index--;
    if (index < 0)
        index = size - 1;
    traverse(pics, dots);
});

function traverse(pics, dots) {
    for (var i = 0; i < size; i++) {
        pics[i].style.display="none";
        dots[i].className="";
    }
    dots[index].className="active";
    pics[index].style.display="block";
}


//封装getElementById()
function byId(id) {
    return typeof id === "string" ? document.getElementById(id) : id;
}

/**
 *  封装通用事件绑定方法
 * @param element   选择元素
 * @param type      事件类型
 * @param handler   处理函数
 */
function addHandler(element, type, handler) {
    if (element.addEventListener) {
        element.addEventListener(type, handler, true);
    } else if (element.attachEvent) {
        element.attachEvent('on' + type, handler);
    } else {
        element['on' + type] = handler;
    }
}