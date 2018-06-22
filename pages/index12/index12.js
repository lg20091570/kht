// pages/indexed/indexed.js
var city_list = require('./city.js');

Page({
  data: {
    cityList: city_list.city,
    isShowLayer: false,
    chooseIndex: 0,
    len: [],
    code: null,
    codeHeight: null,
    cityHeight: null,
    scrollTop: 0
  },
  // onLoad(options) {
  //   var windowHeight = wx.getSystemInfoSync().windowHeight;
  //   var arr = [];


  //   this.setData({
  //     codeHeight: (windowHeight - 50) / this.data.cityList.length,
  //     cityHeight: windowHeight - 50,
  //     len: arr
  //   });
  // },
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
  }
})