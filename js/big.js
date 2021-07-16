
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



        // 수량버튼증감
        $(function() {
            $('#decreaseQuantity').click(function(e) {
              e.preventDefault();
              var stat = $('#numberUpDown').text();
              var num = parseInt(stat, 10);
              num--;
              if (num <= 0) {
                alert('더이상 줄일수 없습니다.');
                num = 1;
              }
              $('#numberUpDown').text(num);
            });
            $('#increaseQuantity').click(function(e) {
              e.preventDefault();
              var stat = $('#numberUpDown').text();
              var num = parseInt(stat, 10);
              num++;
          
              if (num > 100) {
                alert('더이상 늘릴수 없습니다.');
                num = 100;
              }
              $('#numberUpDown').text(num);
            });
          });
            
          // 전체선택해제     
          function selectAll(selectAll)  {
            const checkboxes 
                 = document.getElementsByName('bestcheck');
            
            checkboxes.forEach((checkbox) => {
              checkbox.checked = selectAll.checked;
            })
          }