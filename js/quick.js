 
 var q_left = $('.y_wrap').position().left+1360;
 
 var q_top = $('.y_wrap').position().top;

 $(".mypage_ad").css({
     'top':q_top,
     'left':q_left
 });
 
 $(window).scroll(function(){
     console.log($(window).scrollTop());
     var new_top = $(window).scrollTop()+137;
     $(".mypage_ad").stop().animate({
     'top':new_top
     
 },300);
 })
