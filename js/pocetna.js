var contentright;
var kliknuto = false;
var text;
var gta, ac, metro;
var sto;
var slika;
var gtaslika = ['images/gta1.jpg', 'images/gta_pozadina.jpg', 'images/gta2.jpg'];
var acslika = ['images/ac.png', 'images/ac_pozadina.jpg', 'images/arno_i_elise.jpg'];
var metroslika = ['images/metro_pozadina2.jpg', 'images/metro_pozadina.jpg', 'images/metro_pozadina1.jpg'];
var brslika = 2;
var i = 0; 
var gtas = false, acs = false, metros = false;
var fact, dodje, ode, provera = true, dodjeode;

function pocetak() {
	if(!kliknuto) {
		contentright = document.getElementById('content-right');
		text = document.createElement("P");
		text.innerText="Odaberi iz koje igre želiš  da gledaš slike.";
		contentright.appendChild(text);

		gta = document.createElement("div");
		gta.setAttribute("class", "izbor");
		gta.innerText="GTA";
		gta.onclick=slikegta;
		contentright.appendChild(gta);

		ac = document.createElement("div");
		ac.setAttribute("class", "izbor");
		ac.innerText="AC";
		ac.onclick=slikeac;
		contentright.appendChild(ac);

		metro = document.createElement("div");
		metro.setAttribute("class", "izbor");
		metro.innerText="Metro";
		metro.onclick=slikemetro;
		contentright.appendChild(metro);

		kliknuto = true;

		gta.onmouseover = prekriven;
		ac.onmouseover = prekriven;
		metro.onmouseover = prekriven;

		gta.onmouseout = nijeprekriven;
		ac.onmouseout = nijeprekriven;
		metro.onmouseout = nijeprekriven;
	}	
}


function ucitavanje() {
	fact = document.getElementById("fact");
	fact.style.left = "-180px";
	dodjeode = setInterval(dodjeodee, 5000);
}

function dodjeodee() {
	if(provera) {
		dodje = setInterval(dodjee, 1);
	}
	if(!provera) {
		ode = setInterval(odee, 1);
	}
}

function dodjee() {
	if(parseInt(fact.style.left) != 0) {
		fact.style.left = parseInt(fact.style.left)+2+"px";
	}
	else  {
		clearInterval(dodje);
		provera = false;
	}
}

function odee() {
	if(parseInt(fact.style.left) != -180) {
		fact.style.left = parseInt(fact.style.left)-2+"px";
	}
	else { 
		clearInterval(ode);	
		provera = true;
	}
}


function prekriven() {
	this.style.backgroundColor= "rgb(" + 238 + "," + 235 + "," + 226 +")";
	this.style.color = "black";
}

function nijeprekriven() {
	this.style.backgroundColor= "rgb(" + 255 + "," + 0 + "," + 0 + "," + 0.5 + ")";
	this.style.color = "white";
}

function slikegta() {
	postavka();
	gtas = true;
	slika = document.createElement("img");
	slika.setAttribute('src', gtaslika[0]);
	slika.style.setProperty("max-width", "800px");
	slika.style.setProperty("max-height", "450px");
	sto.appendChild(slika);
	dugmici();
}

function slikeac() {
	postavka();
	acs = true;
	slika = document.createElement("img");
	slika.setAttribute('src', acslika[0]);
	slika.style.setProperty("max-width", "800px");
	slika.style.setProperty("max-height", "450px");
	sto.appendChild(slika);
	dugmici();
}

function slikemetro() {
	postavka();
	metros = true;
	slika = document.createElement("img");
	slika.setAttribute('src', metroslika[0]);
	slika.style.setProperty("max-width", "800px");
	slika.style.setProperty("max-height", "450px");
	sto.appendChild(slika);
	dugmici();
}

