const { ipcMain } = require('electron')
let chalk = require('chalk')

ipcMain.on('setIp',　(event, stationIP, cloudIP) => {
    global.stationIP = stationIP
    global.cloudIP = cloudIP
    console.log(chalk.magenta('set station ip success : ' + stationIP), chalk.green('Cloud IP: ' + cloudIP))
    event.returnValue = true
})

ipcMain.on('startTest', () => {
    console.log(chalk.magenta('start test'))
})