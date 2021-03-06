$(function() {

    // 音频元素
    var audio_1 = "";
    var audio_2 = "";
    var audio_3 = "";
	var audio_4 = "";
	function musicPlay(){
		audio_1 = document.createElement("audio");
		audio_1.src = "media/bgm.mp3";
		audio_1.loop = true;
		audio_1.load();
		$(".audio_wrap").append(audio_1);
		

		audio_2 = document.createElement("audio");
		audio_2.src = "media/duang.mp3";
		audio_2.load();
		$(".audio_wrap").append(audio_2);
		
		audio_3 = document.createElement("audio");
		audio_3.src = "media/boom.mp3";
		audio_3.load();
		$(".audio_wrap").append(audio_3);
		
		audio_4 = document.createElement("audio");
		audio_4.src = "media/heart.mp3";
		audio_4.loop = true;
		audio_4.load();
		$(".audio_wrap").append(audio_4);
		
	}
	
	musicPlay();

	
    function loading (imageUrls, callback, progress) {
        var loaded = 0;
        var count = imageUrls.length;

        loadImage(loaded);

        function loadImage(index) {
            if (index < count) {
                var img = new Image();
                img.onload = function() {
                    loaded++;
                    if (progress) { progress(Math.round(loaded/count*100)+'%'); }
                    loadImage(loaded);
                }
                img.onerror = function() {
                    loaded++;
                    if (progress) { progress(Math.round(loaded/count*100)+'%'); }
                    loadImage(loaded);
                }
                img.src = imageUrls[index];
            } else {
                callback();
            }
        }
    }
    var imageUrls = [
        'images/barrage-1.png',
        'images/barrage-2.png',
        'images/barrage-3.png',
        'images/barrage-4.png',
        'images/barrage-5.png',
        'images/barrage-6.png',
        'images/barrage-7.png',
        'images/barrage-8.png',
        'images/barrage-9.png',
        'images/barrage-10.png',
        'images/barrage-bird.png',
        'images/barrage-help.png',
        'images/barrage-card.png',
        'images/barrage-rocket.png',
        'images/box-1-sd.png',
        'images/box-1.png',
        'images/box-top-sd.png',
        'images/box-top.png',
        'images/card-bg.jpg',
        'images/get.png',
        'images/hand.png',
        'images/heart-w.png',
        'images/heart-r.png',
        'images/light.png',
        'images/on.png',
        'images/stop.png',
        'images/page-1-bg.jpg',
        'images/page-2-bg.jpg',
        'images/page2-icon.png',
        'images/prize-details.jpg',
        'images/prize.png',
        'images/qrcode.png',
        'images/ribbon-1.png',
        'images/ribbon-2.png',
        'images/ribbon-3.png',
        'images/ribbon-4.png',
        'images/ribbon-5.png',
        'images/ribbon-6.png',
        'images/ribbon-7.png',
        'images/ribbon-8.png',
        'images/ribbon-9.png',
        'images/ribbon-10.png',
        'images/ribbon-11.png',
        'images/ribbon-12.png',
        'images/ribbon-13.png',
        'images/ribbon-14.png',
        'images/ribbon-15.png',
        'images/ribbon-16.png',
        'images/ribbon-17.png',
        'images/ribbon-18.png',
        'images/ribbon-19.png',
        'images/ribbon-20.png',
        'images/ribbon-21.png',
        'images/ribbon-22.png',
        'images/ribbon-23.png',
        'images/ribbon-24.png',
        'images/ribbon-25.png',
        'images/ribbon-26.png',
        'images/ribbon-27.png',
        'images/ribbon-28.png',
        'images/ribbon-29.png',
        'images/ribbon-30.png',
        'images/ribbon-31.png',
        'images/ribbon-32.png',
        'images/ribbon-33.png',
        'images/ribbon-34.png',
        'images/share.png',
        'images/text-1.png',
        'images/text-2.png',
    ];
    

    loading(imageUrls, initGame, function(percent) {
        // console.log(percent);
        document.getElementById('percent').innerHTML = percent;
    });

    function initGame() {
        // 判断用户状态后显示
        document.getElementById('loading').style.display = 'none';
        pageStart('2');//1-已关注且首次点心，2-未关注，3-已关注且点心，提示助力成功？
    }
	var $barrageItem = $('.barrage-wrap .barrage-item'),
    	box1 = $('.box-1'),
		pageW=parseInt($('body').width()),
    	pageH=parseInt($('body').height()),
    	// $content = $('.content'),
    	page = 0,
    	canSwipe = false,
    	page2Init = true;





    // var myAudio = $('#musicfx').get(0),
    var	mcPlay = $('#mc_play');
   	new Hammer(document.getElementById('mc_play')).on('tap',function (ev) {
        if (mcPlay.hasClass('on')){
            audio_1.pause();
            mcPlay.attr('class','stop');
        }else{
            audio_1.play();
            mcPlay.attr('class','on');
        }
   	})
    // Hammer.js
 	delete Hammer.defaults.cssProps.userSelect;

    // 通过判断用户状态来显示不同的起始页
    var pageStart = function (type) {
    	// $('section').css('height',pageH);
    	console.log(type)
    	switch (type) {
    		case '1':
		    	// case1-已关注且首次点心
				// myAudio.src='media/heart.mp3';
				// $('#musicfx').attr('loop','loop');
	    		//myAudio.play();
            	audio_4.play();
		    	$('.popup-wrap,.popup-card').show();
		    	$('.popup-card').addClass('unbind');
		    	$('.popup-card a').css('display','block');
    			break;
    		case '2':
		    	// case2-未关注
		    	$('.popup-wrap,.popup-code').show();
		    	$('.popup-code').addClass('unbind');
    			break;
    		case '3':
		    	// case3-已关注且点心，提示助力成功？
		    	alert('助力成功');
		    	animationAll.page1();
    			break;
    		default:
		    	// 不传值-已关注且点心，提示助力成功？
		    	alert('助力成功');
		    	animationAll.page1();
    			break;
    	}




    }
    // 动画
   	var animationAll = {
    	page1: function() {
    		// 第一屏动画
    		// 盒子进来音效
			
			audio_2.play();
    		TweenMax.to(box1, 2, {bottom:90, opacity:1, ease: Elastic.easeOut,onComplete:function(e){
    			box1.addClass('shake');
    			// 打开盒子
			    new Hammer(document.getElementsByClassName('box-1')[0]).on('tap', function(ev) {
			    	$('.page-box-1').hide();
			    	$('.page-box-2').show();


			
					audio_3.play();
				    // 盒盖弹起动画
				    $('.box-top').addClass('shadow');
    				TweenMax.to($('.box-top'), 1, {rotation:2,x:300, y:-350, ease: Power4.easeOut});


    				// 彩带动画
    				TweenMax.to($('.ribbon-1'), 1.2, {opacity:1,scale:1, x:-60, y:-90, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-2'), 1.2, {opacity:1,scale:1, x:-50, y:-10, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-3'), 1.2, {opacity:1,scale:1, x:100, y:0, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-4'), 1.2, {opacity:1,scale:1, x:-170, y:-10, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-5'), 1.2, {opacity:1,scale:1, x:50, y:-60, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-6'), 1.2, {opacity:1,scale:1, x:140, y:-210, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-7'), 1.2, {opacity:1,scale:1, x:-125, y:-110, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-8'), 1.2, {opacity:1,scale:1, x:-160, y:10, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-9'), 1.2, {opacity:1,scale:1, x:-110, y:-320, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-10'), 1.2, {opacity:1,scale:1, x:80, y:-410, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-11'), 1.2, {opacity:1,scale:1, x:130, y:-300, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-12'), 1.2, {opacity:1,scale:1, x:220, y:-140, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-13'), 1.2, {opacity:1,scale:1, x:130, y:-130, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-14'), 1.2, {opacity:1,scale:1, x:130, y:-70, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-15'), 1.2, {opacity:1,scale:1, x:20, y:50, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-16'), 1.2, {opacity:1,scale:1, x:150, y:50, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-17'), 1.2, {opacity:1,scale:1, x:35, y:-110, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-18'), 1.2, {opacity:1,scale:1, x:270, y:20, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-19'), 1.2, {opacity:1,scale:1, x:95, y:30, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-20'), 1.2, {opacity:1,scale:1, x:-80, y:-40, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-21'), 1.2, {opacity:1,scale:1, x:-165, y:-70, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-22'), 1.2, {opacity:1,scale:1, x:-195, y:10, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-23'), 1.2, {opacity:1,scale:1, x:60, y:-110, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-24'), 1.2, {opacity:1,scale:1, x:240, y:-30, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-25'), 1.2, {opacity:1,scale:1, x:60, y:-35, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-26'), 1.2, {opacity:1,scale:1, x:-90, y:-140, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-27'), 1.2, {opacity:1,scale:1, x:-50, y:-210, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-28'), 1.2, {opacity:1,scale:1, x:-50, y:-80, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-29'), 1.2, {opacity:1,scale:1, x:-120, y:-20, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-30'), 1.2, {opacity:1,scale:1, x:-250, y:-20, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-31'), 1.2, {opacity:1,scale:1, x:-240, y:-130, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-32'), 1.2, {opacity:1,scale:1, x:-135, y:45, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-33'), 1.2, {opacity:1,scale:1, x:-20, y:10, ease: Power4.easeOut, delay:0.1});
					TweenMax.to($('.ribbon-34'), 1.2, {opacity:1,scale:1, x:40, y:10, ease: Power4.easeOut, delay:0.1,onComplete:function () {
						// myAudio.src='media/bgm.mp3';
						$('#musicControl').show().find('a').addClass('on');
						// $('#musicfx').attr('loop','loop');
			            // myAudio.play();
            			audio_1.play();
					}});





	    			// 文字标题出现动画
	    			// TweenMax.to($('.text-1'), 1, {opacity:1, delay:1});
	    			TweenMax.fromTo($('.text-1'), 1,{opacity:0, scale:0,top:500}, {opacity:1, scale:1, delay:1.2,top:0, ease: Elastic.easeOut});
	    			TweenMax.fromTo($('.text-2'), 1, {opacity:0, scale:0,top:500}, {opacity:1, scale:1, delay:1.3,top:0, ease: Elastic.easeOut,onComplete:function () {
	    				canSwipe = true;

	    				// 不手动话的话5秒后自动滑到第二页
	    				setTimeout(function () {
    						if(canSwipe&&page2Init){
	    						page++;

						        $('.section-2').css({
						        	'z-index': '3',
						        	opacity: '0'
						        });
	        					canSwipe = false;
						        TweenMax.to($('.section-2'), 1, {opacity:1,onComplete:function () {
							       	$('.section-1').css({
							       		'z-index': '1'
							       	});
							        $('.section-2').css({
							        	'z-index': '2'
							        });
		        					canSwipe = true;
						       		animationAll.page2();
						        }});
			    			}
	    				},2500);
	    			}});
			    });
			    
    		}});
    		TweenMax.to($('.box-1-sd'), 1.5, {display:'block'});

    	},
    	page2: function() {

    		canSwipe = false;
    		page2Init = false;
    		// return;
		 	TweenMax.to($barrageItem.eq(0), 3, {left:-580, ease: Power0.easeNone});
			TweenMax.to($barrageItem.eq(1), 4, {left:-804, ease: Power0.easeNone, delay:1});
			TweenMax.to($barrageItem.eq(2), 3, {left:-570, ease: Power0.easeNone, delay:1.5});
			TweenMax.to($barrageItem.eq(3), 5, {left:-1300, ease: Power0.easeNone});
			TweenMax.to($barrageItem.eq(4), 5, {left:-1041, ease: Power0.easeNone, delay:0.5});
			TweenMax.to($barrageItem.eq(5), 4, {left:-696, ease: Power0.easeNone, delay:1});
			TweenMax.to($barrageItem.eq(6), 3, {left:-548, ease: Power0.easeNone, delay:1.5});
			TweenMax.to($barrageItem.eq(7), 2, {left:-111, ease: Power0.easeNone, delay:2});
			TweenMax.to($barrageItem.eq(8), 5, {left:-1524, ease: Power0.easeNone, delay:0.5});
			TweenMax.to($barrageItem.eq(9), 3, {left:-309, ease: Power0.easeNone, delay:1});

			// 火箭和乌鸦
		 	TweenMax.to($('.barrage-rocket'), 4, {left:-627, delay:1, ease: Power0.easeNone});
		 	TweenMax.to($('.barrage-bird'), 4, {left:-170, delay:1, ease: Power0.easeNone});

		 	TweenMax.to($('.barrage-card'), 3, {left:'50%', delay:3.5, ease: Power0.easeNone, onComplete:function () {
	 			$('.barrage-card').addClass('shadow');
		 	}});
		 	TweenMax.to($('.barrage-help'), 3, {left:'50%', delay:3.5, ease: Power0.easeNone, onComplete:function () {
		 			$('.barrage-help').addClass('shadow');

				 	// 手型按钮
				 	TweenMax.to($('.hand'), 1, {opacity:1,onComplete:function () {
				 		$('.hand').addClass('show');
				 	}});
			 		// 引导分享
					new Hammer(document.getElementsByClassName('barrage-help')[0]).on('tap', function(ev) {
						showPopup('popup-share');
					});
		 			// 礼物框隐藏
				 	TweenMax.to($('.page2-icon'), 1, {opacity:0});
				 	// 规则按钮
				 	// TweenMax.to($('.active-prize'), 1, {opacity:1});
				 	TweenMax.to($('.active-prize'), 1, {opacity:1,onComplete:function () {
				 		// 查看我的心愿卡
						new Hammer(document.getElementsByClassName('barrage-card')[0]).on('tap', function(ev) {
							// ajax请求后台数据判断当前几颗心
							// $.ajax({
							// 	url: '/path/to/file',
							// 	type: 'default GET (Other values: POST)',
							// 	dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
							// 	data: {param1: 'value1'},
							// 	success:function () {
							// 		// 请求成功显示心的数量和弹层
							// 		// $('.heart-wrap').addclass('total-1');  total-1 total-2 total-3
									showPopup('popup-card');
							// 	}
							// });
							


						});
				 	}});

			 		// 奖品规则弹层
					new Hammer(document.getElementsByClassName('active-prize')[0]).on('tap', function(ev) {
						showPopup('popup-prize');
					});

				 	canSwipe = true;
				 	
		 	}});
		 	
	    }
    };
    var hammerElement = new Hammer(document.getElementById('wrapper'));
    hammerElement.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
    hammerElement.on('swipeup', function(ev) {
    	if(canSwipe){
    		page++;
	        if(page<2){
		        $('.section-2').css({
		        	'z-index': '3',
		        	opacity: '0'
		        });
		        canSwipe = false;
		        TweenMax.to($('.section-2'), 1, {opacity:1,onComplete:function () {
			       	$('.section-1').css({
			       		'z-index': '1'
			       	});
			        $('.section-2').css({
			        	'z-index': '2'
			        });
		        	canSwipe = true;
			       	if(page2Init){
			       		animationAll.page2();
			       	}
		        }});
		       	
	        }else{
	        	page = 1;
	        }
    	}
	    	
    	console.log(page);
        console.log(ev.type);
    });
    hammerElement.on('swipedown', function(ev) {
    	if(canSwipe){
	    	page--;
	        if(page>-1){
		        $('.section-1').css({
		        	'z-index': '3',
		        	opacity: '0'
		        });
		        canSwipe = false;
		        TweenMax.to($('.section-1'), 1, {opacity:1,onComplete:function () {
			       	$('.section-2').css({
			       		'z-index': '1'
			       	});
			        $('.section-1').css({
			        	'z-index': '2'
			        });
		        	canSwipe = true;
		        }});
	        }else{
	        	page = 0;
	        }
	    }    
    	console.log(page);
        console.log(ev.type);
    });
   	
    // 弹层关闭
    var popups = document.getElementsByClassName('popup');

  	for(var i = 0; i < popups.length; i++) {
        var hammerPopup = new Hammer(popups[i]);
        hammerPopup.on('tap',function(ev) {
			var elem = $(ev.target);
			if(elem.hasClass('popup')&&!elem.hasClass('unbind')){
				$('.popup-wrap').fadeOut(function() {
					$('.popup').hide().css('z-index', '1');
				});
			}
        }.bind(popups[i]));
   	}


	// 弹层显示
	/**
	 * 显示弹层方法
	 * @param  {string} className 需要显示的弹层类名
	 * @return {[type]}           [description]
	 */
	function showPopup(className) {
		var allPopup = $('.popup'),
			zIndex = 1;
	  	for(var i = 0; i < allPopup.length; i++) {
	  		var currentIndex = $(allPopup[i]).css('z-index');
			if(currentIndex > zIndex){
				zIndex = currentIndex;
			}
	  	}
		$('.'+ className +'').show().css('z-index', zIndex+1);;
		$('.popup-wrap').fadeIn();
	}
	



	// 帮好友点亮心愿
	new Hammer(document.getElementsByClassName('light')[0]).on('tap', function(ev) {
		// $.ajax({
		// 	url: '/path/to/file',
		// 	type: 'default GET (Other values: POST)',
		// 	dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
		// 	data: {param1: 'value1'},
		// 	success:function (argument) {
				
		// 	}
		// });
		
	});
	// 领取奖品-参与活动
	new Hammer(document.getElementsByClassName('get')[0]).on('tap', function(ev) {
		// $.ajax({
		// 	url: '/path/to/file',
		// 	type: 'default GET (Other values: POST)',
		// 	dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
		// 	data: {param1: 'value1'},
		// 	success:function (argument) {
				
				$('.popup-wrap').fadeOut(function() {
					// 心愿卡音乐停止
            		audio_4.pause();
					$('.popup').hide().css('z-index', '1').removeClass('unbind');
    				$('.popup-card a').css('display','none');
					animationAll.page1();
				});
		// 	}
		// });
		

	});
});