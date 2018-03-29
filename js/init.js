(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.carousel').carousel();

    $( ".data-expander a" ).click(function(evt) {
        evt.preventDefault();
        var icon = $(this).find('i');
        var expandParent = $(this).parent();
        var currentClass = expandParent.hasClass('expanded');
        //Collapse all items
        $( ".data-expander" ).find('i').html('add');
        $( ".data-expander" ).removeClass('expanded');
        //Expand other item only if the previous wasn't expanded
        if (!currentClass) {
            expandParent.toggleClass('expanded');
            icon.html('remove');
        }
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space
