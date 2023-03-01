$(document).ready(function() {
	
	redrawDotNav();
	
    $(window).bind('scroll',function(e){
    	cutScroll();
		redrawDotNav();
    });
    
	$('a.paper-cuttings').click(function(){
    	$('html, body').animate({
    		scrollTop:0
    	}, 1000, function() {
	    	cutScroll(); 
		});
    	return false;
	});
    $('a.paper-cutout').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#paper-cutout').offset().top
    	}, 1000, function() {
	    	cutScroll(); 
		});
    	return false;
    });
    $('a.window-blossoms').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#window-blossoms').offset().top
    	}, 1000, function() {
	    	cutScroll(); 
		});
    	return false;
    });
	$('a.about').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#about').offset().top
    	}, 1000, function() {
	    	cutScroll(); 
		});
    	return false;
    });
    
    
    $('nav#primary a').hover(
    	function () {
			$(this).prev('h1').show();
		},
		function () {
			$(this).prev('h1').hide();
		}
    );
    
});


function cutScroll(){
	var scrolled = $(window).scrollTop();
	$('#bg1').css('top',(0-(scrolled*.25))+'px');
	$('#bg2').css('top',(0-(scrolled*.5))+'px');
	$('#bg3').css('top',(0-(scrolled*.75))+'px');
}

function redrawDotNav(){
	var section1Top =  0;
	var section2Top =  $('#paper-cutout').offset().top - (($('#window-blossoms').offset().top - $('#paper-cutout').offset().top) / 2);
	var section3Top =  $('#window-blossoms').offset().top - (($('#about').offset().top - $('#window-blossoms').offset().top) / 2);
	var section4Top =  $('#about').offset().top - (($(document).height() - $('#about').offset().top) / 2);;
	$('nav#primary a').removeClass('active');
	if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
		$('nav#primary a.paper-cuttings').addClass('active');
	} else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
		$('nav#primary a.paper-cutout').addClass('active');
	} else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top){
		$('nav#primary a.window-blossoms').addClass('active');
	} else if ($(document).scrollTop() >= section4Top){
		$('nav#primary a.about').addClass('active');
	}
	
}
