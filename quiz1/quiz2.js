var tags = "李知恩";
var dataUrl = "https://api.flickr.com/services/feeds/photos\_public.gne?tags=" + tags
+"&tagmode=any&format=json&per_page=400&jsoncallback=?";
var data = $.getJSON(dataUrl);
data.done( function( msg ) {
console.log(data["responseJSON"]["items"][0]["media"]["m"]);
  for(var i=0;i<20;i++){
    $ ( " body " ) . append ("<img src="+data["responseJSON"]["items"][i]["media"]["m"]+">");
  }
  //data["responseJSON"]["items"][0]["media"]
});
data.fail( function( msg ) {
// just do it!
});
