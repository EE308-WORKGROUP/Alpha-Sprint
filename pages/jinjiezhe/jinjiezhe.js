// pages/jinjiezhe/jinjiezhe.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar:[
      {color:"#464B8D",colorFilling:"#636FC1"},
      {color:"#282F75",colorFilling:"#636FC1"},
      {color:"#464B8D",colorFilling:"#636FC1"},
      {color:"#282F75",colorFilling:"#636FC1"},
    ],
    currentTab:0,
  },


  back:function(){
    wx.navigateBack({
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */

  change0:function(){
    this.setData({
      currentTab:0
    })
  },
  change1:function(){
    this.setData({
      currentTab:1
    })
  },
  history0:function(event){
    this.setData({
      historyMiddle:this.data.searchResult0[event.currentTarget.dataset.idx]
    })
    console.log(this.data.historyMiddle)
    let that = this
    wx.getStorage({
      key: "history",  // 和存储的key值一致；
      success: function(res){
        let historyVal = res.data
        historyVal.splice(0,0,that.data.historyMiddle);
        historyVal.splice(9,1);
        console.log(historyVal)
        that.setData({
          history:historyVal
        })  // 在这里打印出存储的值；
        console.log(that.data.history)
        wx.setStorage({
          key:"history",
          data:that.data.history
        })
      },
    })
  },
  history1:function(event){
    this.setData({
      historyMiddle:this.data.searchResult1[event.currentTarget.dataset.idx]
    })
    console.log(this.data.historyMiddle)
    let that = this
    wx.getStorage({
      key: "history",  // 和存储的key值一致；
      success: function(res){
        let historyVal = res.data
        historyVal.splice(0,0,that.data.historyMiddle);
        historyVal.splice(9,1);
        console.log(historyVal)
        that.setData({
          history:historyVal
        })  // 在这里打印出存储的值；
        console.log(that.data.history)
        wx.setStorage({
          key:"history",
          data:that.data.history
        })
      },
    })
  },
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://106.14.59.59:8000/arduino/data',
      method:"GET",
      header:{'content-type':'appplication/json,charset=utf-8'},
      success: (result) => {
        that.setData({
          searchResult0:result.data,
        });
        console.log(that.data.searchResult0);
      },

      fail: (res) => {},
      complete: (res) => {},
    })
    wx.request({
      url: 'http://106.14.59.59:8000/arduino/data',
      method:"GET",
      header:{'content-type':'appplication/json,charset=utf-8'},
      success: (result) => {
        that.setData({
          searchResult1:result.data,
        });
        console.log(that.data.searchResult1);
      },

      fail: (res) => {},
      complete: (res) => {},
    })
  },

  navbarTap: function(e){
    this.setData({
      currentTab : e.currentTarget.dataset.idx,
    })
    console.log(e.currentTarget.dataset.idx);
  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})