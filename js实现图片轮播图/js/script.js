/* 声明全局变量 */
var index = 0,                //当前显示图片的默认值为0
    timer = null,
    prev = byId("prev"),  //上一张
    main=byId("main"),
    next = byId("next"),  //下一张
    pics = byId("banner").getElementsByTagName("div"),
    dots = byId("dots").getElementsByTagName("span"),
    banner=byId("banner"),
    size = pics.length,
    menuContent=byId("menu-content"),
    menuItems=menuContent.getElementsByClassName("menu-item"),
    subMenu=byId("sub-menu"),
    innerBox=subMenu.getElementsByClassName("inner-box");

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
    traverse();
});

addHandler(prev, "click", function () {
    index--;
    if (index < 0)
        index = size - 1;
    traverse();
});

for (let i = 0; i < size; i++) {
    // dots[i].setAttribute("data-id", i);      //setAttribute可以设置自定义属性
    addHandler(dots[i], "click", function () {
        index = i;
        traverse();
    })
}

//自动轮播
function autoPlay() {
    timer= setInterval(function () {
        index++;
        if (index >= size) {
            index = 0;
        }
        traverse();
    }, 3000);
}

//清除定时器，停止自动轮播
function stopAutoPlay() {
    if (timer){
        clearInterval(timer);
    }
}

//鼠标滑过主菜单
for (var m = 0,idx, mlen = menuItems.length;m<mlen; m++) {
    menuItems[m].setAttribute("data-index", m);
    addHandler(menuItems[m], "mouseover", function () {
        //滑过菜单显示子菜单所在背景
        subMenu.className="sub-menu";
        //获取当前主菜单的索引
        idx=this.getAttribute("data-index");
        for (var i = 0, len=innerBox.length; i < len; i++) {
            innerBox[i].style.display="none";
            menuItems[i].style.background="none";
        }
        innerBox[idx].style.display="block";
        menuItems[idx].style.background="rgba(0,0,0,0.1)";
    })
}

addHandler(banner, "mouseout", function () {
    subMenu.className="sub-menu hide";
});

addHandler(menuContent, "mouseout", function () {
    subMenu.className="sub-menu hide";
});

addHandler(subMenu, "mouseover", function () {
    this.className="sub-menu";
});

addHandler(subMenu, "mouseout", function () {
    this.className="sub-menu hide";
});

//鼠标滑入main，停止轮播
addHandler(main, "mouseover", stopAutoPlay);

//鼠标离开,继续轮播
addHandler(main, "mouseout", autoPlay);

//执行traverse时，会首先在自己的作用域找pics和dots对象，如果没有，则向上查找，直到找到为止
function traverse() {
    for (var i = 0; i < size; i++) {
        pics[i].style.display = "none";
        dots[i].className = "";
    }
    dots[index].className = "active";
    pics[index].style.display = "block";
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

autoPlay();