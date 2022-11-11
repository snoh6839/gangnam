// Browser
var userBrowser = {
    ua: navigator.userAgent.toLowerCase(),
    ie: navigator.appName == 'Microsoft Internet Explorer',
    ie_: navigator.userAgent.match('MSIE') == 'MSIE',
    ns: navigator.appName == 'Netscape',
    ff: navigator.userAgent.match('Firefox') == 'Firefox',
    sf: navigator.userAgent.match('Safari') == 'Safari',
    op: navigator.userAgent.match('Opera') == 'Opera',
    cr: navigator.userAgent.match('Chrome') == 'Chrome',
    win: navigator.platform.match('Win') == 'Win',
    mac: navigator.userAgent.match('Mac') == 'Mac',
    linux: navigator.userAgent.match('Linux') == 'Linux',
    ie11: navigator.userAgent.match('Trident/7.0') == 'Trident/7.0'
}
$( function() {
	$('body').addClass(userBrowser);
	/*//smooth page scrolling
	$('#contents-wrap a[href*="#"]:not([href="#"])').click(function() {
		event.preventDefault();
		var target = $(this.hash);
		var headerHeight = $('#gnHead nav').height() + 15;
		var offsetTop = target.offset().top - headerHeight;
		$('html, body').animate({scrollTop: offsetTop}, 1000);
	});*/
});


/* start: header */
$( function(){	
	
	//scrollTotop
	var $scrollToTop =  $('#scrollToTop');
	$(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $scrollToTop.fadeIn();
        } else {
            $scrollToTop.fadeOut();
        }
    });
	
	//scrollToTop 클릭시 이벤트
	$scrollToTop.click(function(){
		$('html, body').animate({scrollTop : 0},1000);
		return false;
	});
	
	// 검색영역, 메뉴영역 토글
	/*
	var $mainDefault = $('.main-default');
	var $searchArea = $('.search-area');
	$('.main .main-default').hide();
	$('.sub .search-area').hide();
	$('.search-area-btn').click( function() {
		$mainDefault.hide();
		$searchArea.show();
	});	
	$('.search-close-btn').click( function() {
		$searchArea.hide();
		$mainDefault.show();
	});
	*/
	
	// 상단 검색 영역
	$(document).ready(function() {
        $('#search-area').click(function() {
                $('.serch-form-area').slideToggle("fast");
        });
    });
	
	//메인메뉴 마우스 오버
//	var $gnbDepth1 = $('.header .gnb ul > li');
//	var $gnbDepth2 = $('.header .gnb .sub-box ol');
//	var $gnbDepth2Last = $('.header .gnb .sub-box ol:nth-last-child(1) li:nth-last-child(1)');
//	$gnbDepth1.removeClass('on');
//	
//	$gnbDepth1.mouseover( function(){
//		$(this).addClass('on');
//	});
//	$gnbDepth1.mouseout( function(){
//		$(this).removeClass('on');
//	});
//	//메인메뉴 Tab 접근
//	$gnbDepth1.focusin( function(){
//		$(this).addClass('on');
//	}); 
//	$gnbDepth2Last.focusout( function(){	
//		$gnbDepth1.removeClass('on');
//	});
	
	
	//메인메뉴 마우스 오버 수정
	var $gnbDepth1 = $('.header .gnb ul > li > a');
	var $gnbDepth2 = $('.header .gnb .sub-box ol');
	var $gnbDepth2Last = $('.header .gnb .sub-outer a:last');
	$('.header .gnb ul > li').removeClass('on');
	
	$gnbDepth1.mouseenter( function(){
		$(this).parent('li').addClass('on');
	});
	$('.header .gnb ul > li').mouseleave( function(){
		$(this).removeClass('on');
	});
	//메인메뉴 Tab 접근
	$gnbDepth1.focusin( function(){
		$('.header .gnb ul > li').removeClass('on');
		$(this).parent('li').addClass('on');
	});
	$gnbDepth2Last.focusout( function(){	
		$(this).parent().parents('.depth1').removeClass('on');
	});
	
	//gnb rbox roll-over
	var $quick = $('.header nav .gnb .rbox .quick-style .quick');
	$quick.mouseover(function(){
		$(this).find('img').attr('src', $(this).find('img').attr('src').replace('.','_on.'));
	});
	$quick.mouseout(function(){
		$(this).find('img').attr('src', $(this).find('img').attr('src').replace('_on.','.'));
	});
	
	//언어 선택 버튼 
	$('.lang-btn ul li:last').focusout(function(){
		$('.lang-btn').removeClass('open');		
	});	
	
	//nav 스크롤 fixed
	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();
		if (scroll >= 100) {
			$('nav').addClass('navbar-scroll');
		} else {
			$('nav').removeClass('navbar-scroll');
		}	
	});
	
	//tablet, mobile에서 검색영역 width 계산
	var mSearchWidth = $('.mobile-header').width() - $('.mobile-header .logo').width() - $('.mobile-header .nav-button').width() - 30;
	var mKeywordWidth = mSearchWidth - 56;
	$('.mobile-header .search-box .center').width(mSearchWidth);
	$('.mobile-header .search-box .center .keyword').width(mKeywordWidth);
});

