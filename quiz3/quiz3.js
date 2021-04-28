var dataUrl = "https://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=a3e2b221-75e0-45c1-8f97-75acbd43d613";
var data = $.getJSON(dataUrl);

//data=JSON.stringify(data);
//data.replace("\ufeff","");
//data=JSON.parse(data);
data.done(function(msg) {
	console.log(data["responseJSON"]["result"]["results"]);
	for (var i = 0; i < 750; i++) {
		$("#contain2").append("<h2>" + data["responseJSON"]["result"]["results"][i]["A_Code"] + "</h2>");
		$("#contain2").append("<h2>" + data["responseJSON"]["result"]["results"][i]["A_Name_Ch"] + "</h2>");
		$("#contain2").append("<h3>" + data["responseJSON"]["result"]["results"][i]["A_Behavior"] + "</h3>");
		$("#contain2").append("<img src=" + data["responseJSON"]["result"]["results"][i]["A_Pic02_URL"] + ">");
	}
	//data["responseJSON"]["items"][0]["media"]
});
data.fail(function(msg) {
	// just do it!
});
