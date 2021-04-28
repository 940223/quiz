var dataUrl = "https://www.dcard.tw/service/api/v2/forums/cgu/posts?popular=true&limit=10";
var data = $.getJSON(dataUrl);
data.done(function(msg) {
	console.log(data["responseJSON"]);
	$("#contain").append("<h2>" + data["responseJSON"][7]["title"] + "</h2>");
	$("#contain").append("<h3>" + data["responseJSON"][7]["excerpt"] + "</h3>");
	$("#contain").append("<img src=" + data["responseJSON"][7]["media"][0]["url"] + ">");
});
data.fail(function(msg) {
	// just do it
	console.log("失敗");
});