// pages/search/search.js
const app = getApp()

    Page({
      data: {
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
        currentTab: 2,
        favorite:[
          {url:'../../image/p1.jpg',title:"EE308",text:"sjdkafjasklfjaljkfk"},
          {url:'../../image/Arduino.png',title:"EE308",text:"sjdkafjasklfjaljkfa"},
          {url:'../../image/Arduino.png',title:"EE308",text:"sjdkafjasklffhjdskfhskjjaljkja"},
          {url:'../../image/Arduino.png',title:"EE308",text:"sjdkafjasklfjaljkf"},
        ],
      },
      onLoad() {
        if (wx.getUserProfile) {
          this.setData({
            canIUseGetUserProfile: true
          })
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
      navbarTap: function(e){
        this.setData({
          currentTab : e.currentTarget.dataset.idx,
        })
        console.log(e.currentTarget.dataset.idx);
      },
    })
      