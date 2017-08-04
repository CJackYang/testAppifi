const { ipcMain } = require('electron')
let chalk = require('chalk')

ipcMain.on('setIp',　(event, arg) => {
    global.stationIP = arg
    console.log(chalk.magenta('set station ip success : ' + arg))
    event.returnValue = true
})

ipcMain.on('startTest', () => {
    console.log(chalk.magenta('start test'))
})