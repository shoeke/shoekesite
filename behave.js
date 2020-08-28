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
/*bc default for grid is grid-auto-rows: auto, set to 0 to hide additional images and toggle helper class .row-expand */
$(".gallery-row").css("grid-auto-rows", "0");

$(".more-arrow").click(function(e){
    let that = $(this);
    let envelope = $(this).siblings(".gallery-wrapper").children(".gallery-row");
    
    envelope.toggleClass("row-expand");
       $(".arrow-holder", this).toggleClass("flip");
    if($(".arrow-holder", this).hasClass("flip")) {
        $(".more", this).fadeOut("fast", function(){
            $(".less", that).fadeIn("slow");
        });
    }else{
        $(".less", this).fadeOut("fast", function(){
            $(".more", that).fadeIn("slow");
        });
    }
});
    

  });