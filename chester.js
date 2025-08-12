const Btn1 = document.getElementById("btn1");

const Chesterphoto1 = document.getElementById("chesterphoto1");

Btn1.addEventListener("click", event => {

	if(Chesterphoto1.style.display === "none"){
		Chesterphoto1.style.display = "block";
		Btn1.textContent = "hide";
	} 
	else{
		Chesterphoto1.style.display = "none";
	
		Btn1.textContent = "show";
	}
	
	
}); 