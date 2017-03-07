$(function(){
	var search = $(".search"),
		popupSearch = $(".popup-search");
		
	search.on("click", function(e){
		e.preventDefault();	
		popupSearch.toggleClass("db");
	});


	$(".slider").slick({
		slidesToShow: 3,
		        slidesToScroll: 3,
		        infinite: true,
		        arrows: true
		
			// 	responsive: [
			// 	    {
			// 	     // breakpoint: 743,
			// 	      settings: {
				        
			// 	      }
		 //    		}
		 //    	]
	})
})