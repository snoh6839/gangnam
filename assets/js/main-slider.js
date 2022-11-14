

//메인 배너 슬라이드
$(function () {
	var $mainSlide = $('.main_slide_area'),
	$mainSlideList = $('.main_slide_area .main-slider'),
	$mainSlideCurrent = $mainSlide.find('.slider-current'),
	$mainSlideTotal = $mainSlide.find('.slider-total'),
	$mainSlideAuto = $mainSlide.find('.slider-auto'),
	$mainSlidePrev = $mainSlide.find('.slider-prev'),
	$mainSlideNext = $mainSlide.find('.slider-next');

	var time1 = 5;
	var $bar1,
	$slick1,
	isPause1,
	tick1,
	percentTime1;
	$bar1 = $('.main_slide_area .slider-control .progress_bar .bar');

	$mainSlideList.slick({
		slidesToShow: 1,
		current     : $mainSlideCurrent,
		total       : $mainSlideTotal,
		prevArrow   : $mainSlidePrev,
		nextArrow   : $mainSlideNext,
	});

	$mainSlideAuto.on('click', function () {
		if ($(this).hasClass('slick-play')) {
			isPause1 = false;
			$(this).removeClass('slick-play');
			$(this).text('정지');
		} else {
			isPause1 = true;
			$(this).addClass('slick-play');
			$(this).text('재생');
		}
	});

	$mainSlideTotal.text($mainSlideList.find('.slick-slide:not(.slick-cloned)').length);
	$mainSlideList.on('beforeChange', function(event, slick, currentSlide, nextSlide){
		var i= nextSlide+1;
		$mainSlideCurrent.text(i);
	});
	// 팝업 멈추려면 여기부터 주석처리
	function startProgressbar() {
		resetProgressbar();
		percentTime1 = 0;
		isPause1 = false;
		tick1 = setInterval(interval, 10);
	}

	function interval() {
		if (isPause1 === false) {
			percentTime1 += 1 / (time1 + 0.1);
			$bar1.css({
				width: percentTime1 + "%"
			});
			if (percentTime1 >= 100) {
				$mainSlideList.slick('slickNext');
				startProgressbar();
			}
		}
	}

	function resetProgressbar() {
		$bar1.css({
			width: 0 + '%'
		});
		clearTimeout(tick1);
	}
	startProgressbar();

	$mainSlideList.on('beforeChange', function (event, currentSlide, nextSlide) {
		if(!$('.slider-auto').hasClass('slick-play')){
			startProgressbar();
		}
	});

	//비상시 배너 닫기
	$('.emerg_banner .btnEmerClose').click(function(){
		$('.emerg_banner').hide();
	});
})
// 메인 배너 슬라이드 end

$(function () {
// 주요서비스 바로가기
	var $serviceArea = $('.main_service_area'),
			$serviceSlide = $('.main_service_area .service_slider'),
			$serviceSlideMo = $('.main_service_area .service_slider_m'),
			$serviceSlideCurrent = $serviceArea.find('.slider-current'),
			$serviceSlideTotal = $serviceArea.find('.slider-total'),
			$serviceSlidePrev = $serviceArea.find('.prev'),
			$serviceSlideNext = $serviceArea.find('.next');

	$serviceSlide.slick({
		slidesToShow: 9,
		slidesToScroll: 9,
		prevArrow   : $serviceSlidePrev,
		nextArrow   : $serviceSlideNext,
		responsive: [
			{
				breakpoint: 1240,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 6,
				}
			},
		]
	});
	$serviceSlideMo.slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		prevArrow   : $serviceSlidePrev,
		nextArrow   : $serviceSlideNext,
		responsive: [
		{
			breakpoint: 350,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		},
		]
	});
})
// 주요서비스 바로가기 end

