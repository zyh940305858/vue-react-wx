// pages/index/index.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		list:[],
		index:0
	},
	saveIndex:function(e){
		console.log(e.currentTarget.dataset.index)
		this.setData({
			index: e.currentTarget.dataset.index
		})
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
		wx.request({
			url: 'http://127.0.0.1:8080/mock/data.json',
			success: (res)=>{
				console.log(res.data.list)
				this.setData({
					list:res.data.list
				})
			}
		})
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