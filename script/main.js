$(document).ready(function(){
   $('.fa-times').click(function(){
      $('.sidebar_menu').addClass('hide_menu') ;
       $('.toggle_menu').addClass('opacity_one');
   });
     $('.toggle_menu').click(function(){
      $('.sidebar_menu').removeClass('hide_menu') ;
       $('.toggle_menu').removeClass('opacity_one');
   });
});

$('input').click(function(){
   var $this = $(this);
    $this.attr("placeholder","");
    $this.parent().find("label").addClass("label-top");
});






