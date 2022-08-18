// pages/home-music/index.js
import { getBanners } from '../../service/api_music'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getPageData()
  },
  getPageData(){
    getBanners().then(res =>{
      this.setData({bannerList : res.banners})
    })
  },
  handleSearchClick(){
    console.log("dsofusofusfuiou");
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
})