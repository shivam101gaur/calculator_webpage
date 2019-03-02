var a;
var b;
var c;


function calculate()
{
	a = document.getElementById("a").value;
	b = document.getElementById("b").value;
	a = parseInt(a);
	b= parseInt(b);	
	document.getElementById("add").innerHTML = a+b;
	document.getElementById("mul").innerHTML = a*b;
	document.getElementById("sub").innerHTML = a-b;
	document.getElementById("div").innerHTML = a/b;

}