
function provjeri() 
{
	var pitanje01 = document.kviz.pitanje01.value;
	var pitanje02 = document.kviz.pitanje02.value;
	var pitanje03 = document.kviz.pitanje03.value;
	var pitanje04 = document.kviz.pitanje04.value;
	var pitanje05 = document.kviz.pitanje05.value;
	
	
	var rezultat = 0;
	
	if (pitanje01 == "a") {
		rezultat++;	
	}
	
	if (pitanje02 == "c") {
		rezultat++;	
	}
	
	if (pitanje03 == "c") {
		rezultat++;	
	}
	if (pitanje04 == "d") {
		rezultat++;	
	}
	if (pitanje05 == "b") {
		rezultat++;	
	}
		
	document.getElementById("brojtocnih").innerHTML = "Imaš " + rezultat + " točnih odgovora: " + rezultat*20 + "%" + " ,a minimum 80% je prolaz";
		
}