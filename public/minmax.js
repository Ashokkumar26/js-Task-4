function min() {
	let x = document.getElementById('display').value;
	let y = document.getElementById('display1').value;
	document.getElementById('ans').innerHTML = "The minimum number is : " +  Math.min(x,y);
}
function max() {
	let x = document.getElementById('display').value;
	let y = document.getElementById('display1').value;
	document.getElementById('ans').innerHTML = "The maximum number is : " +  Math.max(x, y);
}