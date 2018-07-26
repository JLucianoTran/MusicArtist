$(document).ready(function(){

$(".hide").hide();

$(".imgAdder1").click(function(){
		$("body").css("class", "sideleft");
		$(".left").hide();
		$(".right").show();
	});
	
})

$(".imgAdder2").click(function(){
		$("body").css("class", "sideright");
		$(".right").hide();
		$(".left").show();
	});
	
})


})