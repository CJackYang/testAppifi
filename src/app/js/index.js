let ipc = require('electron').ipcRenderer

let submitClick = (stationip, cloudip) => {
  console.log(stationip, 　cloudip)
  let isSuccess = ipc.sendSync('setIp', stationip, cloudip)
  if (isSuccess) {
    document.getElementById('content').innerHTML = '<body id="content"><h1>success</h1><button onclick="startTest()">开始测试</button><div id="abc"></div></body>'
  }
}

let startTest = () => {
  ipc.send('startTest')
  document.getElementById('content').innerHTML = '<body id="content"><div id="abc"></div></body>'
  var obj = new WxLogin({
    id: "abc",
    appid: "wxd7e08af781bea6a2",
    scope: "snsapi_login",
    redirect_uri: 'http%3A%2F%2Fwxlogin.siyouqun.com'
  });
}

ipc.on('getWechatCode', () => {

})

function getCode() {

  ipc.emit('getWechatCode', '')
}