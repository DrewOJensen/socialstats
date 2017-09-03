var teamList = { minnesotaunited: "Minnesota United FC", SoundersFC: "Seattle Sounders FC", timbers: "Portland Timbers", NYCFC: "New York City FC", sportingkc: "Sporting Kansas City",PhillyUnion: "Philadelphia Union",TFC: "Toronto FC",OCLions: "Orlando City SC",rbny: "New York Red Bulls",LAGalaxy: "LA Galaxy",DCUnited: "D.C. United",TheMassive: "Columbus Crew SC",SJEarthquakes: "San Jose Earthquakes",Chicagofire: "Chicago Fire",NewEnglandRevolution: "New England Revolution",dynamo: "Houston Dynamo",whitecapsfc: "Vancouver Whitecaps FC",FCDallas: "FC Dallas",realsaltlake: "Real Salt Lake",Rapids: "Colorado Rapids",montrealimpact: "Montreal Impact",AtlantaUnited: "Atlanta United FC"}

var sortable = [];

$.each( teamList, function( key, val ) {
  $.ajax({
    url: "https://api.reddit.com/r/"+key+"/about",
    async: false,
    dataType: 'json',
    success: function(data) {
      subNum = data.data.subscribers;
      sortable.push([val,subNum])
      //$("#team").append(val + " : "); //DEBUG
      //$("#team").append( subNum + '<br>');  //DEBUG
    }
  });
})

sortable.sort(function(a, b){
    return b[1]-a[1]
})

//console.log(sortable) //DEBUG

for (var i=0,  tot=sortable.length; i < tot; i++) {
  $("#team").append(sortable[i][0] + " : ");
  $("#team").append(sortable[i][1] + '<br>');
}
