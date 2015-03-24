teamList = ["minnesotaunited","atlantasilverbacks","railhawks","fcedmonton","ftlstrikers","indyeleven","armadafc","nycosmos","ottawafuryfc","sascorpionsfc","tampabayrowdies"];

$.each( teamList, function( key, val ) {
  $.getJSON(
    "http://api.reddit.com/r/"+val+"/about",
    function foo(data)
    {
      $("#team").append(val + " : ");
      $("#team").append(data.data.subscribers + '<br>');
    }
  );
});
