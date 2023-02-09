/**Declaration variables**/
const colorpicker = document.getElementById('colorpicker');
//titre
const title = document.getElementsByTagName('h1');
//nav ul li (d'après le css c'est le bg ul qui change de couleur)
const navListes = document.getElementsByTagName('ul');
//articles
const articles = document.getElementsByTagName('article');
//class active
const active = document.getElementsByClassName('active');
//badge (d'après le css c'est le bg label qui change de couleur)
const badge = document.getElementsByClassName('circle');
console.log(badge);

/* 
changeColor = (ev) => {
	const color = ev.target.value;
	console.log(color);
	// votre code ici
};

colorpicker.addEventListener('change', changeColor); */
