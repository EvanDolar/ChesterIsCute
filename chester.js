function RandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let questions = 0;

const Equations = document.getElementById("equation");
let answer = 0;
let points = 0;

const Score = document.getElementById("score");

const Anwserbtn = document.getElementById("answerbtn");

const Solve = document.getElementById("solve");

const Solve_Equ = document.getElementById("solve_equ");

const type_label = document.getElementById("math_Type");
	
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

let selected_value = "";


function handle_change(value) {

selected_value = value;

}

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

const Btn3 = document.getElementById("btn3");

const Btn4 = document.getElementById("btn4");

const Btn5 = document.getElementById("btn5");

const Btn6 = document.getElementById("btn6");

const Btn7 = document.getElementById("btn7");

let Breaks1 = document.querySelectorAll(".breaks1");



function AdditionGameNor() {
	Btn3.style.display = 'none';


	if (Solve_Equ.value == answer) {


		points = points + 1;
		points.toString();
		console.log("Answer is correct");
	}

	if (questions < 10) {


		questions = questions + 1;
		AdditionGameNorSetup();

	}

	else {
		
		let num = Number(points);		
		num = num - 1;
		num.toString();
		Score.textContent = num;

		Score.style.display = 'block';
	}

	Solve_Equ.value = "";


}
	


function AdditionGameMed() {
	Btn3.style.display = 'none';


		if (Solve_Equ.value == answer) {


			points = points + 1;
			points.toString();
			console.log("Answer is correct");
		}

		if (questions < 10) {

			questions = questions + 1;
			AdditionGameMedSetup();
		}

		else {
		let num = Number(points);		
		num = num - 1;

		num.toString();
		Score.textContent = num;

		Score.style.display = 'block';
		}

	Solve_Equ.value = "";
}


function AdditionGameHard() {
	Btn3.style.display = 'none';

		if (Solve_Equ.value == answer) {


			points = points + 1;
			points.toString();
			console.log("Answer is correct");
		}

		if (questions < 10) {

			questions = questions + 1;
			AdditionGameHardSetup();
		}

		else {
		
		let num = Number(points);		
		num = num - 1;
		num.toString();
		Score.textContent = num;

		Score.style.display = 'block';
		}
	
	Solve_Equ.value = "";
}





function SubtractionGameNor() {
	Btn4.style.display = 'none';


	if (Solve_Equ.value == answer) {


		points = points + 1;
		points.toString();
		console.log("Answer is correct");
	}

	if (questions < 10) {

		questions = questions + 1;
		SubtractionGameNorSetup();
		}

	else {
		let num = Number(points);		
		num = num - 1;
		num.toString();
		Score.textContent = num;

		Score.style.display = 'block';
		}

	Solve_Equ.value = "";
}

function SubtractionGameMed() {
	Btn4.style.display = 'none';
	

	if (Solve_Equ.value == answer) {


		points = points + 1;
		points.toString();
		console.log("Answer is correct");
	}

	if (questions < 10) {

		questions = questions + 1;
		SubtractionGameMedSetup();
		}

	else {
		
		let num = Number(points);		
		num = num - 1;
		num.toString();
		Score.textContent = num;

		Score.style.display = 'block';
		}

	Solve_Equ.value = "";
}

function SubtractionGameHard() {
	Btn4.style.display = 'none';
	

	if (Solve_Equ.value == answer) {


		points = points + 1;
		points.toString();
		console.log("Answer is correct");
	}

	if (questions < 10) {

		questions = questions + 1;
		SubtractionGameHardSetup();
		}

	else {
		let num = Number(points);		
		num = num - 1;
		num.toString();
		Score.textContent = num;

		Score.style.display = 'block';
		}

	Solve_Equ.value = "";
}

function DivisionGameNor() {
	Btn5.style.display = 'none';

	if (Solve_Equ.value == answer) {


		points = points + 1;
		points.toString();
		console.log("Answer is correct");
	}

	if (questions < 10) {

		questions = questions + 1;
		DivisionGameNorSetup();
		}

	else {
		
		let num = Number(points);		
		num = num - 1;
		num.toString();
		Score.textContent = num;

		Score.style.display = 'block';
		}

	Solve_Equ.value = "";
}


