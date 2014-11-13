 $(document).ready(function () {
 //dropdown Javascript Selectboxen
    $(".select-menu dt a").click(function(event) {
        $(".select-menu").find('dd ul').hide();
        $(this).closest(".select-menu").find('dd ul').toggle();
        event.preventDefault();
    });                
    $(".select-menu dd ul li a").click(function(event) {
        var text = $(this).html();
        $(this).closest(".select-menu").find('dt a span').html(text);
        $(this).closest(".select-menu").find('dd ul').hide();
        event.preventDefault();
    });       
    function getSelectedValue(id) {
        return $("#" + id).find("dt a span.value").html();
    }
    $(document).bind('click', function(e) {
        var $clicked = $(e.target);
        if (! $clicked.parents().hasClass("select-menu"))
            $(".select-menu dd ul").hide();
    });
    // Ansicht der Labels als aktive Checkbox
     $("label").click(function() {
       $(this).toggleClass('active');
    });
  });