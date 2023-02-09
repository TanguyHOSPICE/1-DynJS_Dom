/**Declaration variables**/
const colorpicker = document.getElementById('colorpicker');
//titre
const title = document.getElementsByTagName('h1');
//nav ul li (d'après le css c'est la couleur du a qui change de couleur)
const navListes = document.getElementsByTagName('ul');
//articles
const articles = document.getElementsByTagName('article');
//class active
const active = document.getElementsByClassName('active');
//badge (d'après le css c'est le bg label qui change de couleur)
const badgeLabel = document.getElementsByClassName('circle');
console.log(badge);

changeColor = (ev) => {
	const color = ev.target.value;

	//boucle ds ul
	for (let i = 0; i < navListes.length; i++) {
		//navbar couleur
		navListes.item(i).style.background = color;
	}
	//badge bg couleur
	for (let i = 0; i < badge.length; i++) {
		badgeLabel.item(i).style.background = color;
	}
	//bordures articles
	for (let i = 0; i < articles.length; i++) {
		articles.item(i).style.borderColor = color;
	}
	//titre couleur
	for (let i = 0; i < title.length; i++) {
		title.item(i).style.color = color;
	}
	//liens active text couleur
	for (let i = 0; i < active.length; i++) {
		active.item(i).firstChild.style.color = color;
	}
};

colorpicker.addEventListener('change', changeColor);
