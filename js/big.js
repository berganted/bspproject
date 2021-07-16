
//BigIdx 스와이프
    $(function(){
        var swiper = new Swiper(".swiper-container", {
            loop : true,
            autoplay : {delay:3500},
            navigation : {
                nextEl : ".swiper-button-next",
                prevEl : ".swiper-button-prev",
            },
        });
    });

    //구매수량
    function fnCalCount(type, ths){
        var $input = $(ths).parents("td").find("input[name='pop_out']"); //부모부분인 td의 자식 name pop_out [수량입력값]
        var tCount = Number($input.val()); //입력값 숫자타입으로 변환
        var tEqCount = Number($(ths).parents("tr").find("td.bseq_ea").html()); 
                        //입력된 수량보다 +/-가 초과되지 않도록

        if(type=='p'){
            if(tCount < tEqCount) $input.val(Number(tCount)+1);  //재고보다 작을경우 +1
        }else{
             if(tCount >0) $input.val(Number(tCount)-1);    //0보다 클 경우 -1
            }
        }

        // 수량버튼증감
        // $(function() {
        //     $('.s_payWrap>.s_pay>.s_pay1>.number>#decreaseQuantity').click(function() {
        //       console.log(99)
        //       $(this).parents().find('#numberUpDown').val();
        //       console.log($(this).parents().find('#numberUpDown').val());
        //       var stat = $(this).parents().find('#numberUpDown').val();
        //       var num = parseInt(stat, 10);
        //       stat--;
        //       if (num <= 0) {
        //         alert('더이상 줄일수 없습니다.');
        //         num = 1;
        //       }
        //       $('#numberUpDown').val(num);
        //     });
        //     $('.number>#increaseQuantity').click(function(e) {
        //       $(this).parents().find('#numberUpDown').val();
        //       var stat = $(this).parents().find('#numberUpDown').val();
        //       var num = parseInt(stat, 10);
        //       stat++;
          
        //       if (num > 100) {
        //         alert('더이상 늘릴수 없습니다.');
        //         num = 100;
        //       }
        //       $('#numberUpDown').text(num);
        //     });
        //   });

            
          // 전체선택해제     
          function selectAll(selectAll)  {
            const checkboxes 
                 = document.getElementsByName('bestcheck');
            
            checkboxes.forEach((checkbox) => {
              checkbox.checked = selectAll.checked;
            })
          }

 $(function(){
   $('.number>#decreaseQuantity').click(function () {
     var stat = $(this).siblings('#numberUpDown').val();
     var num = parseInt (stat-1);
    
     if (num <= 0) {
       alert('더이상 줄일수 없습니다.');
       num = 1;
      }
      $(this).siblings('#numberUpDown').val(num);
     
   });

   $('.number>#increaseQuantity').click(function () {
    var stat = $(this).siblings('#numberUpDown').val();
    var num = parseInt(stat);
    num++;
   
    if (num > 100) {
        alert('더이상 늘릴수 없습니다.');
        num = 100;
     }
     $(this).siblings('#numberUpDown').val(num);
    
  })
 })