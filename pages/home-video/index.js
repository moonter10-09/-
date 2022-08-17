// pages/home-video/index.js
import { getTopMV } from '../../service/api_video'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topMVs: [],
    hasMore:true
  },
  getMoreData(){
    // debugger
    wx.showNavigationBarLoading()
    wx.showLoading({
      title: '加载中',
      mask: true
    });
    if(!this.data.hasMore && offset !== 0) 
    {
      wx.hideLoading()
      return false
    }
    let offset=this.data.topMVs.length
    getTopMV(offset).then(res => {
      if (res.code == '200') {
        this.setData({ topMVs: this.data.topMVs.concat(res.data),hasMore:res.hasMore})
        wx.hideNavigationBarLoading()
        wx.hideLoading()
      }
    })
  },
  handleVideoItemClick(e){
    const { id } =e.currentTarget.dataset.item
    wx.navigateTo({
      url: `/pages/detail-video/index?id=${id}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.getMoreData()
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
    this.setData({topMVs :[]})
    this.getMoreData()
    wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.getMoreData()
   
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})