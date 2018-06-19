// 第一页按钮切换
$(".checkbox1").change(function() {
    if ($(".checkbox1").is(":checked")) {
        $('.submit').attr("disabled", false);
        $('.submit').css('background', '#007aff')
    } else {
        $('.submit').attr("disabled", true);
        $('.submit').css('background', '#999')

    }
});
$('.first .commit input').click(function() {
        $(".first").hide();
        $(".second").show();
    })
    // 电话号码
var num = 1;
next()
var max = Math.ceil(data.length / 18);
// 号码点击事件

$('.next').click(function() {
        num++;
        // 判断超出界限
        if (num > max) {
            alert("没有更多数据了")
            return;
        }
        next();
    })
    // 获取数据
function next() {
    var html = ' ';
    data.forEach(function(element, i) {
        if (i >= (num - 1) * 18 && i < num * 18) {
            html += " <li>" + element + "</li>"

        }
    }, this);
    $('.number .box').html(html);
    $('.box li').click(function() {
        $(".result-num").text($(this).html())

        $(this).css("background", "#4da7ee").siblings("li").css("background", "#fff")
    })
}
$('.second .commit input').click(function() {
    console.log($(".result-num").text())
    if ($(".result-num").text() == '') {
        alert('您未选择号码');
        return false;
    }
    $(".second").hide();
    $(".third").show();

})
document.getElementById("confirmBtn").addEventListener('tap', function() {
    // var btnArray = ['否', '是'];
    mui.confirm('是否确认提交？', function(e) {
        if (e.index == 1) {
            // console.log('是')
            alert('您已确认')
        } else {
            console.log('否');
        }
    })
});