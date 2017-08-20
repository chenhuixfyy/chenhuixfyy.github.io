function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); 
    var url = decodeURI(window.location.search); 
    var r = url.substr(1).match(reg);
    if (r != null) return unescape(r[2]); 
    return null;
}
$(function () {

	// 首屏banner
    var swiperBanner = new Swiper('.banner-container', {
        pagination: '.banner-pagination',
        paginationClickable: true,
        autoplay: 5000,
        calculateHeight : true,
        loop: true
    });


	$('.tabs-module').each(function () {
		var _this = $(this),
			$li = _this.find('.tabs-list li'),
			$con = _this.find('.tabs-container .tabs-item');
		$li.eq(0).addClass('active');
		$con.eq(0).show();
		$li.on('click', function (e) {
			var index = $li.index($(this));
			$li.removeClass('active').eq(index).addClass('active');
			$con.hide().eq(index).show();
		})
		$li.mousemove(function(e) {
			var index = $li.index($(this));
			$li.removeClass('active').eq(index).addClass('active');
			$con.hide().eq(index).show();
		});
	})


	// pc导航 pc-nav-wrap
	var $navLi = $('.nav-wrap li');
	$navLi.hover(function() {
		$(this).find('.nav-item').show();
	}, function() {
		$(this).find('.nav-item').hide();
	});
	// 搜索
	var $search = $('#search');
	$search.click(function(e) {
		$('.dropdown-wrap').stop().toggle()
	});


	// 移动端导航展开
	$('.navbtn').click(function(event) {
		$('.nav-wrap').stop().slideToggle()
	});
	// var $mNavLi = $('.nav-wrap li');
	$navLi.click(function(event) {
		$(this).siblings('li').find('.nav-item').stop().slideUp();
		$(this).find('.nav-item').stop().slideToggle();
	});


	// 内页加载更多
	var $moreDetail = $('.detail-item .show-more');
	$moreDetail.each(function() {
		var _this = $(this);
		_this.click(function(event) {
			event.preventDefault();
			_this.siblings('.cut-div').css('height', 'auto');
			_this.remove();
		});
	});

	// 默认进来显示那个tab
	if(getUrlParam('current')&&getUrlParam('current').length > 0){
		var index = Number(getUrlParam('current'));
		$('.tabs-module').find('.tabs-list li').removeClass('active').eq(index).addClass('active');
		$('.tabs-module').find('.tabs-container .tabs-item').hide().eq(index).show();
	}








})