//메인 공지사항 탭&슬라이드
$(function(){
	//옵션
	function swSliderOption(){
	  return {
		infinite: true,
	    slidesToShow: 4,
	    slidesToScroll: 4,
	    //autoplay: true,
	    autoplaySpeed:5000,
	    prevArrow   : $sliders.closest(".notice-cont").find(".prev"),
	    nextArrow   : $sliders.closest(".notice-cont").find(".next"),
	    pauseOnHover: true, //pause 추가
			responsive: [
				{
					breakpoint: 1240,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 4,
					}
				}
			]
	  }
	}
	function swSliderOptionM(){
	  return {
			rows: 2,
	    slidesToShow: 2,
	    slidesToScroll: 2,
	    //autoplay: true,
	    autoplaySpeed:5000,
	    prevArrow   : $sliders_m.closest(".notice-cont").find(".prev"),
	    nextArrow   : $sliders_m.closest(".notice-cont").find(".next"),
	    pauseOnHover: true, //pause 추가
			responsive: [
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				}
			]
	  }
	}

	function swSliderOptionM2(){
		return {
			rows: 2,
			slidesToShow: 2,
			slidesToScroll: 2,
			//autoplay: true,
			autoplaySpeed:5000,
			prevArrow   : $sliders_m.closest(".notice-cont2").find(".prev"),
			nextArrow   : $sliders_m.closest(".notice-cont2").find(".next"),
			pauseOnHover: true, //pause 추가
			responsive: [
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				}
				]
		}
	}

	//활성화 된 notice-cont에 active 추가
	$('.notice-cont').each(function() {
	    if ($(this).is(':visible')){
	      $(this).addClass("active");
	    }
	});

	//활성화 된 notice-cont에 active 추가
	$('.notice-cont2').each(function() {
		if ($(this).is(':visible')){
			$(this).addClass("active");
		}
	});

	//활성화된 notice-cont에 슬라이드
	var $sliders = $(".active .notice-slider");
	$sliders.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
	   var i = (currentSlide ? currentSlide : 0) + 1;
	   $(this).closest(".notice-cont").find(".slider-current").text(i);
	   $(this).closest(".notice-cont").find(".slider-total").text(slick.slideCount);
	});
	$sliders.slick(swSliderOption());

	var $sliders_m = $(".active .notice-slider_m");
	$sliders_m.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
	   var i = (currentSlide ? currentSlide : 0) + 1;
	   $(this).closest(".notice-cont").find(".slider-current").text(i);
	   $(this).closest(".notice-cont").find(".slider-total").text(slick.slideCount);
	});
	$sliders_m.slick(swSliderOptionM());

	var $sliders_m2 = $(".active .notice-slider_m2");
	$sliders_m2.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		var i = (currentSlide ? currentSlide : 0) + 1;
		$(this).closest(".notice-cont2").find(".slider-current").text(i);
		$(this).closest(".notice-cont2").find(".slider-total").text(slick.slideCount);
	});
	$sliders_m2.slick(swSliderOptionM2());

	//progress
	var time = 5;
	var $slick,
	    isPause,
	    tick,
	    percentTime;

	$bar = $sliders.closest(".notice-cont").find('.bar');
	$bar_m = $sliders_m.closest(".notice-cont").find('.bar');
	$bar_m2 = $sliders_m.closest(".notice-cont2").find('.bar');

	//mouseover 일시정지
	$sliders.on({
	  mouseenter: function() {
	    isPause = true;
	  },
	  mouseleave: function() {
	    isPause = false;
	  }
	})
	$sliders_m.on({
	  mouseenter: function() {
	    isPause = true;
	  },
	  mouseleave: function() {
	    isPause = false;
	  }
	})
	$sliders_m2.on({
		mouseenter: function() {
			isPause = true;
		},
		mouseleave: function() {
			isPause = false;
		}
	})

	function startProgressbar() {
	  resetProgressbar();
	  percentTime = 0;
	  isPause = false;
	  tick = setInterval(interval, 10);
	}

	function interval() {
	  if (isPause === false) {
	    percentTime += 1 / (time + 0.1);
	    $bar.css({
	      width: percentTime + "%"
	    });
	    $bar_m.css({
	      width: percentTime + "%"
	    });
	    if (percentTime >= 100) {
	      $sliders.slick('slickNext');
	      $sliders_m.slick('slickNext');
	      startProgressbar();
	    }
	  }
	}

	function resetProgressbar() {
	  $bar.css({
	    width: 0 + '%'
	  });
	  $bar_m.css({
	    width: 0 + '%'
	  });
	  clearTimeout(tick);
	}
	startProgressbar();


	$(".main_notice_area #tabs").tabs({
		beforeActivate: function(event, ui) {
			$(".active .notice-slider").slick("unslick");
			$(".active .notice-slider_m").slick("unslick");
		},
		activate: function( event, ui ){
			var activeTab = $(".main_notice_area #tabs").tabs('option', 'active');
			$(".notice-cont").removeClass("active");
			$("#notice-" + (activeTab+1)).addClass("active");
			$("#notice-" + (activeTab+1)).find(".notice-slider").slick(swSliderOption());
			$("#notice-" + (activeTab+1)).find(".notice-slider_m").slick(swSliderOptionM());
			startProgressbar();
		}
	});
	$('.main_notice_area > #tabs > .notice-title > li:eq(1) > a').trigger('click');
	$('.main_notice_area > #tabs > .notice-title > li:eq(0) > a').trigger('click');

	$(".main_notice_area2 #tabs").tabs({
		beforeActivate: function(event, ui) {
			$(".active .notice-slider_m2").slick("unslick");
		},
		activate: function( event, ui ){
			var activeTab = $(".main_notice_area2 #tabs").tabs('option', 'active');
			$(".notice-cont2").removeClass("active");
			$("#notice2-" + (activeTab+1)).addClass("active");
			$("#notice2-" + (activeTab+1)).find(".notice-slider_m2").slick(swSliderOptionM());

			startProgressbar();
		}
	});
	$('.main_notice_area2 > #tabs > .notice-title > li:eq(1) > a').trigger('click');
	$('.main_notice_area2 > #tabs > .notice-title > li:eq(0) > a').trigger('click');

	$('.comp-taps').tabs();
})
//메인 공지사항 탭&슬라이드 end

