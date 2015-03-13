var corransw = 0;
var incorransw = 0;

document.getElementById('btn-test').addEventListener('click', display);
document.getElementById('btn-check').addEventListener('click', checking);

function display() {

	var rN1 = Math.floor(Math.random() * 11),
	rN2 = Math.floor(Math.random() * 11);

	if (document.getElementById('option1').checked) {
	document.getElementById('example').innerHTML = rN1 + " + " + rN2 + " = ?";
	answ = rN1 + rN2;
	} else if (document.getElementById('option2').checked) {
		document.getElementById('example').innerHTML = rN1 + " - " + rN2 + " = ?";
	answ = rN1 - rN2;
	} else if (document.getElementById('option3').checked) {
		document.getElementById('example').innerHTML = rN1 + " * " + rN2 + " = ?";
	answ = rN1 * rN2;
	} else if (document.getElementById('option4').checked) {
		document.getElementById('example').innerHTML = rN1 + " / " + rN2 + " = ?";
	answ = rN1 / rN2;
	} else { };
}

function checking() {

	userAnsw = document.getElementById('useransw').value;
	if (answ == userAnsw) {
		corransw++;
		document.getElementById('corran').innerHTML = corransw;
		display();
	} else {
		incorransw++;
		document.getElementById('incorran').innerHTML = incorransw;
	}
}