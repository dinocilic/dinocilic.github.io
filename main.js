// map
// function initMap() {
//     // Jablanica location
//     var jab = { lat: 43.6620692, lng: 17.7599423 };
//     var map = new google.maps.Map(document.getElementById('map'), { 
//         zoom: 16, center: jab
//     });
//     var maker = new google.maps.Marker({
//         position: jab, 
//         map:map
//     });

// } // now it IS a function and it is in global

// initMap()


// SHOW NAVBAR 

// window.onload = document.getElementById("navbar").style.display = "none";

// window.onscroll = function() {scrollFunction()};
// function scrollFunction(){
// 	if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
// 		document.getElementById("navbar").style.display = "flex";
// 	} else {
// 		document.getElementById("navbar").style.display = "none";
// 	}
// }


$(document).ready(function() {
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll > 500) {
        	$(".navbar").fadeIn('slow').css('display', 'flex');
        } else {
            $(".navbar").fadeOut('slow');
        }
    });
});

var map = L.map('map').setView([43.661303, 17.7593497,18], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

map.invalidateSize();
