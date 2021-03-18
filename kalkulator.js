function zbroji() 
{
	var x = Number(document.getElementById("var1").value);
	var y = Number(document.getElementById("var2").value);
	var z = x+y;
	document.getElementById("rez").innerHTML = z;
}
function oduzmi() 
{
	var x = Number(document.getElementById("var1").value);
	var y = Number(document.getElementById("var2").value);
	var z = x-y;
	document.getElementById("rez").innerHTML = z;
} 
function pomnozi() 
{
	var x = Number(document.getElementById("var1").value);
	var y = Number(document.getElementById("var2").value);
	var z = x*y;
	document.getElementById("rez").innerHTML = z;
} 
function podijeli() 
{
	var x = Number(document.getElementById("var1").value);
	var y = Number(document.getElementById("var2").value);
	var z = x/y;
	document.getElementById("rez").innerHTML = z;
} 
function potenciraj() 
{
	var x = Number(document.getElementById("var1").value);
	var y = Number(document.getElementById("var2").value);
	var z = x**y;
	document.getElementById("rez").innerHTML = z;
}  
function trokut()
{
	var x = Number(document.getElementById("var1").value);
	var y = Number(document.getElementById("var2").value);
	var z = (x*x + y*y)**(1/2);
	document.getElementById("rez").innerHTML = z;
}
function mod()
{
	var x = Number(document.getElementById("var1").value);
	var y = Number(document.getElementById("var2").value);
	var z = x%y;
	document.getElementById("rez").innerHTML = z;
}
function sigma()
{
	var x = Number(document.getElementById("var1").value);
	var y = Number(document.getElementById("var2").value);
	var sum=0;
	var i;
	for(i=x;i<=y;i++)
	{
		sum=sum+i;
	}
	var z = sum;
	document.getElementById("rez").innerHTML = z;
}