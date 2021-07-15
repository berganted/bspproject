

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