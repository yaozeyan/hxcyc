// pages/share/share.js
Page({

  /**
   * 页面的初始数据
   */ 
  url: "",
  urla: "",
  name: "",
  dialog: false,
  op: "block",
  shareTempFilePath: "",
  pos: false,
  bg: "../images/bg.jpg",
  aaaa: "../images/aaaa.png",
  title: "",
  data: {
    imgData: [
      {
        problem: "b,a,a,a,a",
        url: "http://7jing.com/2018/yzy/cf/a.jpg",
        urla: "../images/s1.png"
      },
      {
        problem: "b,a,a,a,b",
        url: "http://7jing.com/2018/yzy/cf/b.jpg",
        urla: "../images/mm.png"
      },
      {
        problem: "b,a,a,b,a",
        url: "http://7jing.com/2018/yzy/cf/c.jpg",
        urla: "../images/dd.png"
      },
      {
        problem: "b,b,a,a,a",
        url: "http://7jing.com/2018/yzy/cf/d.jpg",
        urla: "../images/mb.png"
      },
      {
        problem: "b,a,a,b,b",
        url: "http://7jing.com/2018/yzy/cf/e.jpg",
        urla: "../images/ok.png"
      },
      {
        problem: "b,a,b,a,b",
        url: "http://7jing.com/2018/yzy/cf/f.jpg",
        urla: "../images/gl.png"
      },
      {
        problem: "b,b,b,a,b",
        url: "http://7jing.com/2018/yzy/cf/g.jpg",
        urla: "../images/gaga.png"
      },
      {
        problem: "b,a,a,b,b",
        url: "http://7jing.com/2018/yzy/cf/h.jpg",
        urla: "../images/dm.png"
      },
      {
        problem: "b,a,b,a,a",
        url: "http://7jing.com/2018/yzy/cf/i.jpg",
        urla: "../images/wind.png"
      },
      {
        problem: "b,a,b,a,b",
        url: "http://7jing.com/2018/yzy/cf/j.jpg",
        urla: "../images/xr.png"
      },
      {
        problem: "b,b,b,b,b",
        url: "http://7jing.com/2018/yzy/cf/k.jpg",
        urla: "../images/none.png"
      },
      {
        problem: "b,b,a,a,b",
        url: "http://7jing.com/2018/yzy/cf/k.jpg",
        urla: "../images/none.png"
      },
      {
        problem: "b,b,a,b,b",
        url: "http://7jing.com/2018/yzy/cf/k.jpg",
        urla: "../images/none.png"
      },

      {
        problem: "a,a,a,b,a",
        url: "http://7jing.com/2018/yzy/cf/aa.jpg",
        urla: "../images/lk.png"
      },
      {
        problem: "a,a,a,b,b",
        url: "http://7jing.com/2018/yzy/cf/bb.jpg",
        urla: "../images/jj.png"
      },
      {
        problem: "a,a,b,a,b",
        url: "http://7jing.com/2018/yzy/cf/cc.jpg",
        urla: "../images/oo.png"
      },
      {
        problem: "a,a,b,a,a",
        url: "http://7jing.com/2018/yzy/cf/dd.jpg",
        urla: "../images/cr.png"
      },
      {
        problem: "a,b,b,b,a",
        url: "http://7jing.com/2018/yzy/cf/ee.jpg",
        urla: "../images/tf.png"
      },
      {
        problem: "a,b,b,b,b",
        url: "http://7jing.com/2018/yzy/cf/ff.jpg",
        urla: "../images/ld.png"
      },
      {
        problem: "a,a,b,b,a",
        url: "http://7jing.com/2018/yzy/cf/gg.jpg",
        urla: "../images/zh.png"
      },
      {
        problem: "a,a,a,a,b",
        url: "http://7jing.com/2018/yzy/cf/hh.jpg",
        urla: "../images/even.png"
      },
      {
        problem: "a,b,a,a,b",
        url: "http://7jing.com/2018/yzy/cf/ii.jpg",
        urla: "../images/none1.png"
      },
      {
        problem: "a,b,a,a,b",
        url: "http://7jing.com/2018/yzy/cf/ii.jpg",
        urla: "../images/none1.png"
      },

    ]
  },

  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {
    console.log(options);
    this.setData({
      url: options.url,
      name: options.name
    });
    
    
    // console.log(options.inputValue)
    this.setData({
      name: options.inputValue,
      canvasshow: 'none',
      bg: "../images/bg.jpg",
      aaaa: "../images/aaaa.png",
    })
    var str = options.problem.toString();
    // console.log(str)
    var result = true;
    for (var i = 0; i < this.data.imgData.length; i++) {
      if (str === this.data.imgData[i].problem) {
        this.setData({
          url: this.data.imgData[i].url,
          urla: this.data.imgData[i].urla,
        })
        result = false;
        break;
      }
    }
    // console.log(this.data.urla);
    if (result) {
      this.setData({
        url: this.data.imgData[this.data.imgData.length - 1].url,
        urla: this.data.imgData[this.data.imgData.length - 1].urla,
      })
    }

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    if (this.data.url === 'http://7jing.com/2018/yzy/cf/ii.jpg' || this.data.url === 'http://7jing.com/2018/yzy/cf/k.jpg') {
      this.setData({
        pos: true
      })
    }
    var res = wx.getSystemInfoSync();
    var px_rpx = 750 / res.screenWidth;
    // console.log(px_rpx)
    var w = 524 / px_rpx;
    var h = 410 / px_rpx;
    // var imgw = 311 / px_rpx;
    var imgh = 70 / px_rpx;
    var lw = 385 / px_rpx;
    var tw = 412 / px_rpx;

    var fx = 14 / px_rpx;
    var fy = 386 / px_rpx;
    var fxA = 26 / px_rpx;
    var fyA = 144 / px_rpx;

    // var fya = 1125 / px_rpx;
    // var fw = 2650 / px_rpx;
    var ch = 1767 / px_rpx;
    var iw = 750 / px_rpx;
    var ih = 1144 / px_rpx;
    var it = 88 / px_rpx;
    var il = 4 / px_rpx;
    var aw = 511 / px_rpx;
    var ah = 432 / px_rpx;
    var al = 158 / px_rpx;
    var at = 226 / px_rpx;
    // var fh = 80 / px_rpx;
    var fs = 16 / px_rpx;
    var fsA = 34 / px_rpx;

    var cl = 190 / px_rpx;
    var ct = 146 / px_rpx;
    // console.log(w)
    // console.log(h)
    // const ctx = wx.createCanvasContext("shareCanvas")
    // console.log(this.data.url)
    // ctx.drawImage(this.data.url, 0,0,lw,tw)


    // console.log(fxA)
    // console.log(fyA)
    // ctx.setFontSize(fs)
    // ctx.setFillStyle("#ffd37e")
    // ctx.fillText(this.data.name, fx, fy);
    // ctx.fillText(this.data.txt1, fx, fya);
    // ctx.translate(524, 410);
    // ctx.draw()
    // console.log(this.data.bg)
    const ctxA = wx.createCanvasContext("share")
    if (this.data.urla == '../images/none1.png' || this.data.urla == '../images/none.png') {
      cl = 440 / px_rpx;
      ct = 136 / px_rpx;
      ctxA.setTextAlign('center')
    }
    ctxA.drawImage(this.data.bg, 0, 0, iw, ch)
    ctxA.drawImage(this.data.aaaa, al, at, aw, ah)
    ctxA.drawImage(this.data.urla, il, it, iw, ih)
    ctxA.setFontSize(fsA)
    ctxA.setFillStyle("#fff")
    ctxA.setTextAlign('right')
    ctxA.fillText(this.data.name, cl, ct);
    ctxA.draw()
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
  dialog: function () {
    wx.canvasToTempFilePath({
      canvasId: 'share',
      success: (res) => {
        // console.log(res.tempFilePath) 
        this.setData({
          shareTempFilePath: res.tempFilePath
        })
      }
    })
    // console.log(this.data.shareTempFilePath);
    this.setData({
      dialog: true,
      op: "none"
    })
    // console.log(this.data.dialog)
  },
  comeback:function(){
    wx.redirectTo({
      url: '../index/index',
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
  }
})