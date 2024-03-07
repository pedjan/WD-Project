var vreme = 10;

function prenos() {
	setTimeout(prenos2, 10000);
	setInterval(brojac, 1000);
}

function brojac() {
	vreme--;
	document.getElementById("brojac").textContent = vreme;
}

function prenos2() {
	window.location.replace("pocetna.html");
}
