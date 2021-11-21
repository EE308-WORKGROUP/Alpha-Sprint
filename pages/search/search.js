// pages/search/search.js
const app = getApp();
var favorite = app.globalData.favorite;
    Page({
      data: {
        favorite,
        movies:[  
      {url:'../../image/p1.jpg',wenzi:'Lesson 1'},  
      {url:'../../image/p2.jpg',wenzi:'Lesson 2'}, 
      ],
        navbar:[
        {color:"#464B8D",icon:"iconfont icon-home",iconFill:"iconfont icon-homeFilling"},
        {color:"#282F75",icon:"iconfont icon-learn",iconFill:"iconfont icon-learnFilling"},
        {color:"#464B8D",icon:"iconfont icon-favorite",iconFill:"iconfont icon-favoriteFilling"},
        {color:"#282F75",icon:"iconfont icon-time",iconFill:"iconfont icon-timeFilling"},
      ],
        userInfo: {},
        hasUserInfo: false,
        canIUseGetUserProfile: false,
        currentTab: 0,
        input:" ",
      },

      onLoad() {
        if (wx.getUserProfile) {
          this.setData({
            canIUseGetUserProfile: true
          })
        }
      },

      getWord: function (e) {
        this.setData({
          input: e.detail.value
        })
        console.log(this.data.input);
      },

      resultSet:function(){
        console.log(this.data.input)
        if(this.data.input!==" "){
        wx.navigateTo({
          url: '../result/result?input='+this.data.input,
        })
      }
      else{
        console.log(-1)
      }
      },

      getUserProfile(e) {
        // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
        // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
        wx.getUserProfile({
          desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
          success: (res) => {
            this.setData({
              userInfo: res.userInfo,
              hasUserInfo: true
            })
          }
        })
      },
      chuxuezhe:function(){
        wx.navigateTo({
          url: '../chuxuezhe/chuxuezhe',
        })
      },
      jinjiezhe:function(){
        wx.navigateTo({
          url: '../jinjiezhe/jinjiezhe',
        })
      },
      exit:function(){
        wx.exitMiniProgram({
        })
      },
      navbarTap: function(e){
        this.setData({
          currentTab : e.currentTarget.dataset.idx,
        })
        console.log(e.currentTarget.dataset.idx);
      },
    })
      