function DivisionGameMixed() {
	Btn5.style.display = 'none';

	if (Solve_Equ.value == answer) {


		points = points + 1;
		points.toString();
		console.log("Answer is correct");
	}

	if (questions < 10) {

		questions = questions + 1;
		DivisionGameMixedSetup();
		}

	else {
		
		let num = Number(points);	
		num = num - 1;	
		num.toString();
		Score.textContent = num;

		Score.style.display = 'block';
		}

	Solve_Equ.value = "";
}

function MultiGameNor() {
	Btn6.style.display = 'none';
	if (Solve_Equ.value == answer) {


		points = points + 1;
		points.toString();
		console.log("Answer is correct");
	}

	if (questions < 10) {

		questions = questions + 1;
		MultGameNorSetup();
		}

	else {
		
		let num = Number(points);		
		num = num - 1;
		num.toString();
		Score.textContent = num;

		Score.style.display = 'block';
		}

	Solve_Equ.value = "";
}



function MultiGameMixed() {
	Btn6.style.display = 'none';
	if (Solve_Equ.value == answer) {


		points = points + 1;
		points.toString();
		console.log("Answer is correct");
	}

	if (questions < 10) {

		questions = questions + 1;
		MultGameMixedSetup();
		}

	else {
		
		let num = Number(points);	
		num = num - 1;	
		num.toString();
		Score.textContent = num;

		Score.style.display = 'block';
		}

	Solve_Equ.value = "";
}

function AlgebraGameNor() {
	Btn7.style.display = 'none';
	if (Solve_Equ.value == answer) {


		points = points + 1;
		points.toString();
		console.log("Answer is correct");
	}

	if (questions < 10) {

		questions = questions + 1;
		AlgebraGameNorSetup();
		}

	else {
		
		let num = Number(points);		
		num = num - 1;
		num.toString();
		Score.textContent = num;

		Score.style.display = 'block';
		}

	Solve_Equ.value = "";
}

function AlgebraGameMed() {
	Btn7.style.display = 'none';
	if (Solve_Equ.value == answer) {


		points = points + 1;
		points.toString();
		console.log("Answer is correct");
	}

	if (questions < 10) {

		questions = questions + 1;
		AlgebraGameMedSetup();
		}

	else {
		
		let num = Number(points);		
		num = num - 1;
		num.toString();
		Score.textContent = num;

		Score.style.display = 'block';
		}

	Solve_Equ.value = "";
}

function AlgebraGameHard() {
	Btn7.style.display = 'none';

	if (Solve_Equ.value == answer) {


		points = points + 1;
		points.toString();
		console.log("Answer is correct");
	}

	if (questions < 10) {

		questions = questions + 1;
		AlgebraGameHardSetup();
		}

	else {
		
		let num = Number(points);	
		num = num - 1;	
		num.toString();
		Score.textContent = num;

		Score.style.display = 'block';
		}

	Solve_Equ.value = "";
}

function AdditionGameNorSetup() {

	let number1 = RandomNumber(25,100);
	let number2 = RandomNumber(25,100);
	answer = number1 + number2;
	number2.toString();
	number1.toString();
	answer.toString();
	Equations.textContent = number2 + " + " + number1;
	Equations.style.display = 'block';
	Solve.style.display = 'block';
	Solve_Equ.style.display = 'block';
	Anwserbtn.onclick = AdditionGameNor;
	Anwserbtn.style.display = 'block';
	Score.style.display = 'block';

}

function AdditionGameMedSetup() {

	let number1 = RandomNumber(500,5000);
	let number2 = RandomNumber(500,5000);
	answer = number1 + number2;
	number2.toString();
	number1.toString();
	number2.toString();
	number1.toString();
	answer.toString();
	Equations.textContent = number2 + " + " + number1;
	Equations.style.display = 'block';
	Solve.style.display = 'block';
	Solve_Equ.style.display = 'block';
	Anwserbtn.onclick = AdditionGameMed;
	Anwserbtn.style.display = 'block';
}

