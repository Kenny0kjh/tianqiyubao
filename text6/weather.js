
function weather(data){
    var dateDayname = document.getElementById("date-dayname");
    var dateDay = document.getElementById("date-day");
    var location = document.getElementById("location");
    //天气图标
    var weahterL = document.getElementById("weather-l");
    var weatherTemp = document.getElementById("weather-temp");
    var weatherDesc = document.getElementById("weather-desc");

    dateDayname.innerHTML = data.weather[0].date.slice(0,3);
    dateDay.innerHTML = data.date;
    location.innerHTML = data.city;

    //这个图标等下封装一个函数，来判断用什么图标
    weahterL.innerHTML = weatherIcon(1);
    weatherTemp.innerHTML = data.weather[0].temp.slice(0,3) + "℃";
    weatherDesc.innerHTML = data.weather[0].weather;

    

    var wind = document.getElementById("wind");

    

    wind.innerHTML = data.weather[0].wind ;

    var day1 = document.getElementById("day1");
    var span1 = day1.getElementsByTagName("span");

    var day2 = document.getElementById("day2");
    var span2 = day2.getElementsByTagName("span");

    var day3 = document.getElementById("day3");
    var span3 = day3.getElementsByTagName("span");

    var day4 = document.getElementById("day4");
    var span4 = day4.getElementsByTagName("span");

    span1[0].innerHTML = weatherIcon(1);
    span1[1].innerHTML = data.weather[0].date.slice(0,3);
    span1[2].innerHTML = data.weather[0].temp;

    span2[0].innerHTML = weatherIcon(2);
    span2[1].innerHTML = data.weather[1].date.slice(0,3);
    span2[2].innerHTML = data.weather[1].temp;

    span3[0].innerHTML = weatherIcon(3);
    span3[1].innerHTML = data.weather[2].date.slice(0,3);
    span3[2].innerHTML = data.weather[2].temp;

    span4[0].innerHTML = weatherIcon(4);
    span4[1].innerHTML = data.weather[3].date.slice(0,3);
    span4[2].innerHTML = data.weather[3].temp;
    //封装一个判断天气，选择图标的函数
    //参数t为第t天
    function weatherIcon(t){
        if(data.weather[t - 1].icon1.search("02") != -1){
            return "&#xe624;";
        }
        if(data.weather[t - 1].icon1.search("01") != -1){
            return "&#xe61d;";
        }
        if(data.weather[t - 1].icon1.search("00") != -1){
            return "&#xe61f;";
        }
        if(data.weather[t - 1].icon1.search("07") != -1){
            return "&#xe622;";
        }
        if(data.weather[t - 1].icon1.search("08") != -1){
            return "&#xe6f6;";
        }
        if(data.weather[t - 1].icon1.search("09") != -1 || data.weather[0].icon1.search("10") != -1){
            return "&#xe6e9;";
        }
        if(data.weather[t - 1].icon1.search("03") != -1){
            return "&#xe664;";
        }
        if(data.weather[t - 1].icon1.search("04") != -1){
            return "&#xe61e;";
        }
    }

}


window.onload = function(){
    // alert("aaa");

    var btn = document.getElementById("location-button");
    var city = document.getElementById("city");

    //默认查询cq天气
    var script = document.createElement("script");
            script.src = `https://api.asilu.com/weather/?city=${"重庆"}&callback=weather`;
            document.body.appendChild(script);
    btn.onclick = function(){
        // 加个简单判断，输入内容是否为空
        if(city.value){
            var script = document.createElement("script");
            script.src = `https://api.asilu.com/weather/?city=${city.value}&callback=weather`;

            //插入到页面中去
            document.body.appendChild(script);
        }else{
            alert("请输入城市名称!");
        }
    }
}