//Page函数负责 当前页面的注册
Page({

  /**
   * 页面的初始数据
   */
	data: {
		msg: "hello 本地宝",
		list: []
	},

	handleTop: function (e) {
		// wx.showToast({
		// 	title: e.type
		// })
		// wx.switchTab({
		// 	url: '/pages/logs/logs',
		// })
		// wx.navigateTo({
		// 	url: '/pages/logs/logs',
		// })
	},
  /**
   * 生命周期函数--监听页面加载
   */
	onLoad: function (options) {

	},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
	onReady: function () {
		wx.showLoading({
			title: '加载中...'
		})
		// ajax请求
		wx.request({
			url: 'https://yantianfeng.com/api/local/categories',
			success: (res)=>{
				this.setData({
					list: res.data.categories
				})
				wx.hideLoading()
			}
		})
		// wx.request({
		// 	url: 'http://127.0.0.1:8080/mock/data.json',
		// 	success: function (res) {
		// 		console.log(res);
		// 	},
		// 	fail:function(err){
		// 		console.log(err)
		// 	}
		// })

		// var count = 1;
		// //设置setTabBarBadge
		// wx.setTabBarBadge({
		// 	index: 0,
		// 	text: count+'',
		// })

		// let timer = setInterval(function(){
		// 	wx.setTabBarBadge({
		// 		index: 0,
		// 		text: ++count+'',
		// 	})
		// },1000)

		// setTimeout(function(){
		// 	wx.removeTabBarBadge({
		// 		index:0
		// 	})
		// 	clearInterval(timer)
		// },10000)
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