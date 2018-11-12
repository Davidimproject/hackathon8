$(document).ready(function() {
/* Ihr jQuery Code */ 
$(function() {
  var menuVisible = false;
  $('#icon').click(function() {
    if (menuVisible) {
      $('#menu').css({'display':'none'});
      menuVisible = false;
      return;
    }
    $('#menu').css({'display':'block'});
    menuVisible = true;
  });
});

$(window) .resize(function(){
    $('body, html') .css ('overflow', 'hidden');
    var screenWidth = $(window).width();
    $('body, html') .css ('overflow', 'visible');
    
        if (screenWidth >= 769) {
            $('#menu').css ({'display':'block'});
        } else {
            $('#menu').css ({'display':'none'});
        }
    
});
//scroll   
$(function() {
      $('a').click(function() {
if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
&& location.hostname == this.hostname) {
    var $target = $(this.hash);
    $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
    if ($target.length) {
        var targetOffset = $target.offset().top;
		var HeaderHeight = $("#menu").outerHeight();
        $('html,body').animate({scrollTop: targetOffset - HeaderHeight}, 700 );
        return false;
    }
}
  });
});
    
    
    
})