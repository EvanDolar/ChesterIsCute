function RandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let ask_question = false;
let runs = 0; 
let maxRuns = 10;
let Equations = document.getElementById("equation");
let anwser = 0;
let points = 0;

const Score = document.getElementById("score");

const Anwserbtn = document.getelementById("answerbtn");

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

let selected_value ="";

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

	const interval = setInterval(() => {
    if (ask_questions && runs < maxRuns) {
        AdditionGameNorSetup();
        runs++;
    }

    // Check if the answer is correct
    if (Solve_Equ === answer) {
        points = points + 1;
        points.toString(); // <-- This still does nothing, you can remove it
    }

    // Stop when maxRuns reached
    if (runs >= maxRuns) {
        clearInterval(interval);
        Score.textContent = points;

        // Hide elements properly
        Equations.style.display = 'none';
        Solve.style.display = 'none';
        Solve_Equ.style.display = 'none';
        Answerbtn.style.display = 'none';
    }
}, 1000); // <-- Closing parenthesis for setInterval



	/*const interval = setInterval(() => {
   	 if (ask_questions && runs < maxRuns) {
      	  AdditionGameNorSetup();
        	  runs++;
    }
		if (Solve_Equ = anwser) {
		    points = points + 1;
		    points.toString();
}	
    	if (runs >= maxRuns) {
      	clearInterval(interval);
      	Score.textContent = points;
	   	Equations.style.display = 'none';
	   	Solve.style.display = 'none';
			Solve_Equ.style.display = 'none';
  	   	Anwserbtn.style.display = 'none';
    }
}
*/
}
	


