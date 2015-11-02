$(function()
{
	$(window).scroll(function()
	{
		if($(window).scrollTop() == 0)
        {
         	$('nav').css("top","-100%");	  
        } 
		else if($(window).scrollTop() >= $(".vista-main").height())
        {
          	$('nav').css("top","0");
        }
		if($(window).scrollTop()> $("#inicio").scrollTop()+100)
		{
			$("#inicio .pan").css("left","0");
			$("#inicio .desc-pan").css("right","0");
			$("#inicio > h1:first-child ").css("opacity","1");
		}
		if($(window).scrollTop()> $("#novedades").scrollTop()+1050)
		{
			console.log("ojo");
			$("#novedades .izquierda").css("left","0");
			$("#novedades > h1:first-child").css("opacity","1");
		}
	})
})