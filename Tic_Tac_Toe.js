let Ready = false;

let p2turn = false;

const Instructions = document.getElementById("instructions");

const btnGame = document.getElementById("btnGame");

let xcell1 = false;
let xcell2 = false;
let xcell3 = false;
let xcell4 = false;
let xcell5 = false;
let xcell6 = false;
let xcell7 = false;
let xcell8 = false;
let xcell9 = false;

let ocell1 = false;
let ocell2 = false;
let ocell3 = false; 
let ocell4 = false;
let ocell5 = false;
let ocell6 = false;
let ocell7 = false;
let ocell8 = false;
let ocell9 = false;

Instructions.style.display = "none";

function Start_Game() {
    Instructions.style.display = "block";
    btnGame.style.display = "none";
    Ready = true;
    setTimeout(function() {
        Instructions.style.display = "none";
    }, 4000);

}

function cellClicked(cell, cellNumber) {
    if (Ready === true) {
        if (p2turn === false) {
            if(!cell.classList.contains("o") && !cell.classList.contains("x")) {
                cell.classList.add("x");
                if (cellNumber === 1) xcell1 = true;
                if (cellNumber === 2) xcell2 = true;
                if (cellNumber === 3) xcell3 = true;
                if (cellNumber === 4) xcell4 = true;
                if (cellNumber === 5) xcell5 = true;
                if (cellNumber === 6) xcell6 = true;
                if (cellNumber === 7) xcell7 = true;
                if (cellNumber === 8) xcell8 = true;
                if (cellNumber === 9) xcell9 = true;
                if ((xcell1 && xcell2 && xcell3) || (xcell4 && xcell5 && xcell6) || (xcell7 && xcell8 && xcell9) || (xcell1 && xcell4 && xcell7) || (xcell2 && xcell5 && xcell8) || (xcell3 && xcell6 && xcell9) || (xcell1 && xcell5 && xcell9) || (xcell3 && xcell5 && xcell7)) {
                    alert("X Wins!");
                    Ready = false;
                    return;
                }
                p2turn = true;
            }
        } else {
            if(!cell.classList.contains("o") && !cell.classList.contains("x")) {
                cell.classList.add("o");
                if (cellNumber === 1) ocell1 = true;
                if (cellNumber === 2) ocell2 = true;
                if (cellNumber === 3) ocell3 = true;
                if (cellNumber === 4) ocell4 = true;
                if (cellNumber === 5) ocell5 = true;
                if (cellNumber === 6) ocell6 = true;
                if (cellNumber === 7) ocell7 = true;
                if (cellNumber === 8) ocell8 = true;
                if (cellNumber === 9) ocell9 = true;
                if ((ocell1 && ocell2 && ocell3) || (ocell4 && ocell5 && ocell6) || (ocell7 && ocell8 && ocell9) || (ocell1 && ocell4 && ocell7) || (ocell2 && ocell5 && ocell8) || (ocell3 && ocell6 && ocell9) || (ocell1 && ocell5 && ocell9) || (ocell3 && ocell5 && ocell7)) {
                    alert("O Wins!");
                    Ready = false;
                    return;
                }
                p2turn = false;
            }
        }
    }
}

