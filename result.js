
$( document ).ready(function() {
  $.urlParam = function(name)
  {
      var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
      return results[1] || 0;
  }
  var search_string = $.urlParam('search');
  console.log(search_string);



});

var map,places,infoWindow;
var markers = [];
var autocomplete;
var countryRestrict = {'country': 'uk'};
var MARKER_PATH = 'https://developers.google.com/maps/documentation/javascript/images/marker_green';
var hostnameRegexp = new RegExp('^https?://.+?/');

var countries = {
  'uk': {center:{lat:54.8,lng:-4.6},
  zoom:5
}
};

function initMap(){
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: countries['uk'].zoom,
    center: countries['uk'].center,
    mapTypeControl: false,
    panControl: false,
    zoomcontrol: false,
    streetViewControl: false
  }
)};

infoWindow = new google.maps.infoWindow({
  content: document.getElementById('info-content')
});

autocomplete = new google.maps.places.Autocomplete(
  document.getElementById('autocomplete')), {
    types: ['(cities)'],
    componetRestrictions: countryRestrict
  });

places = new google.maps.places.PlacesService(map);
autocomplete.addListener('place_changed', onPlaceChanged);

document.getElementById('country').addEventListener(
  'change', setAutocompleteCountry);

function onPlaceChanged(){
  var place = autocomplete.getPlace();
  if (place.geometry) {
    map.panTo(place.geometry.location);
    map.setZoom(15);
    search();
  } else {
    document.getElementById('autocomplete').placeholder = 'Enter a city'
  }
}

  //var place = search_string;
var geocoder = new google.maps.Geocoder;
var marker = google.maps.Marker({map: map
});

marker.addListener('click'), function (){
  infowindow.open(map,marker);
};

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
//var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
