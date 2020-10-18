// map
function initMap() {
    // Jablanica location
    var jab = { lat: 43.6620692, lng: 17.7599423 };
    var map = new google.maps.Map(document.getElementById('map'), { 
        zoom: 16, center: jab
    });
    var maker = new google.maps.Marker({
        position: jab, 
        map:map
    });

} // now it IS a function and it is in global

initMap()


// SHOW NAVBAR 
/*
window.onscroll = function() {scrollFunction()};
function scrollFunction(){
	if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
		document.getElementById("navbar").style.display = "block";
	} else {
		document.getElementById("navbar").style.display = "none";
	}
}*/


$(document).ready(function() {
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
        	$(".navbar").fadeIn('slow').css('display', 'block');
        } else {
            $(".navbar").fadeOut('slow');
        }
    });
});