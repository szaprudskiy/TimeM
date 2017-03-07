$(function(){
	var search = $(".search"),
		popupSearch = $(".popup-search");
		
	search.on("click", function(e){
		e.preventDefault();	
		popupSearch.toggleClass("db");
	});


	$(".slider").slick({
		responsive: [
		    {
		     // breakpoint: 743,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 3,
		        infinite: true,
		        arrows: true
		      }
    		}
    	]
	})
})