/*
by Zekalryn
2022-04-12 21:28:23*/

/*百度统计*/
var _hmt = _hmt || [];
(function () {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?7dcaf984778dff66bda97a472e3bc897";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();


console.log("%cDon’t enter any code here unless you know what you are doing.    - Zekalryn", "color:red;font-family:system-ui;font-size:35px;-webkit-text-stroke: 1px black;font-weight:bold;background: rgba(252,234,187,1);background: -moz-linear-gradient(left, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%,rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);background: -webkit-gradient(left top, right top, color-stop(0%, rgba(252,234,187,1)), color-stop(12%, rgba(175,250,77,1)), color-stop(28%, rgba(0,247,49,1)), color-stop(39%, rgba(0,210,247,1)), color-stop(51%, rgba(0,189,247,1)), color-stop(64%, rgba(133,108,217,1)), color-stop(78%, rgba(177,0,247,1)), color-stop(87%, rgba(247,0,189,1)), color-stop(100%, rgba(245,22,52,1)));background: -webkit-linear-gradient(left, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%, rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);background: -o-linear-gradient(left, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%, rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);background: -ms-linear-gradient(left, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%, rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);background: linear-gradient(to right, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%, rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fceabb', endColorstr='#f51634', GradientType=1 );font-size:5em");

/*修改导航站跳转机制*/
document.getElementById("sidebar-menus").getElementsByClassName("site-page")[1].target = "_self";
var $cardInfoBtn = document.getElementById("card-info-btn");
if ($cardInfoBtn) {
  /**有的页面可能不存在此widget */
  $cardInfoBtn.target = "_self";
}
document.getElementById("menus").getElementsByClassName("site-page")[1].target = "_self";

/*网站运行计时统计*/
function myGetRuntime(d) {
  const dateNow = new Date()
  const datePost = new Date(d)
  const dateDiff = dateNow.getTime() - datePost.getTime()
  const minute = 1000 * 60
  const hour = minute * 60
  const day = hour * 24
  const year = day * 365

  let result = {}

  result.year = Math.floor(dateDiff / year)
  result.day = Math.floor(dateDiff % year / day)
  result.hour = Math.floor(dateDiff % year % day / hour)
  result.minute = Math.floor(dateDiff % year % day % hour / minute)
  /**最后余下的为毫秒数 除以1000得到秒数 */
  result.second = Math.floor(dateDiff % year % day % hour % minute / 1000)

  return result
}

var mTimer

(function () {
  const $runtimeCount = document.getElementById('runtimeshow')
  if ($runtimeCount) {
    const publishDate = $runtimeCount.getAttribute('data-publishDate')
    clearInterval(mTimer)
    mTimer = setInterval(function () {
      const runtimeDate = myGetRuntime(publishDate)
      $runtimeCount.innerText = '已运行 ' + runtimeDate.year + ' 年 ' + runtimeDate.day + ' 天 ' +
        (runtimeDate.hour < 10 ? ('0' + runtimeDate.hour) : runtimeDate.hour) + ' : ' + (runtimeDate.minute < 10 ? ('0' + runtimeDate.minute) : runtimeDate.minute) + ' : ' +
        (runtimeDate.second < 10 ? ('0' + runtimeDate.second) : runtimeDate.second)
    }, 1000)

  }
})()