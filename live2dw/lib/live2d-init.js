// ==========================================
//  终极隐蔽校验 — 严格完全匹配 + 一次性加载
// ==========================================

(function() {

    const _d = (s) => { try { return atob(s); } catch(e) { return ''; } };
    
    const _allowed_domains = [
        _d('d3d3LnprcnluLmNvbQ=='), // www.zkryn.com
        _d('YnRrcmMuZ2l0aHViLmlv'), // btkrc.github.io
        //'localhost',
        //'127.0.0.1'
    ];

    function initLive2D() {
        const host = location.hostname.toLowerCase();
        
        if (!_allowed_domains.includes(host)) return;

        if (document.getElementById('live2dcanvas') || document.querySelector('.live2d-widget')) {
            return; 
        }

        // 确保引擎加载完毕
        if (typeof L2Dwidget === 'undefined') return;

        L2Dwidget.init({
            "pluginRootPath": "live2dw/",
            "pluginJsPath": "live2dw/lib/",
            "pluginModelPath": "live2dw/assets/",
            "tagMode": false,
            "debug": false,
            "model": {
                "scale": 1,
                "jsonPath": "https://cdn.jsdmirror.com/gh/btkrc/resource@main/dsr50_1801/dsr50_1801.model.json"
            },
            "display": {
                "position": "right",
                "width": 300,
                "height": 450,
                "hOffset": -60,
                "vOffset": -180
            },
            "mobile": { "show": true },
            "react": { "opacity": 0.7 },
            "log": false
        });
    }

    initLive2D();
})();