$(window).resize(function () {
	//desktop -> tablet 해상도 변경시 검색영역 노출
	var winWidth = $(window).width();
	
	if ( winWidth >= 768 && winWidth < 992) {
		$( '.search-area' ).show();
		/*$( '.main-default' ).hide();*/
	}
	//검색박스 크기 
	var mSearchWidth = $('.mobile-header').width() - $('.mobile-header .logo').width() - $('.mobile-header .nav-button').width() - 30;
	var mKeywordWidth = mSearchWidth - 56;
	$('.mobile-header .search-box .center').width(mSearchWidth);
	$('.mobile-header .search-box .center .keyword').width(mKeywordWidth);
});

//mobile-menu
	function mmenuClose() {
		$('body').removeClass('menu-open');
		$('.nav-button').removeClass('menu-open');
		$('.mobile-menu').removeClass('menu-open');
	}
	function mmenuOpen() {
		$('body').addClass('menu-open');
		$('.nav-button').addClass('menu-open');
		$('.mobile-menu').addClass('menu-open');
	}
	
	$('.nav-button').addClass('nav-button-close');
	$('.closebtn').click( function(){
		mmenuClose();
		return false;
	});
	$('.nav-button').click( function(){
		mmenuOpen();
		return false;
	});
	$('.wrap .black-wrap').click( function() {
		mmenuClose();
	});
	var $menuClickDepth1 = $('.mobile-menu .depth1 > .panel > .panel-heading');
	var $menuClickDepth2 = $('.mobile-menu .depth2 > .panel > .panel-heading');
	var $menuClickDepth3 = $('.mobile-menu .depth3 > .panel > .panel-heading');
	$menuClickDepth1.click( function () {
		if ( $(this).hasClass('on') === false ){
			$menuClickDepth1.removeClass('on');
			$(this).addClass('on');
		} else if ( $(this).hasClass('on') === true ){
			$menuClickDepth1.removeClass('on');
		}
	});
	$menuClickDepth2.click( function () {
		if ( $(this).hasClass('on') === false ){
			$menuClickDepth2.removeClass('on');
			$(this).addClass('on');
		} else if ( $(this).hasClass('on') === true ){
			$menuClickDepth2.removeClass('on');
		}
	});
	$menuClickDepth3.click( function () {
		if ( $(this).hasClass('on') === false ){
			$menuClickDepth3.removeClass('on');
			$(this).addClass('on');
		} else if ( $(this).hasClass('on') === true ){
			$menuClickDepth3.removeClass('on');
		}
	});
	
$(window).resize( function() {
var winWidth = $(window).width();
	
	if ( winWidth >= 992){
		mmenuClose();
	}
});
/* end: header */



/* start: footer */
$( function () {
    $('.footer .center .select-label').click(function () {
        $('.footer .center .dropup').toggleClass('active');
    });
    $('.dropup-list li').click(function () {
        $('.footer .center .dropup').removeClass('active');
    });
});
/* end: footer*/



