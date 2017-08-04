const requestHelperAsync = require('./request').requestHelperAsync
const request = require('superagent')
const Promise = require('bluebird')

class Test {
  constructor(stationIP, cloudIP) {
    this.stationIP = stationIP
    this.stationToken = undefined
    this.cloudToken = undefined
    this.cloudIP = cloudIP
  }

  run() {

  }

  resetStation() {

  }

  async createFirstUserAsync(username, isAdmin) 　{
    let props = { username, password: username }
    if(isAdmin)　props.isAdmin = true
    console.log('开始创建 First User')
    let res, url = this.stationIP + '/users'
    try{
      res = await requestHelperAsync('POST', url, { params: props }, {})
      return res.body
    }catch(e){
      console.log('创建用户失败')
      console.log(e.message)
    }
  }

  getToken(useruuid, password,callback) {
    console.log('开始获取 token')
    let url = this.stationIP + '/token'
    request
      .get(url)
      .auth(useruuid, password)
      .end((err, res) => {
        if(err) return callback(err)
        callback(null, res.body)
      })
  }
  
  getTokenAsync(useruuid, password) {
    return Promise.promisify(this.getToken).bind(this)(useruuid, password)
  }

  async createTicketAsync(type) {
    let url = this.stationIP + '/station/tickets'
    let props = {
      type
    }
    let res 
    try{
      res = await requestHelperAsync('POST', url, { params: props}, {})
      return res.body
    }catch(e){
      console.log('create Ticket error')
      throw e
    }
  }
  getWechatCode() {
     
  }

  async getCloudTokenAsync(code) {
    let url = this.cloudIP + '/v1/token'
    let props = {
      code,
      platform: 'web'
    }
    let res
    try{
      res = await requestHelperAsync('GET', url, { query: props }, {})
      return res.body
    }catch(e){
      console.log('get CloudToken error')
      throw e
    }
  }

  async fillTicket(ticketId) {
    

  }

  async getTicketAsync(ticketId) {
    let url = this.stationIP + '/station/tickets/' + ticketId
    try{
      let res = await requestHelperAsync('GET', url, {}, {})
      return res.body
    }catch(e){
      console.log(e)
      throw e
    }
  }

  async confirmTicket(ticketId, guid) {
    let url = this.stationIP + '/station/tickets/wechat/' + ticketId
    let props = {
      guid,
      state: true
    }
    try {
      let res = await requestHelperAsync('POST', url, {}, {})
    } catch (e) {
      console.log(e)
      throw e
    }
  }

  async checkBind() {


  }

}