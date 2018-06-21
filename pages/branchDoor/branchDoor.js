// pages/selDepartment/selDepartment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    departmentList: [
      { name: "销售部", checked: false },
      { name: "开发部", checked: false },
      { name: "运营部", checked: false }
    ]

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  radioChange: function (e) {
    let temp = this.data.departmentList[e.target.dataset.index].checked;
    let setTemp = "departmentList[" + e.target.dataset.index + "].checked";

    if (temp) {
      this.setData({
        [setTemp]: false
      });
    } else {
      for (let i = 0; i < this.data.departmentList.length; i++) {
        let forTemp = "departmentList[" + i + "].checked";
        this.setData({
          [forTemp]: false
        });
      }
      this.setData({
        [setTemp]: true
      })
    }

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