function AdditionGameHardSetup() {

	let number1 = RandomNumber(2500,1000);
	let number2 = RandomNumber(2500,	10000);
	let number3 = RandomNumber(2500,10000);
	answer = number1 + number2 + number3;
	number2.toString();
	number1.toString();
	answer.toString();
	Equations.textContent = number2 + " + " + number1 + " + " + number3;
	Equations.style.display = 'block';
	Solve.style.display = 'block';
	Solve_Equ.style.display = 'block';
	Anwserbtn.onclick = AdditionGameHard;
	Anwserbtn.style.display = 'block';
}

function SubtractionGameNorSetup() {

	let number1 = RandomNumber(25,100);
	let number2 = RandomNumber(25,100);
	answer = number1 - number2;
	number2.toString();
	number1.toString();
	answer.toString();
	if(answer < 0) {
		answer = number2 - number1;
		Equations.textContent = number2 + " - " + number1;
	}
	Equations.style.display = 'block';
	Solve.style.display = 'block';
	Solve_Equ.style.display = 'block';
	Anwserbtn.onclick = SubtractionGameNor;
	Anwserbtn.style.display = 'block';
}

function SubtractionGameMedSetup() {

	let number1 = RandomNumber(500,5000);
	let number2 = RandomNumber(500,5000);
	answer = number1 - number2;
	
	
	answer.toString();
	number2.toString();
	number1.toString();
	Equations.textContent = number1 + " - " + number2;
	if(answer < 0) {
		answer = number2 - number1;
		Equations.textContent = number2 + " - " + number1;
	}
	Equations.style.display = 'block';
	Solve.style.display = 'block';
	Solve_Equ.style.display = 'block';
	Anwserbtn.onclick = SubtractionGameMed;
	Anwserbtn.style.display = 'block';
}

function SubtractionGameHardSetup() {

	let number1 = RandomNumber(2500,10000);
	let number2 = RandomNumber(2500,10000);
	answer = number1 - number2;

	answer.toString();
	number2.toString();
	number1.toString();
	if(answer < 0) {
		answer = number2 - number1;
		Equations.textContent = number2 + " - " + number1;
	}
	Equations.style.display = 'block';
	Solve.style.display = 'block';
	Solve_Equ.style.display = 'block';
	Anwserbtn.onclick = SubtractionGameHard;
	Anwserbtn.style.display = 'block';
}

function DivisionGameNorSetup() {

	let number1 = RandomNumber(1,12);
	let number2 = RandomNumber(1,12);
	answer = number2;
	let dividend = number1 * number2; 
	number2.toString();
	number1.toString();
	answer.toString();
	Equations.textContent = dividend + " / " + number1; 
	Equations.style.display = 'block';
	Solve.style.display = 'block';
	Solve_Equ.style.display = 'block';
	Anwserbtn.onclick = DivisionGameNor;
	Anwserbtn.style.display = 'block';
}



function DivisionGameMixedSetup() {

	let number1 = RandomNumber(100,85);
	let number2 = RandomNumber(40,25);
	let number3 = RandomNumber(70,55);
	let number4 = 0;	
	let number5 = RandomNumber(2,5);
	let number6 = RandomNumber(2,5);

	let quotient = RandomNumber(1,10);
	answer = quotient;
	
	let divisor = number3 * number6 + number2;
	let dividend = divisor * quotient;
	number4 = dividend - number5 * number1; 
	
	if(number4 < 0) {
		number2.toString();
		number1.toString();
		number3.toString();
		number5.toString();
		number6.toString();
		answer.toString();

		number4 = Math.abs(number4);
		number4.toString();
		Equations.textContent = "(" + number1 + "*" + number5 + "-" + number4 + ")" + " / " + "(" + number3 + "*" + number6 + "+" + number2 + ")";
		console.log("Div-");
	}
	else {
		number2.toString();
		number1.toString();
		number3.toString();
		number4.toString();
		number5.toString();
		number6.toString();
		answer.toString();

	Equations.textContent = "(" + number1 + "*" + number5 + "+" + number4 + ")" + " / " + "(" + number3 + "*" + number6 + "+" + number2 + ")";
	}
	Equations.style.display = 'block';
	Solve.style.display = 'block';
	Solve_Equ.style.display = 'block';
	Anwserbtn.onclick = DivisionGameMixed;
	Anwserbtn.style.display = 'block';
}

