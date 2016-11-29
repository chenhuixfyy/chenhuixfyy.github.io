// $(function() {
	var $barrageItem = $('.barrage-wrap .barrage-item'),
    	box1 = $('.box-1'),
		pageW=parseInt($('body').width()),
    	pageH=parseInt($('body').height()),
    	// $content = $('.content'),
    	page = 0,
    	canSwipe = false,
    	page2Init = true;
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
    pageStart = function (type) {
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
			// myAudio.src='media/duang.mp3';
    		//myAudio.play();

   			//var startAudio = new Audio();
			// startAudio.src = 'media/duang.mp3';
			// startAudio.autoplay = true;
			// startAudio.play();
			
			audio_2.play();
			// TweenMax.to(box1, 1,{bezier:[{left:'50%', bottom:500}, {left:'50%', bottom:90}], ease:Power4.easeIn});
			// return false;
    		TweenMax.to(box1, 2, {bottom:90, opacity:1, ease: Elastic.easeOut,onComplete:function(e){
    			box1.addClass('shake');
    			// 打开盒子
			    new Hammer(document.getElementsByClassName('box-1')[0]).on('tap', function(ev) {
			    	$('.page-box-1').hide();
			    	$('.page-box-2').show();
				    // 打开盒子音效Boom音效
					// myAudio.src='media/boom.mp3';
		   			// myAudio.play();

		    		//var boxAudio = new Audio();
					// boxAudio.src = 'media/boom.mp3';
					// boxAudio.autoplay = true;
					// boxAudio.play();


			
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
						        TweenMax.to($('.section-2'), 1, {opacity:1,onComplete:function () {
							       	$('.section-1').css({
							       		'z-index': '1'
							       	});
							        $('.section-2').css({
							        	'z-index': '2'
							        });
						       		animationAll.page2();
						        }});
			    			}
	    				},5000);
	    			}});
			    });
			    
    		}});
    		TweenMax.to($('.box-1-sd'), 1.5, {display:'block'});

    	},
    	page2: function() {

    		canSwipe = false;
    		page2Init = false;
		 	TweenMax.to($barrageItem.eq(0), 10, {left:-580, yoyo:false, repeat:1, ease: Power0.easeNone});
			TweenMax.to($barrageItem.eq(1), 8, {left:-650, yoyo:false, repeat:1, ease: Power0.easeNone, delay:3});
			TweenMax.to($barrageItem.eq(2), 12, {left:-570, yoyo:false, repeat:1, ease: Power0.easeNone, delay:1});
			TweenMax.to($barrageItem.eq(3), 8, {left:-1300, yoyo:false, repeat:1, ease: Power0.easeNone, delay:3});
			TweenMax.to($barrageItem.eq(4), 10, {left:-2081, yoyo:false, repeat:1, ease: Power0.easeNone, delay:4});
			TweenMax.to($barrageItem.eq(5), 12, {left:-696, yoyo:false, repeat:1, ease: Power0.easeNone, delay:0.5});
			TweenMax.to($barrageItem.eq(6), 8, {left:-548, yoyo:false, repeat:1, ease: Power0.easeNone, delay:1});
			TweenMax.to($barrageItem.eq(7), 8, {left:-111, yoyo:false, repeat:1, ease: Power0.easeNone, delay:1});
			TweenMax.to($barrageItem.eq(8), 10, {left:-1524, yoyo:false, repeat:1, ease: Power0.easeNone, delay:1.5});
			TweenMax.to($barrageItem.eq(9), 6, {left:-309, yoyo:false, repeat:1, ease: Power0.easeNone, delay:4});

			// 火箭和乌鸦
		 	TweenMax.to($('.barrage-rocket'), 10, {left:-627, delay:3,onComplete:function () {
		 		TweenMax.fromTo($('.barrage-rocket'), 10, {top:740,left:'100%'}, {left:-627, delay:3});
		 	}});
		 	TweenMax.to($('.barrage-bird'), 10, {left:-170, delay:2,onComplete:function () {
		 		TweenMax.fromTo($('.barrage-bird'), 10, {top:100,left:'100%'}, {left:-170, delay:2});
		 	}});
			// 第二轮出现
		 	TweenMax.to($('.barrage-card'), 3, {left:'50%', delay:18,onComplete:function () {
	 			$('.barrage-card').addClass('shadow');
		 	}});
		 	TweenMax.to($('.barrage-help'), 3, {left:'50%', delay:18,onComplete:function () {
		 			$('.barrage-help').addClass('shadow');
			 		// 引导分享
					new Hammer(document.getElementsByClassName('barrage-help')[0]).on('tap', function(ev) {
						showPopup('popup-share');
					});
		 			// 礼物框隐藏
				 	TweenMax.to($('.page2-icon'), 1, {opacity:0});
				 	// 规则按钮
				 	TweenMax.to($('.active-prize'), 1, {opacity:1});

				 	canSwipe = true;
			 		// 奖品规则弹层
					new Hammer(document.getElementsByClassName('active-prize')[0]).on('tap', function(ev) {
						showPopup('popup-prize');
					});
					    
				 	// 手型按钮
				 	TweenMax.to($('.hand'), 1, {opacity:1,onComplete:function () {
				 		$('.hand').addClass('show');
				 	}});
				 	// 查看我的心愿卡
				 	TweenMax.to($('.active-prize'), 1, {opacity:1,onComplete:function () {
				 		// 心愿卡弹层
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
							// 		// showPopup('popup-card');
							// 	}
							// });
							




							showPopup('popup-card');
						});
				 	}});
				 	
		 	}});
		 	// 参与活动按钮
		 	
	    }
    };
    // setTimeout(function(){

	    // animationAll.page1();
	    // animationAll.page2();
	// },1000);
	    // $content.css({
	    // 	'-webkit-transition':'-webkit-transform 1s ease-in-out',
	    //     'transition':'transform 1s ease-in-out',
	    //     '-webkit-transform' : 'translate3d(0, -'+ 1*pageH +'px, 0)',
	    //     'transform' : 'translate3d(0, -'+ 1*pageH +'px, 0)'
	    // });
    

	

 
    // hammerElement.get('pinch').set({
    //     enable: true
    // });
    // hammerElement.get('rotate').set({
    //     enable: true
    // });
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
		        TweenMax.to($('.section-2'), 1, {opacity:1,onComplete:function () {
			       	$('.section-1').css({
			       		'z-index': '1'
			       	});
			        $('.section-2').css({
			        	'z-index': '2'
			        });
			       	if(page2Init){
			       		animationAll.page2();
			       	}
		        }});
		       	// $('.section',$content).removeClass('page-active').eq(page).addClass('page-active');
		       	
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
		        TweenMax.to($('.section-1'), 1, {opacity:1,onComplete:function () {
			       	$('.section-2').css({
			       		'z-index': '1'
			       	});
			        $('.section-1').css({
			        	'z-index': '2'
			        });
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
			// console.log(elem);
			if(elem.hasClass('popup')&&!elem.hasClass('unbind')){
				$('.popup-wrap').fadeOut(function() {
					// elem.hide();
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
	// 弹层隐藏
	/**
	 * 显示弹层方法
	 * @param  {string} className 需要隐藏的弹层类名
	 * @return {[type]}           [description]
	 */
	// function hidePopup(className) {
	// 	$('.popup-wrap').fadeOut(function() {
	// 		$('.'+ className +'').hide();
	// 	});
	// }
	



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
            		// myAudio.pause();
            		audio_4.pause();
					$('.popup').hide().css('z-index', '1').removeClass('unbind');
    				$('.popup-card a').css('display','none');
					animationAll.page1();
				});
		// 	}
		// });
		

	});

// });