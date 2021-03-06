$(function(){
    initWin10Height();
    initMove()
    initLeftMenuIcon()
    //initArchiveType()
    $('.more').click(function(){
        $('.breadcrumbs').toggle(500)
        $('.container-left').toggle(500)
        setTimeout(() => {
            initWin10Height();
        }, 510);
       
    })
});
$(window).resize(function (){
    initWin10Height();
});
function initLeftMenuIcon(){
    $('.category-level-0').prepend('<img class="left-icon" src="'+iconcategory1+'" />')
    $('.category-child').prepend('<img class="left-icon" src="'+iconcategory2+'" />')
}
function initArchiveType(){
    var typeHtml=$('.archive-title .table-head-type a').eq(1).html();
    $('.archive-title .table-head-type').html(typeHtml)
}
function initWin10Height(){
    var mainH=$('#win10').height();
    var hearderH=$('#header').height();
    var footerH=$('#footer').height();
    $('#body').css('height',(mainH-hearderH-footerH)+'px');
    $('.container-left').css('height',(mainH-hearderH-footerH-40)+'px');
    $('.container-right').css('height',(mainH-hearderH-footerH)+'px');
}
function initMove(){
    var dv = document.getElementById('win10top');
    var win10 = document.getElementById('win10');
    var x = 0;
    var y = 0;
    var l = 0;
    var t = 0;
    var isDown = false;
    //鼠标按下事件
    dv.onmousedown = function(e) {
        //获取x坐标和y坐标
        x = e.clientX;
        y = e.clientY;
    
        //获取左部和顶部的偏移量
        l = win10.offsetLeft;
        t = win10.offsetTop;
        //开关打开
        isDown = true;
        //设置样式  
        dv.style.cursor = 'move';
    }
    //鼠标移动
    window.onmousemove = function(e) {
        if (isDown == false) {
            return;
        }
        //获取x和y
        var nx = e.clientX;
        var ny = e.clientY;
        //计算移动后的左偏移量和顶部的偏移量
        var nl = nx - (x - l);
        var nt = ny - (y - t);
    
        win10.style.left = nl + 'px';
        win10.style.top = nt + 'px';
    }
    //鼠标抬起事件
    dv.onmouseup = function() {
        //开关关闭
        isDown = false;
        dv.style.cursor = 'default';
    }
}