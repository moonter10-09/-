// pages/home-music/index.js
import { getBanners } from '../../service/api_music'
import queryRect from '../../utils/query-rect'
import throttle from '../../utils/throttle'
const throttleQueryRect = throttle(queryRect,1000) 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerList:[],
    swiperHeight:0  //图片高度
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
  handleSwiperImageLoaded(){
    const query = wx.createSelectorQuery()
  query.select('.swiper-img').boundingClientRect()
  query.exec((res)=>{
    console.log(res[0]);
    this.setData({swiperHeight : res[0].height})
})
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
})