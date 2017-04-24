
$( document ).ready(function() {
  $.urlParam = function(name)
  {
      var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
      return results[1] || 0;
  }
  var search_string = $.urlParam('search');
  console.log(search_string);



});


var place = search_string;

geocoder.geocode({'placeId': place.place_id}, function(results, status) {

  if (status !== 'OK') {
    window.alert('Geocoder failed due to: ' + status);
    return;
  }
  map.setZoom(11);
  map.setCenter(results[0].geometry.location);
  // Set the position of the marker using the place ID and location.
  marker.setPlace({
    placeId: place.place_id,
    location: results[0].geometry.location
  });
  marker.setVisible(true);
  infowindowContent.children['place-name'].textContent = place.name;
  infowindowContent.children['place-id'].textContent = place.place_id;
  infowindowContent.children['place-address'].textContent =
      results[0].formatted_address;
  infowindow.open(map, marker);
});





function myMap() {
var mapProp= {
    center:new google.maps.Marker,
    zoom:9,
    disableDefaultUI: true,
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}


      }
