$(document).ready(function(){
  $(".project__card").mouseover(function(){
      $(".arrow").css("animation", "bounce 0.6s");
      $(".arrow").css("animation-direction", "alternate");
      $(".arrow").css("animation-iteration-count", "2");
  });
});