// app.js
App({
  globalData:{
    jinjiezheValue:null,
    history:[
      {url:'../../image/p1.jpg',title:"EE308",text:"sjdkafjasklfjaljkfk",current:0},
      {url:'../../image/Arduino.png',title:"EE308",text:"sjdkafjasklfjaljkfa",current:0},
      {url:'../../image/Arduino.png',title:"EE308",text:"sjdkafjasklffhjdskfhskjjaljkja",current:0},
      {url:'../../image/Arduino.png',title:"EE308",text:"sjdkafjasklfjaljkf",current:0},
    ],
    favorite:[
      {url:'../../image/p1.jpg',title:"EE308",text:"sjdkafjasklfjaljkfk",current:0},
      {url:'../../image/Arduino.png',title:"EE308",text:"sjdkafjasklfjaljkfa",current:0},
      {url:'../../image/Arduino.png',title:"EE308",text:"sjdkafjasklffhjdskfhskjjaljkja",current:0},
      {url:'../../image/Arduino.png',title:"EE308",text:"sjdkafjasklfjaljkf",current:0},
    ],
  },
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

  historyFun: function(item) {
    for (var i = 0; i < history.length; i++) {
      if (i == 1) {
        history.splice(i, 1);
      }
    }
    history.push(item)
  },

  favoriteFun:function(item){
    item.current= 1;
    favorite.push(item);
  },

  favoriteFunDel:function(item){
    for (var i = 0; i < favorite.length; i++) {
      if (favorite[i].title == item.title) {
        favorite.splice(i, 1);
      }
    }
    item.current=0;
  },

  
})