function dugmici() {
	var dugmad = document.createElement("div");
	dugmad.setAttribute("class", "dugmad");
	sto.appendChild(dugmad);

	var dugmad2 = document.createElement("div");
	dugmad2.setAttribute("class", "dugmad2");
	sto.appendChild(dugmad2);

	var zoom = document.createElement("button");
	zoom.innerText = "+";
	zoom.setAttribute("class", "jedno");
	dugmad.appendChild(zoom);

	var unzoom = document.createElement("button");
	unzoom.innerText = "-";
	unzoom.setAttribute("class", "jedno");
	dugmad.appendChild(unzoom);

	var prev = document.createElement("button");
	prev.innerText = "<";
	prev.setAttribute("class", "jedno");
	dugmad2.appendChild(prev);

	var next = document.createElement("button");
	next.innerText = ">";
	next.setAttribute("class", "jedno");
	dugmad2.appendChild(next);

	var exit = document.createElement("button");
	exit.setAttribute("class", "jedno");
	exit.style.setProperty("position", "absolute");
	exit.style.left = "0px";
	exit.style.top = "0px";
	exit.innerText = "x";
	sto.appendChild(exit);

	exit.onclick = exitt;
	zoom.onclick = zoomm;
	unzoom.onclick = unzoomm;
	next.onclick = nextt;
	prev.onclick = prevv;

	exit.onmouseover = na;
	zoom.onmouseover = na;
	unzoom.onmouseover = na;
	next.onmouseover = na;
	prev.onmouseover = na;

	exit.onmouseout = no;
	zoom.onmouseout = no;
	unzoom.onmouseout = no;
	next.onmouseout = no;
	prev.onmouseout = no;
}

function na() {
	this.style.backgroundColor= "rgb(" + 0 + "," + 0 + "," + 0 +")";
}

function no() {
	this.style.backgroundColor= "rgb(" + 0 + "," + 0 + "," + 0 + "," + 0.5 +")";
}


function postavka() {
	contentright.removeChild(text);
	contentright.removeChild(gta);
	contentright.removeChild(ac);
	contentright.removeChild(metro);

	sto = document.createElement("div");
	sto.setAttribute("class", "container");
	sto.style.border = "5px solid black";
	sto.style.borderRadius = "5px";
	document.body.appendChild(sto);
}

function exitt() {
	document.body.removeChild(sto);
	kliknuto = false;
	gtas = false;
	acs = false;
	metros = false;
	i = 0;
}

function zoomm() {
	slika.style.transition = "all 1s";
	slika.style.objectFit = "fill";
	slika.style.transform += "scale(1.1)";
}

function unzoomm() {
	slika.style.transition = "all 1s";
	slika.style.objectFit = "fill";
	slika.style.transform += "scale(0.9)";
}

function nextt() {
	if(gtas) {
		if(i < brslika) {
			i += 1;
			slika.setAttribute('src', gtaslika[i]);
			slika.style.transform = "scale(1.0)";
		}
		else alert("Nema vise slika!");
	}
	else if(acs) {
		if(i < brslika) {
			i += 1;
			slika.setAttribute('src', acslika[i]);
			slika.style.transform = "scale(1.0)";
		}
		else alert("Nema vise slika!");
	}
	else if(metros) {
		if(i < brslika) {
			i += 1;
			slika.setAttribute('src', metroslika[i]);
			slika.style.transform = "scale(1.0)";
		}
		else alert("Nema vise slika!");
	}
}

function prevv() {
	if(gtas) {
		if(i > 0) {
			i -= 1;
			slika.setAttribute('src', gtaslika[i]);
			slika.style.transform = "scale(1.0)";
		}
	}
	else if(acs) {
		if(i > 0) {
			i -= 1;
			slika.setAttribute('src', acslika[i]);
			slika.style.transform = "scale(1.0)";
		}
	}
	else if(metros) {
		if(i > 0) {
			i -= 1;
			slika.setAttribute('src', metroslika[i]);
			slika.style.transform = "scale(1.0)";
		}
	}
}