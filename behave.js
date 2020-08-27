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
$('.row-remainder').css('display', 'none');


$(".more-arrow").click(function(e){
    let that = $(this);
    $(this).siblings(".gallery-wrapper").children(".row-remainder").slideToggle("slow");
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