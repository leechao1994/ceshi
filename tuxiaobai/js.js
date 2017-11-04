var arrimg = ["images/01.jpg", "images/02.jpg", "images/03.jpg", "images/04.jpg", "images/05.jpg", "images/06.jpg", "images/04.jpg"];
var h3arr = ["住在手机里的朋友",
    "教你怎样用欠费手机拨打电话",
    "原来以为，一个人的勇敢是，删掉他的手机号码...",
    "手机的16个惊人小秘密，据说99.999%的人都不知",
    "你面对的是生活而不是手机",
    "豪雅手机正式发布! 在法国全手工打造的奢侈品",
    "手机的16个惊人小秘密，据说99.999%的人都不知"];
var arrtext = ["通信时代，无论是初次相见还是老友重逢，交换联系方式，常常是彼此交换名片，然后郑重或是出于礼貌用手机记下对方的电话号码。在快节奏的生活里，我们不知不觉中就成为住在别人手机里的朋友。又因某些意外，变成了别人手机里匆忙的过客，这种快餐式的友谊 ...", "初次相识的喜悦，让你觉得似乎找到了知音。于是，对于投缘的人，开始了较频繁的交往。渐渐地，初识的喜悦退尽，接下来就是仅仅保持着联系，平淡到偶尔在节假曰发短信互致问候 ...", "原来以为，一个人的勇敢是，删掉他的手机号码、QQ号码等等一切，努力和他保持距离。等着有一天，习惯不想念他，习惯他不在身边,习惯时间把他在我记忆里的身影磨蚀干净 ...", "引导语：知道么，手机有备用电池，手机拨号码12593+电话号码=陷阱……手机具有很多你不知道的小秘密，说出来一定很惊奇！不信的话就来看看吧！ ...", "每一次与别人吃饭，总会有人会拿出手机。以为他们在打电话或者有紧急的短信，但用余光瞟了一眼之后发现无非就两件事：1、看小说，2、上人人或者QQ ...", "现在跨界联姻，时尚、汽车以及运动品牌联合手机制造商联合发布手机产品在行业里已经不再新鲜，上周我们给大家报道过著名手表制造商瑞士泰格·豪雅（Tag Heuer） 联合法国的手机制造商Modelabs发布的一款奢华手机的部分谍照，而近日该手机终于被正式发布了 ...", "引导语：知道么，手机有备用电池，手机拨号码12593+电话号码=陷阱……手机具有很多你不知道的小秘密，说出来一定很惊奇！不信的话就来看看吧！ ..."];
for (var i = 0; i < 7; i++) {
    var left = document.querySelector(".left");
    var divi = document.createElement("div");
    divi.className = "blogs";
    left.appendChild(divi);
    var divImgi = document.createElement("div");
    divi.appendChild(divImgi);
    divImgi.className = "blogs1";

    // 这是里面的图片
    var img = document.createElement("img");
    divImgi.appendChild(img);
    img.setAttribute("src", arrimg[i]);

    // 右边的文字部分
    var divri = document.createElement("div");
    divri.className = "blogs2";
    divi.appendChild(divri);
    var h3 = document.createElement("h3");
    divri.appendChild(h3);
    var h3a = document.createElement("a");
    h3.appendChild(h3a);
    h3a.innerText = h3arr[i];

    var p = document.createElement("p");
    divri.appendChild(p);
    p.innerText = arrtext[i];
    p.style.lineHeight = '22px';
    p.style.color = "#756F71";
    p.style.fontSize = '12px';
    p.style.margin = '10px 0';

    var p1 = document.createElement("p");
    divri.appendChild(p1);
    p1.className = "autor";

    var span1 = document.createElement("span");
    var span2 = document.createElement("span");
    var span3 = document.createElement("span");
    var span4 = document.createElement("span");
    p1.appendChild(span1);
    span1.className = "lm f_l";
    var aa1 = document.createElement("a");
    aa1.setAttribute("href", "#");
    span1.appendChild(aa1);
    aa1.innerText = "个人博客";

    p1.appendChild(span2);
    span2.className = "lm1 f_l";
    var aa2 = document.createElement("a");
    aa2.setAttribute("href", "#");
    span2.appendChild(aa2);
    aa2.innerText = "2014-02-19";

    p1.appendChild(span4);
    span4.className = "lm4 f_r";
    var aa4 = document.createElement("a");
    aa4.setAttribute("href", "#");
    span4.appendChild(aa4);
    aa4.innerText = "浏览（459)";

    p1.appendChild(span3);
    span3.className = "lm3 f_r";
    var aa3 = document.createElement("a");
    aa3.setAttribute("href", "#");
    span3.appendChild(aa3);
    aa3.innerText = "评论（30)";
}

