
$( document ).ready(function() {


  $.urlParam = function(name)
  {
      var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
      return results[1] || 0;
  }
  var search_string = $.urlParam('search');


});


function myMap() {
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
        var mapProp= {
          center:new google.maps.LatLng(51.508742,-0.120850),
          zoom: 8,
        };


  };

      function geocodeAddress(geocoder, resultsMap) {

            var geocoder = new google.maps.Geocoder(document.getElementById('submit'));
                 function geocodeAddress(geocoder, map) {
                  console.log(geocoder);
                };

        var address = document.getElementById('address').value;
        geocoder.geocode({'address': address}, function(results, status) {
          if (status === 'OK') {
            resultsMap.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
            map: resultsMap,
              position: results[0].geometry.location
            });
          } else {
            alert('Geocode was not successful for the following reason: ' + status);
      };
    });
  };
