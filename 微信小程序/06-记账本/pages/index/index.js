// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: "开销/收入",
    money: "",
    style: "交通",
    date: "",
    memo: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  changeflag: function(e) {
    let Arr = ["开销", "收入"];
    this.setData({
      flag: Arr[e.detail.value]
    })
  },
  changemoney: function(e) {
    this.setData({
      money: e.detail.value
    })
  },
  changestyle: function(e) {
    let Arr = ["生活", "交通", "食宿"];
    this.setData({
      style: Arr[e.detail.value]
    })
  },
  changedate: function(e) {
    this.setData({
      date: e.detail.value
    })
  },
  changememo: function(e) {
    this.setData({
      memo: e.detail.value
    })
  },
  submit() {
    let {flag,money,style,date,memo} = this.data;
    let obj = {
      flag,
      money,
      style,
      date,
      memo
    }
    if(wx.getStorageSync("list")){
      console.log(1)
      wx.getStorageSync("list").push(obj);
    }else{
      let Arr = [obj];
      wx.setStorageSync("list", Arr)
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.setData({
      date: new Date().toLocaleDateString().split('/').join('-')
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})