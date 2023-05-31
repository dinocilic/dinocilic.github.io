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



// $('#form').on('submit', function(event) {
//     event.preventDefault(); // prevent reload

//     // code fragment
//     var data = {
//         service_id: 'service_h8ojsdw',
//         template_id: 'template_d53lxdx',
//         user_id: 'OH64gcM6nM7iNsU1P',
//         template_params: {
//             'from_name': $("input[name=ime]").val() + $("input[name=prezime]").val(),
//         }
//     };

//     $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
//         type: 'POST',
//         data: data,
//         contentType: false,
//         processData: false
//     }).done(function() {
//         alert('Your mail is sent!');
//     }).fail(function(error) {
//         alert('Oops... ' + JSON.stringify(error));
//     });
// })

// code fragment

// code fragment
// the form id is myForm
$('#form').on('submit', function(event) {
    event.preventDefault(); // prevent reload
    
    var formData = new FormData(this);
    formData.append('service_id', 'service_h8ojsdw');
    formData.append('template_id', 'template_d53lxdx');
    formData.append('user_id', 'OH64gcM6nM7iNsU1P');
    formData.append('from_name', $("input[name=ime]").val() + " " + $("input[name=prezime]").val() )
    formData.append('message', $("textarea[name=poruka]").val() )
 
    $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
        type: 'POST',
        data: formData,
        contentType: false, // auto-detection
        processData: false // no need to parse formData to string
    }).done(function() {
        console.log('Your mail is sent!');
        location.reload();
    }).fail(function(error) {
        console.log('Oops... ' + JSON.stringify(error));
    });
});
// code fragment

// Contact Form
