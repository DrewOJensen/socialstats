var teamList = { minnesotaunited: "Minnesota United FC", SoundersFC: "Seattle Sounders FC", timbers: "Portland Timbers", NYCFC: "New York City FC", sportingkc: "Sporting Kansas City",PhillyUnion: "Philadelphia Union",TFC: "Toronto FC",OCLions: "Orlando City SC",rbny: "New York Red Bulls",LAGalaxy: "LA Galaxy",DCUnited: "D.C. United",TheMassive: "Columbus Crew SC",SJEarthquakes: "San Jose Earthquakes",Chicagofire: "Chicago Fire",NewEnglandRevolution: "New England Revolution",dynamo: "Houston Dynamo",whitecapsfc: "Vancouver Whitecaps FC",FCDallas: "FC Dallas",realsaltlake: "Real Salt Lake",Rapids: "Colorado Rapids",montrealimpact: "Montreal Impact", AtlantaUnited: "Atlanta United FC"}

$.each( teamList, function( key, val ) {
  $.getJSON(
    "https://api.reddit.com/r/"+key+"/about",
    function foo(data)
    {
      $("#team").append(val + " : ");
      $("#team").append(data.data.subscribers + '<br>');
    }
  );
});
