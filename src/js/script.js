$(function(){
	var search = $(".search"),
		popupSearch = $(".popup-search");
		
	search.on("click", function(e){
		e.preventDefault();	
		popupSearch.toggleClass("db");
	});
})