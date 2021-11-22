// app.js
App({
  globalData:{
    jinjiezheValue:null,
    history:[
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {}
    ],
    favorite:[
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

    let that = this
    wx.getStorage({
      key: "history",  // 和存储的key值一致；
      success: function(res){
        if(!res.data){
          wx.setStorage({
            key:"history",
            data:that.globalData.history
          })
        }
      },
      fail:function(){
        wx.setStorage({
          key:"history",
          data:that.globalData.history
        })
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
    console.log(history)
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
