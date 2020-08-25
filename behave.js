$(document).ready(function(){

    $(".hb-box").click(function(e) {
        $(".hb-box").addClass("hb-out");
        $(".modal-menu").slideDown("slow").css("display", "flex");
    });

    $(".menu-closeup").click(function(e){
        $(".hb-box").addClass("hb-in");
        $(".modal-menu").slideUp("slow");
    });


  
  });
/*
  $(".hb-box").click(function(e) {
    $(this).addClass("animation");
})
.click(function(e){
    $(".modal-menu").show();
});*/