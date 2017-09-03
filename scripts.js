teamList = ["minnesotaunited","SoundersFC","timbers","NYCFC","sportingkc","PhillyUnion","TFC","OCLions","rbny","LAGalaxy","DCUnited","TheMassive","SJEarthquakes","Chicagofire","NewEnglandRevolution","dynamo","whitecapsfc","FCDallas","realsaltlake","Rapids","montrealimpact"];

$.each( teamList, function( key, val ) {
  $.getJSON(
    "https://api.reddit.com/r/"+val+"/about",
    function foo(data)
    {
      $("#team").append(val + " : ");
      $("#team").append(data.data.subscribers + '<br>');
    }
  );
});
