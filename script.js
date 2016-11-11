var next;
var prev;


var n = document.getElementById("b1");
var p = document.getElementById("b2");



n.onmouseenter= function changeColor(){
	n.style.backgroundColor = "blue";
};

n.onmouseleave = function changeBack(){
	n.style.backgroundColor = "#955351";
}
p.onmouseenter = function changeColor2(){
	p.style.backgroundColor = "blue";
}
p.onmouseleave = function changeBack2(){
	p.style.backgroundColor = "#955351";
}

n.onclick = function skipPage(){
	window.location=next;
}
p.onclick = function prevPage(){
	window.location=prev;
}
