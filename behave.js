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
/*keep hidden section as display:grid in css and add "none" on page load to avoid slideDown defaulting to display: block*/
$('.illo-row-remainder').css('display', 'none');


$(".more-arrow").click(function(e){
    $(".illo-row-remainder").slideToggle("slow");
    $(".arrow-holder", this).toggleClass("flip");
    if($(".more", this).is(':visible')) {
        $(".more", this).fadeToggle("fast", function(){
            $(".less", this).fadeToggle("slow");
        });
    }else{
        $(".less", this).fadeToggle("fast", function(){
            $(".more", this).fadeToggle("slow");
        });
    }
});
    

  });