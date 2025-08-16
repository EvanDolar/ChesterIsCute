const Btn1 = document.getElementById("btn1");

const Chesterphoto1 = document.getElementById("chesterphoto1");

Btn1.addEventListener("click", event => {

	if(Chesterphoto1.style.display === 'none'){
		Chesterphoto1.style.display = 'block';
		Btn1.textContent = "hide";
	} 
	else{
		Chesterphoto1.style.display = 'none';
	
		Btn1.textContent = "show";
	}
	
const Btn2 = document.getElementById("btn2");

const Type_label = document.getElementById("math_Type");

const label_1 = document.getElementById("addition_label");
const Addition = document.getElementById("addition");

const label_2 = document.getElementById("subtraction_label");
const Subtraction = document.getElementById("subtraction");

const label_3 = document.getElementById("division_label");
const Division = document.getElementById("division");

const label_4 = document.getElementById("multiplication_label");
const Multiplication = document.getElementById("multiplication");

const label_5 = document.getElementById("algebra_label");
const Alegbra = document.getElementById("algebra");

const Addition_label = document.getElementById("addition_label");
const Addition_difficulty = document.getElementById("addition_difficulty");

const Subtraction_label = document.getElementById("subtraction_label");
const Subtraction_difficulty = document.getElementById("subtraction_difficulty");

const Division_label = document.getElementById("division_label");
const Division_difficulty = document.getElementById("division_difficulty");

const Multiplication_label = document.getElementById("multiplication_label");
const Multiplication_difficulty = document.getElementById("multiplication_difficulty");

const Algebra_label = document.getElementById("algebra_label");
const Algebra_difficulty = document.getElementById("algebra_difficulty");

Addition_label.style.display = 'none';
Addition_difficulty.style.display = 'none';

Subtraction_label.style.display = 'none';
Subtraction_difficulty.style.display = 'none';

Division_label.style.display = 'none';
Division_difficulty.style.display = 'none';

Multiplication_label.style.display = 'none';
Multiplication_difficulty.style.display = 'none';

Algebra_label.style.display = 'none';
Algebra_difficulty.style.display = 'none';

