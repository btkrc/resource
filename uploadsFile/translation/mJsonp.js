/*by Zekalryn*/


function download(jsonp) {
  var tBody = $('.weather-info tbody');
  var tR = $(`<tr>
    <td>${jsonp.translation}</td>
    <td>${jsonp.basic && jsonp.basic.explains ? jsonp.basic.explains : "没有呢"}</td>
    </tr>`);
  tBody.append(tR);

}
 function onBtnClick(ev) {
    // 1. 获取输入框内容
    var inputElement = document.querySelector('.text-submit');
    var text = inputElement ? inputElement.value : '';

    // 校验：如果没输入，直接拦截，并保留旧结果
    if (!text) {
        alert('请输入要翻译的内容！');
        return;
    }

    // 2. 先清空旧数据（按照你的思路，清理战场）
    var tbody = document.querySelector('.weather-info tbody');
    if (tbody) tbody.innerHTML = ''; // 清空表格旧行

    var oldScript = document.getElementById('jsonp');
    if (oldScript) oldScript.remove(); // 移除旧的 script 标签

    // 3. 对输入内容进行 URL 编码
    var encodedText = encodeURIComponent(text);

    // 4. 拼接新 API 地址
    var url = "https://api.mymemory.translated.net/get?q=" + encodedText + "&langpair=en|zh-CN&callback=download";

    // 5. 动态创建并插入新的 script 标签，发起请求
    var script = document.createElement('script');
    script.id = 'jsonp';
    script.src = url;
    document.body.appendChild(script);
}
    $('.btn-submit').off('click',onBtnClick);
    $('.btn-submit').on('click', onBtnClick);