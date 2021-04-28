
function change()
{


    var btn = document.createElement("BUTTON");
    btn.innerHTML = "CLICK ME";
    document.body.appendChild(btn);

    btn.setAttribute("id","bt");
	
	$("#bt")[0].addEventListener("click", function()
    {
        var header = $("h1")[0];
        header.innerHTML = "CSIE@CGU";
        var para = $("h2")[0];
        para.innerHTML = "怎麼那麼棒！！ .";
    })
}

