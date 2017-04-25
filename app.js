$( document ).ready(function() {
    $("#search_button").click(function(){
      var search_string = $("#search_bar").val();
      // pass string to api
      var base = window.location.pathname;

      base = base.slice(0, -10)


      var url = base+"resultspage.html?search="+search_string;
      $(location).attr('href',url);
    });
  });
  // Create the search box and link it to the UI element.
          var input = document.getElementById('search_bar');
          var searchBox = new google.maps.places.SearchBox(input);
          map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  
  //google.maps.event.addDomListener(window, 'load', init);
