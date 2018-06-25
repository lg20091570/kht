// pages/departmentList/departmentList.js
// pages/addingDepartment/addingDepartment.js

    Page({
    data: {
      showModal: false,
      optionlist:false,
    },
      onLoad: function () {
      },
      /**
       * 弹窗
       */
     

      // 操作选项

      optionlist:function(){
      this.setData({
        lowest: false
      })
      this.setData({
          optionlist:true

      })
     
      },

      hideoption:function(){
        this.setData({
          optionlist: false
        })
        this.setData({
          lowest: true,
        })
      },
     

      /**
       * 弹出框蒙层截断touchmove事件
       */
      // preventTouchMove: function () {
      // },
      /**
       * 隐藏模态对话框
       */
      hideModal: function () {
        this.setData({
          showModal: false
        });
      },
      /**
       * 对话框取消按钮点击事件
       */
      onCancel: function () {
        this.hideModal();
      },
      /**
       * 对话框确认按钮点击事件
       */
      onConfirm: function () {
        this.hideModal();
      }
})
  



