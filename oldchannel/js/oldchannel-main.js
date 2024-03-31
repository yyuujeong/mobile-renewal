$(function() {
   // 햄버거버튼
   $(".ham").click(function() {
      $(".btn").show();
      $(".menu").animate({
         marginLeft:"70%"
      }, 300);
   });
   $(".btn").click(function() {
      $(".btn").hide();
      $(".menu").animate({
         marginLeft:"0%"
      }, 300);
   });

   // 햄버거메뉴 상세
   $(".menu > ul > li > a").click(function() {
      if($(this).next().is(":visible")) {
         $(this).next().stop().slideUp(500);
         $(this).children("img").attr("src", "img/arrow-down.png");
      } else {
         $(".sub").stop().slideUp(500);
         $(".menu > ul > li > a").children("img").attr("src", "img/arrow-down.png");
         $(this).next().stop().slideDown(500);
         $(this).children("img").attr("src", "img/arrow-up.png");
      }
   });

   // 메인 이미지 슬라이드
   let swiper = new Swiper(".swiper-container", {
      pagination: ".swiper-pagination",   
      paginationClickable: true, 
      centeredSlides: true,
      autoplay: 2500,
      autoplayDisableOnInteraction: false
   });

   // 애니메이션
   $(".wp1").waypoint(
      function () {
         $(".wp1").addClass("animated fadeInUp");
   }, {offset: "75%"}
   );

   // 더보기
   $(".mimg li").slice(0, 4).show();
   $(".more").click(function(e){ 
      e.preventDefault();
      $(".mimg li:hidden").slice(0, 4).show();
   });

   // 모달
   $(".ham, .cross").click(function() {
      $(".modal_back").toggleClass("back_on");
   });

   $(".search_form").keydown(function(e) {
      if (e.code === "Enter") {
         e.preventDefault();
      }
   });
});