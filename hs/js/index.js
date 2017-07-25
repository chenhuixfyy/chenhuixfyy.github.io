$(function () {

	// 首页banner
    var swiperBanner = new Swiper('.banner-container', {
        pagination: '.banner-pagination',
        paginationClickable: true,
        autoplay: 5000,
        calculateHeight : true,
        loop: true
    });
	// 内容banner
    var swiperContent = new Swiper('.content-container', {
        pagination: '.content-pagination',
        paginationClickable: true,
        autoplay: 3000,
        loop: true
    });

    // tab
 	// var tabsSwiper = new Swiper('.tabs-container',{
	//     onlyExternal : true,
	//     speed:0
	// })
	// $(".tabs a").on('touchstart mousedown',function(e){
	//     e.preventDefault()
	//     $(".tabs .active").removeClass('active')
	//     $(this).addClass('active')
	//     tabsSwiper.swipeTo( $(this).index() )
	// })
	// $(".tabs a").click(function(e){
	//     e.preventDefault()
	// })


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


	// 导航
	var $navLi = $('.nav-wrap li');
	$navLi.hover(function() {
		$(this).find('.nav-item').show();
	}, function() {
		$(this).find('.nav-item').hide();
	});
	// 搜索
	var $search = $('#search');
	$search.click(function(e) {
		$('.dropdown-wrap').toggle()
	});



















})