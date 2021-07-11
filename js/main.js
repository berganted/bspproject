$(function(){ 
    $("#header").load("header.html");  
    $("#footer").load("footer.html"); 
    $("#side").load("sideCategory.html");   
    $("#quick").load("quick.html");   

    $('.radio_pwd').click(function(){
        console.log(1);
        $('.find_id').css('display','none') ;  
        $('.find_pwd').css('display','block')   ;
        
    })
    $('.radio_id').click(function(){
        console.log(1);
        $('.find_pwd').css('display','none') ;  
        $('.find_id').css('display','block')   ;
        
    });
      
    // //console.log($('.menu').position().left)
    var q_left = $('.y_main').position().left+1350;
    // .mem_content 이부분에 중간박스 
    var q_top = $('.y_main').position().top;
    // $(".mypage_ad").css({
    //     'top':q_top,
    //     'left':q_left,
       
    // });
    $('.mypage_ad').hide();
    
    $(window).scroll(function(){
        console.log($(window).scrollTop());
        var new_top = $(window).scrollTop()+137;
        $(".mypage_ad").stop().animate({
        'top':new_top,'left':q_left
        
    },300);
    })

    $('.del_why ').change(function(){
        console.log($(this).val())
        if($(this).val() == 'mass' ){
            $('.hidden').show();  
        } else{
            $('.hidden').hide();  
        }           
    })
    $('.up_spancon_t > select').change(function(){
        var msg = $(this).val();
        $('#emailv').val(msg);
        if(msg ==""){
            $('#emailv').show();
        }else{
            $('#emailv').hide();
        }
        })   
 
  
    
  }); 
  function ShowCurrentTime() {
    $.ajax({
        async: false,
        type: "POST",
        url: "Default.aspx/GetCurrentTime",
        data: '{name: "Mudassar" }',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            alert(response.d);
        }
    });
   
}