function AdditionGameMed() {
	const interval = setInterval(() => {
   	if (ask_questions && runs < maxRuns) {
      	AdditionGameMedSetup();
         runs++;
    }
		if (Solve_Equ = anwser) {
			points = points + 1;
	  	   points.toString();
	}
	
    if (runs >= maxRuns) {
		clearInterval(interval);
      Score.textContent = points;
	   Equations.style.display = 'none';
	   Solve.style.display = 'none';
		Solve_Equ.style.display = 'none';
  	   Anwserbtn.style.display = 'none';
    }
}
}

function AdditionGameHard() {

	const interval = setInterval(() => {
   	if (ask_questions && runs < maxRuns) {
      	AdditionGameHardSetup();
         runs++;
    }
		if (Solve_Equ = anwser) {
			points = points + 1;
	  	   points.toString();
	}
    if (runs >= maxRuns) {
		clearInterval(interval);
      Score.textContent = points;
	   Equations.style.display = 'none';
	   Solve.style.display = 'none';
		Solve_Equ.style.display = 'none';
  	   Anwserbtn.style.display = 'none';
    }
}
	
}

function SubtractionGameNor() {
	const interval = setInterval(() => {
   	if (ask_questions && runs < maxRuns) {
      	SubtractionGameNorSetup();
         runs++;
    }
		if (Solve_Equ = anwser) {
			points = points + 1;
	  	   points.toString();
	}
    if (runs >= maxRuns) {
		clearInterval(interval);
      Score.textContent = points;
	   Equations.style.display = 'none';
	   Solve.style.display = 'none';
		Solve_Equ.style.display = 'none';
  	   Anwserbtn.style.display = 'none';
    }
}
}

function SubtractionGameMed() {
	const interval = setInterval(() => {
   	if (ask_questions && runs < maxRuns) {
      	SubtractionGameMedSetup();
         runs++;
    }
		if (Solve_Equ = anwser) {
			points = points + 1;
	  	   points.toString();
	}
    if (runs >= maxRuns) {
		clearInterval(interval);
      Score.textContent = points;
	   Equations.style.display = 'none';
	   Solve.style.display = 'none';
		Solve_Equ.style.display = 'none';
  	   Anwserbtn.style.display = 'none';
    }
}
}

function SubtractionGameHard() {
	const interval = setInterval(() => {
   	if (ask_questions && runs < maxRuns) {
      	SubtractionGameHardSetup();
         runs++;
    }
		if (Solve_Equ = anwser) {
			points = points + 1;
	  	   points.toString();
	}
    if (runs >= maxRuns) {
		clearInterval(interval);
      Score.textContent = points;
	   Equations.style.display = 'none';
	   Solve.style.display = 'none';
		Solve_Equ.style.display = 'none';
  	   Anwserbtn.style.display = 'none';
    }
}
}

function DivisionGameNor() {
	const interval = setInterval(() => {
   	if (ask_questions && runs < maxRuns) {
     		DivisionGameNorSetup();
         runs++;
    }
		if (Solve_Equ = anwser) {
			points = points + 1;
	  	   points.toString();
	}
    if (runs >= maxRuns) {
		clearInterval(interval);
      Score.textContent = points;
	   Equations.style.display = 'none';
	   Solve.style.display = 'none';
		Solve_Equ.style.display = 'none';
  	   Anwserbtn.style.display = 'none';
    }
}
}


function DivisionGameMixed() {
	const interval = setInterval(() => {
   	if (ask_questions && runs < maxRuns) {
     		DivisionGameNorSetup();
         runs++;
    }
		if (Solve_Equ = anwser) {
			points = points + 1;
	  	   points.toString();
	}
    if (runs >= maxRuns) {
		clearInterval(interval);
      Score.textContent = points;
	   Equations.style.display = 'none';
	   Solve.style.display = 'none';
		Solve_Equ.style.display = 'none';
  	   Anwserbtn.style.display = 'none';
    }
}
}

function MultiGameNor() {
	const interval = setInterval(() => {
   	if (ask_questions && runs < maxRuns) {
     		MultiGameNorSetup();
         runs++;
    }
		if (Solve_Equ = anwser) {
			points = points + 1;
	  	   points.toString();
	}
    if (runs >= maxRuns) {
		clearInterval(interval);
      Score.textContent = points;
	   Equations.style.display = 'none';
	   Solve.style.display = 'none';
		Solve_Equ.style.display = 'none';
  	   Anwserbtn.style.display = 'none';
    }
}
}

function MultiGameMed() {
	const interval = setInterval(() => {
   	if (ask_questions && runs < maxRuns) {
     		MultiGameMedSetup();
         runs++;
    }
		if (Solve_Equ = anwser) {
			points = points + 1;
	  	   points.toString();
	}
    if (runs >= maxRuns) {
		clearInterval(interval);
      Score.textContent = points;
	   Equations.style.display = 'none';
	   Solve.style.display = 'none';
		Solve_Equ.style.display = 'none';
  	   Anwserbtn.style.display = 'none';
    }
}
}

function MultiGameMixed() {
	const interval = setInterval(() => {
   	if (ask_questions && runs < maxRuns) {
     		MultiGameMixedSetup();
         runs++;
    }
		if (Solve_Equ = anwser) {
			points = points + 1;
	  	   points.toString();
	}
    if (runs >= maxRuns) {
		clearInterval(interval);
      Score.textContent = points;
	   Equations.style.display = 'none';
	   Solve.style.display = 'none';
		Solve_Equ.style.display = 'none';
  	   Anwserbtn.style.display = 'none';
    }
}
}

function AlgebraGameNor() {
	const interval = setInterval(() => {
   	if (ask_questions && runs < maxRuns) {
     		AlgebraGameNorSetup();
         runs++;
    }
		if (Solve_Equ = anwser) {
			points = points + 1;
	  	   points.toString();
	}
    if (runs >= maxRuns) {
		clearInterval(interval);
      Score.textContent = points;
	   Equations.style.display = 'none';
	   Solve.style.display = 'none';
		Solve_Equ.style.display = 'none';
  	   Anwserbtn.style.display = 'none';
    }
}
}

function AlgebraGameMed() {
	const interval = setInterval(() => {
   	if (ask_questions && runs < maxRuns) {
     		AlgebraGameMedSetup();
         runs++;
    }
		if (Solve_Equ = anwser) {
			points = points + 1;
	  	   points.toString();
	}
    if (runs >= maxRuns) {
		clearInterval(interval);
      Score.textContent = points;
	   Equations.style.display = 'none';
	   Solve.style.display = 'none';
		Solve_Equ.style.display = 'none';
  	   Anwserbtn.style.display = 'none';
    }
}
}

function AlgebraGameHard() {
	const interval = setInterval(() => {
   	if (ask_questions && runs < maxRuns) {
     		AlgebraGameHardSetup();
         runs++;
    }
		if (Solve_Equ = anwser) {
			points = points + 1;
	  	   points.toString();
	}
    if (runs >= maxRuns) {
		clearInterval(interval);
      Score.textContent = points;
	   Equations.style.display = 'none';
	   Solve.style.display = 'none';
		Solve_Equ.style.display = 'none';
  	   Anwserbtn.style.display = 'none';
    }
}
}

function AdditionGameNorSetup() {

	let number1 = RandomNumber(25,100);
	let number2 = RandomNumber(25,100);
	answer = number1 + number2;
	number2.toString();
	number1.toString();
	answer.toString();
	Equations.style.display = 'block';
	Solve.style.display = 'block';
	Solve_Equ.style.display = 'block';
	Anwserbtn.onclick = 'AdditionGameNor';
	Anwserbtn.style.display = 'block';
	Score.style.display = 'block';
	AdditionGameNor();
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
	Equations.style.display = 'block';
	Solve.style.display = 'block';
	Solve_Equ.style.display = 'block';
	Anwserbtn.onclick = 'AdditionGameMed';
	Anwserbtn.style.display = 'block';
	AdditionGameMed();
}

function AdditionGameHardSetup() {

	let number1 = RandomNumber(2500,1000);
	let number2 = RandomNumber(2500,	10000);
	let number3 = RandomNumber(2500,10000);
	answer = number1 + number2 + number3;
	number2.toString();
	number1.toString();
	answer.toString();
	Equations.style.display = 'block';
	Solve.style.display = 'block';
	Solve_Equ.style.display = 'block';
	Anwserbtn.onclick = 'AdditionGameHard';
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
	Anwserbtn.onclick = 'SubtractrionGameNor';
	Anwserbtn.style.display = 'block';
}

function SubtractionGameMedSetup() {

	let number1 = RandomNumber(500,5000);
	let number2 = RandomNumber(500,5000);
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
	Anwserbtn.onclick = 'SubtractrionGameMed';
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
	Anwserbtn.onclick = 'SubtractrionGameHard';
	Anwserbtn.style.display = 'block';
}

function DivisionGameNorSetup() {

	let number1 = RandomNumber(1,12);
	let number2 = RandomNumber(1,12);
	anwser = number2;
	let dividend = number1 * number2; 
	number2.toString();
	number1.toString();
	answer.toString();
	Equations.textContent = dividend + " / " + number1; 
	Equations.style.display = 'block';
	Solve.style.display = 'block';
	Solve_Equ.style.display = 'block';
	Anwserbtn.onclick = 'DivisonGameNor';
	Anwserbtn.style.display = 'block';
}



function DivisionGameMixedSetup() {

	let number1 = RandomNumber(375,450);
	let number2 = RandomNumber(300,375);
	let number3 = RandomNumber(225,300);
	let number4 = 0;
	let number5 = RandomNumber(2,9);
	let number6 = RandomNumber(2,9);

	let quotient = RandomNumber(1,10);
	
	let divisor = number3 * number6 + number2;
	let dividend = divisor * quotient;
	number4 = divident - number5 * number1; 
		
	number2.toString();
	number1.toString();
	number3.toString();
	number4.toString();
	number5.toString();
	number6.toString();
	answer.toString();
 		
		Equations.textContent = "(" + number1 + "*" + number5 + "-" + number4 + ")" + " / " + "(" + number3 + "*" + number6 + "+" + number2 + ")";
	
	Equations.style.display = 'block';
	Solve.style.display = 'block';
	Solve_Equ.style.display = 'block';
	Anwserbtn.onclick = 'DivisonGameMixed';
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
	Anwserbtn.onclick = 'MultiGameNor';
	Anwserbtn.style.display = 'block';
	Score.style.display = 'block';
}

function MultiGameMixedSetup() {

	let number1 = RandomNumber(70,95);
	let number2 = RandomNumber(65,70);
	let number3 = RandomNumber(50,65);
	let number4 = RandomNumber(35,50);
	let number5 = RandomNumber(1,5);
	let number6 = RandomNumber(1,5);
	let multple1 = number6 * number3 + number1;
	let multple2 = number4 * number5 - number2;
	
	answer = multiple1 * multple2;
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
	Anwserbtn.onclick = 'MultiGameNor';
	Anwserbtn.style.display = 'block';
	Score.style.display = 'block';
}



function AlgebraGameNorSetup() {

	let format = RandomNumber(1,2);
	
	if(format = 1) {
	
		number1 = RandomNumber(1,12);
		number2 = RandomNumber(1,12);
	
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
	Anwserbtn.onclick = 'AlgebraGameNor';
	Anwserbtn.style.display = 'block';
	Score.style.display = 'block';
}

function AlgebraGameMedSetup() {
	let format = RandomNumber(1,2);
	
	if(format = 1) {
	
		number1 = RandomNumber(1,12);
		number2 = RandomNumber(1,12);
		number3 = RandomNumber(1,12);          
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
	Anwserbtn.onclick = 'AlgebraGameMed';
	Anwserbtn.style.display = 'block';
	Score.style.display = 'block';
}

function AlgebraGameHardSetup() {
	let varabible = RandomNumber(1,4);
	let format = RandomNumber(1,2);		if(format = 1) {
	
		
		let number1 = RandomNumber(70,95);
		let number2 = RandomNumber(65,70);
		let number3 = RandomNumber(50,65);
		let number4 = RandomNumber(35,50);
		let number5 = RandomNumber(1,5);
		let number6 = RandomNumber(1,5);
		let multple1 = number6 * number3 + number1;
		let multple2 = number4 * number5 - number2;
		let solved = multiple1 * multiple2.
		 
		number1.toString();
		number2.toString();
		number3.toString();
		number4.toString();
		number5.toString();
		number6.toString();
		solved.toString();
		if(varabible = 1){
			anwser = number6;
			answer.toString();		
			Equations.textContent = "(" + number6 + "*" + number3 + "+" + number4 + ")" + " * " + "(" + number1 + "*" + number5 + "-" + number2 ")" + " = " + solved; 
			
		}		
	
		if(varabible = 2){
			anwser = number4;
			answer.toString();	
			Equations.textContent = "(" + number6 + "*" + number3 + "+" + " x " + ")" + " * " + "(" + number1 + "*" + number5 + "-" + number2 + ")" + " = " + solved;
					
		}
		if(varabible = 3){
			anwser = number5;
			answer.toString();	
			Equations.textContent = "(" + number6 + "*" + number3 + "+" + number4 + ")" + " * " + "(" + number1 + "*" + " x " + "-" + number2 + ")" + " = " + solved;
			
		}
		if(varabible = 4){
			anwser = number2;
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
			number4 = divident - number5 * number1; 
	
			quotient.toString();
			number1.toString();
			number2.toString();
			number3.toString();
			number4.toString();
			number5.toString();
			number6.toString()

		if(varabible = 1){
			Equations.textContent = "(" + " x " + "*" + number5 + "-" + number4 + ")" + " / " + "(" + number3 + "*" + number6 + "+" + number2 + ") = " + quotient;
			anwser = number1;
		}		
	
		if(varabible = 2){
			Equations.textContent = "(" + number1 + "*" + " x " + "-" + number4 + ")" + " / " + "(" + number3 + "*" + number6 + "+" + number2 + ") = " + quotient;
			anwser = number5;
		}
		if(varabible = 3){
			Equations.textContent = "(" + number1 + "*" + number5 + "-" + " x " + ")" + " / " + "(" + number3 + "*" + number6 + "+" + number2 + ") = " + quotient;
			anwser = number4;
		}
		if(varabible = 4){
			Equations.textContent = "(" + number1 + "*" + number5 + "-" + number4 + ")" + " / " + "(" + number3 + "*" + number6 + "+" + " x " + ") = " + quotient;
			answer = number2
		}		
		
	
	}
	
	Equations.style.display = 'block';
	Solve.style.display = 'block';
	Solve_Equ.style.display = 'block';
	Anwserbtn.onclick = 'AlgebraGameHard';
	Anwserbtn.style.display = 'block';
	Score.style.display = 'block';
}

function AdditionGame

	Addition_difficulty.style.display = 'none';
	Addition_label.style.display = 'none';
   if (selectedValue === "normal") {
		AdditionGameNorSetup
      } 
	else if (selectedValue === "medium") {
       AdditionGameMed();
      } 
	else if (selectedValue === "hard") {
		 AdditionGameHard();        
      } 
	else {
      Addition_difficulty.style.display = 'block';
		Addition_label.style.display = 'block';
      }
    }

function SubtractionGame() {

	Subtraction_difficulty.style.display = 'none';
	Subtraction_label.style.display = 'none';
   if (selectedValue === "normal") {
        SubtractionGameNor();
      } 
	else if (selectedValue === "medium") {
       SubtractionGameMed();
      } 
	else if (selectedValue === "hard") {
        SubtractionGameHard();
      } 
	else {
      Subtraction_difficulty.style.display = 'block';
		Subtraction_label.style.display = 'block';
      }
    }

function MultiplicationGame() {

	Multiplication_difficulty.style.display = 'none';
	Multiplication_label.style.display = 'none';
   if (selectedValue === "normal") {
        MultiplicationGameNor();
      } 
	else if (selectedValue === "mixed") {
        MultiplicationGamMixed();
      } 
	else {
      Multiplication_difficulty.style.display = 'block';
		Multiplication_label.style.display = 'block';
      }
    }

function DivisionGame() {

	Division_difficulty.style.display = 'none';
	Division_label.style.display = 'none';
   if (selectedValue === "normal") {
		DivisionGameNor();        
      } 
	else if (selectedValue === "mixed") {
        DivisionGameMixed();
      } 
	else {
      Division_difficulty.style.display = 'block';
		Divison_label.style.display = 'block';
      }
    }

function AlgebraGame() {

	Algebra_difficulty.style.display = 'none';
	Algebra_label.style.display = 'none';
   if (selectedValue === "normal") {
        
      } 
	else if (selectedValue === "medium") {
       
      } 
	else if (selectedValue === "hard") {
        
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

Equations.style.display = 'none';
Solve.style.display = 'none';
Solve_Equ.style.display = 'none';
Score.style.display = 'none';

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
	type_label.style.display = 'none';
	Btn3.style.display = 'none';
	Btn4.style.display = 'none';
	Btn5.style.display = 'none';
	Btn6.style.display = 'none';
	Btn7.style.display = 'none';
	Answerbtn.style.display = 'none';

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
		Btn7.style.display = 'none';
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
