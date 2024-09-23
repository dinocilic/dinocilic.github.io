AOS.init()
/* 

var map = L.map('map').setView([43.661303, 17.7593497,18], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

map.invalidateSize();



 */$(document).ready(function() {
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll > 500) {
        	$(".navbar").fadeIn('slow').css('display', 'flex');
        } else {
            $(".navbar").fadeOut('slow');
        }
    });
});


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