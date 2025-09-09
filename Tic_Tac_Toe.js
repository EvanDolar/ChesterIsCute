let Ready = false;

let p2turn = false;

const Instructions = document.getElementById("instructions");

const btnGame = document.getElementById("btnGame");

Instructions.style.display = "none";

function Start_Game() {
    Instructions.style.display = "block";
    btnGame.style.display = "none";
    Ready = true;
    setTimeout(function() {
        Instructions.style.display = "none";
    }, 4000);

}

function cellClicked(cell) {
    if (Ready === true) {

        if (p2turn === false) {
            cell.classList.add("x");
            p2turn = true;
    }
        else {
            cell.classList.add("o");
    }
}
}