// 这是最右边的li部分
var arrtext1 = [["住在手机里的朋友", "教你怎样用欠费手机拨打电话", "原来以为，一个人的勇敢是，删掉他的手机号码", "手机的16个惊人小秘密，据说99.999%的人都不知", "你面对的是生活而不是手机", "豪雅手机正式发布! 在法国全手工打造的奢侈品"], ["住在手机里的朋友", "教你怎样用欠费手机拨打电话", "原来以为，一个人的勇敢是，删掉他的手机号码", "手机的16个惊人小秘密，据说99.999%的人都不知", "你面对的是生活而不是手机", "豪雅手机正式发布! 在法国全手工打造的奢侈品"], ["住在手机里的朋友", "教你怎样用欠费手机拨打电话", "原来以为，一个人的勇敢是，删掉他的手机号码", "手机的16个惊人小秘密，据说99.999%的人都不知", "你面对的是生活而不是手机", "豪雅手机正式发布! 在法国全手工打造的奢侈品"], ["住在手机里的朋友", "教你怎样用欠费手机拨打电话", "原来以为，一个人的勇敢是，删掉他的手机号码", "手机的16个惊人小秘密，据说99.999%的人都不知", "你面对的是生活而不是手机", "豪雅手机正式发布! 在法国全手工打造的奢侈品"], ["住在手机里的朋友", "教你怎样用欠费手机拨打电话", "原来以为，一个人的勇敢是，删掉他的手机号码", "手机的16个惊人小秘密，据说99.999%的人都不知", "你面对的是生活而不是手机", "豪雅手机正式发布! 在法国全手工打造的奢侈品"], ["住在手机里的朋友", "教你怎样用欠费手机拨打电话", "原来以为，一个人的勇敢是，删掉他的手机号码", "手机的16个惊人小秘密，据说99.999%的人都不知", "你面对的是生活而不是手机", "豪雅手机正式发布! 在法国全手工打造的奢侈品"], ["住在手机里的朋友", "教你怎样用欠费手机拨打电话", "原来以为，一个人的勇敢是，删掉他的手机号码", "手机的16个惊人小秘密，据说99.999%的人都不知", "你面对的是生活而不是手机", "豪雅手机正式发布! 在法国全手工打造的奢侈品"], ["住在手机里的朋友", "教你怎样用欠费手机拨打电话", "原来以为，一个人的勇敢是，删掉他的手机号码", "手机的16个惊人小秘密，据说99.999%的人都不知", "你面对的是生活而不是手机", "豪雅手机正式发布! 在法国全手工打造的奢侈品"], ["住在手机里的朋友", "教你怎样用欠费手机拨打电话", "原来以为，一个人的勇敢是，删掉他的手机号码", "手机的16个惊人小秘密，据说99.999%的人都不知", "你面对的是生活而不是手机", "豪雅手机正式发布! 在法国全手工打造的奢侈品"]]
var spancolor = ["#ff3300", "#ff6600", "#ff9900", "#666666", "#666666", "#666666"];

var bq = ["个人博客", "web开发", "前端设计", "Html", "Css3", "Html+css3", "百度", "JavaScript", "web开发", "前端设计", "Html", "Css3", "Html+css3", "百度"];
var ul = document.querySelector(".ms-main ul");
var ull = document.querySelector(".cloud .clearfix");

// 这是下面的个性标签部分
for (var i = 0; i < 14; i++) {
    var lil = document.createElement("li");
    ull.appendChild(lil);
    var a1 = document.createElement("a");
    lil.appendChild(a1);
    lil.style.backgroundColor = "#" + (Math.random() * 0x1000000 << 0).toString(16);
    a1.innerText = bq[i];
}

