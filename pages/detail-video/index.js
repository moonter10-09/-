// pages/detail-video/index.js
import { getMVURL, getMVDetail, getRelatedVedio} from '../../service/api_video'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mvUrlInfo : {},
    mvDetail : {},
    relatedVedio :{},
    danmuList : [{
      text: '第 1s 出现的弹幕',
      color: '#ff0000',
      time: 1
    },
    {text: '第 2s 出现的弹幕',
      color: '#00ffff',
      time: 2
    },
     {
      text: '第 3s 出现的弹幕',
      color: '#ff00ff',
      time: 3
    },
    {
      text: '第 4s 出现的弹幕',
      color: '##FFB366',
      time: 4
    },
    {
      text: '第 5s 出现的弹幕',
      color: '#FAEBD7',
      time: 5
    }
  ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:  function (options) {
    const id = options.id
    this.getPageData(id)
  },
  getPageData(id){
    // 1.请求播放地址
    getMVURL(id).then(res =>{
      this.setData({mvUrlInfo : res.data})
    })
    // 2.请求视频信息
    getMVDetail(id).then(res =>{
      this.setData({mvDetail : res.data})
    })
    // 3.请求相关视频
    getRelatedVedio(id).then(res =>{
      this.setData({relatedVedio : res.data})
    })
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