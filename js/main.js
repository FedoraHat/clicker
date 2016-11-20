var hugs = 0; //declarando a variável de moeda

function hugClick(n){ //aumentando hugs a cada clique
	hugs = hugs + n;
	document.getElementById("hugs").innerHTML = hugs;
};