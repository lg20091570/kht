// pages/customerList/ customerList.js
var city_list = require('./city.js');
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cityList: city_list.city,
    isShowLayer: false,
    chooseIndex: 0,
    len: [],
    code: null
    
  },
  // 侧栏
  getCurrentCode(e) {
    var index = e.target.dataset.index, sum = 0, self = this;

    for (var j = 0; j < index; j++) {
      sum += this.data.len[j];
    }

    this.setData({
      code: e.target.dataset.code,
      scrollTop: sum * 40,
      chooseIndex: index,
      isShowLayer: true
    });

    setTimeout(() => {
      self.setData({ isShowLayer: false })
    }, 500);
  },
  getChooseCity(e) {
    this.setData({ chooseCity: e.target.dataset.city });
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