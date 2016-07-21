$("#hiddendiv").hide();
$("a").on("click", function(e){
    e.preventDefault();
$("#hiddendiv").toggle();
});
