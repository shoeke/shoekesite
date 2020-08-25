$(document).ready(function(){

    $(".hb-box").click(function(e) {
        $(".hb-box").addClass("hb-out");
        $(".dark-bg").fadeIn("slow");
        $(".modal-menu").slideDown("slow").css("display", "flex");
    });

    $(".menu-closeup").click(function(e){
        $(".hb-box").addClass("hb-in");
        $(".dark-bg").fadeOut("slow");
        $(".modal-menu").slideUp("slow");
    });

    

  });

  
