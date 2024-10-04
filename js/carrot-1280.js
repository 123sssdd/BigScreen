/****** PLACE YOUR CUSTOM STYLES HERE ******/

var oxyData = {
    "uploadData": [{ "count": 630 }, { "count": 986 }, { "count": 792 }, { "count": 642 }, { "count": 521 }, { "count": 573 }
        , { "count": 832 }, { "count": 747 }, { "count": 983 }, { "count": 836 }, { "count": 831 }, { "count": 633 }],
    "updateData": [{ "count": 110 }, { "count": 181 }, { "count": 123 }, { "count": 197 }, { "count": 123 }, { "count": 173 }
        , { "count": 123 }, { "count": 151 }, { "count": 101 }, { "count": 152 }, { "count": 101 }, { "count": 177 }],
    "viewData": [{ "count": 651 }, { "count": 842 }, { "count": 223 }, { "count": 223 }, { "count": 221 }, { "count": 812 }
        , { "count": 928 }, { "count": 219 }, { "count": 613 }, { "count": 254 }, { "count": 981 }, { "count": 301 }]
};
var soilPressData = {
    "uploadData": [{ "count": 1300 }, { "count": 1686 }, { "count": 1692 }, { "count": 1742 }, { "count": 1621 }, { "count": 773 }
        , { "count": 832 }, { "count": 1047 }, { "count": 1483 }, { "count": 1336 }, { "count": 831 }, { "count": 973 }],
    "updateData": [{ "count": 103 }, { "count": 281 }, { "count": 203 }, { "count": 197 }, { "count": 173 }, { "count": 154 }
        , { "count": 223 }, { "count": 251 }, { "count": 201 }, { "count": 252 }, { "count": 201 }, { "count": 277 }],
    "viewData": [{ "count": 651 }, { "count": 842 }, { "count": 223 }, { "count": 223 }, { "count": 221 }, { "count": 812 }
        , { "count": 928 }, { "count": 219 }, { "count": 613 }, { "count": 254 }, { "count": 981 }, { "count": 301 }]
};
var lightIntData = {
    "uploadData": [{ "count": 330 }, { "count": 786 }, { "count": 492 }, { "count": 842 }, { "count": 421 }, { "count": 673 }
        , { "count": 932 }, { "count": 447 }, { "count": 583 }, { "count": 436 }, { "count": 331 }, { "count": 433 }],
    "updateData": [{ "count": 10 }, { "count": 81 }, { "count": 23 }, { "count": 97 }, { "count": 23 }, { "count": 73 }
        , { "count": 23 }, { "count": 51 }, { "count":01 }, { "count": 52 }, { "count":01 }, { "count": 77 }],
    "viewData": [{ "count": 451 }, { "count": 342 }, { "count": 523 }, { "count": 323 }, { "count": 421 }, { "count": 812 }
        , { "count": 728 }, { "count": 619 }, { "count": 613 }, { "count": 554 }, { "count": 481 }, { "count": 301 }]
};



getNowFormatDate();

//获取当前时间
function getNowFormatDate() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    var Hour = date.getHours();       // 获取当前小时数(0-23)
    var Minute = date.getMinutes();     // 获取当前分钟数(0-59)
    var Second = date.getSeconds();     // 获取当前秒数(0-59)
    var show_day = new Array('星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六');
    var day = date.getDay();
    if (Hour < 10) {
        Hour = "0" + Hour;
    }
    if (Minute < 10) {
        Minute = "0" + Minute;
    }
    if (Second < 10) {
        Second = "0" + Second;
    }
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = '<div><p>' + year + '年' + month + '月' + strDate + '号</p><p>' + show_day[day] + '</p></div>';
    var HMS = Hour + ':' + Minute + ':' + Second;
    var temp_time = year + '-' + month + '-' + strDate + ' ' + HMS;
    $('.nowTime li:nth-child(1)').html(HMS);
    $('.nowTime li:nth-child(2)').html(currentdate);
    //$('.topRec_List li div:nth-child(3)').html(temp_time);
    setTimeout(getNowFormatDate, 1000);//每隔1秒重新调用一次该函数
}