function MultiGameNorSetup() {

	let number1 = RandomNumber(1,12);
	let number2 = RandomNumber(1,12);
	answer = number1 * number2;
	number2.toString();
	number1.toString();
	answer.toString();
	Equations.textContent =  number1 + " x " + number2;
	Equations.style.display = 'block';
	Solve.style.display = 'block';
	Solve_Equ.style.display = 'block';
	Anwserbtn.onclick = MultiGameNor;
	Anwserbtn.style.display = 'block';
}

function MultiGameMixedSetup() {

	let number1 = RandomNumber(70,95);
	let number2 = RandomNumber(65,70);
	let number3 = RandomNumber(50,65);
	let number4 = RandomNumber(35,50);
	let number5 = RandomNumber(1,5);
	let number6 = RandomNumber(1,5);
	let multiple1 = number6 * number3 + number1;
	let multiple2 = number4 * number5 - number2;
	
	answer = multiple1 * multiple2;
	number2.toString();
	number1.toString();
	number3.toString();
	number4.toString();
	number5.toString();
	number6.toString();
	answer.toString();
	Equations.textContent = "(" + number6 + "*" + number3 + "+" + number4 + ")" + " * " + "(" + number1 + "*" + number5 + "-" + number2 + ")";
	Equations.style.display = 'block';
	Solve.style.display = 'block';
	Solve_Equ.style.display = 'block';
	Anwserbtn.onclick = MultiGameNor;
	Anwserbtn.style.display = 'block';

}



function AlgebraGameNorSetup() {

	let format = RandomNumber(1,2);
	
	if(format = 1) {
	
		number1 = RandomNumber(1,12);
		number2 = RandomNumber(1,12);
		let Product = number1 * number2;
	
		answer = number2;
		number2.toString();
		number1.toString();
		answer.toString();
		Equations.textContent =  number1 + " *  x = " + Product;
	
	}
		
	if(format = 2) {
	
		number1 = RandomNumber(1,12);
		number2 = RandomNumber(1,12);
		let Dividend = number1 * number2;
		answer = number2;
		number2.toString();
		number1.toString();
		answer.toString();
		Equations.textContent =  Dividend + " /  x = " + number1;
		
}
	
	Equations.textContent =  Dividend + " /  x = " + number1;
	Equations.style.display = 'block';
	Solve.style.display = 'block';
	Solve_Equ.style.display = 'block';
	Anwserbtn.onclick = AlgebraGameNor;
	Anwserbtn.style.display = 'block';
	
}

function AlgebraGameMedSetup() {
	let format = RandomNumber(1,2);
	
	if(format = 1) {
	
		number1 = RandomNumber(5,12);
		number2 = RandomNumber(5,12);
		number3 = RandomNumber(12,50);     
		let Product = number1 * number2 - number3;     
		answer = number2;
		number2.toString();
		number1.toString();
		number3.toString();
		answer.toString();
		Equations.textContent =  number1 + " *  x - " + number3 + " = " + Product;
	
	}

	if(format = 2) {
	
		number1 = RandomNumber(1,12);
		number2 = RandomNumber(1,12);
		number3 = RandomNumber(1,12);
		let Dividend = number1 * number2;
		let equals = Dividend - number3
		answer = number2;
		number2.toString();
		number1.toString();
		number1.toString();
		answer.toString();
		Equations.textContent =  Dividend + " /  x - " + number3 + " = " + equals;
		
	}

	Equations.textContent =  number1 + " x " + number2;
	Equations.style.display = 'block';
	Solve.style.display = 'block';
	Solve_Equ.style.display = 'block';
	Anwserbtn.onclick = AlgebraGameMed;
	Anwserbtn.style.display = 'block';
	
}

