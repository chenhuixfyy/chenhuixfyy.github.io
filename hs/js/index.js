$(function () {

	// 首页banner
    var swiperBanner = new Swiper('.banner-container', {
        pagination: '.banner-pagination',
        paginationClickable: true,
        autoplay: 5000,
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
    var tabsSwiper = new Swiper('.tabs-container',{
	    onlyExternal : true,
	    speed:0
	})
	$(".tabs a").on('touchstart mousedown',function(e){
	    e.preventDefault()
	    $(".tabs .active").removeClass('active')
	    $(this).addClass('active')
	    tabsSwiper.swipeTo( $(this).index() )
	})
	$(".tabs a").click(function(e){
	    e.preventDefault()
	})



























})