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
    $(".arrow-holder").toggleClass("flip");
    if($(".more").is(':visible')) {
        $(".more").fadeToggle("fast", function(){
            $(".less").fadeToggle("slow");
        });
    }else{
        $(".less").fadeToggle("fast", function(){
            $(".more").fadeToggle("slow");
        });
    }
});
    

  });