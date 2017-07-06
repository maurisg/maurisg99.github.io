$(".menu-bar").on("click", function(){
  $(".content").toggleClass("open");
});
$(".sidebar a").on("click",function(){
  $('.content').removeClass("open");
});
