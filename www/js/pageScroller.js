// Page Scroller JavaScript

$('.spotDetails').on('tap', function(event){
	
	event.preventDefault();
	
	$.scrollTo($($(this).attr('href')).offset().top-0, 1500,{easing:'easeInOutExpo', axis:'y'});
	
});

/*
$("nav a").tap(function(event) {
	event.preventDefault();
	$.scrollTo($($(this).attr('href')).offset().top-50, 1500,{easing:'easeInOutExpo', axis:'y'});
});
*/

/*
$('nav a').on('click', function(event){
	event.preventDefault();
	$.scrollTo($($(this).attr('href')).offset().top-50, 1500, {easing:'easeInOutExpo', axis:'y'});
});
*/

/*
$("nav a").click(function(event) {
	event.preventDefault();
	$.scrollTo($($(this).attr('href')).offset().top-50, 1500, {easing:'easeInOutExpo', axis:'y'});
});
*/



