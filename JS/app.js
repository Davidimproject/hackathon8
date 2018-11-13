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
		/*var HeaderHeight = $("#menuBtn").outerHeight();*/
        $('html,body').animate({scrollTop: targetOffset - 73 /*HeaderHeight*/}, 700 );
        if ($(window).width() < 768) {
		$('nav').hide()
		}	
		return false;
    }
}
  });
});
/*Slider*/
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}    
    
    
})