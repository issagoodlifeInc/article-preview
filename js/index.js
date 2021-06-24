
$(document).ready(function() {
  $("button").click(function(){
    $(".user-hover").show();
    setTimeout(function(){
      $(".user-hover").hide();
    },3000);
  })
  $("button").hover(function(){
    $(".user-hover").show();
    setTimeout(function(){
      $(".user-hover").hide();
    },3000);
  })
});
