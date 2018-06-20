// pages/visitCustomerfillin/visitCustomerfillin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    min: 5,//最少字数  
    max: 80, //最多字数 
    array: ['当面拜访', '电话拜访', '聊天软件拜访', '其他拜访'] ,
    deal:['已成交','未成交']
  },
  //字数限制    
  inputs: function (e) {
    // 获取输入框的内容  
    var value = e.detail.value;
    // 获取输入框内容的长度  
    var len = parseInt(value.length);

    //最少字数限制  
    if (len <= this.data.min)
      this.setData({
        texts: ""
      })
    else if (len > this.data.min)
      this.setData({
        texts: " "
      })

    //最多字数限制  
    if (len > this.data.max) return;
    // 当输入框内容的长度大于最大长度限制（max)时，终止setData()的执行  
    this.setData({
      currentWordNumber: len //当前字数    
    });
  },


  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  dealPickerChange: function (e) {
    this.setData({
      page: e.detail.value
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