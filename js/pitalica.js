function provera() { 
	var imeUnos = document.getElementById("ime");
	imeUnos.oninvalid = ime;
	imeUnos.oninput = ime;

	var prezimeUnos = document.getElementById("prezime");
	prezimeUnos.oninvalid = prezime;
	prezimeUnos.oninput = prezime;

	var emailUnos = document.getElementById("email");
	emailUnos.oninvalid = email;
	emailUnos.oninput = email;

	var misljenjeUnos = document.getElementById("odabir");
	misljenjeUnos.oninvalid = misljenje;
	misljenjeUnos.oninput = misljenje;

	var godinaUnos = document.getElementById("godina");
	godinaUnos.oninvalid = godina;
	godinaUnos.oninput = godina;
}

function check() {
	var igra = document.getElementById("igra");
	var igra2 = document.getElementById("igra2");
	var igra3 = document.getElementById("igra3");
	if(!igra.checked && !igra2.checked && !igra3.checked) {
		alert("Odaberite bar jednu igru!");
		return false;		
	}
}

function ime() {
	this.setCustomValidity("");
	if (this.validity.valueMissing) {
		this.setCustomValidity("Morate uneti ime.");
	}
	if(this.value.charAt(0).toUpperCase() != this.value.charAt(0)) {
		this.setCustomValidity("Prvo slovo mora biti veliko.");
	}
}

function prezime() {
	this.setCustomValidity("");
	if (this.validity.valueMissing) {
		this.setCustomValidity("Morate uneti prezime.");
	}
	if(this.value.charAt(0).toUpperCase() != this.value.charAt(0)) {
		this.setCustomValidity("Prvo slovo mora biti veliko.");
	}
}

function email() {
	this.setCustomValidity("");
	if (this.validity.valueMissing) {
		this.setCustomValidity("Morate uneti email.");
	} else if (this.validity.patternMismatch) {
		this.setCustomValidity("Email nije ispravan!");
	}
}

function misljenje() {
	this.setCustomValidity("");
	if (this.validity.valueMissing) {
		this.setCustomValidity("Morate odabrati nešto.");
	}
}

function godina() {
	this.setCustomValidity("");
	if (this.validity.valueMissing) {
		this.setCustomValidity("Morate uneti.");
	} else if (this.validity.patternMismatch) {
		this.setCustomValidity("Goina ima četiri cifre.");
	} else if(this.value > 2021) {
		this.setCustomValidity("Broj godine prevelik.");
	}
	else if(this.value < 1958) {
		this.setCustomValidity("Prva video igra je nastala 1958. godine!");
	}
}