// 这是下面的图文推荐部分
var tuwenarr = ["images/01.jpg", "images/02.jpg", "images/03.jpg", "images/04.jpg", "images/06.jpg", "images/04.jpg"]
for (var i = 0; i < 5; i++) {
    var ulwuwen = document.querySelector(".tuwen ul");
    var lituwen = document.createElement("li");
    var twimg = document.createElement("img");
    var p1 = document.createElement("a");
    ulwuwen.appendChild(lituwen);

    // 图片部分
    lituwen.appendChild(twimg);
    twimg.setAttribute("src", tuwenarr[i]);

    // 文字部分
    var twarr = ["住在手机里的朋友", "教你怎样用欠费手机拨打电话", "手机的16个惊人小秘密，据说99.999%的人都不知", "住在手机里的朋友", "教你怎样用欠费手机拨打电话"];
    lituwen.appendChild(p1);
    p1.setAttribute("href", "#");
    p1.innerText = twarr[i];
}

// 这是绑定的部分
var data = [["住在手机里的朋友", "教你怎样用欠费手机拨打电话",
    "原来以为，一个人的勇敢是，删掉他的手机号码...",
    "手机的16个惊人小秘密，据说99.999%的人都不知",
    "你面对的是生活而不是手机",
    "豪雅手机正式发布! 在法国全手工打造的奢侈品"],
    ["原来以为，一个人的勇敢是，删掉他的手机号码",
        "手机的16个惊人小秘密，据说99.999%的人都不知",
        "住在手机里的朋友", "教你怎样用欠费手机拨打电话",
        "你面对的是生活而不是手机", "豪雅手机正式发布! 在法国全手工打造的奢侈品"],
    ["手机的16个惊人小秘密，据说99.999%的人都不知", "你面对的是生活而不是手机", "住在手机里的朋友", "豪雅手机正式发布! 在法国全手工打造的奢侈品", "教你怎样用欠费手机拨打电话", "原来以为，一个人的勇敢是，删掉他的手机号码..."]];
var yans = ["#ff3300", "#ff6600", "#ff9900", "#666666", "#666666", "#666666"]
var main = document.querySelector(".ms-main");
for (var i = 0; i < data.length; i++) {
    var divv = document.createElement("div");
    if (i == 0) {
        divv.className = "sel1";
    }
    main.appendChild(divv);
    for (var j = 0; j < data[i].length; j++) {
        var lis = document.createElement("li");
        divv.appendChild(lis);
        lis.innerText = data[i][j];
        var spancolor = document.querySelectorAll(".xuhao span");
        spancolor[j].style.backgroundColor = yans[j];
    }
}
var lis = document.querySelectorAll(".ms-top li");
var divv = document.querySelectorAll(".ms-main div");
for (var i = 0; i < lis.length; i++) {
    var li = lis[i];
    li.onmouseover = function () {
        var sel = document.querySelector(".sel");
        sel.className = "";
        this.className = "sel";
        document.querySelector("div.sel1").className = "";
        var index = Number(this.getAttribute("data"));
        divv[index].className = "sel1";
    }
}
var donghua = document.querySelector(".donghua");
var ayuandian = document.querySelectorAll(".yuandian a");
for (var i = 0; i < ayuandian.length; i++) {
    ayuandian[i].onclick = function () {
        var sel = document.querySelector("#sel");
        sel.id = "";
        this.id = "sel";
        var juli = this.getAttribute("data");
        console.log(juli);
        this.parentNode.parentNode.parentNode.firstElementChild.style.left = juli + "px";
    }
}
setInterval(function () {
    var sel = document.querySelector("#sel");
    if (sel.nextElementSibling != null) {
        sel.id = "";
        sel.nextElementSibling.id = "sel";
        var tup = sel.nextElementSibling.getAttribute("data");
        sel.parentNode.parentNode.parentNode.firstElementChild.style.left = tup + "px";
        console.log(sel.parentNode.parentNode.parentNode.firstElementChild)
    }
    else {
        sel.id = "";
        sel.parentNode.firstElementChild.id = "sel";
        var tup1 = sel.parentNode.firstElementChild.getAttribute("data");
        sel.parentNode.parentNode.parentNode.firstElementChild.style.left = tup1 + "px";
    }
}, 3000)

// 这是打印机效果
var s = 'add your description here';
var con = document.querySelector('.slider2');
var index = 0;
var length = s.length;
var tId = null;

function start() {
    con.innerText = "";
    tId = setInterval(function () {
        con.append(s.charAt(index));
        if (index++ === length) {
            clearInterval(tId);
            index = 0;
            start()
        }
    }, 100);
}
start();