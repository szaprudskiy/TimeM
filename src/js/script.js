$(function(){
	var search = $(".search"),
		popupSearch = $(".popup-search");
		
	search.on("click", function(e){
	 	e.preventDefault();	
		popupSearch.toggleClass("db");
		 // $(document).click( function(event){
   //    if( $(event.target).closest(".popup-search").length ) 
   //      return;
   //    $(".popup-search").fadeOut("slow");
   //    event.stopPropagation();
   //  });
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

	$(".slider-card-bot").slick({
		slidesToShow: 5,
		slidesToScroll: 4,
		infinite: true,
		arrows: true	
	})

	

	 $('.content-slider__left').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: true,
	  fade: true,
	  asNavFor: '.content-slider__center'
	});

	$('.content-slider__center').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  asNavFor: '.content-slider__left',
	  // dots: true,

	  centerMode: true,
	  focusOnSelect: true
	});


	 function countdown(){
				var now = new Date();
				var eventDate = new Date(2017, 3, 13);

				var currentTiime = now.getTime();
				var eventTime = eventDate.getTime();

				var remTime = eventTime - currentTiime;

				var s = Math.floor(remTime / 1000);
				var m = Math.floor(s / 60);
				var h = Math.floor(m / 60);
				var d = Math.floor(h / 24);

				h %= 24;
				m %= 60;
				s %= 60;

				h = (h < 10) ? "0" + h : h;
				m = (m < 10) ? "0" + m : m;
				s = (s < 10) ? "0" + s : s;

				document.getElementById("days").textContent = d;
				document.getElementById("days").innerText = d;

				document.getElementById("hours").textContent = h;
				document.getElementById("minutes").textContent = m;
				document.getElementById("seconds").textContent = s;

				setTimeout(countdown, 1000);
			}

			countdown();

			 function countDown(){
				var now = new Date();
				var eventDate = new Date(2017, 3, 13);

				var currentTiime = now.getTime();
				var eventTime = eventDate.getTime();

				var remTime = eventTime - currentTiime;

				var s = Math.floor(remTime / 1000);
				var m = Math.floor(s / 60);
				var h = Math.floor(m / 60);
				// var d = Math.floor(h / 24);

				h %= 24;
				m %= 60;
				s %= 60;

				h = (h < 10) ? "0" + h : h;
				m = (m < 10) ? "0" + m : m;
				s = (s < 10) ? "0" + s : s;

				// document.getElementById("days").textContent = d;
				// document.getElementById("days").innerText = d;

				document.getElementById("hour").textContent = h;
				document.getElementById("minut").textContent = m;
				document.getElementById("second").textContent = s;

				setTimeout(countDown, 1000);
			}

			countDown();
});