function AlgebraGameHardSetup() {
	let varabible = RandomNumber(1,4);
	let format = RandomNumber(1,2);		
	
	if(format = 1) {
	
		
		let number1 = RandomNumber(70,95);
		let number2 = RandomNumber(65,70);
		let number3 = RandomNumber(50,65);
		let number4 = RandomNumber(35,50);
		let number5 = RandomNumber(1,5);
		let number6 = RandomNumber(1,5);
		let multiple1 = number6 * number3 + number1;
		let multiple2 = number4 * number5 - number2;
		let solved = multiple1 * multiple2;
		 
		number1.toString();
		number2.toString();
		number3.toString();
		number4.toString();
		number5.toString();
		number6.toString();
		solved.toString();
		if(varabible = 1){
			answer = number6;
			answer.toString();		
			Equations.textContent = "(" + number6 + "*" + number3 + "+" + number4 + ")" + " * " + "(" + number1 + "*" + number5 + "-" + number2 + ")" + " = " + solved; 
			
		}		
	
		if(varabible = 2){
			answer = number4;
			answer.toString();	
			Equations.textContent = "(" + number6 + "*" + number3 + "+" + " x " + ")" + " * " + "(" + number1 + "*" + number5 + "-" + number2 + ")" + " = " + solved;
					
		}
		if(varabible = 3){
			answer = number5;
			answer.toString();	
			Equations.textContent = "(" + number6 + "*" + number3 + "+" + number4 + ")" + " * " + "(" + number1 + "*" + " x " + "-" + number2 + ")" + " = " + solved;
			
		}
		if(varabible = 4){
			answer = number2;
			answer.toString();	
			Equations.textContent = "(" + number6 + "*" + number3 + "+" + number4 + ")" + " * " + "(" + number1 + "*" + number5 + "-" + " x " + ")" + " = " + solved; 
			
		}		
					
	}
	
		if(format = 2) {
	
		
			let number1 = RandomNumber(375,450);
			let number2 = RandomNumber(300,375);
			let number3 = RandomNumber(225,300);
			let number4 = 0;
			let number5 = RandomNumber(2,9);
			let number6 = RandomNumber(2,9);
			
			let quotient = RandomNumber(1,10);
		
			let divisor = number3 * number6 + number2;
			let dividend = divisor * quotient;
			number4 = dividend - number5 * number1; 
	
			quotient.toString();
			number1.toString();
			number2.toString();
			number3.toString();
			number4.toString();
			number5.toString();
			number6.toString()

		if(varabible = 1){
			Equations.textContent = "(" + " x " + "*" + number5 + "-" + number4 + ")" + " / " + "(" + number3 + "*" + number6 + "+" + number2 + ") = " + quotient;
			answer = number1;
		}		
	
		if(varabible = 2){
			Equations.textContent = "(" + number1 + "*" + " x " + "-" + number4 + ")" + " / " + "(" + number3 + "*" + number6 + "+" + number2 + ") = " + quotient;
			answer = number5;
		}
		if(varabible = 3){
			Equations.textContent = "(" + number1 + "*" + number5 + "-" + " x " + ")" + " / " + "(" + number3 + "*" + number6 + "+" + number2 + ") = " + quotient;
			answer = number4;
		}
		if(varabible = 4){
			Equations.textContent = "(" + number1 + "*" + number5 + "-" + number4 + ")" + " / " + "(" + number3 + "*" + number6 + "+" + " x " + ") = " + quotient;
			answer = number2;
		}		
		
	
	}
	
	Equations.style.display = 'block';
	Solve.style.display = 'block';
	Solve_Equ.style.display = 'block';
	Anwserbtn.onclick = AlgebraGameHard;
	Anwserbtn.style.display = 'block';

}

