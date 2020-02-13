//index.js
//获取应用实例
const app = getApp()
const imglist = require('../../utils/img');

Page({
  data: {
    imglist:imglist
  },
  onLoad(){
    console.log(imglist)
  }
})
