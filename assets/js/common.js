'use strict'

$(function(){


 //슬릭 슬라이더 사용
	$('.weather-tic').slick({
		vertical : true,
		dots : false,
		arrows : false,
		autoplay : true,
		autoplaySpeed : 5000,
	})



	//언어 선택 버튼
		$(".lang-btn .dropdown-menu").hide();
		$(".lang-btn a").click(function(){
			if($(".lang-btn .dropdown-menu").css("display") != "none"){
				$(".lang-btn .dropdown-menu").fadeOut();
			}else{
				$(".lang-btn .dropdown-menu").fadeIn();
			}
		});

		
});
