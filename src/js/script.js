$(function(){
	var search = $(".search"),
		popupSearch = $(".popup-search");
		
	search.on("click", function(e){
		e.preventDefault();	
		popupSearch.toggleClass("db");
	});

	


	var cart = $(".cart"),
		quickCart = $(".quickcart");
		
	cart.on("click", function(e){
		e.preventDefault();	
		quickCart.toggleClass("db");
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
	});

	$(".main-4-slider").slick({
		slidesToShow: 6,
		slidesToScroll: 3,
		infinite: true,
		arrows: true
		
			
	})

	$(".main-5-slider").slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		infinite: true,
		arrows: true
		
			
	})
})