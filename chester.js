
	
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
const Algebra = document.getElementById("algebra");



const Addition_label = document.getElementById("addition_difficulty_label");
const Addition_difficulty = document.getElementById("addition_difficulty");

const Subtraction_label = document.getElementById("subtraction_difficulty_label");
const Subtraction_difficulty = document.getElementById("subtraction_difficulty");

const Division_label = document.getElementById("division_difficulty_label");
const Division_difficulty = document.getElementById("division_difficulty");

const Multiplication_label = document.getElementById("multiplication_difficulty_label");
const Multiplication_difficulty = document.getElementById("multiplication_difficulty");

const Algebra_label = document.getElementById("algebra_difficulty_label");
const Algebra_difficulty = document.getElementById("algebra_difficulty");


Addition_difficulty.style.display = 'none';
Addition_label.style.display = 'none';

Subtraction_label.style.display = 'none';
Subtraction_difficulty.style.display = 'none';

Division_label.style.display = 'none';
Division_difficulty.style.display = 'none';

Multiplication_label.style.display = 'none';
Multiplication_difficulty.style.display = 'none';

Algebra_label.style.display = 'none';
Algebra_difficulty.style.display = 'none';

Btn2.onclick = function(){

	Addition.style.display = 'none';
	label_1.style.display = 'none';
	Subtraction.style.display = 'none';
	label_2.style.display = 'none';
	Division.style.display = 'none';
	label_3.style.display = 'none';
	Multiplication.style.display = 'none';
	label_4.style.display = 'none';
	Algebra.style.display = 'none';
	label_5.style.display = 'none';
	Btn2.style.display = 'none';
	

	if(Addition.checked){
		Addition_difficulty.style.display = 'block';
		Addition_label.style.display = 'block';
	
	}
	else if(Subtraction.checked){
		Subtraction_label.style.display = 'block';
		Subtraction_difficulty.style.display = 'block';
	}
	
	else if(Division.checked){
		Division_label.style.display = 'none';
		Division_difficulty.style.display = 'none';
	}
	
	else if(Muliplication.checked){
		Multiplication_label.style.display = 'none';
		Multiplication_difficulty.style.display = 'none';
	}
	
	else if(Algebra.checked) {
		Algebra_label.style.display = 'none';
		Algebra_difficulty.style.display = 'none';
	}	

	else {
			Addition.style.display = 'block';
	label_1.style.display = 'block';
	Subtraction.style.display = 'block';
	label_2.style.display = 'block';
	Division.style.display = 'block';
	label_3.style.display = 'block';
	Multiplication.style.display = 'block';
	label_4.style.display = 'block';
	Algebra.style.display = 'block';
	label_5.style.display = 'block';
	Btn2.style.display = 'block';
	}
}