// 알림판 슬라이드
$(function () {
	var $alimpanArea = $('.alimpan_slider_area'),
	$alimpanSlider = $('.alimpan_slider_area .alimpan-slider'),
	$alimpanSliderMo = $('.alimpan_slider_area .alimpan-slider_m'),
	$alimpanCurrent = $alimpanArea.find('.slider-current'),
	$alimpanTotal_pc = $alimpanArea.find('.slider-total'),
	$alimpanTotal = $('.alimpanMobile .slider-total'),
	$alimpanAuto = $alimpanArea.find('.slider-auto'),
	$alimpanPrev = $alimpanArea.find('.slider-prev'),
	$alimpanNext = $alimpanArea.find('.slider-next');

	var time2 = 5;
	var $bar2,
	$slick2,
	isPause2,
	tick2,
	percentTime2;
	$bar2 = $('.alimpan_slider_area .slider-control .progress_bar .bar');

	$alimpanSlider.slick({
		slidesToShow: 1,
		current     : $alimpanCurrent,
		total       : $alimpanTotal,
		prevArrow   : $alimpanPrev,
		nextArrow   : $alimpanNext,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			}
		]
	});
	$alimpanSliderMo.slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		current     : $alimpanCurrent,
		total       : $alimpanTotal,
		prevArrow   : $alimpanPrev,
		nextArrow   : $alimpanNext,
		responsive: [
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	});

	$alimpanAuto.on('click', function () {
		if ($(this).hasClass('slick-play')) {
			isPause2 = false;
			$(this).removeClass('slick-play');
			$(this).text('정지');
		} else {
			isPause2 = true;
			$(this).addClass('slick-play');
			$(this).text('재생');
		}
	});

	$alimpanTotal_pc.text($alimpanSlider.find('.slick-slide:not(.slick-cloned)').length);
	$alimpanSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
		var i= nextSlide+1;
		$alimpanCurrent.text(i);
	});
	$alimpanTotal.text($alimpanSliderMo.find('.slick-slide:not(.slick-cloned)').length);
	$alimpanSliderMo.on('beforeChange', function(event, slick, currentSlide, nextSlide){
		var i= nextSlide+1;
		$alimpanCurrent.text(i);
	});
	// 팝업 멈추려면 여기부터 주석처리
	function startProgressbar() {
		resetProgressbar();
		percentTime2 = 0;
		isPause2 = false;
		tick2 = setInterval(interval, 10);
	}

	function interval() {
		if (isPause2 === false) {
			percentTime2 += 1 / (time2 + 0.1);
			$bar2.css({
				width: percentTime2 + "%"
			});
			if (percentTime2 >= 100) {
				$alimpanSlider.slick('slickNext');
				$alimpanSliderMo.slick('slickNext');
				startProgressbar();
			}
		}
	}

	function resetProgressbar() {
		$bar2.css({
			width: 0 + '%'
		});
		clearTimeout(tick2);
	}
	startProgressbar();

	$alimpanSlider.on('beforeChange', function (event, currentSlide, nextSlide) {
		if(!$('.slider-auto').hasClass('slick-play')){
			startProgressbar();
		}
	});
	$alimpanSliderMo.on('beforeChange', function (event, currentSlide, nextSlide) {
		if(!$('.slider-auto').hasClass('slick-play')){
			startProgressbar();
		}
	});
})
// 알림판 슬라이드 end

//강남 TV 슬라이드
$(function () {
	$('.news_video-slide').slick({
		arrows: true,
		dots: false,
	});
	$('.news_video-slide_m').slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		arrows: true,
		dots: false,
		responsive: [
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	});
})

