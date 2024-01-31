$(function(){
    var $firstMenu = $(".nav_select"),
          $header = $('header');
    
    $firstMenu.mouseenter(function(){
       $header.stop().animate({height:'310px'});
    })
    .mouseleave(function(){
       $header.stop().animate({height:'140px'});
    });
    
    
    
 });

 function calculateTotal() {
   // 수량 가져오기
   var quantity = document.getElementById('quantity').value;

   // 고정된 상품 가격
   var fixedPrice = 1200;

   // 총 상품 금액 계산
   var total = quantity * fixedPrice;

   // 결과 업데이트
   document.getElementById('price').innerText = total;
 }