/* start: main */
$( function(){
	
	//banner auto resizing
	var winWidth = $(window).width();
	var $mainViewBg = $('.main-view .bg');
	var $mainViewBanner = $('.main-view .banner');
	var bannerBgHeight = $mainViewBg.width()*0.2;
	var bannerHeight = bannerBgHeight-85;	//nav의 height 값 85px
	if ( winWidth >= 991 ) {
		$mainViewBg.height(bannerBgHeight);
		$mainViewBanner.css({"height": bannerHeight});
	} else {
		$mainViewBg.removeAttr('style');
		$mainViewBanner.removeAttr('style');
	}
	
	//news-desktop hover slide-down, up
	var $newsBg = $('.news-desktop .news-latest-bg');
	var $news = $('.news-desktop .news-latest');
	function newsOpen() {
		$newsBg.stop().animate({height:'233px'},200); /* 233px = 165px(.news-latest height) + 68px(.news height) */
		$newsBg.addClass('open');
		$news.stop().slideDown(200);
	}
	
	function newsClose() {
		$news.stop().slideUp(400);
		$newsBg.removeClass('open');
		$newsBg.stop().animate({height:'67px'},400);
	}
	
	$news.hide();
	$('.content .news > .container.news-desktop').hover(function(){
		newsOpen();
	},
	function(){
		newsClose();
	});
	
	$('.news').focusin(function(){
		newsOpen();
	});
	$('.news').focusout(function(){
		newsClose();
	});
	
	//news-mobile accodion
	var $newsClick = $('.news-mobile .panel > .panel-heading');
	$newsClick.click( function () {
		if ( $(this).hasClass('on') === false ){
			$newsClick.removeClass('on');
			$(this).addClass('on');
		} else if ( $(this).hasClass('on') === true ){
			$newsClick.removeClass('on');
		}
	});
	//sub-view height auto resizing
	var i = $('.main .box').width()*0.6;
	$('.main .box').height(i);
	$('.main .box .leftPopup_bxslider li a').height(i);
});

$(window).resize (function() {
	//banner auto resizing
	var winWidth = $(window).width();
	var $mainViewBg = $('.main-view .bg');
	var $mainViewBanner = $('.main-view .banner');
	var bannerBgHeight = $mainViewBg.width()*0.2;
	var bannerHeight = bannerBgHeight-85;	//nav의 height 값 85px
	if ( winWidth >= 991 ) {
		$mainViewBg.height(bannerBgHeight);
		$mainViewBanner.css({"height": bannerHeight});
	} else {
		$mainViewBg.removeAttr('style');
		$mainViewBanner.removeAttr('style');
	}
	
	//sub-view height auto resizing
	var i = $('.main .box').width()*0.6;
	$('.main .box').height(i);
	$('.main .box .leftPopup_bxslider li a').height(i);
});
$(document).ready(function(){
	$('.center-list a:last').focusout(function(){
		$('.center-list').hide();		
	});
});
/* end: main */


/* start : sub-main(palpitate) */
$ (function () {
	
	//두근두근강남 서브메인
	
	//두근두근강남 베너 hover, focus
	var $story = $('.palpitate .story-wrap .story');
	
	$story.mouseover( function() {
		$(this).addClass('on');
	});
	$story.mouseleave( function() {
		$(this).removeClass('on');
	});
	
	$story.focusin( function() {
		$(this).addClass('on');
	});
	$story.focusout( function() {
		$story.removeClass('on');
	});
	
	//두근두근강남(palpitate) news tab
	var $newsTabTitle = $('.palpitate .news .tab-title');
	var $newsTabContent = $('.palpitate .news .tab-content');
	var i;
	
	$newsTabTitle.click(function(){
		$newsTabTitle.removeClass("active");
		$newsTabContent.removeClass("active");
		
		i = $(this).attr("id");
		i = i.substr(4);
		
		$(this).addClass("active");
		$("#"+i).addClass("active");
	});
	
	//두근두근강남(palpitate) latest tab
	var $latestTabTitle = $('.palpitate .latest .tab-title');
	var $latestTabContent = $('.palpitate .latest .tab-content');
	var i;
	
	$latestTabTitle.click(function(){
		$latestTabTitle.removeClass("active");
		$latestTabContent.removeClass("active");
		
		i = $(this).attr("id");
		i = i.substr(4);
		
		$(this).addClass("active");
		$("#"+i).addClass("active");
	});
	
});
/* end : sub-main(palpitate) */



/* start: sub */
$( function () {
	// 첨부파일 드롭다운 에니메이션
	$('.board.view .dropdown').on('show.bs.dropdown', function(e){
		$(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
	});

	$('.board.view .dropdown').on('hide.bs.dropdown', function(e){
		$(this).find('.dropdown-menu').first().stop(true, true).slideUp(300);
	});
});

$(document).ready(function(){
	$('.fancybox-skin').attr('tabindex','1');
	$('.fancybox-skin a.fancybox-close').attr('tabindex','2');
});
/* end: sub */