// 오늘의 포토 슬라이드
$(function () {
	var $photoArea = $('.photo_slider_area'),
	$photoSlider = $('.photo_slider_area .photo-slider'),
	$photoSliderMo = $('.photo_slider_area .photo-slider_m'),
	$photoAuto = $photoArea.find('.slider-auto'),
	$photoPrev = $photoArea.find('.slider-prev'),
	$photoNext = $photoArea.find('.slider-next');

	var isPause3;

	$photoSlider.slick({
		autoplay: true,
		autoplaySpeed: 3000,
		prevArrow   : $photoPrev,
		nextArrow   : $photoNext,
	});
	$photoSliderMo.slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: true,
		responsive: [
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	});

	$photoAuto.on('click', function () {
		if ($(this).hasClass('slick-play')) {
			isPause3 = false;
			$(this).removeClass('slick-play');
			$(this).text('정지');
			$photoSlider.slick('slickPlay');
		} else {
			isPause3 = true;
			$(this).addClass('slick-play');
			$(this).text('재생');
			$photoSlider.slick('slickPause');
		}
	});
})
// 오늘의 포토 end

// 문화행사 포스터
$(function () {
	var $posterArea = $('.poster_slider_area'),
	$posterSlider = $('.poster_slider_area .poster-slider'),
	$posterCurrent = $posterArea.find('.slider-current'),
	$posterTotal = $posterArea.find('.slider-total'),
	$posterAuto = $posterArea.find('.slider-auto'),
	$posterPrev = $posterArea.find('.slider-prev'),
	$posterNext = $posterArea.find('.slider-next');

	var time4 = 5;
	var $bar4,
	$slick4,
	isPause4,
	tick4,
	percentTime4;
	$bar4 = $('.poster_slider_area .slider-control .progress_bar .bar');

	$posterSlider.slick({
		slidesToShow: 1,
		current     : $posterCurrent,
		total       : $posterTotal,
		prevArrow   : $posterPrev,
		nextArrow   : $posterNext,
	});
	$('.poster-list').slick({
		dots: false,
		arrows: false,
  	autoplay: true,
		autoplaySpeed: 5000,
	});

	$posterAuto.on('click', function () {
		if ($(this).hasClass('slick-play')) {
			isPause4 = false;
			$(this).removeClass('slick-play');
			$(this).text('정지');
		} else {
			isPause4 = true;
			$(this).addClass('slick-play');
			$(this).text('재생');
		}
	});

	$posterTotal.text($posterSlider.find('.slick-slide:not(.slick-cloned)').length);
	$posterSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
		var i= nextSlide+1;
		$posterCurrent.text(i);
	});
	// 팝업 멈추려면 여기부터 주석처리
	function startProgressbar() {
		resetProgressbar();
		percentTime4 = 0;
		isPause4 = false;
		tick4 = setInterval(interval, 10);
	}

	function interval() {
		if (isPause4 === false) {
			percentTime4 += 1 / (time4 + 0.1);
			$bar4.css({
				width: percentTime4 + "%"
			});
			if (percentTime4 >= 100) {
				$posterSlider.slick('slickNext');
				startProgressbar();
			}
		}
	}

	function resetProgressbar() {
		$bar4.css({
			width: 0 + '%'
		});
		clearTimeout(tick4);
	}
	startProgressbar();

	$posterSlider.on('beforeChange', function (event, currentSlide, nextSlide) {
		if(!$('.slider-auto').hasClass('slick-play')){
			startProgressbar();
		}
	});

})
// 문화행사 포스터 슬라이드 end

$(function(){
	var $sliderTitle = $('.main_smart_area .slider_tit'),
			$sliderCont = $('.main_smart_area .slider_cont'),
			$sliderTitle_m = $('.main_smart_area .slider_tit_m'),
			$sliderCont_m = $('.main_smart_area .slider_cont_m');

	$sliderCont.slick({
  	slidesToShow: 1,
  	slidesToScroll: 1,
		vertical : true,
  	fade: true,
  	dots: false,
  	arrows: false,
  	autoplay: true,
		autoplaySpeed: 5000,
    asNavFor: $sliderTitle,
	});

	$sliderTitle.slick({
		arrows: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: $sliderCont,
		focusOnSelect: true,
	});
	//
	// if( $sliderTitle.slick('getSlick').options.slidesToShow >= $sliderTitle.slick('getSlick').slideCount ){
	// 	$sliderTitle.find('.slick-track').addClass('fixedSlick');
	// };

//여기부터 모바일
  $('.main_smart_area .slider_cont_m').slick({
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	fade: true,
  	dots: false,
  	arrows: false,
  	autoplay: true,
		autoplaySpeed: 5000,
    asNavFor: $sliderTitle_m,
	});

	$sliderTitle_m.slick({
		arrows: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: $sliderCont_m,
		focusOnSelect: true,
	});
})