function AdditionGame()	 {
	Anwserbtn.style.display = 'block';
	Addition_difficulty.style.display = 'none';
	Addition_label.style.display = 'none';
   if (selected_value === "normal") {
		AdditionGameNor();
      } 
	else if (selected_value === "medium") {
       AdditionGameMed();
      } 
	else if (selected_value === "hard") {
		AdditionGameHard();        
      } 
	else {
      	Addition_difficulty.style.display = 'block';
		Addition_label.style.display = 'block';
      }
    }

function SubtractionGame() {
	Anwserbtn.style.display = 'block';

	Subtraction_difficulty.style.display = 'none';
	Subtraction_label.style.display = 'none';
   if (selected_value === "normal") {
        SubtractionGameNor();
      } 
	else if (selected_value === "medium") {
       SubtractionGameMed();
      } 
	else if (selected_value === "hard") {
        SubtractionGameHard();
      } 
	else {
      	Subtraction_difficulty.style.display = 'block';
		Subtraction_label.style.display = 'block';
      }
    }

function MultiplicationGame() {
	Anwserbtn.style.display = 'block';

	Multiplication_difficulty.style.display = 'none';
	Multiplication_label.style.display = 'none';
   if (selected_value === "normal") {
        MultiGameNor();
      } 
	else if (selected_value === "mixed") {
        MultiGameMixed();
      } 
	else {
      	Multiplication_difficulty.style.display = 'block';
		Multiplication_label.style.display = 'block';
      }
    }

function DivisionGame() {
	Anwserbtn.style.display = 'block';

	Division_difficulty.style.display = 'none';
	Division_label.style.display = 'none';
   if (selected_value === "normal") {
		DivisionGameNor();        
      } 
	else if (selected_value === "mixed") {
        DivisionGameMixed();
      } 
	else {
    	Division_difficulty.style.display = 'block';
		Divison_label.style.display = 'block';
      }
    }

function AlgebraGame() {
	Anwserbtn.style.display = 'block';

	Algebra_difficulty.style.display = 'none';
	Algebra_label.style.display = 'none';
   if (selected_value === "normal") {
		AlgebraGameNor();
      } 
	else if (selected_value === "medium") {
		AlgebraGameMed();
      } 
	else if (selected_value === "hard") {
		AlgebraGameHard();
      } 
	else {
      Algebra_difficulty.style.display = 'block';
		Algebra_label.style.display = 'block';
      }
    }

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

Btn3.style.display = 'none';
Btn4.style.display = 'none';
Btn5.style.display = 'none';
Btn6.style.display = 'none';
Btn7.style.display = 'none';
Anwserbtn.style.display = 'none';

Equations.style.display = 'none';
Solve.style.display = 'none';
Solve_Equ.style.display = 'none';
Score.style.display = 'none';
Btn2.addEventListener("click", event => {

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
	type_label.style.display = 'none';



	Breaks1.forEach(el => {
  		el.style.display = "none";
	});

	if(Addition.checked){
		Addition_difficulty.style.display = 'block';
		Addition_label.style.display = 'block';
		Btn3.style.display = 'block';
	}
	else if(Subtraction.checked){
		Subtraction_label.style.display = 'block';
		Subtraction_difficulty.style.display = 'block';
		Btn4.style.display = 'block';
	}
	
	else if(Division.checked){
		Division_label.style.display = 'block';
		Division_difficulty.style.display = 'block';
		Btn5.style.display = 'block';
	}
	
	else if(Multiplication.checked){
		Multiplication_label.style.display = 'block';
		Multiplication_difficulty.style.display = 'block';
		Btn6.style.display = 'block';
	}
	
	else if(Algebra.checked) {
		Algebra_label.style.display = 'block';
		Algebra_difficulty.style.display = 'block';
		Btn7.style.display = 'block';
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
		type_label.style.display = 'block';

		Breaks1.forEach(el => {
  			el.style.display = "block";
		});
	}

});


