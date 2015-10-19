//判断是否为安卓设备
function isAndroid(){
    var u = navigator.userAgent;
    if(u.indexOf('Android') > -1 || u.indexOf('Linux') > -1){
      return true;
    }
  }

//判断是否为微信浏览器
function isWeiXin(){
    var ua = window.navigator.userAgent.toLowerCase(); 
    if(ua.match(/MicroMessenger/i) == 'micromessenger'){ 
      return true; 
    }
  }

  if(isWeiXin() && isAndroid()){
    alert('温馨提示：安卓设备请用手机浏览器扫码下载。');
  }