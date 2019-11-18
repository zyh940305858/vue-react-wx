// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputText: '',
    messageList: [] //用来保存所接受的消息
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    //连接websocket服务器
    wx.connectSocket({
      url: 'wss://yantianfeng.com:2000',
      success: function(res) {
        console.log("连接websocket服务成功");
      }
    })

    //监听消息
    wx.onSocketMessage((res) => {
      console.log(JSON.parse(res.data))
      this.data.messageList.push(JSON.parse(res.data));
      this.setData({
        messageList: this.data.messageList
      });
			console.log(this.data.messageList)
    })
  },
  saveInput: function(e) {
    this.setData({
      inputText: e.detail.value
    })
  },
  send: function() {
    wx.sendSocketMessage({
      data: this.data.inputText,
      success: function() {
        wx.showToast({
          title: '发送成功'
        })
      }
    });
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