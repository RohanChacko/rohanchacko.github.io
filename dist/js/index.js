//menu
$("#close").click(function(){
    hideMenu();
});
$("#open").click(function(){
    $("#menu").css("display","flex");
    $("#menu").addClass("animated slideInLeft");
    setTimeout(function(){
        $("#menu").removeClass("animated slideInLeft");
    },800);
});
function hideMenu(){
    $("#menu").addClass("animated slideOutLeft");
    setTimeout(function(){
        $("#menu").css("display","none");
        $("#menu").removeClass("animated slideOutLeft");
    },800);
}
