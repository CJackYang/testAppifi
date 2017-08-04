let ipc = require('electron').ipcRenderer

let submitClick = (ip) => {
    // console.log(ip.getElementById('textIp'))
    let isSuccess = ipc.sendSync('setIp', ip)
    if (isSuccess) {
        document.getElementById('content').innerHTML = '<body id="content"><h1>success</h1><button onclick="startTest()">开始测试</button></body>'
    }
}

let startTest = () => {
    ipc.send('startTest')
}