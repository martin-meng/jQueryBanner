// $(p1).on('click',function() {
//   $(images).css({
//     'margin-left':0
//   })
// })

// $(p2).on('click', function() {
//   $(images).css({
//     'margin-left': '-658px'
//   })
// })

// $(p3).on('click', function() {
//   $(images).css({
//     'margin-left': '-1316px'
//   })
// })

//拿到所有按钮
var allButtons = $('#buttons > button')

//给拿到的按钮做监听事件
for (let i = 0; i < allButtons.length; i++) {
  $(allButtons[i]).on('click', function (x) {
    //点击按钮的时候加样式
    var index = $(x.currentTarget).index()
    var p = index * -658
    $('#images').css({
      transform: 'translate(' + p + 'px)'
    })
    n = index
    //激活样式
    activeButton(allButtons.eq(n))
  })
}

// 监听之后要做一个自动播放的功能
/* 首先获取当前是第0个，一共有size个
 * 
 */
var n = 0
var size = allButtons.length

// 播放第个
playSlide(n % size)

// 设置闹钟 (每三秒钟)
var timeId = setTime()

function setTime() {
  return setInterval(() => {
    n += 1
    playSlide(n % size)
  }, 3000)
}

function playSlide(index) {
  allButtons.eq(index).trigger('click')
}

function activeButton($button){
  $button
    .addClass('red')
    .siblings('.red').removeClass('red')

}


//鼠标移入Banner图片窗口内 则闹钟清除
$('.window').on('mouseenter', function() {
  window.clearInterval(timeId)
})

//鼠标移出 则功能复活
$('.window').on('mouseleave', function () {
  var timeId = setTime()
})
