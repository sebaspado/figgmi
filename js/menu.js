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

