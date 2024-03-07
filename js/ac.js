var content, content2;
function pocetak() {
	content = document.getElementById("content");
	content2 = document.getElementById("content2");
	content.style.position = "absolute";
	content.style.left = "-700px";
	var prvi = setInterval(levo, 1);

	content2.style.position = "absolute";
	content2.style.top = "-400px";
	var drugi = setInterval(dole, 1);

}

function levo() {
	if(parseInt(content.style.left) != 2) {
		content.style.left = parseInt(content.style.left)+3+"px";
	}
	else clearInterval(prvi);
}

function dole() {
	if(parseInt(content2.style.top) != 80) {
		content2.style.top = parseInt(content2.style.top)+2+"px";
	}
	else clearInterval(drugi);
}