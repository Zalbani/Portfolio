var headers = ["H2","H3"];

$(".accordion_c").click(function(e) {
    var target = e.target,
        name = target.nodeName.toUpperCase();

    if($.inArray(name,headers) > -1) {
        var subItem = $(target).next();

        //slideUp all elements (except target) at current depth or greater
        var depth = $(subItem).parents().length;
        var allAtDepth = $(".accordion_c div, .accordion_c p").filter(function() {
            if($(this).parents().length >= depth && this !== subItem.get(0)) {
                return true;
            }
        });
        $(allAtDepth).slideUp("fast");

        //slideToggle target content and adjust bottom border if necessary
        subItem.slideToggle("fast",function() {
            $(".accordion_c:last").css("border-bottom","0.5px solid grey");
        });

        $(target).css({"border-bottom":"none"});
    }
});
