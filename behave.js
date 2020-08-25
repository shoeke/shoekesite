$(document).ready(function(){

    $(".hb-box").click(function(e) {
        $(".hb-box").addClass("animation");
        $(".modal-menu").slideDown("slow").css("display", "flex");
    });

    $(".menu-closeup").click(function(e){
        $(".modal-menu").slideUp("slow").css("display", "none");
    });


  
  });
/*
  $(".hb-box").click(function(e) {
    $(this).addClass("animation");
})
.click(function(e){
    $(".modal-menu").show();
});*/