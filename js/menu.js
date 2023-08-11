$(".nav-control").click(function(){
  $("body").toggleClass("position-fixed-body");
});

$("#toggle").click(function(){
  $(".open-location").toggleClass("up");
});


$(".sub").click(function(){
  $(".subMenu-locations").toggleClass("show");
  $(".open-subMenu").toggleClass("up");
});




$("#toggle").click(function(){
  $(".open-language").toggleClass("upLang");
});


$(".subLang").click(function(){
  $(".subMenu-lang").toggleClass("showLang");
  $(".open-subMenuLang").toggleClass("upLang");
});



$(window).scroll(function() {    
  var scroll = $(window).scrollTop();
  if (scroll >= 1) {
      $(".toggle-button").addClass("static");
  }
  else 
  {
    $(".toggle-button").removeClass("static");
  };
});