// pages/chuxuezhe/chuxuezhe.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar:[
      {color:"#464B8D",icon:"iconfont icon-home",iconFill:"iconfont icon-homeFilling"},
      {color:"#282F75",icon:"iconfont icon-learn",iconFill:"iconfont icon-learnFilling"},
      {color:"#464B8D",icon:"iconfont icon-favorite",iconFill:"iconfont icon-favoriteFilling"},
      {color:"#282F75",icon:"iconfont icon-time",iconFill:"iconfont icon-timeFilling"},
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://106.14.59.59:8000/arduino/data',
      method:"GET",
      header:{'content-type':'appplication/json,charset=utf-8'},
      success: (result) => {
        console.log(result.data);
        console.log(typeof(result.data));
        that.setData({
          searchResult:result.data,
        });
        console.log(that.data.searchResult);
      },

      fail: (res) => {},
      complete: (res) => {},
    })
  },
  
  back:function(){
    wx.navigateBack({
    })
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