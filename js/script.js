$(document).on("scroll", function(){
	if
  ($(document).scrollTop() > 86){
	  $("#banner").addClass("shrink");
	  $("#icon-menina").addClass("image-icon");
	}
	else
	{
		$("#banner").removeClass("shrink");
		$("#icon-menina").removeClass("image-icon");
	}
});

$(document).on('click',function(){    
	$('#banner').addClass('shrink');
	$("#icon-menina").addClass("image-icon");
 });