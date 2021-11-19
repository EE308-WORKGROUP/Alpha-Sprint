// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData:{
    favorite:[
      {url:'../../image/p1.jpg',title:"EE308",text:"sjdkafjasklfjaljkfk"},
      {url:'../../image/Arduino.png',title:"EE308",text:"sjdkafjasklfjaljkfa"},
      {url:'../../image/Arduino.png',title:"EE308",text:"sjdkafjasklffhjdskfhskjjaljkja"},
      {url:'../../image/Arduino.png',title:"EE308",text:"sjdkafjasklfjaljkf"},
    ],
  }
})
