// 根据id获取DOM元素

var getDOMById = function (DOM_ID) {
        
    return document.getElementById(DOM_ID);
}
// 根据类名获取DOM元素

/**
 * 根据类名获取元素，因为IE10以前不支持document.getElementsByClassName()方法
 * @param clsName 类名
 * @param parent 父元素的id
 */
function getByClass(clsName,parent){
    var oParent = parent?document.getElementById(parent):document,
        eles = [],
        elements = oParent.getElementsByTagName('*');
    for(var i = 0,l = elements.length;i<l;i++){
        if(elements[i].className == clsName){
            eles.push(elements[i]);
        }
    }
    return eles;
}
// 判断是否是数字

function isNum (numStr) {
                        
    // 方法一：正则
    // return /^\d+$/g.test(numStr); 

    // 方法二：使用isNaN函数
    return !isNaN(numStr);
}
// 从数组中删除指定下标的元素

// 声明一个临时数组，遍历原数组并判断是否等于给出的索引，如果相等则跳过本次循环；否则将其压入临时数组。

/**
 * 从数组中删除指定下标的元素(返回的是新的数组并不影响原来的数组)
 */
function deleteElement (index,arr) {
    
    var content = [];
    for (var i = 0; i < arr.length; i++) {
        if(index == i){
            continue;
        }
        content.push(arr[i]);
    }
    return content;
}
// 常用效果案例

// 标题栏跑马灯

// 标题栏实现跑马灯效果（可指定方向left,right）
var marqueeTitle = function(dir){

        var title = document.title;

        var firstCh,leftChs,lastCh;    // 第一个字符,剩下的字符和最后一个字符

        if(dir == 'left'){
            firstCh = title.charAt(0);
            leftChs = title.substring(1,title.length);
            document.title = leftChs + firstCh;
        } else if(dir == 'right'){
            lastCh = title.charAt(title.length - 1);
            leftChs = title.substring(0,title.length - 1);
            document.title = lastCh + leftChs;
        } else {
            console.error('跑马灯的方向只能是left和right');
            return;
        }
        // console.log('当前文字的移动方向' + dir + ',' + document.title);
}

window.onload = function(){
    // 标题栏跑马灯（注意带参的函数应该使用引号）
    setInterval('marqueeTitle("right")',500);
}
// 走动的页面时钟

/**
 * 当时钟数字不足2位数时补0
 */
function checkTime(i) {
    return i < 10 ? '0' + i : i;
}

/**
 * 走动的页面时钟
 */
function timeDate(){

    var now = new Date(),

        year = now.getFullYear(),
        month = now.getMonth() + 1,
        day = now.getDate(),
        h = checkTime(now.getHours()),
        m = checkTime(now.getMinutes()),
        s = checkTime(now.getSeconds()),
        weekday = '星期' + '日一二三四五六'.charAt(now.getDay());

    getDOMById('time').innerHTML =  year + "年" + month + "月" + day + "日 " + weekday + h + ":" + m + ":" + s;

    setTimeout(timeDate,1000);
}

window.onload = function(){
    timeDate();
}
// 抽签程序

// 全选复制放进笔记
<button id="select">抽签</button>
<script>
    /**
     * 从数组中删除指定下标的元素(返回的是新的数组并不影响原来的数组)
     */
    function deleteElement (index,arr) {
        
        var content = [];
        for (var i = 0; i < arr.length; i++) {
            if(index == i){
                continue;
            }
            content.push(arr[i]);
        }
        return content;
    }

    var data = [
            {"no":1,"name":'张三'},
            {"no":2,"name":'李四'},
            {"no":3,"name":'王五'},
            {"no":4,"name":'赵六'},
            {"no":5,"name":'孙七'}
        ];

    console.info(data);
    var tmp = data;
    document.getElementById('select').onclick = function (){
        content = deleteElement(Math.floor(Math.random() * tmp.length),tmp);
        tmp = content;
        console.log(content);

    };
</script>