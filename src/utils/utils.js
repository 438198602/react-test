/**
 * javascript常用方法
 */

export default {
  // 返回一个包含当前页面 URL 的参数的对象
  getURLParameters(url) {
    return url.match(/([^?=&]+)(=([^&]*))/g).reduce(
      (a, v) => (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1), a), {}
    )
  },
  // getURLParameters('http://url.com/page?name=Adam&surname=Smith') -> {name: 'Adam', surname: 'Smith'}

  // 判断是移动设备还是PC
  detectDeviceType () {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop';
  },
  // detectDeviceType(); // "Mobile" or "Desktop"

  //获取滚动条当前的位置
  getScrollTop() {
    var scrollTop = 0;
    if (document.documentElement && document.documentElement.scrollTop) {
      scrollTop = document.documentElement.scrollTop;
    } else if (document.body) {
      scrollTop = document.body.scrollTop;
    }
    return scrollTop;
  },

  //获取当前可视范围的高度
  getClientHeight() {
    var clientHeight = 0;
    if (document.body.clientHeight && document.documentElement.clientHeight) {
      clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight);
    } else {
      clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight);
    }
    return clientHeight;
  },

  //获取文档完整的高度
  getScrollHeight() {
    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
  },

  // 到达页面底部
  bottomVisible () {
    return document.documentElement.clientHeight + window.scrollY >= (document.documentElement.scrollHeight || document.documentElement.clientHeight);
  },
  // bottomVisible() -> true

  // 如果当前触摸点不在输入框上，那么都失去焦点
  objBlurFun(sDom, time) {
    var time = time || 300;
    var browser = {
      versions: function() {
        var u = navigator.userAgent, app = navigator.appVersion;
        return {
          ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),  // ios终端
        };
      }(),
      language:(navigator.browserLanguage || navigator.language).toLowerCase()
    }
    var obj = document.querySelectorAll(sDom);
    for(var i=0; i<obj.length; i++) {
      if (browser.versions.ios) {
        this.objBlur(obj[i], time);
      } else {
        // android失去焦点隐藏键盘
        obj[i].blur();
      }
    }
  },
  // 元素失去焦点隐藏键盘
  objBlur(sdom, time) {
    var time = time || 300;
    if (sdom) {
      sdom.addEventListener("focus", () => {
        document.addEventListener("touchend", docTouchend, false);
      }, false);
    } else {
        throw new Error("objBlur()没有找到元素");
    }
    var docTouchend = (event) => {
      if (event.target != sdom) {
        setTimeout(() => {
          sdom.blur();
          document.removeEventListener('touchend', docTouchend, false);
        }, time);
      }
    };
  },

  // localStorage, cookies
  // 本地数据存储或读取
  localItem(key, value) {
    if (arguments.length == 1) {
      return localStorage.getItem(key);
    } else {
      return localStorage.setItem(key, value);
    }
  },

  // 删除本地数据
  removeLocalItem(key) {
    if (key) {
      return localStorage.removeItem(key);
    }
    // 全部清空
    return localStorage.clear();
  },

  // 设置cookie
  setCookie(name, value, time) {
    let strsec = this.getsec(time);
    let exp = new Date();
    exp.setTime(exp.getTime() + strsec*1);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/";
  },
  //s20是代表20秒
  //h是指小时，如12小时则是：h12
  //d是天数，30天则：d30
  getsec(str) {
    let str1 = str.substring(1, str.length)*1;
    let str2 = str.substring(0, 1);
    if (str2 == "s") {
      return str1*1000;
    } else if (str2 == "h") {
     return str1*60*60*1000;
    } else if (str2 == "d") {
      return str1*24*60*60*1000;
    }
  },

  // 获取cookie
  getCookie(name) {
    let arr, reg = new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr = document.cookie.match(reg)) {
      return unescape(arr[2]);
    } else {
      return null;
    }
  },

  // 删除cookie
  delCookie(name) {
    let exp = new Date();
    exp.setTime(exp.getTime() - 1);
    let cval = this.getCookie(name);
    if (cval !== null) {
      document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    }
  }

}
