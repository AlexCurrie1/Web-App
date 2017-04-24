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
