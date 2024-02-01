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


 // 버튼을 클릭하면 해당 기능을 수행하는 함수들
 function showReviewForm() {
   hideAllForms();
   document.getElementById('reviewForm').style.display = 'block';
}

function showOtherProducts() {
   hideAllForms();
   document.getElementById('otherProducts').style.display = 'block';
}

function showInquiryForm() {
   hideAllForms();
   document.getElementById('inquiryForm').style.display = 'block';
}

// 모든 폼을 숨기는 함수
function hideAllForms() {
   document.getElementById('reviewForm').style.display = 'none';
   document.getElementById('otherProducts').style.display = 'none';
   document.getElementById('inquiryForm').style.display = 'none';
}

// 후기 제출 함수
function submitReview() {
   // 여기에 후기 제출에 관한 로직 추가
   alert('후기가 제출되었습니다.');
}

// 문의 제출 함수
function submitInquiry() {
   // 여기에 문의 제출에 관한 로직 추가
   alert('문의가 제출되었습니다.');
}