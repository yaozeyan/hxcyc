// pages/page/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bgcolora:'#ce6e2f',
    fcolora:'#ffd37e',
    bgcolorb: '#ce6e2f',
    fcolorb: '#ffd37e',
    problem : [],
    inputValue:'',
    ch:true,
    problemIndex : 0,
    problemData : [
      {
        text: "对于传统电竞与移动电竞的发展你更看好哪一个？",
        a:"传统电竞",
        b:"移动电竞"
      },
      {
        text: "若你成为职业选手，你更享受？",
        a: "爆头杀敌",
        b: "一击致命"
      },
      {
        text: "当遭遇寡不敌众时，你会选择？",
        a: "正面应对",
        b: "退居后线"
      },
      {
        text: "若你身处赛场之中，你擅长？",
        a: "冲锋陷阵",
        b: "提供保障"
      },
      {
        text: "针对赛场上的突发情况，你会？",
        a: "迅速做出决策",
        b: "听从指挥"
      }
    ],
    problemDataA: [
      {
        text: "对于传统电竞与移动电竞的发展你更看好哪一个？",
        a:"传统电竞",
        b:"移动电竞"
      },
      {
        text: "若你成为职业选手，你更享受？",
        a: "一颗子爆头",
        b: "一击致命"
      },
      {
        text: "线下比赛中，你觉得嘲讽会？",
        a: "带动比赛氛围",
        b: "加深双方敌意"
      },
      {
        text: "在赛场中，你能用身法优势改变战局么？",
        a: "能",
        b: "不能"
      },
      {
        text: "在赛场上，你擅长的枪械是？",
        a: "独爱某种系列枪械",
        b: "对多个系列枪械均有体会"
      }
    ]
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      inputValue: options.inputValue
    })
    // console.log(this.data.inputValue)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (options) {
    
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
  
  },
  change: function(e){
    var that = this;
    /*if (e.target.dataset.type=="a"){
      that.setData({
        bgcolora: '#ffbe43',
        fcolora: '#a33d21'
      });
    }else{
      that.setData({
        bgcolorb: '#ffbe43',
        fcolorb: '#a33d21'
      });
    }
    setTimeout(function(){*/
      if (that.data.problemIndex>=4){
        var problem = that.data.problem;
        problem[problem.length] = e.target.dataset.type;
        wx.redirectTo({
          url: '../last/last?problem=' + that.data.problem + "&inputValue=" + this.data.inputValue,
          success: function (res) {
            // success
          },
          fail: function () {
            // fail
          },
          complete: function () {
            // complete
          }
        })
      }else{
        that.setData({
          bgcolora: '#ce6e2f',
          fcolora: '#ffd37e',
          bgcolorb: '#ce6e2f',
          fcolorb: '#ffd37e'
        });
        var problem = that.data.problem;
        problem[problem.length] = e.target.dataset.type;
        // console.log(that.data);
        if (that.data.problem[0] === "a") {
          that.setData({
            ch: false
          })
        }
        that.setData({
          problemIndex: that.data.problemIndex + 1,
          problem: problem
        });
      }
    /*},500);*/
    


    //e.target.dataset.type;
    
  }
})